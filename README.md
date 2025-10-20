# The ICI Group Website

Next.js 14 + Tailwind CSS site with multilingual support (EN/ES/PT) for International Cargo Investigations.

## Quick start (Windows PowerShell)

1. Install dependencies

```
npm install
```

2. Run the dev server

```
npm run dev
```

Then open http://localhost:3000. Default locale redirects to `/en`; switch languages via the dropdown.

## Tech

- Next.js App Router, TypeScript, Tailwind CSS
- i18n via Next.js locales (en default, es, pt)
- API route: POST `/api/contact` (placeholder logs request)

## Customize brand

- Colors defined in `tailwind.config.ts` as brand.blue (#0E4C92) and brand.silver (#C0C0C0)
- Global styles in `app/globals.css`

## Email wiring (later)

- Replace `app/api/contact/route.ts` with an integration such as Resend or SMTP (e.g., Nodemailer)
- Add secrets to environment variables and deploy provider-side

## Build

```
npm run build; npm start
```

## Notes

- Pages: Home, Services, CAPS, Training, Global Reach, Contact
- Heat map component is a placeholder. Replace with a real map later.
