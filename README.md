# Speak-Up English Online Academy

Next.js 15, TypeScript, Tailwind CSS, MongoDB, SEO-first educational website for online spoken English admissions in India.

## Features

- Mobile-first homepage with high-conversion hero, WhatsApp CTA, demo form, pricing, testimonials, FAQ, schedule, and sticky CTA.
- Dedicated SEO landing pages for spoken English, interview English, working professionals, beginners, communication skills, homemakers, IT professionals, and public speaking.
- Local SEO city pages for Bhopal, Indore, Pune, Bangalore, Hyderabad, Delhi, and Mumbai.
- Blog architecture with categories, slugs, breadcrumbs, related posts, and internal links.
- Dynamic metadata, canonical URLs, Open Graph, Twitter cards, sitemap.xml, robots.txt, FAQ schema, Course schema, EducationalOrganization schema, and LocalBusiness schema.
- MongoDB-backed lead API with optional webhook notification support.
- Admin lead dashboard placeholder at `/admin`.

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Vercel deployment

1. Import this repository in Vercel.
2. Add environment variables from `.env.example`.
3. Set `NEXT_PUBLIC_SITE_URL` to your custom domain.
4. Deploy.
5. Submit `/sitemap.xml` in Google Search Console and verify using `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.

## SEO publishing roadmap

- Publish 2 blog posts per week targeting daily-use English, interview English, office communication, public speaking, and Hindi-medium learners.
- Add real student video testimonials and Google reviews weekly.
- Post 2 Instagram Reels and 2 YouTube Shorts daily using hooks like “Stop saying this” and “Tell me about yourself in English.”
- Build backlinks from Google Business Profile, Bing Places, Justdial, Sulekha, UrbanPro, YouTube, Instagram, Facebook, LinkedIn, Medium, and Quora.
