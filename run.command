#!/usr/bin/env bash
#
# LESS Launcher - macOS Finder-compatible command file
# Double-click this file in Finder to launch LESS in Terminal.
# This wrapper calls the cross-platform Python launcher (launch.py)
# Falls back to shell-native implementation if Python is not available.
#

# Ensure we're in the correct directory when launched from Finder
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Default port
PORT="${1:-18770}"

# Colors
RED='\033[91m'
GREEN='\033[92m'
YELLOW='\033[93m'
BLUE='\033[94m'
CYAN='\033[96m'
BOLD='\033[1m'
RESET='\033[0m'

# Disable colors if not a TTY
if [[ ! -t 1 ]]; then
    RED='' GREEN='' YELLOW='' BLUE='' CYAN='' BOLD='' RESET=''
fi

print_header() {
    echo -e "${CYAN}============================================${RESET}"
    echo -e "${CYAN}  LESS - Cross-Platform Launcher (PHP + SQLite)${RESET}"
    echo -e "${CYAN}============================================${RESET}"
    echo
}

print_info() { echo -e "${BLUE}[INFO] $1${RESET}"; }
print_ok()   { echo -e "${GREEN}[OK] $1${RESET}"; }
print_warn() { echo -e "${YELLOW}[WARN] $1${RESET}"; }
print_err()  { echo -e "${RED}[ERROR] $1${RESET}"; }

find_python() {
    for cmd in python3 python; do
        if command -v "$cmd" >/dev/null 2>&1; then
            echo "$cmd"
            return 0
        fi
    done
    return 1
}

php_version() {
    php -r 'echo PHP_VERSION;' 2>/dev/null
}

php_ini_path() {
    php -r 'echo php_ini_loaded_file() ?: "";' 2>/dev/null
}

extension_loaded() {
    php -r "exit(extension_loaded('$1') ? 0 : 1);" 2>/dev/null
}

ensure_wp_config() {
    local wp_config="$SCRIPT_DIR/wp-config.php"
    [[ -f "$wp_config" ]] && return 0

    print_warn "wp-config.php not found. Creating initial LESS configuration..."

    local gen_script="$SCRIPT_DIR/gen_wpconfig.php"
    [[ -f "$gen_script" ]] || { print_err "Generation script gen_wpconfig.php not found."; return 1; }

    php "$gen_script" || { print_err "Failed to create wp-config.php."; return 1; }

    print_ok "wp-config.php created successfully."
    return 0
}

ensure_db_dropin() {
    local db_php="$SCRIPT_DIR/wp-content/db.php"
    [[ -f "$db_php" ]] && { print_ok "SQLite drop-in found: wp-content/db.php"; return 0; }

    print_warn "wp-content/db.php not found. Installing from plugin..."

    local db_copy="$SCRIPT_DIR/wp-content/plugins/sqlite-database-integration/db.copy"
    [[ -f "$db_copy" ]] || { print_err "Plugin sqlite-database-integration not found in wp-content/plugins."; return 1; }

    local plugin_path
    plugin_path="$(realpath "$SCRIPT_DIR/wp-content/plugins/sqlite-database-integration")"
    local plugin_path_posix="${plugin_path//\\//}"

    sed -e "s|{SQLITE_IMPLEMENTATION_FOLDER_PATH}|$plugin_path_posix|g" \
        -e "s|{SQLITE_PLUGIN}|sqlite-database-integration/load.php|g" \
        "$db_copy" > "$db_php" || { print_err "Failed to create wp-content/db.php."; return 1; }

    print_ok "Drop-in created: wp-content/db.php"
    return 0
}

ensure_database_dir() {
    local db_dir="$SCRIPT_DIR/wp-content/database"
    mkdir -p "$db_dir" || { print_err "Failed to create database directory."; return 1; }
    print_ok "SQLite database directory: wp-content/database/"
    return 0
}

# Trap Ctrl+C to show a clean message
trap 'echo; echo -e "${YELLOW}Server stopped.${RESET}"; exit 0' INT TERM

# Main execution
print_header

# Try Python launcher first
PYTHON_CMD=$(find_python) || PYTHON_CMD=""
if [[ -n "$PYTHON_CMD" ]]; then
    echo -e "${BOLD}Using Python launcher (launch.py)...${RESET}"
    if [[ -f "$SCRIPT_DIR/launch.py" ]]; then
        exec "$PYTHON_CMD" "$SCRIPT_DIR/launch.py" "$PORT"
    fi
fi

print_warn "Python not found. Using shell-native implementation."
echo

# Check PHP
if ! command -v php >/dev/null 2>&1; then
    print_err "PHP not found in PATH."
    echo "Install PHP 8.1+ and add it to PATH."
    echo "macOS: brew install php (or download from https://www.php.net/downloads.php)"
    echo
    read -p "Press Enter to close this window..."
    exit 1
fi

PHP_VER=$(php_version)
print_ok "PHP $PHP_VER found."

# Check PHP version >= 8.1
IFS='.' read -r major minor _ <<< "$PHP_VER"
if [[ $major -lt 8 ]] || [[ $major -eq 8 && $minor -lt 1 ]]; then
    print_warn "PHP 8.1+ recommended. Current: $PHP_VER"
fi

# Check php.ini
PHP_INI=$(php_ini_path)
if [[ -n "$PHP_INI" ]]; then
    print_info "php.ini: $PHP_INI"
else
    print_warn "No php.ini loaded - using PHP defaults."
fi

# Check sqlite3 extension
if ! extension_loaded "sqlite3"; then
    print_warn "Extension 'sqlite3' DISABLED."
    print_err "On macOS, install PHP with SQLite support: brew install php"
    echo "Or enable extension=sqlite3 in your php.ini: $PHP_INI"
    echo
    read -p "Press Enter to close this window..."
    exit 1
else
    print_ok "Extension 'sqlite3' active."
fi

# Check pdo_sqlite extension
if ! extension_loaded "pdo_sqlite"; then
    print_err "Extension 'pdo_sqlite' disabled. Enable 'extension=pdo_sqlite' in php.ini:"
    [[ -n "$PHP_INI" ]] && echo "  $PHP_INI"
    echo
    read -p "Press Enter to close this window..."
    exit 1
else
    print_ok "Extension 'pdo_sqlite' active."
fi

# Generate wp-config.php if needed
ensure_wp_config || { read -p "Press Enter to close this window..."; exit 1; }

# Ensure SQLite drop-in
ensure_db_dropin || { read -p "Press Enter to close this window..."; exit 1; }

# Ensure database directory
ensure_database_dir || { read -p "Press Enter to close this window..."; exit 1; }

# Print info and start server
echo
print_info "With the drop-in active, WordPress uses local SQLite."
print_info "DB_HOST/DB_USER from wp-config.php (e.g., Docker host 'wordpress') are ignored."
echo
echo -e "${CYAN}============================================${RESET}"
echo -e "${CYAN}  Starting server at http://localhost:$PORT${RESET}"
echo -e "${CYAN}  Press Ctrl+C to stop.${RESET}"
echo -e "${CYAN}============================================${RESET}"
echo

# Start PHP built-in server
# -d max_execution_time=300: core downloads allow up to 300s HTTP timeout;
# PHP default is 30s and fatals mid-stream in Curl::stream_body.
exec php -d max_execution_time=300 -S "localhost:$PORT"