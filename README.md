# Spektrum Pocitov

Development and production builds explicitly use Webpack to avoid the
Turbopack Google Fonts URL parsing failure (vercel/next.js#99114). This keeps the
existing font configuration and page design. Next.js supports the
[`--webpack` CLI option](https://nextjs.org/docs/app/api-reference/cli/next).

## Local content preview

The public pages normally read their content and SEO metadata from PostgreSQL.
To review the client's October 2026 copy without changing the shared database:

1. Run `npm run content:local`. This reads the public page records once, saves a
   backup under `.local/`, and applies `content/client-copy.json` to the local copy.
   Re-running it uses the existing local copy and reapplies that approved text.
2. Add `LOCAL_CONTENT_FILE=.local/page-content.json` to `.env.local`.
3. Run `npm run dev` and open the local address printed by Next.js.

With `LOCAL_CONTENT_FILE` set, public pages and the content editor use that JSON
file. Content saves remain local and analytics requests do not write page views
to the shared database. An unreadable local file causes an error instead of
silently switching back to the database. The setting also works for a local
production build (`npm run build` / `npm start`).

The local snapshot and `.env.local` are ignored by Git. To return to database
content, remove `LOCAL_CONTENT_FILE` and restart Next.js. Keep this variable out of
the live hosting environment. Future publication must include the reviewed
`title`, `description`, `keywords`, and new content fields in the production CMS;
deploying source alone will not replace existing database metadata.

## Publishing approved content

Run `npm run content:deploy` to inspect which approved fields differ in the
configured PostgreSQL database. This defaults to a dry run, even if the local
preview is enabled. After approval, `npm run content:deploy -- --apply` backs up
the current page records under `backups/` and updates only the reviewed metadata
and new content fields from `content/client-copy.json`. Other CMS content is
preserved. Updates are transactional and reject concurrent edits. Re-running the
script leaves already matching records unchanged.

Apply the approved database content before pushing a production deployment so
the hosting build generates pages with the approved text. Deployments should
not set `LOCAL_CONTENT_FILE`; that setting belongs to local previews only.

The approved homepage title is kept in full as requested by the client. Each
page uses the same title and description for search, Open Graph, and Twitter.
The five service FAQs are server-rendered, work without JavaScript, and share
their text with the FAQ structured data. The FAQ and practitioner name can also
be edited through the existing content editor.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
