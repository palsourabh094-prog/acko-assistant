# ACKO Continuity

A fictional, browser-only product demonstration by Team DisRUpt for Conviction: The FinTech Challenge. This is a proposed concept, not an ACKO launch or endorsed service.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open the Local URL printed in the terminal. Run `npm run build` to check a production build and `npm test` to run the interaction checks.

## Edit the demonstration

- `lib/demo.ts` contains the fictional employer policy, family choices, review areas and decision outcomes.
- `components/journey.tsx` contains the four interactive stages and browser-local state.
- `app/page.tsx` contains the opening screen and product preview.
- `app/globals.css` contains the responsive styling.

The demonstration stores answers only in the current browser tab’s memory. It does not send requests, collect contact details, issue quotes or policies, or require accounts, payments, a database or API keys. Restarting resets the sample answers.
