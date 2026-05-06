# Deploy to GitHub Pages - Step by Step Guide

This guide will walk you through deploying your **Inventory Management System** to GitHub Pages (github.io).

---

## Prerequisites

- GitHub account (create one at [github.com](https://github.com))
- Git installed on your machine
- Your project files ready
- Node.js and npm installed

---

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Set the repository name to: `username.github.io`
   - Replace `username` with your actual GitHub username
   - Example: `john-doe.github.io`
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

---

## Step 2: Initialize Git in Your Local Project

Open PowerShell/Terminal in your project folder and run:

```bash
cd "G:\New folder (2)\New Folder\mernbackend"
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## Step 3: Add Remote Repository

Link your local project to the GitHub repository:

```bash
git remote add origin https://github.com/username/username.github.io.git
```

Replace `username` with your GitHub username.

To verify:
```bash
git remote -v
```

---

## Step 4: Prepare Your Files for Deployment

### For Static HTML (Current Setup)

Your `inventory_management.html` is a standalone file. For GitHub Pages:

1. **Rename the file to `index.html`**:
   ```bash
   ren inventory_management.html index.html
   ```

2. **Create a `.gitignore` file** (exclude node_modules):
   ```bash
   echo node_modules > .gitignore
   echo .env >> .gitignore
   echo .DS_Store >> .gitignore
   ```

3. **Optional: Create a simple GitHub Pages structure**:
   ```
   username.github.io/
   ├── index.html          (your main file)
   ├── package.json
   ├── index.js            (backend code - optional)
   └── README.md           (project documentation)
   ```

---

## Step 5: Commit Your Files

Stage and commit all files:

```bash
git add .
git commit -m "Initial commit: Add inventory management system"
```

---

## Step 6: Push to GitHub

Push your files to the GitHub repository:

```bash
git branch -M main
git push -u origin main
```

**Note**: This creates a `main` branch. GitHub Pages will serve files from this branch.

---

## Step 7: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/username/username.github.io`
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

---

## Step 8: Verify Your Deployment

Wait 1-2 minutes for GitHub to build and deploy.

Your site will be live at: `https://username.github.io`

If you see a 404, check:
- Repository is public
- File is named `index.html`
- GitHub Pages is enabled in Settings

---

## Step 9: View GitHub Actions Status (Optional)

1. In your repository, click the **Actions** tab
2. You should see a successful deployment workflow
3. Green checkmark = deployment successful ✓

---

## Making Updates

Every time you update files:

```bash
git add .
git commit -m "Update: describe your changes"
git push origin main
```

GitHub will automatically redeploy within 1-2 minutes.

---

## Important Notes

### MongoDB Connection
⚠️ **Your current app uses MongoDB**. GitHub Pages serves **static files only** (HTML, CSS, JS).

**For full functionality:**
- Keep your Node.js backend running on Heroku, Railway, or another server
- Update the API endpoint in `inventory_management.html`:
  ```javascript
  // Line ~480 - Update this URL to your deployed backend
  `http://your-backend-url.herokuapp.com/api/${action}/${collection}`
  ```

### Alternative for Full MERN Stack
If you want the full app (with database), deploy to:
- **Heroku** (Node.js + MongoDB)
- **Railway.app** (Node.js + MongoDB)
- **Vercel** (Frontend only)
- **AWS** (Full stack)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 Page Not Found | Ensure file is named `index.html` and in root folder |
| Changes not showing | Clear browser cache or wait 5 minutes for redeploy |
| Still blank page | Check GitHub Actions for build errors |
| API calls failing | Update backend URL to your deployed server |

---

## Quick Command Reference

```bash
# Initialize Git
git init

# Add files to commit
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Check status
git status

# View commit history
git log --oneline
```

---

## Support

- GitHub Pages Docs: https://pages.github.com
- Git Guide: https://git-scm.com/doc
- Troubleshooting: https://docs.github.com/en/pages

---

**Happy Deploying! 🚀**
