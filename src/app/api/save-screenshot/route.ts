import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { lessonSlug, imageBase64 } = body;

    if (!lessonSlug || !imageBase64) {
      return NextResponse.json({ success: false, error: "Missing lessonSlug or imageBase64" }, { status: 400 });
    }

    // Strip Data URL prefix if present (e.g. data:image/png;base64,)
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const targetDir = path.join(process.cwd(), "public", "screenshots", "cli");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, `${lessonSlug}.png`);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/screenshots/cli/${lessonSlug}.png`;
    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error: any) {
    console.error("Save Screenshot Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
