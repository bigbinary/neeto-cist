import fs from "fs";
import path from "path";

import * as babelParser from "@babel/parser";
import { curry, __, mergeLeft } from "ramda";
import remarkParse from "remark-parse";
import { unified } from "unified";

import {
  ASTERISK,
  ASTERISK_WITH_SPACES,
  CODE_PATTERN,
  DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT,
  EXPORTED_TYPES_FOLDER_NAME,
  HTML_EXCEPT_IMG_PATTERN,
  IMG_PATTERN,
  JSDOC_EXAMPLE_TAG,
  JSDOC_END_EXAMPLE_TAG,
  JSDOC_IMG_HEIGHT,
  JSDOC_IMG_WIDTH,
  LINE_BREAK,
  PARAGRAPH_PATTERN,
  SUBHEADING_PATTERN,
  TYPES_FOLDER_NAME,
  WHITESPACE_REGEX,
} from "./constants.mjs";
import * as babelTypes from "@babel/types";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";

import { matches } from "../../../index.cjs.js";

const traverse = _traverse.default;
const generate = _generate.default;

const removeSpaces = string => string.replace(WHITESPACE_REGEX, "");

const addLeadingCommentForTextWithLineBreaks = ({
  text,
  addCommentForFirstItem = true,
  addDoubleLineBreaks = true,
}) => {
  if (!hasLineBreaks(text)) return addLeadingComment(text);
  const joinString = addDoubleLineBreaks
    ? DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT
    : LINE_BREAK;

  return text
    .split(LINE_BREAK)
    .map((item, idx) => {
      if (!addCommentForFirstItem && idx === 0) return item;

      return addLeadingComment(item);
    })
    .join(joinString);
};

const addLeadingComment = (text, trimWhiteSpace = false) =>
  (trimWhiteSpace ? ASTERISK : ASTERISK_WITH_SPACES) + text;

const transformCode = node => {
  let text = "";
  text += addLeadingComment(JSDOC_EXAMPLE_TAG);
  text += DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT;
  text += addLeadingCommentForTextWithLineBreaks({
    text: removeCommentTags(node.value),
    addDoubleLineBreaks: false,
  });
  text += LINE_BREAK;
  text += addLeadingComment(JSDOC_END_EXAMPLE_TAG);
  text += LINE_BREAK;

  return text;
};

const hasLineBreaks = text => text?.includes(LINE_BREAK);

const getParagraphChildrenText = node => {
  const children = node.children;
  if (children.length === 1) return children[0].value;

  return children.map(child => child.value || child.children[0].value).join("");
};

const transformParagraph = node => {
  let text = "";
  text += ASTERISK_WITH_SPACES;
  const childrenText = getParagraphChildrenText(node);

  if (hasLineBreaks(childrenText)) {
    text += addLeadingCommentForTextWithLineBreaks({
      text: childrenText,
      addCommentForFirstItem: false,
    });
  } else {
    text += childrenText;
  }
  text += DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT;

  return text;
};

const transformImg = node => {
  const { src, alt } = parseImgTag(node.value);
  let text = ASTERISK_WITH_SPACES;
  text += `![${alt}](${src}|height=${JSDOC_IMG_HEIGHT}|width=${JSDOC_IMG_WIDTH})`;
  text += DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT;

  return text;
};

const transformNodesToText = nodes => {
  let text = DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT;

  nodes.forEach(node => {
    if (matches(CODE_PATTERN, node)) {
      text += transformCode(node);
    } else if (matches(IMG_PATTERN, node)) {
      text += transformImg(node);
    } else if (matches(PARAGRAPH_PATTERN, node)) {
      text += transformParagraph(node);
    }
  });

  return addLeadingComment(text, true);
};

const parseImgTag = imgTagStr =>
  imgTagStr.split(" ").reduce((acc, item) => {
    let [attrName, attrValue] = item.split("=");
    attrValue = attrValue?.replaceAll(">", "").replaceAll('"', "");

    return mergeLeft({ [attrName]: attrValue }, acc);
  }, {});

const removeCommentTags = str => str.replaceAll("/*", "").replaceAll("*/", "");

export const parseTypeFile = typeFileContent =>
  babelParser.parse(typeFileContent, {
    sourceType: "module",
    plugins: [["typescript", { dts: true }]],
  });

export const buildEntityTitleToEntityDescMap = (nodes, map) => {
  nodes.forEach((node, idx) => {
    if (!matches(SUBHEADING_PATTERN, node)) return;

    const entityName = removeSpaces(node.children[0].value);
    const entityRightSiblings = [];

    for (let i = idx + 1; i < nodes.length; i++) {
      const siblingNode = nodes[i];

      if (matches(HTML_EXCEPT_IMG_PATTERN, siblingNode)) continue;

      if (matches(SUBHEADING_PATTERN, siblingNode)) break;

      entityRightSiblings.push(siblingNode);
    }
    const entityRightSiblingsText = transformNodesToText(entityRightSiblings);
    map[entityName] = entityRightSiblingsText;
  });
};

export const defaultTypeFileTraverser = ({
  typeFileAST,
  typeFileName,
  entityTitleToDescMapOfAllFiles,
}) =>
  traverse(typeFileAST, {
    ExportNamedDeclaration: ({ node }) => {
      const entityName = findEntityName(node);
      const entityDesc = entityTitleToDescMapOfAllFiles[entityName];

      if (!entityName || !entityDesc) {
        return;
      }

      babelTypes.addComment(node, "leading", entityDesc);

      const { code } = generate(typeFileAST, {});

      fs.writeFileSync(path.resolve(typeFileName), code);
    },
  });

export const syncTypeFiles = exportedTypesFolderName => {
  const sourceDir = path.resolve(TYPES_FOLDER_NAME);
  const destDir = path.resolve(exportedTypesFolderName);

  fs.cpSync(sourceDir, destDir, { recursive: true });
};

export const getFileNameList = dirPath => {
  let files = [];
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...getFileNameList(path.join(dirPath, item.name))];
    } else {
      files.push(path.join(dirPath, item.name));
    }
  }

  return files;
};

export const getFileContent = fileName =>
  fs.readFileSync(path.resolve(fileName), "utf8").toString();

export const parseMarkdown = fileContent =>
  unified().use(remarkParse).parse(fileContent);

export const findEntityName = node =>
  node?.declaration?.declarations?.[0]?.id?.name || node?.declaration?.id?.name;

export const matchesAny = curry((list, obj) => list.some(matches(__, obj)));
