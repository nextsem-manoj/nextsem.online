@echo off
set /p "note=Enter your note: "
echo [%date% %time%] %note% > "%~dp0my_note.txt"
start "" notepad "%~dp0my_note.txt"
exit
