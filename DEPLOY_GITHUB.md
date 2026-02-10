# Deploy FundedHero Website to GitHub

## 1. Push your code to a new GitHub repo

### One-time setup (if Git isn’t initialized)

In a terminal, from the project folder:

```powershell
cd "c:\Users\cjmun\Downloads\FundedHero-Website-Delivery"

# Initialize Git
git init

# Stage everything
git add .

# First commit
git commit -m "Initial commit: FundedHero website"
```

### Create the repo on GitHub and push

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new).
   - Name it (e.g. `FundedHero-Website` or `fundedhero-website`).
   - Do **not** add a README, .gitignore, or license (you already have files).
   - Click **Create repository**.

2. **Connect and push** (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 2. Enable GitHub Pages (host the site)

1. In your repo on GitHub: **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source**: **GitHub Actions**.
3. Save. No need to choose a branch or folder; the workflow uses the `dist/` folder.

After the next push to `main`, the **Actions** tab will run **Deploy to GitHub Pages**. When it finishes, your site will be at:

- **User/org site:**  
  `https://YOUR_USERNAME.github.io/`  
  (only if the repo name is exactly `YOUR_USERNAME.github.io`)

- **Project site:**  
  `https://YOUR_USERNAME.github.io/YOUR_REPO/`  
  (for any other repo name)

### Important for project sites

This build uses **absolute paths** (e.g. `/assets/...`). That works when the site is at the **root** of a domain:

- Use a repo named **`YOUR_USERNAME.github.io`** and push this project there so the site is at `https://YOUR_USERNAME.github.io/`, **or**
- Use a **custom domain** in GitHub Pages and set it as the root.

If you use a **project repo** (e.g. `FundedHero-Website`) and keep the default URL `https://YOUR_USERNAME.github.io/FundedHero-Website/`, assets may not load unless you rebuild the app with a base path of `/FundedHero-Website/`.

---

## 3. Summary

| Step | Action |
|------|--------|
| 1 | `git init` → `git add .` → `git commit -m "Initial commit"` |
| 2 | Create empty repo on GitHub, then `git remote add origin ...` and `git push -u origin main` |
| 3 | Repo **Settings** → **Pages** → Source: **GitHub Actions** |
| 4 | After the next push, open the URL shown in **Settings** → **Pages** (or **Actions** → last workflow run) |

For more on the existing build and other hosts, see **DELIVERY_README.md**.
