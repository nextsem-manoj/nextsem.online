$ws = New-Object -ComObject WScript.Shell
$desktop = [Environment]::GetFolderPath('Desktop')
$shortcutPath = Join-Path $desktop 'Antigravity Schedule Runner.lnk'
$targetPath = 'C:\Users\Manoj\Nextsem Repositories\nextsem.online\manoj_auto\ONE_CLICK_AUTO_SYNC.bat'
$workingDir = 'C:\Users\Manoj\Nextsem Repositories\nextsem.online\manoj_auto'

$shortcut = $ws.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $targetPath
$shortcut.WorkingDirectory = $workingDir
$shortcut.Description = 'Antigravity Agent Schedule & 1-Click Automation Runner'
$shortcut.Save()

if (Test-Path $shortcutPath) {
    Write-Host "SUCCESS: Shortcut created at $shortcutPath"
} else {
    Write-Host "FAILED to create shortcut"
}
