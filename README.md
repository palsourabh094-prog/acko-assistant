# ACKO Continuity

A local presentation and interactive product concept by Team DisRUpt for Conviction: The FinTech Challenge. Not an ACKO product or endorsement.

## Run

Requires Node.js 20.9+.

```
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`.

## Edit

- `app/page.tsx`: homepage, navigation, source disclosures and product preview.
- `lib/model.ts`: typed narrative, source links, roadmap, financial assumptions and central `calculate()` function.
- `components/journey.tsx`: four-step demo and completion paths.
- `components/finance.tsx`: table, sensitivity controls, contribution chart and reconciliation disclosures.
- `components/narrative.tsx` and `components/judge.tsx`: shared presentation sections and five-chapter Judge mode.
- `app/globals.css`: responsive visual system and reduced-motion behavior.

## Model

Monetary calculations use crore. Annual premium is ₹20,000. Renewals apply to all previous-year policies. Additional NEP uses the explicitly inferred 50/50 current/prior GWP earning convention, 75% retention and 80% incrementality. Costs `[4.04, 10.39, 21.074]` crore are implied aggregates calibrated to the supplied scenario, not an invented unit cost schedule. Sensitivity holds these costs fixed. Contribution excludes investment income, tax and capital charges.

## Simulated experience

All demo policy details and Aditi are fictional. Answers are held only in React memory in the browser tab; nothing is submitted, persisted or sent to a backend. Guidance and application outcomes are local demonstrations. There are no forms collecting real contact information, API keys, accounts, payments or policy purchases. Sliders do not produce a real quote.

## Verification

`npm test` verifies financial reconciliation and sensitivity behavior. `npm run typecheck` checks TypeScript. `npm run build` creates the production build. Judge mode supports chapter buttons, Previous/Next, arrow keys, Escape and focus containment. All four steps retain inputs when going back; Reset demo restores defaults. Official sources are linked in the site and were reviewed on 1 November 2026. No external publication is configured.

### Validation in this session

Six automated tests pass: base-case reconciliation, claims and renewal sensitivity, demo permission and input persistence, all completion paths and reset, sensitivity UI and reset, and Judge mode chapters/keyboard/progress/exit. The production build and TypeScript checks pass. HTTP preview returned 200. Desktop homepage was visually inspected in Chrome. Native browser capture errors prevented reliable mobile visual inspection and a product-demo screenshot; responsive styles are implemented, but that visual check remains unverified.
