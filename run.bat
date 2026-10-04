@echo off
setlocal EnableDelayedExpansion
cd /d "%~dp0"

set "PORT=8080"
if not "%~1"=="" set "PORT=%~1"

echo ============================================
echo  LESS - run.bat (PHP + SQLite)
echo ============================================
echo.

REM --- 1. PHP instalado? ---
where php >nul 2>nul
if errorlevel 1 (
    echo [ERRO] PHP nao encontrado no PATH.
    echo Instale o PHP 8.1+ e adicione ao PATH.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('php -r "echo PHP_VERSION;"') do set "PHPVER=%%i"
echo [OK] PHP %PHPVER% encontrado.

REM --- 2. Descobre o php.ini carregado (caminho limpo, sem espacos fantasmas) ---
REM Nota: via arquivo temporario, pois parenteses em 'for /f' quebram o parser do cmd.
set "PHPINI="
php -r "echo php_ini_loaded_file();" > "%TEMP%\less_phpini.tmp" 2>nul
set /p PHPINI=<"%TEMP%\less_phpini.tmp"
del "%TEMP%\less_phpini.tmp" >nul 2>nul
if "%PHPINI%"=="" (
    echo [AVISO] Nenhum php.ini carregado - usando padroes do PHP.
) else (
    echo [INFO] php.ini: %PHPINI%
)

REM --- 3. Verifica extensoes sqlite3 + pdo_sqlite (via extension_loaded, sem parse de texto) ---
php -r "exit(extension_loaded('sqlite3')?0:1);" >nul 2>nul
if errorlevel 1 (
    echo [AVISO] Extensao "sqlite3" DESATIVADA. Tentando ativar...
    goto :enable_sqlite
) else (
    echo [OK] Extensao "sqlite3" ativa.
)
goto :check_pdo

:enable_sqlite
if "%PHPINI%"=="" (
    echo [ERRO] PHP esta sem php.ini carregado. Crie um a partir do php.ini-development
    echo e descomente a linha "extension=sqlite3".
    pause
    exit /b 1
)
if not exist "%PHPINI%" (
    echo [ERRO] php.ini nao encontrado em "%PHPINI%".
    echo Ative manualmente: abra o php.ini e troque ";extension=sqlite3" por "extension=sqlite3".
    pause
    exit /b 1
)
powershell -NoProfile -ExecutionPolicy Bypass -Command "(Get-Content -LiteralPath '%PHPINI%') -replace '^\s*;\s*extension\s*=\s*sqlite3\s*$', 'extension=sqlite3' | Set-Content -LiteralPath '%PHPINI%' -Encoding ASCII"
if errorlevel 1 (
    echo [ERRO] Falha ao editar o php.ini. Rode o run.bat como Administrador.
    echo Ou ative manualmente: ";extension=sqlite3" -^> "extension=sqlite3" em:
    echo   %PHPINI%
    pause
    exit /b 1
)
php -r "exit(extension_loaded('sqlite3')?0:1);" >nul 2>nul
if errorlevel 1 (
    echo [ERRO] Ainda sem "sqlite3" apos editar o php.ini.
    echo Verifique se o arquivo "%PHPINI%" foi salvo e se existe php_sqlite3.dll na pasta ext.
    pause
    exit /b 1
)
echo [OK] Extensao "sqlite3" ativada!

:check_pdo
php -r "exit(extension_loaded('pdo_sqlite')?0:1);" >nul 2>nul
if errorlevel 1 (
    echo [ERRO] Extensao "pdo_sqlite" desativada. Ative "extension=pdo_sqlite" no php.ini:
    echo   %PHPINI%
    pause
    exit /b 1
) else (
    echo [OK] Extensao "pdo_sqlite" ativa.
)

REM --- 4. Garante o drop-in SQLite do "wordpress" (db.php) ---
if exist "wp-content\db.php" (
    echo [OK] Drop-in SQLite encontrado: wp-content\db.php
) else (
    echo [AVISO] wp-content\db.php nao encontrado. Instalando a partir do plugin...
    if not exist "wp-content\plugins\sqlite-database-integration\db.copy" (
        echo [ERRO] Plugin sqlite-database-integration nao encontrado em wp-content\plugins.
        pause
        exit /b 1
    )
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$src = Get-Content -LiteralPath 'wp-content\plugins\sqlite-database-integration\db.copy' -Raw; $impl = (Get-Location).Path + '\wp-content\plugins\sqlite-database-integration'; $impl = $impl -replace '\\', '/'; $src = $src -replace '\{SQLITE_IMPLEMENTATION_FOLDER_PATH\}', $impl; $src = $src -replace '\{SQLITE_PLUGIN\}', 'sqlite-database-integration/load.php'; Set-Content -LiteralPath 'wp-content\db.php' -Value $src -Encoding ASCII"
    if errorlevel 1 (
        echo [ERRO] Falha ao criar wp-content\db.php.
        pause
        exit /b 1
    )
    echo [OK] Drop-in criado: wp-content\db.php
)

REM --- 5. Garante pasta/persistencia do banco SQLite ---
if not exist "wp-content\database" mkdir "wp-content\database" >nul 2>nul
echo [OK] Banco SQLite: wp-content\database\.ht.sqlite

echo.
echo [INFO] Com o drop-in ativo, o WordPress usa SQLite local.
echo [INFO] DB_HOST/DB_USER do wp-config.php (ex: host "wordpress" do Docker) sao ignorados.
echo.
echo ============================================
echo  Subindo o servidor em http://localhost:%PORT%
echo  Pressione Ctrl+C para parar.
echo ============================================
echo.

php -S localhost:%PORT%

echo.
echo Servidor encerrado. Se ele nem chegou a abrir, a porta %PORT% pode estar em uso - tente: run.bat 8081
pause
