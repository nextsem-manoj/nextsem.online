@echo off
rem =======================================================================
rem  Nextsem Academy - Automated 3-Tab Daily Workspace Launcher (.bat)
rem  Opens Google Search, YouTube, and Gmail in your default browser.
rem =======================================================================
title Nextsem Daily Workspace Launcher
color 0A

echo =======================================================================
echo     NEXTSEM ACADEMY - 3-TAB BROWSER WORKSPACE LAUNCHER (.BAT)
echo =======================================================================
echo.
echo Launching your daily productivity tabs...
echo.

rem Step 1: Launch Google Search
echo [1/3] Opening Google Search (https://www.google.com)...
start https://www.google.com
timeout /t 2 >nul

rem Step 2: Launch YouTube
echo [2/3] Opening YouTube (https://www.youtube.com)...
start https://www.youtube.com
timeout /t 2 >nul

rem Step 3: Launch Gmail
echo [3/3] Opening Gmail (https://mail.google.com)...
start https://mail.google.com

echo.
echo =======================================================================
echo  [SUCCESS] All 3 tabs launched! Happy coding and studying!
echo =======================================================================
echo.
pause
exit
