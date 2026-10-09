@echo off
setlocal
cd /d "%~dp0"
set "CLASSIC_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%CLASSIC_NODE%" goto launch
where node >nul 2>nul
if errorlevel 1 goto missing
set "CLASSIC_NODE=node"
:launch
echo Opening Classic Arcade at http://127.0.0.1:8610
echo Keep this window open while playing. Press Ctrl+C to close the arcade.
"%CLASSIC_NODE%" tools\server.mjs --open
if errorlevel 1 pause
exit /b
:missing
echo Node.js is required. Install it from https://nodejs.org and run this launcher again.
pause
