# Publish Steven Gilbert's portfolio with GitHub Pages

This repository includes an automated GitHub Pages deployment. Every update pushed to the `main` branch rebuilds and republishes the portfolio.

## First-time setup

1. Create a public GitHub repository named `steven-gilbert-career`.
2. Upload or push the complete contents of this project to the repository's `main` branch.
3. Open the repository on GitHub and select **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and select **Deploy portfolio to GitHub Pages**.
6. If the workflow has not started automatically, select **Run workflow**.
7. When deployment finishes, GitHub will display the public portfolio address.

The expected address is:

`https://notsogilbert.github.io/steven-gilbert-career/`

## Future updates

Edit the source and push the changes to `main`. GitHub Actions will publish the new version automatically.

## Optional custom domain

After purchasing a domain, enter it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Enable **Enforce HTTPS** when it becomes available.
