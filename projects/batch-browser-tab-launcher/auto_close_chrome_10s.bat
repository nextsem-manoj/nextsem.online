@echo off
start chrome "https://www.google.com" "https://www.youtube.com"
timeout /t 10
taskkill /f /im chrome.exe
exit
