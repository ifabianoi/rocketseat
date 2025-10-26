#!/bin/bash
# Custom Vercel build script for Turbo monorepo (npm version)

echo "⚙️ Starting custom build process..."
echo "📦 Loading environment variables for Turbo build"

# Export Vercel env vars to subshell
set -a
[ -f .env ] && source .env
set +a

echo "🚀 Running Turbo build for @saas/web"

npm install --legacy-peer-deps
npx turbo run build --filter=@saas/web
