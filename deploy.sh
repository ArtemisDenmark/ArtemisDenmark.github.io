#!/bin/bash

echo "🚀 Starting deployment process..."

# Switch to development branch and build
echo "📦 Building project on development branch..."
git checkout development
npm run build

# Create temporary build directory
echo "📁 Preparing build files..."
rm -rf /tmp/site-build
mkdir -p /tmp/site-build
cp -r out/. /tmp/site-build/

# Switch to main branch and clean it
echo "🔄 Switching to main branch..."
git checkout main

# Remove all files except .git
echo "🧹 Cleaning main branch..."
find . -maxdepth 1 ! -name '.git' ! -name '.gitignore' -exec rm -rf {} + 2>/dev/null || true

# Copy build files to root
echo "📤 Copying build files..."
cp -r /tmp/site-build/. .

# Clean up temporary files
echo "🧼 Cleaning up..."
rm -rf /tmp/site-build
rm -rf out  # Remove out folder if it exists

# Commit and push
echo "📝 Committing changes..."
git add .
git commit -m "Production deployment: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# Switch back to development
echo "↩️ Switching back to development branch..."
git checkout development

echo "✅ Deployment complete! Main branch updated with latest build."