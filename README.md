# Bagdja Development Group - Landing Page

A modern, professional landing page website for Bagdja Development Group, a technology services company focused on software development, system integration, automation, and IT consulting.

## Features

- **Professional Design**: Clean, corporate, and minimalist design focused on trust and professionalism
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **SEO-Friendly**: Built with Next.js for optimal SEO and performance
- **Modern Stack**: Next.js 16, React 19, TypeScript, and Tailwind CSS 4

## Sections

1. **Hero Section** - Company introduction with clear value proposition and CTAs
2. **About Us** - Company background and service approach
3. **Services** - Detailed service offerings (Software Development, Website & Company Profile, System Integration, Business Process Automation, IT Consulting)
4. **Why Choose Us** - Key differentiators and benefits
5. **Contact** - Contact form and WhatsApp integration
6. **Footer** - Company information and quick links

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure WhatsApp number (optional):
   - Edit `src/app/page.tsx`
   - Update the `whatsappNumber` variable with your actual WhatsApp number (format: country code + number, e.g., "6281234567890")

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
bagdja-web/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with metadata
│       ├── page.tsx        # Main landing page
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. The primary color palette uses professional navy/charcoal tones. You can customize colors in the `theme.extend.colors` section.

### Content

All content is in `src/app/page.tsx`. You can easily update:
- Company information
- Service descriptions
- Contact details
- WhatsApp number

### Styling

Styles are managed through Tailwind CSS. The design emphasizes:
- Clean, minimalist aesthetics
- Professional corporate tone
- Trust-focused presentation
- Subtle, non-flashy design

## Technologies

- **Next.js 16.1.1** - React framework for production
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

## License

Private project for Bagdja Development Group

