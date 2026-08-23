@echo off
powershell -Command "Add-Type -AssemblyName System.Drawing; $b = New-Object System.Drawing.Bitmap 400,400; [System.Drawing.Graphics]::FromImage($b).DrawEllipse([System.Drawing.Pens]::Red, 20, 20, 350, 350); $b.Save('circle.png')"
start mspaint circle.png
exit
