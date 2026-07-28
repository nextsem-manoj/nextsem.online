import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export interface NcertPdfItem {
  class: string;
  subject: string;
  name: string;
  path: string;
  filename: string;
  sizeBytes: number;
}

function scanPdfDirectory(dirPath: string, relativeBase: string = ""): NcertPdfItem[] {
  let results: NcertPdfItem[] = [];

  if (!fs.existsSync(dirPath)) {
    return results;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.join(relativeBase, entry.name).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      results = results.concat(scanPdfDirectory(fullPath, relPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      const parts = relPath.split("/");
      
      // Determine class and subject from path structure
      let className = "NCERT PDF";
      let subjectName = "General";

      if (parts.length >= 1 && parts[0].toLowerCase().startsWith("class")) {
        className = parts[0];
      }

      if (parts.length >= 2) {
        subjectName = parts[parts.length - 2];
      }

      const cleanFileName = entry.name;
      const stats = fs.statSync(fullPath);

      results.push({
        class: className,
        subject: subjectName,
        name: `[${className} • ${subjectName}] ${cleanFileName}`,
        path: `/ncert-pdfs/${relPath}`,
        filename: cleanFileName,
        sizeBytes: stats.size
      });
    }
  }

  return results;
}

export async function GET() {
  try {
    const ncertDir = path.join(process.cwd(), "public", "ncert-pdfs");
    const pdfs = scanPdfDirectory(ncertDir);

    // Sort logically by Class, then Subject, then File Name
    pdfs.sort((a, b) => {
      if (a.class !== b.class) return a.class.localeCompare(b.class);
      if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
      return a.filename.localeCompare(b.filename);
    });

    return NextResponse.json({
      success: true,
      count: pdfs.length,
      pdfs
    });
  } catch (error: unknown) {
    const errObj = error as { message?: string };
    console.error("Error scanning NCERT PDFs:", error);
    return NextResponse.json(
      { success: false, error: errObj?.message || "Failed to scan PDF directory" },
      { status: 500 }
    );
  }
}
