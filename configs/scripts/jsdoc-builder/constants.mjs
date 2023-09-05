import { complement, startsWith } from "ramda";

export const REMARK_NODE_TYPES = {
  HTML: "html",
  PARAGRAPH: "paragraph",
  CODE: "code",
  HEADING: "heading",
  TEXT: "text",
  INLINE_CODE: "inlineCode",
};

export const BABEL_NODE_TYPES = { IDENTIFIER: "Identifier" };

export const SUBHEADING_PATTERN = { type: REMARK_NODE_TYPES.HEADING, depth: 2 };
export const HTML_PATTERN = { type: REMARK_NODE_TYPES.HTML };
export const IMG_PATTERN = {
  type: REMARK_NODE_TYPES.HTML,
  value: startsWith("<img"),
};
export const CODE_PATTERN = { type: REMARK_NODE_TYPES.CODE };
export const PARAGRAPH_PATTERN = { type: REMARK_NODE_TYPES.PARAGRAPH };
export const HTML_EXCEPT_IMG_PATTERN = {
  type: REMARK_NODE_TYPES.HTML,
  value: complement(startsWith("<img")),
};
export const INLINE_CODE_PATTERN = { type: REMARK_NODE_TYPES.INLINE_CODE };
export const TEXT_PATTERN = { type: REMARK_NODE_TYPES.TEXT };
export const DOCS_FOLDER_NAME = "docs";
export const TYPES_FOLDER_NAME = "typeTemplates";
export const EXPORTED_TYPES_FOLDER_NAME = ""; // root

export const JSDOC_IMG_HEIGHT = "200";
export const JSDOC_IMG_WIDTH = "300";

export const DOUBLE_LINE_BREAK_WITH_LEADING_COMMENT = "\n *\n";
export const LINE_BREAK = "\n";
export const JSDOC_EXAMPLE_TAG = "@example ";
export const JSDOC_END_EXAMPLE_TAG = "@endexample";
export const ASTERISK = "*";
export const ASTERISK_WITH_SPACES = " * ";
export const WHITESPACE_REGEX = /\s/g;
