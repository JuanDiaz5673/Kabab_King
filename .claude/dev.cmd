@echo off
set PATH=C:\Users\juand\AppData\Roaming\fnm\node-versions\v22.22.2\installation;%PATH%
if "%PORT%"=="" (
  npx next dev
) else (
  npx next dev --port %PORT%
)
