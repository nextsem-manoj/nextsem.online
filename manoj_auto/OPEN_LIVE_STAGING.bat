@echo off
title Nextsem Academy — Launch Live Staging Sites
color 0E

echo Launching Nextsem Academy Staging Platforms in Google Chrome...

start chrome "https://nextsem-staging.web.app/playground/"
start chrome "https://nextsem-staging.web.app/school"
start chrome "https://nextsem-staging.web.app/bca"

echo Done! All live staging tabs launched.
timeout /t 3 >nul
