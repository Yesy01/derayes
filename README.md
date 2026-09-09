# Derayes

A clickable proof of concept for trust infrastructure around asset-backed opportunities. All projects, documents, figures, timestamps, review outcomes, and operators are fictional. No real investments, payments, accounts, or financial commitments are processed.

## Run

Node.js 22.13+ is required. From this directory:

```sh
npm install
npm run dev
```

## Validate

```sh
npm run lint -- app components/site-header.tsx components/marketplace.tsx components/opportunity-detail.tsx lib tests
npx tsc --noEmit
node --experimental-strip-types --test tests/opportunities.test.mjs
npm run build
```

The targeted lint command checks application code. The unmodified starter UI catalog has pre-existing lint violations under the full `npm run lint` command.

With the development server running, `node --experimental-strip-types tests/routes.test.mjs` checks page and image HTTP responses. Browser click/visual testing has not been performed.

## Screens

- `/`: landing page
- `/opportunities`: marketplace with Real Estate, Agriculture, and SME sector tabs
- `/opportunities/[slug]`: opportunity overview, sample document dialogs, risk disclosures
- `/opportunities/[slug]/trust`: expandable evidence checklist
- `/opportunities/[slug]/funds`: allocation dashboard and simulated ledger
- `/opportunities/[slug]/updates`: dated project timeline
- `/opportunities/[slug]/integrity`: mock timestamp, exact snapshot, copyable SHA-256 hash, working content check

Slugs: `cedar-residences`, `greenfield-collective`, `precision-works`.

Shared fixtures and financial calculations are in `lib/opportunities.ts`. Stored reference hashes in `lib/record-hashes.ts` identify fixed fictional version 3 snapshots. The hash calculation is real, but no external timestamp attestation or immutable registry exists. All financial figures use Nigerian naira (NGN); M denotes million and B denotes billion. Data is bundled and no user data is saved.

Built using the Sites Vinext starter, React, TypeScript, and the included Base UI/Shadcn primitives. The hosting configuration belongs to this demo; do not use the unrelated parent directory's Git repository. Intended personal GitHub account: `yesy01`. No personal GitHub repository has been created or linked automatically.

## Photo credits

All photos are illustrative and do not depict the fictional projects. Unsplash License permits free commercial use: https://unsplash.com/license

- Residential: Yash Shah — https://unsplash.com/photos/a-tall-white-building-with-a-sky-background-fwFkRcnMsNM
- Agriculture: zero take — https://unsplash.com/photos/fields-of-green-stretch-toward-the-horizon-o946YhoHWOU
- Workshop: Ahsanization — https://unsplash.com/photos/man-using-industrial-machine-VQGGmDWclBM
