#!/usr/bin/env python3
"""
LESS Cross-Platform Launcher
A WordPress fork with SQLite support.

This script handles the common launch logic for all platforms.
Platform-specific wrappers (run.bat, run.ps1, run.sh, run.command) call this script.
"""

import os
import sys
import subprocess
import secrets
import base64
import shutil
import platform
from pathlib import Path
from typing import Optional, Tuple, List


class Colors:
    """ANSI color codes for terminal output."""
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    BOLD = '\033[1m'
    RESET = '\033[0m'

    @staticmethod
    def disable():
        Colors.RED = Colors.GREEN = Colors.YELLOW = Colors.BLUE = Colors.CYAN = Colors.BOLD = Colors.RESET = ''


class Launcher:
    def __init__(self, project_root: Path, port: int = 8080):
        self.project_root = project_root.resolve()
        self.port = port
        self.php_exe = self._find_php()
        self.is_windows = platform.system() == 'Windows'

        # Disable colors on Windows CMD unless ANSI is supported
        if self.is_windows and not self._supports_ansi():
            Colors.disable()

    def _supports_ansi(self) -> bool:
        """Check if the terminal supports ANSI colors."""
        if self.is_windows:
            # Windows 10+ supports ANSI in cmd.exe
            try:
                import ctypes
                kernel32 = ctypes.windll.kernel32
                mode = ctypes.c_ulong()
                kernel32.GetConsoleMode(kernel32.GetStdHandle(-11), ctypes.byref(mode))
                return bool(mode.value & 0x0004)  # ENABLE_VIRTUAL_TERMINAL_PROCESSING
            except Exception:
                return False
        return True

    def _find_php(self) -> Optional[str]:
        """Find PHP executable in PATH."""
        php_exe = shutil.which('php')
        if php_exe:
            return php_exe
        # Common Windows locations
        if self.is_windows:
            for path in [
                r'C:\php\php.exe',
                r'C:\Program Files\PHP\php.exe',
                r'C:\Program Files (x86)\PHP\php.exe',
                os.path.expandvars(r'%LOCALAPPDATA%\Programs\PHP\php.exe'),
            ]:
                if os.path.exists(path):
                    return path
        # Common macOS/Linux locations
        else:
            for path in [
                '/usr/local/bin/php',
                '/opt/homebrew/bin/php',
                '/usr/bin/php',
            ]:
                if os.path.exists(path):
                    return path
        return None

    def _run_php(self, code: str, capture: bool = True) -> Tuple[int, str, str]:
        """Run PHP code and return exit code, stdout, stderr."""
        try:
            result = subprocess.run(
                [self.php_exe, '-r', code],
                capture_output=capture,
                text=True,
                cwd=self.project_root,
                timeout=30
            )
            return result.returncode, result.stdout.strip(), result.stderr.strip()
        except subprocess.TimeoutExpired:
            return -1, '', 'PHP execution timed out'
        except Exception as e:
            return -1, '', str(e)

    def _php_version(self) -> str:
        """Get PHP version string."""
        code, out, _ = self._run_php('echo PHP_VERSION;')
        return out if code == 0 else 'unknown'

    def _php_ini_path(self) -> Optional[str]:
        """Get loaded php.ini path."""
        code, out, _ = self._run_php('echo php_ini_loaded_file() ?: "";')
        return out if code == 0 and out else None

    def _extension_loaded(self, ext: str) -> bool:
        """Check if PHP extension is loaded."""
        code, _, _ = self._run_php(f"exit(extension_loaded('{ext}') ? 0 : 1);")
        return code == 0

    def _enable_sqlite_extension(self, php_ini: str) -> bool:
        """Enable sqlite3 extension in php.ini (Windows only)."""
        if not self.is_windows:
            return False
        try:
            import re
            with open(php_ini, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            # Uncomment extension=sqlite3
            new_content = re.sub(
                r'^\s*;\s*extension\s*=\s*sqlite3\s*$',
                'extension=sqlite3',
                content,
                flags=re.MULTILINE
            )
            if new_content != content:
                with open(php_ini, 'w', encoding='utf-8') as f:
                    f.write(new_content)
            return True
        except Exception:
            return False

    def _create_wp_config(self) -> bool:
        """Generate wp-config.php with secure random salts."""
        wp_config_path = self.project_root / 'wp-config.php'
        if wp_config_path.exists():
            return True  # Already exists, don't overwrite

        print(f"{Colors.YELLOW}wp-config.php not found. Creating initial LESS configuration...{Colors.RESET}")

        # Generate 8 cryptographically secure random keys (64 bytes each, base64 encoded)
        keys = [base64.b64encode(secrets.token_bytes(64)).decode('ascii') for _ in range(8)]

        # Build config content
        config_lines = [
            '<?php',
            '/*** LESS - configuracao local com SQLite (gerado automaticamente) */',
            '',
            '// Banco de dados (SQLite)',
            "define( 'DB_ENGINE', 'sqlite' );",
            "define( 'DB_NAME', 'wordpress' );",
            "define( 'DB_DIR', dirname(__FILE__) . '/wp-content/database' );",
            "define( 'DB_FILE', '.ht.sqlite' );",
            '',
            "define( 'DB_CHARSET', 'utf8mb4' );",
            "define( 'DB_COLLATE', '' );",
            '',
            '// Chaves de seguranca (geradas aleatoriamente)',
            f"define( 'AUTH_KEY',         '{keys[0]}' );",
            f"define( 'SECURE_AUTH_KEY',  '{keys[1]}' );",
            f"define( 'LOGGED_IN_KEY',    '{keys[2]}' );",
            f"define( 'NONCE_KEY',        '{keys[3]}' );",
            f"define( 'AUTH_SALT',        '{keys[4]}' );",
            f"define( 'SECURE_AUTH_SALT', '{keys[5]}' );",
            f"define( 'LOGGED_IN_SALT',   '{keys[6]}' );",
            f"define( 'NONCE_SALT',       '{keys[7]}' );",
            '',
            '// Tabelas',
            "$table_prefix = 'wp_';",
            '',
            '// Desenvolvimento',
            "define( 'WP_DEBUG', false );",
            "define( 'WP_DEBUG_LOG', false );",
            "define( 'WP_DEBUG_DISPLAY', false );",
            '',
            '// Caminho',
            "if ( ! defined( 'ABSPATH' ) ) {",
            "    define( 'ABSPATH', __DIR__ . '/' );",
            "}",
            '',
            "/** LESS configuration (defaults and structural settings). */",
            "require_once ABSPATH . 'ls-config.php';",
            '',
            "require_once ABSPATH . 'wp-settings.php';",
        ]

        try:
            wp_config_path.write_text('\n'.join(config_lines), encoding='utf-8')
            print(f"{Colors.GREEN}wp-config.php created successfully.{Colors.RESET}")
            return True
        except Exception as e:
            print(f"{Colors.RED}[ERROR] Failed to create wp-config.php: {e}{Colors.RESET}")
            return False

    def _ensure_db_dropin(self) -> bool:
        """Ensure wp-content/db.php exists (SQLite drop-in)."""
        db_php = self.project_root / 'wp-content' / 'db.php'
        if db_php.exists():
            print(f"{Colors.GREEN}[OK] SQLite drop-in found: wp-content/db.php{Colors.RESET}")
            return True

        print(f"{Colors.YELLOW}[WARN] wp-content/db.php not found. Installing from plugin...{Colors.RESET}")

        db_copy = self.project_root / 'wp-content' / 'plugins' / 'sqlite-database-integration' / 'db.copy'
        if not db_copy.exists():
            print(f"{Colors.RED}[ERROR] Plugin sqlite-database-integration not found in wp-content/plugins.{Colors.RESET}")
            return False

        try:
            content = db_copy.read_text(encoding='utf-8')
            plugin_path = (self.project_root / 'wp-content' / 'plugins' / 'sqlite-database-integration').resolve()
            plugin_path_str = str(plugin_path).replace('\\', '/')

            content = content.replace('{SQLITE_IMPLEMENTATION_FOLDER_PATH}', plugin_path_str)
            content = content.replace('{SQLITE_PLUGIN}', 'sqlite-database-integration/load.php')

            db_php.write_text(content, encoding='ascii')
            print(f"{Colors.GREEN}[OK] Drop-in created: wp-content/db.php{Colors.RESET}")
            return True
        except Exception as e:
            print(f"{Colors.RED}[ERROR] Failed to create wp-content/db.php: {e}{Colors.RESET}")
            return False

    def _ensure_database_dir(self) -> bool:
        """Ensure wp-content/database directory exists."""
        db_dir = self.project_root / 'wp-content' / 'database'
        try:
            db_dir.mkdir(parents=True, exist_ok=True)
            print(f"{Colors.GREEN}[OK] SQLite database directory: wp-content/database/{Colors.RESET}")
            return True
        except Exception as e:
            print(f"{Colors.RED}[ERROR] Failed to create database directory: {e}{Colors.RESET}")
            return False

    def _print_header(self):
        """Print the launcher header."""
        print(f"{Colors.CYAN}{'=' * 42}{Colors.RESET}")
        print(f"{Colors.CYAN}  LESS - Cross-Platform Launcher (PHP + SQLite){Colors.RESET}")
        print(f"{Colors.CYAN}{'=' * 42}{Colors.RESET}")
        print()

    def _print_info(self):
        """Print info about SQLite usage."""
        print()
        print(f"{Colors.BLUE}[INFO] With the drop-in active, WordPress uses local SQLite.{Colors.RESET}")
        print(f"{Colors.BLUE}[INFO] DB_HOST/DB_USER from wp-config.php (e.g., Docker host 'wordpress') are ignored.{Colors.RESET}")
        print()

    def run(self) -> int:
        """Main launch sequence. Returns exit code."""
        self._print_header()

        # Change to project root
        os.chdir(self.project_root)

        # 1. Check PHP
        if not self.php_exe:
            print(f"{Colors.RED}[ERROR] PHP not found in PATH.{Colors.RESET}")
            print("Install PHP 8.1+ and add it to PATH.")
            if self.is_windows:
                print("Windows: https://windows.php.net/download/")
            elif platform.system() == 'Darwin':
                print("macOS: brew install php (or download from https://www.php.net/downloads.php)")
            else:
                print("Linux: apt install php php-sqlite3 (Debian/Ubuntu) or equivalent")
            return 1

        php_version = self._php_version()
        print(f"{Colors.GREEN}[OK] PHP {php_version} found.{Colors.RESET}")

        # Check PHP version >= 8.1
        try:
            major, minor = map(int, php_version.split('.')[:2])
            if major < 8 or (major == 8 and minor < 1):
                print(f"{Colors.YELLOW}[WARN] PHP 8.1+ recommended. Current: {php_version}{Colors.RESET}")
        except Exception:
            pass

        # 2. Check/Enable extensions
        php_ini = self._php_ini_path()
        if php_ini:
            print(f"{Colors.BLUE}[INFO] php.ini: {php_ini}{Colors.RESET}")
        else:
            print(f"{Colors.YELLOW}[WARN] No php.ini loaded - using PHP defaults.{Colors.RESET}")

        # Check sqlite3 extension
        if not self._extension_loaded('sqlite3'):
            print(f"{Colors.YELLOW}[WARN] Extension 'sqlite3' DISABLED. Attempting to enable...{Colors.RESET}")
            if self.is_windows and php_ini:
                if self._enable_sqlite_extension(php_ini):
                    # Re-check
                    if self._extension_loaded('sqlite3'):
                        print(f"{Colors.GREEN}[OK] Extension 'sqlite3' enabled!{Colors.RESET}")
                    else:
                        print(f"{Colors.RED}[ERROR] Still no 'sqlite3' after editing php.ini.{Colors.RESET}")
                        print(f"Check if {php_ini} was saved and php_sqlite3.dll exists in ext folder.")
                        return 1
                else:
                    print(f"{Colors.RED}[ERROR] Failed to edit php.ini. Run as Administrator.{Colors.RESET}")
                    print(f"Manually enable: ';extension=sqlite3' -> 'extension=sqlite3' in:")
                    print(f"  {php_ini}")
                    return 1
            else:
                print(f"{Colors.RED}[ERROR] Extension 'sqlite3' not loaded.{Colors.RESET}")
                if platform.system() == 'Darwin':
                    print("macOS: Install with 'brew install php' or enable in php.ini")
                else:
                    print("Linux: Install php-sqlite3 package (e.g., apt install php-sqlite3)")
                return 1
        else:
            print(f"{Colors.GREEN}[OK] Extension 'sqlite3' active.{Colors.RESET}")

        # Check pdo_sqlite extension
        if not self._extension_loaded('pdo_sqlite'):
            print(f"{Colors.RED}[ERROR] Extension 'pdo_sqlite' disabled. Enable 'extension=pdo_sqlite' in php.ini:{Colors.RESET}")
            if php_ini:
                print(f"  {php_ini}")
            return 1
        else:
            print(f"{Colors.GREEN}[OK] Extension 'pdo_sqlite' active.{Colors.RESET}")

        # 3. Generate wp-config.php if needed
        if not self._create_wp_config():
            return 1

        # 4. Ensure SQLite drop-in
        if not self._ensure_db_dropin():
            return 1

        # 5. Ensure database directory
        if not self._ensure_database_dir():
            return 1

        # 6. Print info and start server
        self._print_info()
        print(f"{Colors.CYAN}{'=' * 42}{Colors.RESET}")
        print(f"{Colors.CYAN}  Starting server at http://localhost:{self.port}{Colors.RESET}")
        print(f"{Colors.CYAN}  Press Ctrl+C to stop.{Colors.RESET}")
        print(f"{Colors.CYAN}{'=' * 42}{Colors.RESET}")
        print()

        # Start PHP built-in server
        try:
            subprocess.run(
                [self.php_exe, '-S', f'localhost:{self.port}'],
                cwd=self.project_root
            )
        except KeyboardInterrupt:
            print(f"\n{Colors.YELLOW}Server stopped by user.{Colors.RESET}")
        except Exception as e:
            print(f"{Colors.RED}[ERROR] Failed to start server: {e}{Colors.RESET}")
            return 1

        return 0


def main():
    # Parse arguments
    port = 8080
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"{Colors.RED}[ERROR] Invalid port: {sys.argv[1]}{Colors.RESET}")
            return 1

    # Determine project root (directory containing this script)
    script_path = Path(__file__).resolve()
    project_root = script_path.parent

    launcher = Launcher(project_root, port)
    return launcher.run()


if __name__ == '__main__':
    sys.exit(main())