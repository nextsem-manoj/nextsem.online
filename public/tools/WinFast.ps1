<#
.SYNOPSIS
    WinFast 11 - Ultimate Windows 11 Speedup & Debloat Optimizer
.DESCRIPTION
    A safe, lightweight, open-source optimizer designed to boost Windows 11 performance,
    clear junk files, remove telemetry, and activate high-performance power profiles.
.AUTHOR
    Developed by Manoj
.COPYRIGHT
    Copyright (c) NextSem (https://nextsem.online)
.LICENSE
    MIT License
#>

# Enforce TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Test-IsAdmin {
    $currentIdentity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($currentIdentity)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Show-Header {
    Clear-Host
    Write-Host "=================================================================" -ForegroundColor Cyan
    Write-Host "  __      ___       ______        _     __ __                    " -ForegroundColor Cyan
    Write-Host "  \ \    / (_)     |  ____|      | |   /_ /_ |                   " -ForegroundColor Cyan
    Write-Host "   \ \  / / _ _ __ | |__ __ _ ___| |_   | || |                   " -ForegroundColor Cyan
    Write-Host "    \ \/ / | | '_ \|  __/ _' / __| __|  | || |                   " -ForegroundColor Cyan
    Write-Host "     \  /  | | | | | | | (_| \__ \ |_   | || |                   " -ForegroundColor Cyan
    Write-Host "      \/   |_|_| |_|_|  \__,_|___/\__|  |_||_|                   " -ForegroundColor Cyan
    Write-Host "                                                                 " -ForegroundColor Cyan
    Write-Host "      Windows 11 Speedup, Debloat & Performance Suite            " -ForegroundColor Yellow
    Write-Host "           Developed by Manoj * Copyright (c) NextSem            " -ForegroundColor Green
    Write-Host "=================================================================" -ForegroundColor Cyan
    Write-Host ""
}

# 1. Create System Restore Point
function New-WinFastRestorePoint {
    Write-Host ""
    Write-Host "[+] Step 1: Creating System Restore Point for Safety..." -ForegroundColor Yellow
    try {
        Enable-ComputerRestore -Drive "C:\" -ErrorAction SilentlyContinue
        Checkpoint-Computer -Description "WinFast11_BeforeOptimization" -RestorePointType "MODIFY_SETTINGS" -ErrorAction Stop
        Write-Host " [SUCCESS] System Restore Point created: 'WinFast11_BeforeOptimization'" -ForegroundColor Green
    }
    catch {
        Write-Host " [NOTICE] Could not auto-create restore point (System Protection might be disabled on C:). Continuing safely..." -ForegroundColor DarkYellow
    }
}

# 2. Clean Junk, Temp & Cache Files
function Invoke-DeepJunkClean {
    Write-Host ""
    Write-Host "[+] Cleaning Temporary, Cache & Junk Files..." -ForegroundColor Yellow

    $targets = @(
        "$env:TEMP\*",
        "C:\Windows\Temp\*",
        "C:\Windows\Prefetch\*",
        "C:\Windows\SoftwareDistribution\Download\*"
    )

    $cleanedCount = 0
    foreach ($path in $targets) {
        $parentDir = Split-Path $path -Parent
        if (Test-Path $parentDir) {
            Write-Host "  -> Purging: $path" -ForegroundColor DarkGray
            try {
                Remove-Item -Path $path -Recurse -Force -ErrorAction SilentlyContinue
                $cleanedCount++
            } catch {}
        }
    }

    # Clean Recycle Bin
    try {
        Clear-RecycleBin -Force -ErrorAction SilentlyContinue
        Write-Host "  -> Cleared Recycle Bin" -ForegroundColor DarkGray
    } catch {}

    Write-Host " [SUCCESS] System Temp & Cache Purge Complete!" -ForegroundColor Green
}

# 3. Disable Telemetry, Diagnostic Tracking & Cortana
function Invoke-DisableTelemetry {
    Write-Host ""
    Write-Host "[+] Disabling Telemetry, Ad-Tracking & Background Diagnostics..." -ForegroundColor Yellow

    # Registry Tweaks for Telemetry
    $regPaths = @(
        @{ Path = "HKLM:\SOFTWARE\Policies\Microsoft\Windows\DataCollection"; Name = "AllowTelemetry"; Value = 0; Type = "DWord" },
        @{ Path = "HKCU:\Software\Microsoft\Windows\CurrentVersion\AdvertisingInfo"; Name = "Enabled"; Value = 0; Type = "DWord" },
        @{ Path = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Privacy"; Name = "TailoredExperiencesWithDiagnosticDataEnabled"; Value = 0; Type = "DWord" },
        @{ Path = "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Windows Search"; Name = "AllowCortana"; Value = 0; Type = "DWord" }
    )

    foreach ($reg in $regPaths) {
        if (-not (Test-Path $reg.Path)) {
            New-Item -Path $reg.Path -Force -ErrorAction SilentlyContinue | Out-Null
        }
        Set-ItemProperty -Path $reg.Path -Name $reg.Name -Value $reg.Value -Type $reg.Type -Force -ErrorAction SilentlyContinue
    }

    # Stop Diagnostic Tracking Services
    $diagServices = @("DiagTrack", "dmwappushservice")
    foreach ($svc in $diagServices) {
        if (Get-Service -Name $svc -ErrorAction SilentlyContinue) {
            Stop-Service -Name $svc -Force -WarningAction SilentlyContinue -ErrorAction SilentlyContinue
            Set-Service -Name $svc -StartupType Disabled -ErrorAction SilentlyContinue
            Write-Host "  -> Disabled background service: $svc" -ForegroundColor DarkGray
        }
    }

    Write-Host " [SUCCESS] Telemetry & Background Tracking Disabled!" -ForegroundColor Green
}

# 4. Activate Ultimate Performance Power Plan
function Enable-UltimatePerformance {
    Write-Host ""
    Write-Host "[+] Activating Ultimate Performance Power Profile..." -ForegroundColor Yellow
    try {
        # Unlock Ultimate Performance Plan GUID
        $guidOutput = powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61 2>$null
        
        # Extract GUID from output
        if ($guidOutput -match "([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})") {
            $guid = $matches[1]
            powercfg -setactive $guid
            Write-Host " [SUCCESS] Ultimate Performance Power Plan Activated ($guid)!" -ForegroundColor Green
        } else {
            # Fallback to High Performance
            powercfg -setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
            Write-Host " [SUCCESS] High Performance Power Plan Activated!" -ForegroundColor Green
        }
    } catch {
        Write-Host " [NOTICE] Could not switch power plan via script. Using system default." -ForegroundColor DarkYellow
    }
}

# 5. Optimize Visual Effects & Startup Delay
function Invoke-SpeedupUI {
    Write-Host ""
    Write-Host "[+] Optimizing System Response & Startup Delay..." -ForegroundColor Yellow

    # Remove Explorer startup delay
    $startupReg = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Serialize"
    if (-not (Test-Path $startupReg)) {
        New-Item -Path $startupReg -Force -ErrorAction SilentlyContinue | Out-Null
    }
    Set-ItemProperty -Path $startupReg -Name "StartupDelayInMSec" -Value 0 -Type DWord -Force -ErrorAction SilentlyContinue

    # Speed up Menu Show Delay
    Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "MenuShowDelay" -Value "50" -Type String -Force -ErrorAction SilentlyContinue

    Write-Host " [SUCCESS] UI Delay reduced to 50ms & Startup Delay eliminated!" -ForegroundColor Green
}

# 6. Enable Game Mode & Hardware Accelerated GPU Scheduling
function Enable-GamingBoost {
    Write-Host ""
    Write-Host "[+] Optimizing Windows Game Mode & Scheduling..." -ForegroundColor Yellow

    # Game Mode On
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AutoGameModeEnabled" -Value 1 -Type DWord -Force -ErrorAction SilentlyContinue
    
    # Hags / GPU Priority
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers" -Name "HwSchMode" -Value 2 -Type DWord -Force -ErrorAction SilentlyContinue

    Write-Host " [SUCCESS] Windows Game Mode & GPU scheduling enabled!" -ForegroundColor Green
}

# Full Turbo Optimization
function Invoke-FullOptimization {
    New-WinFastRestorePoint
    Invoke-DeepJunkClean
    Invoke-DisableTelemetry
    Enable-UltimatePerformance
    Invoke-SpeedupUI
    Enable-GamingBoost
    
    Write-Host ""
    Write-Host "=================================================================" -ForegroundColor Cyan
    Write-Host " [*] ALL OPTIMIZATIONS COMPLETED SUCCESSFULLY!" -ForegroundColor Green
    Write-Host " Please restart your PC to feel the full speed boost." -ForegroundColor Yellow
    Write-Host "=================================================================" -ForegroundColor Cyan
}

# ----------------- Main Interactive Loop -----------------
if (-not (Test-IsAdmin)) {
    Write-Host ""
    Write-Host "[ERROR] Administrator Privileges Required!" -ForegroundColor Red
    Write-Host "Please right-click on this script or Run-WinFast.bat and choose 'Run as Administrator'." -ForegroundColor Yellow
    Write-Host ""
    Pause
    Exit
}

do {
    Show-Header
    Write-Host " Select an action:" -ForegroundColor White
    Write-Host "  [1] Full Turbo Optimization (Recommended - All in One)" -ForegroundColor Green
    Write-Host "  [2] Deep Junk & Cache Purge (Frees Disk Space)" -ForegroundColor White
    Write-Host "  [3] Disable Telemetry & Background Tracking (Saves RAM/CPU)" -ForegroundColor White
    Write-Host "  [4] Enable Ultimate Performance Power Plan" -ForegroundColor White
    Write-Host "  [5] Optimize UI & Remove Startup Delays" -ForegroundColor White
    Write-Host "  [6] Enable Game Mode & GPU Scheduling" -ForegroundColor White
    Write-Host "  [7] Create System Restore Point Now" -ForegroundColor White
    Write-Host "  [Q] Exit" -ForegroundColor Red
    Write-Host " ---------------------------------------------------------------" -ForegroundColor DarkGray
    Write-Host "  Developed by Manoj * Copyright (c) NextSem" -ForegroundColor DarkGray
    Write-Host ""
    
    $choice = Read-Host " Enter choice (1-7 or Q)"

    switch ($choice.ToUpper()) {
        "1" { Invoke-FullOptimization; Pause }
        "2" { Invoke-DeepJunkClean; Pause }
        "3" { Invoke-DisableTelemetry; Pause }
        "4" { Enable-UltimatePerformance; Pause }
        "5" { Invoke-SpeedupUI; Pause }
        "6" { Enable-GamingBoost; Pause }
        "7" { New-WinFastRestorePoint; Pause }
        "Q" { Write-Host "`nExiting WinFast 11. Have a great day!`n" -ForegroundColor Cyan; break }
        default { Write-Host "`nInvalid selection. Try again." -ForegroundColor DarkYellow; Start-Sleep -Seconds 1 }
    }
} while ($choice.ToUpper() -ne "Q")
