# LESS — A WordPress Fork

[![PHP](https://img.shields.io/badge/PHP-8.1+-8892BF?logo=php&logoColor=white)](https://www.php.net/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![License](https://img.shields.io/badge/License-GPLv2-blue.svg)](license.txt)

- No Gravatar
- No Pingback
- No Trackback
- No XML-RPC
- Remote services **optional**
- SQLite-based database
- Core updates via GitHub Releases (`Dashboard → Updates`)

Ready to use.
With love,
Rfonte5748.

---

## Quick Start

### Windows

**Option 1: Command Prompt (CMD)**
```cmd
run.bat
# Or with custom port:
run.bat 8081
```

**Option 2: PowerShell**
```powershell
.\run.ps1
# Or with custom port:
.\run.ps1 8081
```

**Option 3: Python Launcher (cross-platform)**
```cmd
python launch.py
# Or with custom port:
python launch.py 8081
```

### macOS

**Option 1: Terminal**
```bash
./run.sh
# Or with custom port:
./run.sh 8081
```

**Option 2: Finder (Double-click)**
- Navigate to the project folder in Finder
- Double-click `run.command`
- A Terminal window will open and start the server

**Option 3: Python Launcher**
```bash
python3 launch.py
# Or with custom port:
python3 launch.py 8081
```

### Linux

**Option 1: Terminal**
```bash
./run.sh
# Or with custom port:
./run.sh 8081
```

**Option 2: Python Launcher**
```bash
python3 launch.py
# Or with custom port:
python3 launch.py 8081
```

---

## Requirements

| Component | Version | Notes |
|-----------|---------|-------|
| **PHP** | 8.1+ | Required. Must have `sqlite3` and `pdo_sqlite` extensions enabled. |
| **Python** | 3.8+ | Optional. Used by the cross-platform launcher (`launch.py`). If not found, platform-specific wrappers fall back to native implementations. |
| **SQLite** | 3.x | Bundled with PHP via `pdo_sqlite`. No separate installation needed. |

### Platform-Specific Notes

#### Windows
- PHP must be in your system PATH (or installed in standard locations like `C:\php`, `C:\Program Files\PHP`)
- The launcher will attempt to auto-enable `extension=sqlite3` in `php.ini` if disabled
- Run as Administrator if auto-enabling extensions fails
- Download PHP: https://windows.php.net/download/

#### macOS
- **Homebrew (recommended)**: `brew install php`
- **Manual**: Download from https://www.php.net/downloads.php
- `run.command` requires execute permission: `chmod +x run.command` (usually set automatically)

#### Linux
- **Debian/Ubuntu**: `sudo apt install php php-sqlite3`
- **Fedora**: `sudo dnf install php php-sqlite3`
- **Arch**: `sudo pacman -S php php-sqlite`
- Ensure `extension=pdo_sqlite` and `extension=sqlite3` are uncommented in `php.ini`

---

## How It Works

### wp-config.php Auto-Generation

On first run (when `wp-config.php` doesn't exist), the launcher automatically generates a secure configuration file with:

- **SQLite database settings**: `DB_ENGINE=sqlite`, `DB_DIR`, `DB_FILE`
- **Cryptographically secure salts**: 8 unique keys generated via `random_bytes(64)` + Base64 (different on every installation)
- **LESS-specific constants**: Includes `ls-config.php` and required settings
- **Development defaults**: `WP_DEBUG=false` for production-like local use

The generated file is **never committed** (listed in `.gitignore`) and **never overwrites** an existing `wp-config.php`.

### SQLite Database

- Uses the **SQLite Database Integration** plugin (drop-in at `wp-content/db.php`)
- Database file: `wp-content/database/.ht.sqlite`
- No MySQL/MariaDB required
- Works out of the box on all platforms

### Project Root Detection

All launchers automatically detect the project root regardless of the current working directory. You can run them from anywhere:

```bash
# From anywhere
/path/to/less/run.sh

# Or on Windows
C:\path\to\less\run.bat
```

---

## Common Issues & Troubleshooting

### "PHP not found in PATH"
**Solution**: Install PHP and add it to your system PATH.
- Windows: https://windows.php.net/download/
- macOS: `brew install php`
- Linux: `apt install php php-sqlite3` (or equivalent)

### "Extension 'sqlite3' not loaded"
**Windows**: The launcher attempts to auto-enable it. If that fails:
1. Run CMD/PowerShell as Administrator
2. Or manually edit `php.ini`: change `;extension=sqlite3` to `extension=sqlite3`

**macOS**: `brew install php` (includes SQLite) or enable in `php.ini`

**Linux**: Install the package (e.g., `apt install php-sqlite3`) or enable in `php.ini`

### "Extension 'pdo_sqlite' disabled"
Enable `extension=pdo_sqlite` in your `php.ini` and restart PHP.

### "Port 8080 already in use"
Use a different port:
```bash
./run.sh 8081
# Or
run.bat 8081
```

### "Permission denied" on macOS/Linux
Make the scripts executable:
```bash
chmod +x run.sh run.command
```

### Database errors after first run
- Delete `wp-content/database/.ht.sqlite` to reset the database
- Delete `wp-config.php` to regenerate configuration
- Re-run the launcher

---

## Stopping the Server

Press **Ctrl+C** in the terminal where the server is running.

---

## File Structure

```
less/
├── launch.py              # Cross-platform Python launcher (shared logic)
├── run.bat                # Windows CMD wrapper
├── run.ps1                # Windows PowerShell wrapper
├── run.sh                 # macOS/Linux shell wrapper
├── run.command            # macOS Finder-compatible launcher
├── gen_wpconfig.php       # wp-config.php generator (used by legacy fallback)
├── wp-config.php          # Generated config (auto-created, gitignored)
├── wp-config-sample.php   # Sample config reference
├── wp-content/
│   ├── db.php             # SQLite drop-in (auto-created if missing)
│   ├── database/          # SQLite database directory (auto-created)
│   │   └── .ht.sqlite     # SQLite database file
│   └── plugins/
│       └── sqlite-database-integration/  # SQLite plugin
├── ls-config.php          # LESS core configuration
├── .gitignore             # Excludes wp-config.php, database, uploads, etc.
└── ... (WordPress core files)
```

---

## Security Notes

- **Never** commits `wp-config.php` (contains secrets)
- **Never** uses hardcoded salts — generated fresh per installation via CSPRNG
- **Never** downloads configuration from external sources
- **Never** overwrites existing `wp-config.php`
- **Never** runs privileged commands automatically
- **Respects** existing WordPress security constants

---

## License

GPL v2 — See [license.txt](license.txt)

---

## Credits

- **LESS**: Leafole Labs — https://leafole.dev
- **WordPress**: The WordPress Community
- **SQLite Integration**: WordPress Performance Team