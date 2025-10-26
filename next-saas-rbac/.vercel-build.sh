#!/bin/bash
# Vercel build script for monorepo

echo "⚙️ Loading environment variables for Turbo build..."
set -a
[ -f .env ] && source .env
set +a

echo "🚀 Starting Turbo build..."
pnpm turbo run build --filter=@saas/web
