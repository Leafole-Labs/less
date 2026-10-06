<#>
.SYNOPSIS
    LESS Launcher - Windows PowerShell wrapper

.DESCRIPTION
    This wrapper calls the cross-platform Python launcher (launch.py).
    Falls back to PowerShell-native implementation if Python is not available.

.PARAMETER Port
    Port number for the PHP built-in server (default: 8080)

.EXAMPLE
    .\run.ps1
    .\run.ps1 8081
#>

param(
    [int]$Port = 8080
)

# Set strict mode for better error handling
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# Get script directory (project root)
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $ScriptDir

function Write-Header {
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "  LESS - Cross-Platform Launcher (PHP + SQLite)" -ForegroundColor Cyan
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host ""
}

function Write-Info { param($msg) Write-Host "[INFO] $msg" -ForegroundColor Blue }
function Write-Ok   { param($msg) Write-Host "[OK] $msg" -ForegroundColor Green }
function Write-Warn { param($msg) Write-Host "[WARN] $msg" -ForegroundColor Yellow }
function Write-Err  { param($msg) Write-Host "[ERROR] $msg" -ForegroundColor Red }

function Find-Python {
    # Try python, python3, py (Windows Python launcher)
    foreach ($cmd in @('python', 'python3', 'py')) {
        $path = (Get-Command $cmd -ErrorAction SilentlyContinue).Source
        if ($path) { return $cmd }
    }
    return $null
}

function Test-PhpExtension {
    param([string]$Extension)
    $code = "exit(extension_loaded('$Extension') ? 0 : 1);"
    $exitCode = (Start-Process php -ArgumentList "-r", $code -Wait -PassThru -NoNewWindow).ExitCode
    return $exitCode -eq 0
}

function Get-PhpVersion {
    $output = php -r "echo PHP_VERSION;" 2>$null
    return $output.Trim()
}

function Get-PhpIniPath {
    $output = php -r "echo php_ini_loaded_file() ?: '';" 2>$null
    return $output.Trim()
}

function Enable-SqliteExtension {
    param([string]$PhpIniPath)
    try {
        $content = Get-Content -LiteralPath $PhpIniPath -Raw -ErrorAction Stop
        $newContent = $content -replace '(?m)^\s*;\s*extension\s*=\s*sqlite3\s*$', 'extension=sqlite3'
        if ($newContent -ne $content) {
            Set-Content -LiteralPath $PhpIniPath -Value $newContent -Encoding ASCII -ErrorAction Stop
        }
        return $true
    } catch {
        Write-Err "Failed to edit php.ini: $_"
        return $false
    }
}

function Ensure-WpConfig {
    $wpConfig = Join-Path $ScriptDir "wp-config.php"
    if (Test-Path $wpConfig) { return $true }

    Write-Warn "wp-config.php not found. Creating initial LESS configuration..."

    $genScript = Join-Path $ScriptDir "gen_wpconfig.php"
    if (-not (Test-Path $genScript)) {
        Write-Err "Generation script gen_wpconfig.php not found."
        return $false
    }

    $exitCode = (Start-Process php -ArgumentList $genScript -Wait -PassThru -NoNewWindow).ExitCode
    if ($exitCode -ne 0) {
        Write-Err "Failed to create wp-config.php."
        return $false
    }

    Write-Ok "wp-config.php created successfully."
    return $true
}

function Ensure-DbDropin {
    $dbPhp = Join-Path $ScriptDir "wp-content\db.php"
    if (Test-Path $dbPhp) {
        Write-Ok "SQLite drop-in found: wp-content/db.php"
        return $true
    }

    Write-Warn "wp-content/db.php not found. Installing from plugin..."

    $dbCopy = Join-Path $ScriptDir "wp-content\plugins\sqlite-database-integration\db.copy"
    if (-not (Test-Path $dbCopy)) {
        Write-Err "Plugin sqlite-database-integration not found in wp-content/plugins."
        return $false
    }

    try {
        $content = Get-Content -LiteralPath $dbCopy -Raw
        $pluginPath = Resolve-Path (Join-Path $ScriptDir "wp-content\plugins\sqlite-database-integration")
        $pluginPathStr = $pluginPath.Path -replace '\\', '/'

        $content = $content -replace '{SQLITE_IMPLEMENTATION_FOLDER_PATH}', $pluginPathStr
        $content = $content -replace '{SQLITE_PLUGIN}', 'sqlite-database-integration/load.php'

        Set-Content -LiteralPath $dbPhp -Value $content -Encoding ASCII
        Write-Ok "Drop-in created: wp-content/db.php"
        return $true
    } catch {
        Write-Err "Failed to create wp-content/db.php: $_"
        return $false
    }
}

function Ensure-DatabaseDir {
    $dbDir = Join-Path $ScriptDir "wp-content\database"
    try {
        if (-not (Test-Path $dbDir)) {
            New-Item -ItemType Directory -Path $dbDir | Out-Null
        }
        Write-Ok "SQLite database directory: wp-content/database/"
        return $true
    } catch {
        Write-Err "Failed to create database directory: $_"
        return $false
    }
}

# Main execution
Write-Header

# Try Python launcher first
$pythonCmd = Find-Python
if ($pythonCmd) {
    Write-Host "Using Python launcher (launch.py)..." -ForegroundColor Gray
    $launchPy = Join-Path $ScriptDir "launch.py"
    if (Test-Path $launchPy) {
        $exitCode = (Start-Process $pythonCmd -ArgumentList $launchPy, $Port -Wait -PassThru -NoNewWindow).ExitCode
        exit $exitCode
    }
}

Write-Warn "Python not found. Using PowerShell-native implementation."
Write-Host ""

# Check PHP
$phpPath = (Get-Command php -ErrorAction SilentlyContinue).Source
if (-not $phpPath) {
    Write-Err "PHP not found in PATH."
    Write-Host "Install PHP 8.1+ and add it to PATH."
    Write-Host "Windows: https://windows.php.net/download/"
    Read-Host "Press Enter to exit"
    exit 1
}

$phpVersion = Get-PhpVersion
Write-Ok "PHP $phpVersion found."

# Check PHP version >= 8.1
try {
    $parts = $phpVersion -split '\.'
    $major = [int]$parts[0]
    $minor = [int]$parts[1]
    if ($major -lt 8 -or ($major -eq 8 -and $minor -lt 1)) {
        Write-Warn "PHP 8.1+ recommended. Current: $phpVersion"
    }
} catch { }

# Check php.ini
$phpIni = Get-PhpIniPath
if ($phpIni) {
    Write-Info "php.ini: $phpIni"
} else {
    Write-Warn "No php.ini loaded - using PHP defaults."
}

# Check sqlite3 extension
if (-not (Test-PhpExtension 'sqlite3')) {
    Write-Warn "Extension 'sqlite3' DISABLED. Attempting to enable..."
    if ($phpIni) {
        if (Enable-SqliteExtension $phpIni) {
            if (Test-PhpExtension 'sqlite3') {
                Write-Ok "Extension 'sqlite3' enabled!"
            } else {
                Write-Err "Still no 'sqlite3' after editing php.ini."
                Write-Host "Check if $phpIni was saved and php_sqlite3.dll exists in ext folder."
                Read-Host "Press Enter to exit"
                exit 1
            }
        } else {
            Write-Err "Failed to edit php.ini. Run PowerShell as Administrator."
            Write-Host "Manually enable: ';extension=sqlite3' -> 'extension=sqlite3' in:"
            Write-Host "  $phpIni"
            Read-Host "Press Enter to exit"
            exit 1
        }
    } else {
        Write-Err "Extension 'sqlite3' not loaded and no php.ini found."
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Ok "Extension 'sqlite3' active."
}

# Check pdo_sqlite extension
if (-not (Test-PhpExtension 'pdo_sqlite')) {
    Write-Err "Extension 'pdo_sqlite' disabled. Enable 'extension=pdo_sqlite' in php.ini:"
    if ($phpIni) { Write-Host "  $phpIni" }
    Read-Host "Press Enter to exit"
    exit 1
} else {
    Write-Ok "Extension 'pdo_sqlite' active."
}

# Generate wp-config.php if needed
if (-not (Ensure-WpConfig)) {
    Read-Host "Press Enter to exit"
    exit 1
}

# Ensure SQLite drop-in
if (-not (Ensure-DbDropin)) {
    Read-Host "Press Enter to exit"
    exit 1
}

# Ensure database directory
if (-not (Ensure-DatabaseDir)) {
    Read-Host "Press Enter to exit"
    exit 1
}

# Print info and start server
Write-Host ""
Write-Info "With the drop-in active, WordPress uses local SQLite."
Write-Info "DB_HOST/DB_USER from wp-config.php (e.g., Docker host 'wordpress') are ignored."
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Starting server at http://localhost:$Port" -ForegroundColor Cyan
Write-Host "  Press Ctrl+C to stop." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

try {
    # -d max_execution_time=300: core downloads allow up to 300s HTTP timeout;
    # PHP default is 30s and fatals mid-stream in Curl::stream_body.
    Start-Process php -ArgumentList "-d", "max_execution_time=300", "-S", "localhost:$Port" -Wait -NoNewWindow
} catch {
    Write-Err "Failed to start server: $_"
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Server stopped." -ForegroundColor Yellow
Write-Host "If it didn't start, port $Port may be in use - try: .\run.ps1 8081"
Read-Host "Press Enter to exit"