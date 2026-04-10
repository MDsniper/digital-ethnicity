# Digital Ethnicity - Web Services Platform

A modern, high-performance website for Digital Ethnicity services, built with Next.js 14 and deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 14 (React with App Router)
- **Hosting**: Vercel
- **Content**: Markdown files in Git
- **Analytics**: Google Analytics 4
- **Email**: Resend (configured for Phase 2)
- **Styling**: CSS modules + custom CSS

## Project Structure

```
digital-ethnicity/
├── app/                    # Next.js app directory (pages & layouts)
│   ├── layout.tsx         # Root layout with navigation & footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services listing page
│   ├── services/[id]/     # Dynamic service detail pages
│   ├── contact/           # Contact form page
│   ├── thank-you/         # Thank you page after contact submission
│   ├── api/contact/       # API route for contact form
│   └── globals.css        # Global styles & design system
├── content/
│   └── services/          # Markdown files for services
│       ├── website-design.md
│       └── website-redesign.md
├── lib/
│   └── markdown.ts        # Utilities for reading & parsing Markdown
├── public/                # Static assets (images, fonts, etc.)
├── .env.example          # Environment variable template
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies & scripts
└── vercel.json          # Vercel deployment configuration
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and add your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:
- Add your Google Analytics ID (`NEXT_PUBLIC_GA_ID`)
- Add any other configuration values

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### 4. Build for Production

```bash
npm run build
npm start
```

## Content Management

### Adding/Editing Services

Services are stored as Markdown files in `content/services/`. Each file has:

1. **Front Matter** (YAML metadata):
   - `title`: Service name
   - `description`: Short description for listings
   - `price`: Service pricing
   - `duration`: Project duration (optional)
   - `order`: Sort order in listings (1, 2, 3, etc.)

2. **Content**: Markdown body with service details

Example:
```markdown
---
title: Custom Website Design
description: Professional websites built to convert
price: Starting at $2,500
duration: 4-8 weeks
order: 1
---

## Service Details

Your content here...
```

### Key Pages

- **Home** (`app/page.tsx`): Hero section + featured services
- **Services** (`app/services/page.tsx`): Service listing
- **Service Detail** (`app/services/[id]/page.tsx`): Individual service pages
- **About** (`app/about/page.tsx`): Company information
- **Contact** (`app/contact/page.tsx`): Contact form
- **Thank You** (`app/thank-you/page.tsx`): Post-submission confirmation

## Styling

The site uses a custom CSS design system with:
- Color variables: Dark, Light, Gold, Accent, White, Gray
- Typography: System fonts + serif for headings
- Responsive grid layouts
- Consistent spacing scale

All styles are in `app/globals.css`. Component-specific styles can be added inline or in separate CSS modules.

## Analytics

Google Analytics 4 is integrated via the layout. To enable:
1. Get your GA4 measurement ID
2. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-builds and deploys on push
4. Add environment variables in Vercel project settings
5. Set custom domain (digital-ethnicity.com)

### Environment Variables in Vercel

Add in Vercel project settings:
- `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID

## Contact Form Integration

The contact form (`/contact`) currently logs submissions to the server console. To enable email notifications:

1. Set up a Resend account
2. Add `RESEND_API_KEY` to environment variables
3. Uncomment the email sending code in `app/api/contact/route.ts`

## Next Phases

**Phase 2 (Weeks 3-8)**: 
- Content migration from benniewilliams.com
- Email integration with Resend
- Advanced service filtering & search
- Client testimonials section

**Phase 3 (Weeks 9-11)**:
- Digital product offerings
- Coaching session booking system
- Advanced analytics & tracking
- SEO optimization

**Phase 4 (Week 12)**:
- Final testing & optimization
- Performance audit
- Launch preparation
- Traffic migration from benniewilliams.com

## Support

For questions or issues, reach out to [contact@digital-ethnicity.com]

---

Built with ❤️ by Digital Ethnicity
