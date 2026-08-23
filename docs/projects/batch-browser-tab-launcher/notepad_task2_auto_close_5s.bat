@echo off
start notepad
timeout /t 5
taskkill /f /im notepad.exe
exit
