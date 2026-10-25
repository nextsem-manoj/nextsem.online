@echo off
chcp 65001 >nul
title Create Desktop Shortcut for Antigravity Schedule Runner
color 0E

echo ================================================================
echo   🖥️ CREATING DESKTOP SHORTCUT FOR ANTIGRAVITY RUNNER
echo ================================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0..\scripts\create-desktop-shortcut.ps1"

echo.
echo ================================================================
echo   Aapke Desktop par "Antigravity Schedule Runner.lnk" ban chuka hai!
echo   Ab aap seedhe Desktop se 1-click me Antigravity ko trigger kar sakte hain.
echo ================================================================
echo.
timeout /t 5 >nul
