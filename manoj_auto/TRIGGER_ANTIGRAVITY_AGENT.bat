@echo off
chcp 65001 >nul
title Antigravity IDE — Agent Trigger & Schedule Manager
color 0B

echo ================================================================
echo   🤖 TRIGGERING ANTIGRAVITY AGENT TO REVIEW SCHEDULE & ACT
echo   Architect: Er. Manoj Kumar
echo   Target: Rs. 10 Lakh/Month Ad Revenue (Google AdSense & AdMob)
echo ================================================================
echo.

cd /d "%~dp0\.."

set CUSTOM_PROMPT=
set /p CUSTOM_PROMPT="Antigravity se kya puchna chahte hain? (Press ENTER for default schedule review): "

if "%CUSTOM_PROMPT%"=="" (
    set PROMPT_TEXT=Antigravity, please review all scheduled tasks in status.md and task.md. Check the 5-minute recurring SEO audit and sitemap, report current progress toward the Rs 10 Lakh/month ad revenue goal, and ask me what scheduled milestone we should execute next!
) else (
    set PROMPT_TEXT=%CUSTOM_PROMPT%
)

echo.
echo 📌 Sending command and roadmap context to Antigravity IDE...
call "C:\Users\Manoj\AppData\Local\Programs\Antigravity IDE\bin\antigravity-ide.cmd" chat -r -m agent --maximize -a "%~dp0\..\status.md" -a "%~dp0\..\docs\roadmap\task.md" "%PROMPT_TEXT%"

echo.
echo ================================================================
echo   ✅ Command successfully sent to Antigravity Agent!
echo   Switch to your Antigravity IDE window to interact in chat.
echo ================================================================
echo.
timeout /t 5 >nul
