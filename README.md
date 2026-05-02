# Website Templates

Mayne-inspired plumbing and heating demo website built with Next.js, ShadCN UI and Vercel.

## What is included

- Mayne-inspired homepage and service structure
- Boiler installation, boiler servicing, plumbing and landlord pages
- Online booking enquiry cards
- Contact and booking forms
- Optional email delivery through Resend
- Optional Google Sheets logging through a webhook
- ElevenLabs widget slot on every page
- Local SEO schema helpers
- Config-driven content in `src/content/site.ts`
- Sanity Studio schema and embedded `/studio` route, ready for a Sanity project

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and add values as needed.

The ElevenLabs widget uses `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`. Per ElevenLabs docs, the agent must be public with authentication disabled. Add your local and Vercel domains to the agent allowlist.

## Simple CMS

The demo includes Sanity schemas and an embedded studio at `/studio`.

For now, the public website still reads from `src/content/site.ts` so the demo works without CMS credentials. Once a Sanity project is connected, the same fields are already modelled for services, booking options, FAQs, testimonials, areas served, contact details and SEO text.

Recommended setup:

```bash
vercel integration add sanity
```

Then add the provisioned `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` values locally and in Vercel.

## Generated image direction

The current build uses original visual panels as placeholders. For the polished outreach version, generate royalty-free ChatGPT images for:

- Heating engineer working beside a clean domestic boiler
- Modern UK bathroom plumbing installation
- Heating system service tools and checklist
- Friendly trade appointment at a front door

Avoid real Mayne branding, real staff likenesses, accreditation logos inside images, or anything that implies documentary photography.
