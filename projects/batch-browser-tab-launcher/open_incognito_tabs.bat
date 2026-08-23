@echo off
rem =======================================================================
rem  Nextsem Academy - Automated Incognito / InPrivate Browser Launcher (.bat)
rem  Opens Google Search and YouTube in Private/Incognito Mode.
rem =======================================================================
title Nextsem Incognito Tab Launcher
color 0B

echo =======================================================================
echo     NEXTSEM ACADEMY - INCOGNITO / INPRIVATE BROWSER LAUNCHER (.BAT)
echo =======================================================================
echo.
echo Select your browser:
echo [1] Google Chrome (Incognito Mode)
echo [2] Microsoft Edge (InPrivate Mode)
echo [3] Mozilla Firefox (Private Window)
echo [4] Brave Browser (Incognito Mode)
echo.

choice /c 1234 /n /m "Press 1, 2, 3, or 4 to launch: "

if errorlevel 4 goto BRAVE
if errorlevel 3 goto FIREFOX
if errorlevel 2 goto EDGE
if errorlevel 1 goto CHROME

:CHROME
echo.
echo Launching Google and YouTube in Google Chrome Incognito...
start chrome --incognito "https://www.google.com" "https://www.youtube.com"
goto END

:EDGE
echo.
echo Launching Google and YouTube in Microsoft Edge InPrivate...
start msedge -inprivate "https://www.google.com" "https://www.youtube.com"
goto END

:FIREFOX
echo.
echo Launching Google and YouTube in Mozilla Firefox Private Window...
start firefox -private-window "https://www.google.com" "https://www.youtube.com"
goto END

:BRAVE
echo.
echo Launching Google and YouTube in Brave Browser Incognito...
start brave --incognito "https://www.google.com" "https://www.youtube.com"
goto END

:END
echo.
echo =======================================================================
echo  [SUCCESS] Private Incognito tabs opened! No browsing history will be saved.
echo =======================================================================
echo.
pause
exit
