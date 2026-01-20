# DZ Aman - Quick Start Guide

Welcome to your DZ Aman waitlist page! 🎉

## ✅ What's Been Built

Your beautiful, production-ready waitlist page includes:

- **Multi-language Support**: Switch seamlessly between Arabic (RTL), French, and English
- **Algerian Design**: Warm earth tones, serene landscape backgrounds, and traditional patterns
- **Beautiful Components**:
  - Hero section with animated logo and tagline
  - About section explaining your mission
  - Waitlist form with validation
  - Responsive header and footer
- **Fully Responsive**: Looks perfect on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Optimized**: Fast loading, SEO-ready, and production-optimized

## 🚀 Getting Started in 3 Steps

### Step 1: Configure Formspree (Required for form submissions)

1. Visit [formspree.io](https://formspree.io/) and create a free account
2. Create a new form
3. Copy your form ID (looks like `xyzabc123`)
4. Open `components/WaitlistForm.tsx`
5. Find line 43 and replace `YOUR_FORM_ID`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Step 2: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Test Everything

- ✅ Switch between languages using the language switcher in the top-right
- ✅ Try the form - enter some test data
- ✅ Check mobile responsiveness (resize your browser window)
- ✅ Verify all animations are working

## 📱 Testing on Mobile

### Option 1: Browser DevTools
1. Press F12 in your browser
2. Click the device icon (Toggle device toolbar)
3. Select different devices to test

### Option 2: Test on Your Phone
1. Find your computer's IP address:
   - Windows: `ipconfig` in Command Prompt
   - Mac: `ifconfig` in Terminal
2. Make sure your phone is on the same WiFi network
3. On your phone, visit: `http://YOUR_IP_ADDRESS:3000`

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'aman-beige': { light: '#E8DCC8', DEFAULT: '#D4C5B0' },
  'aman-taupe': { light: '#8B8680', DEFAULT: '#6B6560' },
  'aman-amber': '#D4A054',
  'aman-teal': '#5A7A7A',  // CTA button color
}
```

### Edit Text Content

All text is in the `messages/` folder:
- `messages/en.json` - English
- `messages/ar.json` - Arabic
- `messages/fr.json` - French

Just edit the JSON files and save - changes appear immediately in dev mode!

### Update Logo

The logo is in `components/Logo.tsx`. It's an SVG component you can customize.

### Change Background

Replace `public/images/landscape-bg.svg` with your own image (SVG, JPG, or PNG).

## 🚢 Deployment

### Deploy to Vercel (Easiest - Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Next.js settings)
5. Done! Your site is live 🎉

### Deploy to Other Platforms

See `DEPLOYMENT.md` for detailed instructions on:
- Netlify
- Self-hosted VPS
- Other platforms

## 🔧 Common Tasks

### Change the default language

Edit `middleware.ts`:
```typescript
defaultLocale: 'en',  // Change to 'ar' or 'fr'
```

### Add social media links

Edit `components/Footer.tsx` and update the `socialLinks` array with your actual URLs.

### Update contact email

Edit the translation files (`messages/*.json`) and change the `footer.email` field.

## 📊 Performance

Your site is optimized for performance:
- ✅ Static Site Generation (SSG) - Fast loading
- ✅ Image optimization with Next.js Image
- ✅ Code splitting
- ✅ Minification and compression

Test your live site's performance at:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 🆘 Need Help?

### Build fails?
```bash
# Delete node_modules and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Form not working?
- Check that you've updated the Formspree form ID
- Check browser console for errors (F12)
- Verify your internet connection

### Arabic text not showing correctly?
- Clear your browser cache
- Check that `dir="rtl"` is set for Arabic
- Verify Cairo font is loading

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🎉 You're All Set!

Your DZ Aman waitlist page is ready to go. Just:
1. Configure Formspree
2. Test everything locally
3. Deploy to Vercel
4. Share your link!

**Questions?** Contact: hello@dzaman.dz
