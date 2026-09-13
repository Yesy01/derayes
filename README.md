# Derayes

A clickable, static proof of concept for taking an asset from listing through verification and tokenisation-readiness review. All projects, documents, figures, timestamps, scores, token previews, and operators are fictional. No investments, payments, accounts, joining requests, token issuance, financial commitments, or ownership transfers are processed.

## Run locally

Use Node.js 24. From this directory:

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run typecheck
npm test
npm run build:pages
npm run test:build
```

`npm run build` creates a root-hosted build. `npm run build:pages` sets `/derayes/` as the asset base for GitHub Pages. Output is `dist/`. To inspect that exact build locally, use `npm run start -- --base /derayes/ --host 127.0.0.1` and open `/derayes/` on the printed preview URL.

## GitHub Pages

The GitHub Actions workflow publishes `dist/` on pushes to `main`. Enable GitHub Pages with the GitHub Actions publishing source. Intended personal repository: `Yesy01/derayes`. A project under GitHub Free must use a public repository for Pages.

Navigation uses URL fragments so direct links and refreshes work on static hosting without server rewrites:

- `/#/`: landing
- `/#/opportunities`: marketplace and sector tabs
- `/#/opportunities/[slug]`: overview, sample document dialogs, and risk disclosures
- `/#/opportunities/[slug]/trust`: verification checklist across asset, document, legal, regulatory, and technical work
- `/#/opportunities/[slug]/readiness`: tokenisation-readiness score and interpretation
- `/#/opportunities/[slug]/funds`: simulated allocation dashboard and ledger
- `/#/opportunities/[slug]/updates`: project timeline
- `/#/opportunities/[slug]/token`: non-transferable mock token preview
- `/#/opportunities/[slug]/integrity`: mock timestamp, snapshot, copyable SHA-256 hash, and content check
- `/#/incubation`: product evolution during incubation
- `/#/expansion`: real-estate, agriculture, and SME expansion model
- `/#/ask`: Venture Day support ask and next milestones

Slugs: `lagos-coliving`, `maize-storage`, `food-processing`.

## Logic and limits

Read [the product logic and participation model](docs/PRODUCT-LOGIC.md). Financial figures use Nigerian naira; M denotes million and B denotes billion. Data is bundled and no user data is saved. Readiness scores and checklist statuses are illustrative fixture data, not a verification engine, legal opinion, or regulatory classification. Hash computation is real, but no independent timestamp attestation or immutable registry exists.

The app uses React, TypeScript, Vite, and the included Base UI/Shadcn primitives. It no longer uses a server-component navigation runtime or requires a Sites account. The lint command checks application code and skips the unmodified generated component catalog.

## Browser verification

The static React app should be browser-checked after each content or interaction update. Automated checks cover routing, data integrity, arithmetic, reference hashes, and GitHub Pages asset paths.

## Photo credits

All photos are illustrative and do not depict the fictional projects. [Unsplash License](https://unsplash.com/license) permits free commercial use.

- [Residential — Yash Shah](https://unsplash.com/photos/a-tall-white-building-with-a-sky-background-fwFkRcnMsNM)
- [Agriculture — zero take](https://unsplash.com/photos/fields-of-green-stretch-toward-the-horizon-o946YhoHWOU)
- [Workshop — Ahsanization](https://unsplash.com/photos/man-using-industrial-machine-VQGGmDWclBM)
