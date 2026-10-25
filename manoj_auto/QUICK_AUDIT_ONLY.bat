@echo off
chcp 65001 >nul
title Nextsem Academy — Fast 5-Sec Audit
color 0B

echo ================================================================
echo   🔍 NEXTSEM ACADEMY — QUICK 5-SECOND AUDIT RUNNER
echo ================================================================
echo.

cd /d "%~dp0\.."

echo 📌 Running 5-Minute SEO & Platform Integrity Audit...
node scripts\schedule-seo-audit.js
echo.

echo 📌 Checking Active Roadmap Task Status...
node scripts\project-status.js
echo.

echo Press any key to exit...
pause >nul
