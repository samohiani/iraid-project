# IRAID website

The IRAID website is a responsive, accessible public-facing site for the Initiative for Rural Aid and Integrated Development. It presents IRAID's programmes, impact stories, team, gallery, contact information, and ways to support its work.

The application uses the Next.js App Router with React and TypeScript. Content is kept in TypeScript data files, while reusable page sections live in `components/`.

## Quick start

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
```

The build produces an optimized production application in `.next/`. Build and development artifacts are generated locally and should not be edited by hand.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and overview of IRAID's work |
| `/about` | Organisation overview, mission, and approach |
| `/programmes` | Programme areas and detailed programme content |
| `/gallery` | Project image gallery and lightbox |
| `/team` | Trustees and team information |
| `/blog` | Impact stories and articles |
| `/blog/[slug]` | Individual impact story pages |
| `/contact` | Contact and donation information |

## Project structure

```text
app/                  App Router pages, layout, and global styles
components/           Reusable sections, navigation, cards, galleries, and modals
data/                 Navigation, organisation, programme, story, and trustee content
public/               Static images, video, icons, and fonts
next.config.ts        Next.js runtime and image settings
tsconfig.json         TypeScript compiler settings
```

## Updating content

Most text and structured content can be updated without changing component logic:

- `data/site-content.ts` — programmes, stories, gallery content, FAQs, and other page content
- `data/navigation.ts` — header and footer navigation
- `data/organization.ts` — organisation details and contact information
- `data/trustees.ts` — trustee and team profiles

Page-specific layout and behaviour lives in `app/` and `components/`. Keep repeated UI in `components/` rather than copying it into multiple pages.

## Images and media

Static media is served from `public/` and referenced with URL paths beginning with `/`, for example:

```tsx
<Image src="/assets/photos/community/P28.webp" alt="..." />
```

Photographic assets use WebP where an optimised version is available. PNG and SVG files are retained for transparency, logos, masks, icons, and decorative shapes. When adding a new photograph, prefer an appropriately sized WebP rather than adding another large source image to the deployed `public/` directory.

Next.js uses `next/image` and Sharp to generate appropriately sized WebP responses for each layout and device.

## Deployment

The repository uses the standard Next.js deployment model and can be imported directly into Vercel without custom framework or output-directory settings. Vercel detects Next.js and runs the production build automatically. Do not commit generated folders such as `.next/`, `.vercel/`, or `dist/`.

## Maintenance notes

- Keep `package-lock.json` in sync with `package.json`.
- Stop the development server before removing generated caches.
- Run `npm run build` after content, routing, or image configuration changes.
- The project currently has no dedicated lint or test suite; type-checking can be run with `npm run typecheck`.
