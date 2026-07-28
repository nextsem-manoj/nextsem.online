/**
 * Nextsem Academy - PDF Download Generator Utility
 * Generates a clean, rich printable PDF document containing:
 * - Header: App Logo (NS Badge), App Name (Nextsem Academy), Website Link (https://nextsem.online)
 * - Body: Course Name, Lesson Title, & Full Lesson Content
 * - Footer: Copyright notice & Website links
 */

export interface LessonPdfPayload {
  title: string;
  courseName: string;
  content: string;
  unit?: string;
}

export function generateAndDownloadLessonPdf(data: LessonPdfPayload) {
  if (typeof window === "undefined") return;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups in your browser to download the Lesson PDF!");
    return;
  }

  const formattedContent = data.content
    .replace(/^### (.*$)/gim, '<h3 style="color:#04AA6D; font-size:16px; margin-top:20px; margin-bottom:8px; font-weight:800;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="color:#ffffff; font-size:18px; margin-top:24px; margin-bottom:10px; font-weight:800; border-bottom:1px solid #1e293b; padding-bottom:4px;">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 style="color:#c1a648; font-size:22px; margin-top:28px; margin-bottom:12px; font-weight:900;">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#f8fafc;">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em style="color:#cbd5e1;">$1</em>')
    .replace(/```([\s\S]*?)```/g, '<pre style="background:#0f172a; color:#38bdf8; padding:12px; border-radius:8px; border:1px solid #1e293b; font-family:monospace; font-size:12px; overflow-x:auto; margin:12px 0;"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code style="background:#1e293b; color:#38bdf8; padding:2px 6px; border-radius:4px; font-family:monospace; font-size:12px;">$1</code>')
    .replace(/\n\n/g, '</p><p style="color:#cbd5e1; line-height:1.7; margin-bottom:12px;">')
    .replace(/\n/g, '<br/>');

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${data.title} - Nextsem Academy PDF</title>
      <style>
        @page {
          size: A4;
          margin: 16mm;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #060c18;
          color: #e2e8f0;
          margin: 0;
          padding: 24px;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid #04AA6D;
          padding-bottom: 14px;
          margin-bottom: 24px;
        }
        .logo-box {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ns-badge {
          background-color: #04AA6D;
          color: #ffffff;
          font-weight: 900;
          font-size: 14px;
          padding: 6px 10px;
          border-radius: 8px;
          letter-spacing: -0.5px;
        }
        .app-name {
          font-size: 20px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
        }
        .app-url {
          font-size: 12px;
          color: #04AA6D;
          text-decoration: none;
          font-weight: 700;
        }
        .meta-bar {
          background-color: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .course-tag {
          font-size: 11px;
          font-weight: 800;
          color: #c1a648;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .unit-tag {
          font-size: 11px;
          color: #94a3b8;
        }
        .lesson-title {
          font-size: 24px;
          font-weight: 900;
          color: #ffffff;
          margin-top: 0;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .content-body {
          font-size: 13px;
          line-height: 1.7;
          color: #cbd5e1;
        }
        .footer {
          margin-top: 40px;
          border-top: 1px solid #1e293b;
          padding-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          color: #64748b;
        }
        .footer-link {
          color: #04AA6D;
          text-decoration: none;
          font-weight: 700;
        }
      </style>
    </head>
    <body>
      <!-- HEADER -->
      <div class="header">
        <div class="logo-box">
          <div class="ns-badge">NS</div>
          <div>
            <h1 class="app-name">Nextsem Academy</h1>
            <a href="https://nextsem.online" target="_blank" class="app-url">https://nextsem.online</a>
          </div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; display: block;">Official Lesson Guide</span>
          <span style="font-size: 12px; color: #f8fafc; font-weight: 700;">Verified Curriculum</span>
        </div>
      </div>

      <!-- META BAR -->
      <div class="meta-bar">
        <span class="course-tag">📘 ${data.courseName}</span>
        ${data.unit ? `<span class="unit-tag">📍 ${data.unit}</span>` : ""}
      </div>

      <!-- LESSON TITLE -->
      <h1 class="lesson-title">${data.title}</h1>

      <!-- LESSON CONTENT -->
      <div class="content-body">
        <p style="color:#cbd5e1; line-height:1.7; margin-bottom:12px;">
          ${formattedContent}
        </p>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        <div>
          © ${new Date().getFullYear()} <strong>Nextsem Academy</strong> — Next-Gen Tech Education. All Rights Reserved.
        </div>
        <div>
          Official Site: <a href="https://nextsem.online" class="footer-link">https://nextsem.online</a>
        </div>
      </div>

      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 300);
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(fullHtml);
  printWindow.document.close();
}
