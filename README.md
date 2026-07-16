# Roberts Motor Group Website

A premium UK used car dealership website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Mobile-first responsive design
- ✅ Professional navigation
- ✅ Complete page structure
- ✅ Contact and inquiry forms
- ✅ Vehicle stock gallery with filters
- ✅ Customer testimonials
- ✅ Premium black, white, and royal blue branding

## Pages

- **Home** (`/`) - Hero section with featured vehicles, why choose us, reviews, and contact
- **Stock** (`/stock`) - Complete vehicle inventory with filtering options
- **About** (`/about`) - Company information and values
- **Sell Your Car** (`/sell-your-car`) - Vehicle valuation form
- **Part Exchange** (`/part-exchange`) - Trade-in information and benefits
- **Contact** (`/contact`) - Contact form and dealership information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pezbcfc/robertsmotorgroup-website.git
cd robertsmotorgroup-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Project Structure

```
roberts-motor-group-website/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   ├── stock/               # Stock page
│   ├── about/               # About page
│   ├── sell-your-car/       # Sell car page
│   ├── part-exchange/       # Part exchange page
│   └── contact/             # Contact page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── FeaturedVehicles.tsx # Featured vehicles
│   ├── WhyChooseUs.tsx      # Why choose section
│   ├── CustomerReviews.tsx  # Reviews section
│   ├── ContactSection.tsx   # Contact CTA section
│   ├── StockGallery.tsx     # Vehicle gallery
│   ├── StockFilters.tsx     # Stock filters
│   ├── SellCarForm.tsx      # Sell car form
│   └── ContactForm.tsx      # Contact form
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#000000',        // Black
  secondary: '#FFFFFF',      // White
  accent: '#4169E1',        // Royal Blue
  'accent-dark': '#3050C0', // Darker Blue
}
```

### Content

- Update company information in contact pages
- Replace placeholder vehicle data in components
- Customize form handling and submission logic
- Add real images and testimonials

## Performance

- Image optimization with Next.js Image component
- CSS optimization with Tailwind's purging
- Code splitting with App Router
- Responsive design for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy via Vercel dashboard
# https://vercel.com/new
```

### Other Platforms

The site can be deployed to any Node.js hosting platform.

## License

All rights reserved © Roberts Motor Group 2024

## Support

For support, email info@robertsmotorgroup.co.uk or call 01234 567890
