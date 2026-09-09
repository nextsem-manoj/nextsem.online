/**
 * Nextsem Emmet Expansion Engine
 * Full-featured in-browser Emmet abbreviation parser for HTML & CSS
 * Supports:
 * - HTML5 boilerplate: ! or html:5
 * - Tags, IDs (#app), Classes (.container.card)
 * - Custom attributes: [type="text" placeholder="Name"]
 * - Text content: {Click Me}
 * - Multipliers: li*3, div.col*4 with numbering $ (.item$*3 -> item1, item2, item3)
 * - Nesting (>), Siblings (+), Climb Up (^)
 * - Void/Self-closing tags (img, input, link, meta, br, hr)
 * - CSS property abbreviations (df, jcc, aic, pos:a, m0a, p10, fz16, br8, w100p, h100vh)
 */

const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", 
  "link", "meta", "param", "source", "track", "wbr"
]);

const HTML_ALIASES: Record<string, string> = {
  "!": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`,
  "html:5": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`,
  "a": `<a href=""></a>`,
  "a:blank": `<a href="" target="_blank" rel="noopener noreferrer"></a>`,
  "a:link": `<a href="http://"></a>`,
  "a:mail": `<a href="mailto:"></a>`,
  "a:tel": `<a href="tel:+"></a>`,
  "img": `<img src="" alt="">`,
  "img:s": `<img src="" alt="" srcset="">`,
  "link": `<link rel="stylesheet" href="style.css">`,
  "link:css": `<link rel="stylesheet" href="style.css">`,
  "link:favicon": `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`,
  "script": `<script></script>`,
  "script:src": `<script src="script.js"></script>`,
  "style": `<style>\n  \n</style>`,
  "input": `<input type="text" name="" id="">`,
  "input:text": `<input type="text" name="" id="">`,
  "input:password": `<input type="password" name="" id="">`,
  "input:email": `<input type="email" name="" id="">`,
  "input:number": `<input type="number" name="" id="">`,
  "input:checkbox": `<input type="checkbox" name="" id="">`,
  "input:radio": `<input type="radio" name="" id="">`,
  "input:submit": `<input type="submit" value="Submit">`,
  "input:button": `<input type="button" value="Button">`,
  "input:reset": `<input type="reset" value="Reset">`,
  "input:file": `<input type="file" name="" id="">`,
  "input:date": `<input type="date" name="" id="">`,
  "input:color": `<input type="color" name="" id="">`,
  "input:range": `<input type="range" name="" id="">`,
  "btn": `<button></button>`,
  "btn:s": `<button type="submit"></button>`,
  "btn:r": `<button type="reset"></button>`,
  "btn:b": `<button type="button"></button>`,
  "form:post": `<form action="" method="post">\n  \n</form>`,
  "form:get": `<form action="" method="get">\n  \n</form>`,
  "meta:vp": `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  "meta:utf": `<meta charset="UTF-8">`,
  "table+": `<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>`
};

const CSS_ALIASES: Record<string, string> = {
  "df": "display: flex;",
  "d:f": "display: flex;",
  "dg": "display: grid;",
  "d:g": "display: grid;",
  "db": "display: block;",
  "d:b": "display: block;",
  "di": "display: inline;",
  "d:i": "display: inline;",
  "dib": "display: inline-block;",
  "d:ib": "display: inline-block;",
  "dn": "display: none;",
  "d:n": "display: none;",
  "jcc": "justify-content: center;",
  "jcsb": "justify-content: space-between;",
  "jcsa": "justify-content: space-around;",
  "jcse": "justify-content: space-evenly;",
  "jcfs": "justify-content: flex-start;",
  "jcfe": "justify-content: flex-end;",
  "aic": "align-items: center;",
  "aifs": "align-items: flex-start;",
  "aife": "align-items: flex-end;",
  "ais": "align-items: stretch;",
  "fdc": "flex-direction: column;",
  "fdr": "flex-direction: row;",
  "fww": "flex-wrap: wrap;",
  "fwnw": "flex-wrap: nowrap;",
  "fl1": "flex: 1;",
  "tac": "text-align: center;",
  "tar": "text-align: right;",
  "tal": "text-align: left;",
  "taj": "text-align: justify;",
  "pos:a": "position: absolute;",
  "poa": "position: absolute;",
  "pos:r": "position: relative;",
  "por": "position: relative;",
  "pos:f": "position: fixed;",
  "pof": "position: fixed;",
  "pos:s": "position: sticky;",
  "pos": "position: sticky;",
  "t0": "top: 0;",
  "b0": "bottom: 0;",
  "l0": "left: 0;",
  "r0": "right: 0;",
  "m0": "margin: 0;",
  "m0a": "margin: 0 auto;",
  "p0": "padding: 0;",
  "w100p": "width: 100%;",
  "h100p": "height: 100%;",
  "w100vw": "width: 100vw;",
  "h100vh": "height: 100vh;",
  "minw100p": "min-width: 100%;",
  "minh100vh": "min-height: 100vh;",
  "maxw100p": "max-width: 100%;",
  "bgc": "background-color: #;",
  "bgi": "background-image: url();",
  "bgs:c": "background-size: cover;",
  "bgp:c": "background-position: center;",
  "bgr:n": "background-repeat: no-repeat;",
  "bd": "border: 1px solid #;",
  "bdn": "border: none;",
  "bdt": "border-top: 1px solid #;",
  "bdb": "border-bottom: 1px solid #;",
  "bdl": "border-left: 1px solid #;",
  "bdr": "border-right: 1px solid #;",
  "br": "border-radius: ;",
  "br50p": "border-radius: 50%;",
  "fwb": "font-weight: bold;",
  "fwn": "font-weight: normal;",
  "cur:p": "cursor: pointer;",
  "cp": "cursor: pointer;",
  "cur:d": "cursor: default;",
  "ov:h": "overflow: hidden;",
  "oh": "overflow: hidden;",
  "ov:a": "overflow: auto;",
  "oa": "overflow: auto;",
  "ov:s": "overflow: scroll;",
  "bxz:bb": "box-sizing: border-box;",
  "bxz": "box-sizing: border-box;",
  "tdn": "text-decoration: none;",
  "tdu": "text-decoration: underline;",
  "ttu": "text-transform: uppercase;",
  "ttl": "text-transform: lowercase;",
  "ttc": "text-transform: capitalize;",
  "ff:s": "font-family: system-ui, sans-serif;",
  "ff:m": "font-family: monospace;",
  "bsh": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);",
  "ts": "transition: all 0.2s ease;",
  "trf": "transform: ;",
  "usn": "user-select: none;",
  "pen": "pointer-events: none;",
  "pea": "pointer-events: auto;"
};

interface ParsedElement {
  tag: string;
  id?: string;
  classes: string[];
  attributes: Record<string, string>;
  text?: string;
  count: number;
  children: ParsedElement[];
  siblings: ParsedElement[];
}

/**
 * Expands CSS numeric properties like:
 * p10 -> padding: 10px;
 * m20 -> margin: 20px;
 * fz16 -> font-size: 16px;
 * br8 -> border-radius: 8px;
 * zi10 -> z-index: 10;
 * g16 -> gap: 16px;
 */
function expandNumericCss(abbr: string): string | null {
  const patterns: [RegExp, (val: string) => string][] = [
    [/^m(-?\d+)$/, (v) => `margin: ${v}px;`],
    [/^p(\d+)$/, (v) => `padding: ${v}px;`],
    [/^mt(-?\d+)$/, (v) => `margin-top: ${v}px;`],
    [/^mb(-?\d+)$/, (v) => `margin-bottom: ${v}px;`],
    [/^ml(-?\d+)$/, (v) => `margin-left: ${v}px;`],
    [/^mr(-?\d+)$/, (v) => `margin-right: ${v}px;`],
    [/^pt(\d+)$/, (v) => `padding-top: ${v}px;`],
    [/^pb(\d+)$/, (v) => `padding-bottom: ${v}px;`],
    [/^pl(\d+)$/, (v) => `padding-left: ${v}px;`],
    [/^pr(\d+)$/, (v) => `padding-right: ${v}px;`],
    [/^fz(\d+)$/, (v) => `font-size: ${v}px;`],
    [/^lh(\d+)$/, (v) => `line-height: ${v}px;`],
    [/^w(\d+)$/, (v) => `width: ${v}px;`],
    [/^h(\d+)$/, (v) => `height: ${v}px;`],
    [/^mw(\d+)$/, (v) => `max-width: ${v}px;`],
    [/^mh(\d+)$/, (v) => `max-height: ${v}px;`],
    [/^br(\d+)$/, (v) => `border-radius: ${v}px;`],
    [/^zi(-?\d+)$/, (v) => `z-index: ${v};`],
    [/^g(\d+)$/, (v) => `gap: ${v}px;`],
    [/^op(0?\.\d+|\d+)$/, (v) => `opacity: ${v};`],
    [/^fw(\d+)$/, (v) => `font-weight: ${v};`]
  ];

  for (const [regex, formatter] of patterns) {
    const match = abbr.match(regex);
    if (match) {
      return formatter(match[1]);
    }
  }

  return null;
}

/**
 * Tokenizes and parses an atomic Emmet tag (e.g. `div.card#main[data-id="1"]{Click}`)
 */
function parseSingleTag(str: string, indexNum: number = 1): ParsedElement {
  let text: string | undefined;
  // Extract text content {Text}
  const textMatch = str.match(/\{([^}]*)\}/);
  if (textMatch) {
    text = textMatch[1].replace(/\$/g, String(indexNum));
    str = str.replace(/\{[^}]*\}/, "");
  }

  // Extract attributes [k="v" or k=v]
  const attributes: Record<string, string> = {};
  const attrMatch = str.match(/\[([^\]]*)\]/);
  if (attrMatch) {
    const attrString = attrMatch[1];
    const pairs = attrString.match(/([a-zA-Z0-9_-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^ \t\r\n\f>]+)))?/g) || [];
    for (const pair of pairs) {
      const eqIdx = pair.indexOf("=");
      if (eqIdx !== -1) {
        const k = pair.substring(0, eqIdx);
        let v = pair.substring(eqIdx + 1);
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.substring(1, v.length - 1);
        }
        attributes[k] = v.replace(/\$/g, String(indexNum));
      } else {
        attributes[pair] = "";
      }
    }
    str = str.replace(/\[[^\]]*\]/, "");
  }

  // Parse tag name, IDs (#), Classes (.)
  let tagName = "div";
  let id: string | undefined;
  const classes: string[] = [];

  const tokens = str.match(/([.#]?[a-zA-Z0-9_-]+)/g) || [];
  let isFirst = true;

  for (const token of tokens) {
    if (token.startsWith("#")) {
      id = token.substring(1).replace(/\$/g, String(indexNum));
    } else if (token.startsWith(".")) {
      classes.push(token.substring(1).replace(/\$/g, String(indexNum)));
    } else if (isFirst) {
      tagName = token;
      isFirst = false;
    }
  }

  // Default attribute setup for common tags
  if (tagName === "a" && !attributes["href"]) attributes["href"] = "";
  if (tagName === "img") {
    if (!attributes["src"]) attributes["src"] = "";
    if (!attributes["alt"]) attributes["alt"] = "";
  }
  if (tagName === "input" && !attributes["type"]) attributes["type"] = "text";
  if (tagName === "link" && !attributes["rel"]) {
    attributes["rel"] = "stylesheet";
    attributes["href"] = "style.css";
  }
  if (tagName === "script" && attributes["src"] === undefined && str.includes(":src")) {
    attributes["src"] = "script.js";
  }

  return {
    tag: tagName,
    id,
    classes,
    attributes,
    text,
    count: 1,
    children: [],
    siblings: []
  };
}

/**
 * Formats a parsed element to an HTML string with indentation
 */
function renderElement(el: ParsedElement, indentLevel: number = 0, indentStr: string = "  "): string {
  const currentIndent = indentStr.repeat(indentLevel);
  const childIndent = indentStr.repeat(indentLevel + 1);

  let openTag = `<${el.tag}`;
  if (el.id) openTag += ` id="${el.id}"`;
  if (el.classes.length > 0) openTag += ` class="${el.classes.join(" ")}"`;

  for (const [k, v] of Object.entries(el.attributes)) {
    if (v === "") openTag += ` ${k}`;
    else openTag += ` ${k}="${v}"`;
  }
  openTag += ">";

  if (VOID_TAGS.has(el.tag.toLowerCase())) {
    return currentIndent + openTag;
  }

  if (el.children.length === 0) {
    const content = el.text !== undefined ? el.text : "";
    return `${currentIndent}${openTag}${content}</${el.tag}>`;
  }

  const renderedChildren = el.children
    .map((c) => renderElement(c, indentLevel + 1, indentStr))
    .join("\n");

  return `${currentIndent}${openTag}\n${renderedChildren}\n${currentIndent}</${el.tag}>`;
}

/**
 * Parses full nested Emmet expressions:
 * e.g. `nav>ul>li*3>a{Link $}`
 * `div.card>h3+p+button.btn`
 * `div.container>div.row>div.col*3`
 */
function parseEmmetHtml(abbr: string): string | null {
  if (HTML_ALIASES[abbr]) {
    return HTML_ALIASES[abbr];
  }

  try {
    let index = 0;

    const parseSiblingExpr = (): ParsedElement[] => {
      let nodes = parseChildExpr();
      while (index < abbr.length && abbr[index] === "+") {
        index++; // consume +
        const nextNodes = parseChildExpr();
        nodes = nodes.concat(nextNodes);
      }
      return nodes;
    };

    const parseChildExpr = (): ParsedElement[] => {
      let parents = parsePrimary();
      while (index < abbr.length && (abbr[index] === ">" || abbr[index] === "^")) {
        const op = abbr[index];
        index++; // consume > or ^
        if (op === ">") {
          const children = parseSiblingExpr();
          parents.forEach((p) => {
            p.children = p.children.concat(children);
          });
        } else if (op === "^") {
          const siblings = parseSiblingExpr();
          parents = parents.concat(siblings);
        }
      }
      return parents;
    };

    const parsePrimary = (): ParsedElement[] => {
      if (index >= abbr.length) return [];
      
      // Check for parenthesis grouping (div.card>h3)+p
      if (abbr[index] === "(") {
        index++; // consume (
        const grouped = parseSiblingExpr();
        if (index < abbr.length && abbr[index] === ")") {
          index++; // consume )
        }
        // check multiplier *(N)
        if (index < abbr.length && abbr[index] === "*") {
          index++; // consume *
          let numStr = "";
          while (index < abbr.length && /[0-9]/.test(abbr[index])) {
            numStr += abbr[index];
            index++;
          }
          const mult = parseInt(numStr, 10) || 1;
          const repeated: ParsedElement[] = [];
          for (let m = 0; m < mult; m++) {
            repeated.push(...JSON.parse(JSON.stringify(grouped)));
          }
          return repeated;
        }
        return grouped;
      }

      // Read single tag token until >, +, ^, (, ), or end
      let token = "";
      let inAttr = false;
      let inText = false;

      while (index < abbr.length) {
        const c = abbr[index];
        if (c === "[" && !inText) inAttr = true;
        else if (c === "]" && inAttr) inAttr = false;
        else if (c === "{" && !inAttr) inText = true;
        else if (c === "}" && inText) inText = false;

        if (!inAttr && !inText) {
          if (c === ">" || c === "+" || c === "^" || c === "(" || c === ")") {
            break;
          }
        }
        token += c;
        index++;
      }

      if (!token) return [];

      // Check multiplier on single tag: e.g. li*3 or li.item$*3
      let repeatCount = 1;
      let cleanToken = token;
      const multMatch = token.match(/\*(\d+)$/);
      if (multMatch) {
        repeatCount = parseInt(multMatch[1], 10);
        cleanToken = token.replace(/\*\d+$/, "");
      }

      const elements: ParsedElement[] = [];
      for (let r = 1; r <= repeatCount; r++) {
        elements.push(parseSingleTag(cleanToken, r));
      }
      return elements;
    };

    const rootNodes = parseSiblingExpr();
    if (rootNodes.length === 0) return null;

    return rootNodes.map((n) => renderElement(n, 0, "  ")).join("\n");
  } catch {
    return null;
  }
}


const COMMON_HTML_TAGS = new Set([
  "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base",
  "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption",
  "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details",
  "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption",
  "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head",
  "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins",
  "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta",
  "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output",
  "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s",
  "samp", "script", "section", "select", "slot", "small", "source", "span",
  "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td",
  "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr",
  "track", "u", "ul", "var", "video", "wbr"
]);

/**
 * Main Emmet expansion entrypoint:
 * Detects whether abbreviation is HTML or CSS, and returns expanded code.
 */
export function expandEmmet(abbreviation: string, fileContext: "html" | "css" | "js" = "html"): string | null {
  const trimmed = abbreviation.trim();
  if (!trimmed) return null;

  // 1. Direct HTML Boilerplate Alias
  if (trimmed === "!" || trimmed === "html:5") {
    return HTML_ALIASES[trimmed];
  }

  // 2. CSS Context / CSS Abbreviations
  if (fileContext === "css") {
    if (CSS_ALIASES[trimmed]) return CSS_ALIASES[trimmed];
    const numCss = expandNumericCss(trimmed);
    if (numCss) return numCss;
  }

  // 3. HTML Context / Aliases
  if (HTML_ALIASES[trimmed]) {
    return HTML_ALIASES[trimmed];
  }

  // Check if it's a CSS abbreviation entered inside an HTML style tag or CSS context
  if (CSS_ALIASES[trimmed]) {
    if (fileContext === "css" || !COMMON_HTML_TAGS.has(trimmed)) {
      return CSS_ALIASES[trimmed];
    }
  }

  const numCss = expandNumericCss(trimmed);
  if (numCss && (fileContext === "css" || !COMMON_HTML_TAGS.has(trimmed))) {
    return numCss;
  }

  // 4. General HTML Emmet Expression
  const expanded = parseEmmetHtml(trimmed);
  if (expanded) return expanded;

  return null;
}


/**
 * Extracts the current Emmet word / abbreviation immediately before the cursor in textarea
 */
export function getEmmetAbbreviationAtCursor(
  text: string, 
  cursorIndex: number
): { abbreviation: string; startIndex: number; endIndex: number } | null {
  if (cursorIndex <= 0 || cursorIndex > text.length) return null;

  const leftText = text.substring(0, cursorIndex);
  
  // Look for valid Emmet characters backwards from cursor until whitespace, newline, or tag delimiter (< or > after closing)
  // Valid Emmet characters: a-zA-Z0-9_#.:>+*${}[]="-!^
  let startIndex = cursorIndex;

  for (let i = cursorIndex - 1; i >= 0; i--) {
    const char = leftText[i];
    if (char === " " || char === "\t" || char === "\n" || char === "\r" || char === "<" || char === ";" || char === "(" || char === ")") {
      startIndex = i + 1;
      break;
    }
    if (i === 0) {
      startIndex = 0;
    }
  }

  if (startIndex >= cursorIndex) return null;

  const candidate = text.substring(startIndex, cursorIndex).trim();
  if (!candidate || candidate.length < 1) return null;

  // Validate that candidate looks like a plausible Emmet abbreviation (not random text)
  // Must match standard Emmet tokens or aliases
  const isValidEmmetPattern = /^[a-zA-Z0-9_#.:>+*${}[\]="!^\\-]+$/.test(candidate);
  if (!isValidEmmetPattern) return null;

  return {
    abbreviation: candidate,
    startIndex,
    endIndex: cursorIndex
  };
}

/**
 * Expands Emmet abbreviation and respects current line's leading indentation
 */
export function expandEmmetWithIndentation(
  fullText: string,
  cursorIndex: number,
  fileContext: "html" | "css" | "js" = "html"
): { newText: string; newCursorPos: number; expanded: string; abbreviation: string } | null {
  const match = getEmmetAbbreviationAtCursor(fullText, cursorIndex);
  if (!match) return null;

  const rawExpanded = expandEmmet(match.abbreviation, fileContext);
  if (!rawExpanded) return null;

  // Find line start of the current line
  const lineStart = fullText.lastIndexOf("\n", match.startIndex - 1) + 1;
  const linePrefix = fullText.substring(lineStart, match.startIndex);
  const leadingIndentMatch = linePrefix.match(/^[ \t]*/);
  const leadingIndent = leadingIndentMatch ? leadingIndentMatch[0] : "";

  // Apply indentation to subsequent lines of multi-line expansion
  const lines = rawExpanded.split("\n");
  const formattedExpanded = lines
    .map((line, idx) => (idx === 0 ? line : leadingIndent + line))
    .join("\n");

  const newText = fullText.substring(0, match.startIndex) + formattedExpanded + fullText.substring(match.endIndex);

  // Calculate smart cursor position:
  // If single element like <div></div>, position cursor inside: <div>|</div>
  let cursorOffset = formattedExpanded.length;
  const tagContentMatch = formattedExpanded.match(/^<([a-zA-Z0-9_-]+)[^>]*><\/\1>$/);
  if (tagContentMatch) {
    const openTagLength = formattedExpanded.indexOf(">") + 1;
    cursorOffset = openTagLength;
  } else if (formattedExpanded.includes("></")) {
    const firstCloseIdx = formattedExpanded.indexOf("></") + 1;
    cursorOffset = firstCloseIdx;
  }

  return {
    newText,
    newCursorPos: match.startIndex + cursorOffset,
    expanded: formattedExpanded,
    abbreviation: match.abbreviation
  };
}

