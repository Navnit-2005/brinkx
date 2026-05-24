@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8080/services.html"
  python -m http.server 8080
  exit /b
)

where py >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8080/services.html"
  py -m http.server 8080
  exit /b
)

echo Python is not installed. Upload the site online or open it through any local server to allow YouTube embeds.
pause
