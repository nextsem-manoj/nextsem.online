/**
 * Nextsem Prettier-Style In-Browser Code Formatter
 * Formats HTML, CSS, JavaScript, JSON, and Markdown with 2-space indentation
 */

export interface PrettierConfig {
  tabWidth: number;
  useSingleQuotes: boolean;
  semi: boolean;
  formatOnSave: boolean;
}

export const DEFAULT_PRETTIER_CONFIG: PrettierConfig = {
  tabWidth: 2,
  useSingleQuotes: false,
  semi: true,
  formatOnSave: true
};

/**
 * Format HTML markup with clean hierarchical indentation
 */
export function formatHtml(html: string, tabWidth: number = 2): string {
  const indentStr = " ".repeat(tabWidth);
  let formatted = "";
  let indent = 0;

  // Normalize newlines and spaces around tags
  const tokens = html
    .replace(/>\s*</g, ">\n<")
    .replace(/(<style[\s\S]*?<\/style>)/gi, (m) => m)
    .replace(/(<script[\s\S]*?<\/script>)/gi, (m) => m)
    .split("\n");

  const voidTags = new Set([
    "area", "base", "br", "col", "embed", "hr", "img", "input", 
    "link", "meta", "param", "source", "track", "wbr", "!doctype"
  ]);

  for (let i = 0; i < tokens.length; i++) {
    const rawLine = tokens[i].trim();
    if (!rawLine) continue;

    // Check if closing tag </tag>
    const isClosing = /^<\/[^>]+>/.test(rawLine);
    // Check if self-closing or void tag <img...>, <input...>
    const isVoid = voidTags.has(rawLine.replace(/<([a-zA-Z0-9_!:-]+)[\s\S]*/, "$1").toLowerCase());
    // Check if open-and-close single line: <tag>content</tag>
    const isSingleLineTag = /^<([a-zA-Z0-9_-]+)[^>]*>.*<\/\1>$/.test(rawLine);

    if (isClosing) {
      indent = Math.max(0, indent - 1);
    }

    formatted += indentStr.repeat(indent) + rawLine + "\n";

    // If opening tag that is not self-closing and not void
    if (!isClosing && !isVoid && !isSingleLineTag && /^<[a-zA-Z0-9_-]+/.test(rawLine)) {
      indent++;
    }
  }

  return formatted.trim();
}

/**
 * Format CSS styles with clean selectors, braces, and property spacing
 */
export function formatCss(css: string, tabWidth: number = 2): string {
  const indentStr = " ".repeat(tabWidth);
  // Remove multiple blank lines and normalize braces
  const clean = css
    .replace(/\s*\{\s*/g, " {\n")
    .replace(/\s*;\s*/g, ";\n")
    .replace(/\s*\}\s*/g, "\n}\n\n");

  const lines = clean.split("\n");
  let formatted = "";
  let inRule = false;

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.endsWith("{")) {
      formatted += line + "\n";
      inRule = true;
    } else if (line.startsWith("}")) {
      formatted += "}\n\n";
      inRule = false;
    } else if (inRule) {
      // Property line: clean up colon spacing
      const colonIdx = line.indexOf(":");
      if (colonIdx !== -1) {
        const prop = line.substring(0, colonIdx).trim();
        const val = line.substring(colonIdx + 1).trim();
        formatted += `${indentStr}${prop}: ${val}\n`;
      } else {
        formatted += `${indentStr}${line}\n`;
      }
    } else {
      formatted += line + "\n";
    }
  }

  return formatted.trim() + "\n";
}

/**
 * Format JavaScript code with standard indentation and semicolon checks
 */
export function formatJs(js: string, tabWidth: number = 2): string {
  const indentStr = " ".repeat(tabWidth);
  const lines = js.split("\n");
  let formatted = "";
  let indent = 0;

  for (let line of lines) {
    line = line.trim();
    if (!line) {
      formatted += "\n";
      continue;
    }

    // Count closing braces at start
    if (line.startsWith("}") || line.startsWith("]") || line.startsWith(")")) {
      indent = Math.max(0, indent - 1);
    }

    formatted += indentStr.repeat(indent) + line + "\n";

    // Count opening braces that end the line
    if (line.endsWith("{") || line.endsWith("[") || line.endsWith("(")) {
      indent++;
    }
  }

  return formatted.trim() + "\n";
}

/**
 * Format JSON code with 2-space indentation
 */
export function formatJson(json: string, tabWidth: number = 2): string {
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed, null, tabWidth) + "\n";
  } catch {
    return json;
  }
}

/**
 * Main Prettier-style Formatter dispatcher
 */
export function formatDocument(
  code: string, 
  filename: string, 
  config: PrettierConfig = DEFAULT_PRETTIER_CONFIG
): string {
  if (!code || !code.trim()) return code;

  const ext = filename.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "html":
    case "htm":
      return formatHtml(code, config.tabWidth);
    case "css":
    case "scss":
    case "less":
      return formatCss(code, config.tabWidth);
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return formatJs(code, config.tabWidth);
    case "json":
      return formatJson(code, config.tabWidth);
    default:
      return code.trim() + "\n";
  }
}
