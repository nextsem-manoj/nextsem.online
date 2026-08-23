@echo off
set /p task="What did you work on today? "
echo [%date% at %time%] %task% >> daily_log.txt
start notepad daily_log.txt
exit
