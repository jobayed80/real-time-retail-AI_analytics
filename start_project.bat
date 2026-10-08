@echo off
title Shop AI Detect System
echo ========================================
echo Starting FastAPI Backend Server...
echo ========================================
cd /d "%~dp0backend"
start cmd /k "python -m uvicorn app.main:app --reload --port 8000"

timeout /t 3

echo ========================================
echo Starting Frontend React Server...
echo ========================================
cd /d "%~dp0frontend"
npm run dev