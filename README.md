# North Stream Systems — Marketing Website

The official marketing website for North Stream Systems (NSS), a managed IT services provider based in North Wales, UK.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Primitives**: Radix UI (Tooltip, Select, Label)
- **Font**: Inter (via next/font/google)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header, footer, cookie banner, fonts)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── why-us/page.tsx     # Why Us page
│   ├── products/page.tsx   # Pricing/Products (coming soon)
│   ├── contact/page.tsx    # Contact page with form
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Footer with columns and copyright
│   ├── home/
│   │   ├── Hero.tsx        # Full hero section with animations
│   │   ├── SocialProofBar.tsx  # Stats strip
│   │   ├── ServicesPreview.tsx # Service card grid
│   │   ├── WhyNSS.tsx      # Three pillars section
│   │   └── CTABanner.tsx   # Call to action banner
│   ├── services/
│   │   └── ServiceTooltipButton.tsx  # Tooltip for coming soon
│   ├── contact/
│   │   └── ContactForm.tsx # Full contact form with validation
│   ├── CookieBanner.tsx    # Cookie consent banner
│   └── ScrollToTop.tsx     # Scroll-to-top button
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── public/                 # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## TODO

- [ ] Replace Formspree ID in `app/contact/page.tsx` — search for `REPLACE_WITH_YOUR_ID`
- [ ] Add real case studies to `/why-us`
- [ ] Upload team photos and update team section in `/about`
- [ ] Complete Products/Pricing page (`/products`)
- [ ] Add real accreditation badges when obtained
- [ ] Set up analytics (Google Analytics / Plausible)
- [ ] Configure domain and deploy to Vercel
