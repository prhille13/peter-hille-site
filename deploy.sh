#!/bin/bash
set -e

echo "[deploy] Pulling latest..."
cd /Users/peterhille/peter-hille-portfolio
git pull origin main

echo "[deploy] Installing dependencies..."
npm install

echo "[deploy] Building..."
npm run build

echo "[deploy] Restarting PM2..."
pm2 restart portfolio

echo "[deploy] Done."
