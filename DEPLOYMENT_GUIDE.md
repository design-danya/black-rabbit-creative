# Black Rabbit Next.js — Complete Deployment Guide

**Status**: All code is ready. Follow these steps to deploy.  
**Estimated Time**: 30 minutes  
**Outcome**: Live website with working link previews and SEO

---

## 🚀 Step 1: Build Locally on Your Machine (5 minutes)

Open Terminal and run:

```bash
cd /Users/danyapugliese/Documents/Black\ Rabbit

# Install dependencies (first time only)
npm install

# Build the static site
npm run build
```

**What this does**:
- Installs Next.js 15 and all dependencies
- Compiles all pages to static HTML
- Creates `.next/out/` folder with all static files ready to deploy

**Output**: You'll see green checkmarks for each route being built.

---

## 🐙 Step 2: Push to GitHub (5 minutes)

You need to get your code to GitHub so Vercel can deploy it.

### Option A: Create New GitHub Repo (Recommended)

```bash
# Initialize git (already done) and add GitHub remote
cd /Users/danyapugliese/Documents/Black\ Rabbit

# Check git status
git status

# Add all files
git add -A

# Commit the final state
git commit -m "Next.js migration complete: ready for deployment"

# Create a new repo on GitHub.com:
# 1. Go to https://github.com/new
# 2. Name it: "black-rabbit-creative"
# 3. Description: "Branding and design studio website"
# 4. Public (for SEO)
# 5. Click "Create repository"

# Then add GitHub as remote (replace YOUR_USERNAME):
git remote add origin https://github.com/YOUR_USERNAME/black-rabbit-creative.git
git branch -M main
git push -u origin main
```

### Option B: If You Already Have a Repo

```bash
cd /Users/danyapugliese/Documents/Black\ Rabbit
git add -A
git commit -m "Next.js migration complete: ready for deployment"
git push origin main
```

**Result**: Your code is now on GitHub.

---

## 🚀 Step 3: Deploy to Vercel (10 minutes)

Vercel is already open in Chrome. Here's how to connect your GitHub repo:

### In Vercel Dashboard (vercel.com):

1. **Click "Add New" → "Project"**
2. **Click "Import Git Repository"**
3. **Paste your GitHub repo URL**:
   ```
   https://github.com/YOUR_USERNAME/black-rabbit-creative
   ```
4. **Select Git provider**: GitHub
5. **Click "Continue"**

### Configure Project:

6. **Project Name**: `black-rabbit-creative` (auto-filled)
7. **Framework**: Select "Next.js" from dropdown
8. **Root Directory**: Leave as `./`
9. **Build Command**: Leave as default `next build`
10. **Output Directory**: Leave as default `.next`
11. **Environment Variables**: Leave empty for now

### Deploy:

12. **Click "Deploy"**
13. Wait 2-3 minutes for build to complete
14. You'll get a URL like `https://black-rabbit-creative-xxx.vercel.app`

**Done!** Your site is live.

---

## ✅ Step 4: Verify Deployment (5 minutes)

### Check These:

**1. Site loads**:
```
https://black-rabbit-creative-xxx.vercel.app
```
(or your custom domain)

**2. Link preview works** (test on Slack):
- Copy this URL: `https://your-vercel-url.com/work/monadnock-berries`
- Paste in Slack
- You should see the title, description, and preview image

**3. Sitemap works**:
```
https://your-vercel-url.com/sitemap.xml
```
(should show 27 URLs)

**4. Robots works**:
```
https://your-vercel-url.com/robots.txt
```
(should show allow/disallow rules)

**5. Metadata in HTML**:
- Right-click a page → "View Page Source"
- Look for `<meta name="description" content="...">` in the `<head>`
- Should be there, NOT injected by JavaScript

---

## 🌐 Step 5: Custom Domain (Optional, 5 minutes)

If you want to use `blackrabbit-creative.com` instead of `vercel.app`:

1. In Vercel dashboard, go to **Settings → Domains**
2. Click **"Add"**
3. Enter: `blackrabbit-creative.com`
4. Follow instructions to update your domain's DNS records
5. Takes 5-10 minutes to propagate

---

## ⚠️ Known Issues & Fixes

### Issue: Build fails with "Cannot find module"

**Fix**:
```bash
rm -rf node_modules
npm install
npm run build
```

### Issue: Images show as 404

**Reason**: `figma:asset/` imports still in code.

**Fix**: Replace with actual images
```tsx
// OLD
import logo from "figma:asset/fd3930c5beb0aaa4af40351cba963398b3cf20ad.png"

// NEW (export from Figma first)
import logo from "@/assets/navbar-logo.png"
```

### Issue: Vercel build times out

**Solution**: Vercel has 45-minute build limit. Your site should build in <2 minutes.

If timing out:
- Check for infinite loops in components
- Ensure all `figma:asset/` imports are replaced

---

## 📋 Final Checklist

- [ ] Ran `npm install` on your machine
- [ ] Ran `npm run build` successfully
- [ ] Code pushed to GitHub
- [ ] Connected GitHub repo to Vercel
- [ ] Vercel deployment succeeded (green checkmark)
- [ ] Can access site at live URL
- [ ] Tested link preview (Slack paste test)
- [ ] Verified sitemap.xml loads
- [ ] Verified robots.txt loads
- [ ] Checked View Source for metadata (not JavaScript-injected)
- [ ] (Optional) Connected custom domain

---

## 🎉 You're Done!

Your site will now:
- ✅ Show in Google search results
- ✅ Display proper link previews on social media
- ✅ Load instantly (static HTML)
- ✅ Pass Core Web Vitals
- ✅ Have working sitemap for crawlers

---

## 🆘 Need Help?

**Vercel Docs**: https://vercel.com/docs  
**Next.js Docs**: https://nextjs.org/docs  
**GitHub Help**: https://docs.github.com

---

## 📝 Commands Quick Reference

```bash
# Build locally
npm install
npm run build

# Preview build locally
npx http-server .next/out

# Push to GitHub
git add -A
git commit -m "message"
git push origin main
```

---

**Everything is ready. Go ship it! 🚀**
