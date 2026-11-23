# Portfolio

Personal portfolio of Maurizio Compagnone, junior web developer.

## Stack

- Next.js (App Router), React, TypeScript
- Tailwind CSS
- GSAP for the navigation
- Host Grotesk + JetBrains Mono
- Deployed on Netlify

## Content

- **Audit** — Electron desktop application for Windows (public releases)
- **OpenProxy** — local-first Tauri/Rust desktop studio for proxy cards (public releases)
- **Audit Mobile** — React Native/Expo Android music player (1.0 preview)
- **Spotter** — management platform for personal trainers
- **Phyron Checker** — HTTP utility for dealership listings
- Experience, education, contact

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

## Contact form

The form can send directly through EmailJS. Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Without those values the form falls back to opening the visitor's mail client with the message already composed.

## Live version

https://mcompagnone.netlify.app
