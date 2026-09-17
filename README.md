# Steven Gilbert Career Portfolio

A professional portfolio presenting Steven Gilbert's healthcare business systems, medical claims analytics, business intelligence, and root-cause analysis experience.

## Portfolio highlights

- Healthcare claims, payment integrity, provider billing, and code edits
- Medicaid MMIS/MES, Facets, QNXT, and NetworX
- Python, SAS, R, SQL, Power BI, Tableau, and Azure Databricks
- Completed Arizona Medicaid provider-network access dashboard on Tableau Public
- Completed claim-adjudication root-cause analysis project
- Medicaid and CHIP operational analytics case study
- Professional insight on responsible AI use by analysts

## Local development

Requirements: Node.js 22 or newer.

```bash
npm ci
npm run dev
```

## Production builds

```bash
npm run build
```

To create the static package used by GitHub Pages:

```bash
npm run build:pages
```

The static output is written to `github-pages/`. The GitHub Actions workflow builds and deploys this output automatically whenever the `main` branch changes.

See [GITHUB-PAGES.md](GITHUB-PAGES.md) for first-time publishing instructions.
