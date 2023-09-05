import fs from "fs";
import path from "path";

import _generate from "@babel/generator";
import _traverse from "@babel/traverse";
import * as babelTypes from "@babel/types";

import {
  DOCS_FOLDER_NAME,
  EXPORTED_TYPES_FOLDER_NAME,
  TYPES_FOLDER_NAME,
} from "./constants.mjs";
import {
  buildEntityTitleToEntityDescMap,
  getFileContent,
  getFileNameList,
  parseMarkdown,
  parseTypeFile,
  syncTypeFiles,
  defaultTypeFileTraverser,
} from "./utils.mjs";

const traverse = _traverse.default;
const generate = _generate.default;

const buildJsdoc = ({
  customTypeFileTraverser = defaultTypeFileTraverser,
  exportedTypesFolderName = EXPORTED_TYPES_FOLDER_NAME,
} = {}) => {
  const fileNamesInsideDocs = getFileNameList(path.resolve(DOCS_FOLDER_NAME));
  const typeFileNames = fs.readdirSync(path.resolve(TYPES_FOLDER_NAME));

  syncTypeFiles(exportedTypesFolderName);

  const entityTitleToDescMapOfAllFiles = {};

  fileNamesInsideDocs.forEach(docFileName => {
    const fileContent = getFileContent(docFileName);
    const markdownAST = parseMarkdown(fileContent);

    buildEntityTitleToEntityDescMap(
      markdownAST.children,
      entityTitleToDescMapOfAllFiles
    );
  });

  // eslint-disable-next-line consistent-return
  typeFileNames.forEach(typeFileName => {
    const typeFileContent = getFileContent(
      path.join(exportedTypesFolderName, typeFileName)
    );
    const typeFileAST = parseTypeFile(typeFileContent);

    customTypeFileTraverser({
      typeFileName,
      typeFileAST,
      entityTitleToDescMapOfAllFiles,
      babelTraverse: traverse,
      babelCodeGenerator: generate,
      babelTypes,
    });
  });

  console.log("Successfully added JSDoc comments to type files.");
};

export default buildJsdoc;
