@echo off
start chrome "https://mail.google.com"
timeout /t 5
taskkill /f /im chrome.exe
start chrome "https://www.youtube.com"
timeout /t 5
taskkill /f /im chrome.exe
exit
