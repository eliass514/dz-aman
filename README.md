# DZ Aman - Waitlist Page

A beautiful, culturally-authentic waitlist landing page for DZ Aman - a mental health and trauma support app for Algeria.

## Features

-  **Multi-language Support**: Arabic (RTL), French, and English
-  **Algerian Design Identity**: Warm earth tones, traditional patterns, and serene landscapes
-  **Fully Responsive**: Beautiful on all devices
-  **Smooth Animations**: Powered by Framer Motion
-  **Waitlist Form**: Integrated with Formspree

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up Formspree:
   - Go to [formspree.io](https://formspree.io/) and create a free account
   - Create a new form and get your form ID
   - Update the form endpoint in `components/WaitlistForm.tsx`:
     ```typescript
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     ```
     Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page will automatically update as you edit files.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific routes
│   │   ├── layout.tsx     # Locale layout with i18n
│   │   └── page.tsx       # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation with language switcher
│   ├── Hero.tsx          # Hero section with logo
│   ├── About.tsx         # About section
│   ├── WaitlistForm.tsx  # Waitlist form with validation
│   ├── Footer.tsx        # Footer
│   ├── Logo.tsx          # Aman logo SVG
│   ├── AlgerianPattern.tsx # Decorative pattern
│   ├── Button.tsx        # Button component
│   └── Input.tsx         # Input component
├── messages/             # Translations
│   ├── ar.json          # Arabic
│   ├── en.json          # English
│   └── fr.json          # French
├── public/
│   └── images/          # Static assets
└── lib/
    └── i18n.ts          # i18n configuration
```

## Customization

### Colors

The Algerian color palette is defined in `tailwind.config.ts`:

- `aman-beige`: Warm beige/sand tones
- `aman-taupe`: Muted gray/taupe
- `aman-amber`: Soft amber/gold (logo color)
- `aman-teal`: Dusty teal (CTA buttons)

### Translations

Add or modify translations in the `messages/` directory:

- `messages/en.json` - English
- `messages/ar.json` - Arabic
- `messages/fr.json` - French

### Logo

The logo is an SVG component in `components/Logo.tsx`. Customize the design by modifying the SVG paths.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in the `.next` directory.

## Support

For issues or questions, please contact hello@dzaman.dz

## License

© 2026 DZ Aman. All rights reserved.
