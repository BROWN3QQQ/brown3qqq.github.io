# Deploy Guide

This repository uses two branches with different purposes:

- `develop`: source code branch
- `release`: GitHub Pages publishing branch

Do not develop on `release`.
Do not merge `release` back into `develop`.

## Local Development

Install dependencies:

```powershell
npm install
```

Start the local dev server:

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build Static Files

This project uses Next.js static export.

Build the site:

```powershell
npm run build
```

After build, Next.js generates static files in `out/`.

Copy `out/` to `dist/` and keep the extra static files:

```powershell
Remove-Item dist -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item out dist -Recurse
Copy-Item static\keybase.txt dist\keybase.txt -Force -ErrorAction SilentlyContinue
Copy-Item static\robots.txt dist\robots.txt -Force -ErrorAction SilentlyContinue
Set-Content dist\.nojekyll ""
```

## Publish to GitHub Pages

GitHub Pages is configured to publish from the `release` branch.
The `release` branch must contain the built static site at the branch root.

Create a subtree commit from `dist/`:

```powershell
git subtree split --prefix dist develop
```

The command prints a commit SHA. Push that SHA to `release`:

```powershell
git push origin <SHA>:release --force
```

Example:

```powershell
git push origin abcdef1234567890:release --force
```

## Recommended Release Flow

1. Work only on `develop`.
2. Commit your source changes to `develop`.
3. Build the static site into `dist/`.
4. Run `git subtree split --prefix dist develop`.
5. Force-push the generated subtree commit to `origin/release`.
6. Wait for GitHub Pages to deploy.

## Important Notes

- If Git says `refusing to merge unrelated histories`, it usually means you tried to merge the source branch and the publishing branch together.
- That is expected in this setup because `release` contains only generated static files.
- If you need a local copy of the publishing branch, recreate it from remote instead of merging:

```powershell
git branch -D release
git checkout -b release origin/release
```

- The public site URL is:

```text
https://brown3qqq.github.io/
```
