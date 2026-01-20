# DZ Aman Deployment Guide

## Pre-Deployment Checklist

Before deploying, make sure to complete these steps:

### 1. Configure Formspree

1. Go to [formspree.io](https://formspree.io/) and create an account
2. Create a new form
3. Copy your form ID (looks like `xyzabc123`)
4. Update `components/WaitlistForm.tsx`:
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Line: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`

### 2. Test Locally

Run the development server and test all features:

```bash
npm run dev
```

Test checklist:
- [ ] All three languages work (English, Arabic, French)
- [ ] Language switcher functions correctly
- [ ] RTL layout works for Arabic
- [ ] Form validation works
- [ ] Form submission works (after configuring Formspree)
- [ ] Responsive design on mobile, tablet, and desktop
- [ ] Animations are smooth
- [ ] All links work

### 3. Build for Production

```bash
npm run build
```

This will check for any build errors. Fix any issues before deploying.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Go to your project settings on Vercel
   - Add any environment variables

4. **Custom Domain** (optional)
   - In Vercel project settings, go to "Domains"
   - Add your custom domain (e.g., dzaman.dz)
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

### Option 3: Self-Hosted (VPS)

1. **Install Node.js** on your server (version 18+)

2. **Clone your repository**
   ```bash
   git clone YOUR_REPO_URL
   cd INVITE-PAGE
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Start with PM2** (process manager)
   ```bash
   npm install -g pm2
   pm2 start npm --name "dzaman" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx** (reverse proxy)
   ```nginx
   server {
       listen 80;
       server_name dzaman.dz www.dzaman.dz;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Setup SSL with Certbot**
   ```bash
   sudo certbot --nginx -d dzaman.dz -d www.dzaman.dz
   ```

## Post-Deployment

### 1. Test Live Site

- [ ] Visit your deployed URL
- [ ] Test all features again on the live site
- [ ] Test from different devices and browsers
- [ ] Verify Formspree integration works

### 2. Monitor Performance

- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Use [GTmetrix](https://gtmetrix.com/)
- Check mobile performance

### 3. Analytics (Optional)

Add Google Analytics or Plausible Analytics:

1. Get your tracking code
2. Add to `app/[locale]/layout.tsx` in the `<head>` section

### 4. Update Content

To update translations:
- Edit files in `messages/` directory
- Commit and push changes
- Vercel/Netlify will automatically redeploy

## Environment Variables

If you need environment variables:

Create `.env.local` file:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

Update `components/WaitlistForm.tsx`:

```typescript
const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
```

Add environment variables in your hosting platform's dashboard.

## Troubleshooting

### Build Fails

- Check Node.js version (must be 18+)
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npm run build` again

### Form Not Working

- Verify Formspree form ID is correct
- Check browser console for errors
- Ensure CORS is enabled on Formspree

### Arabic Text Not Displaying

- Verify Cairo font is loading
- Check that `dir="rtl"` is set for Arabic locale
- Clear browser cache

### Images Not Loading

- Verify images are in `public/images/` directory
- Check file paths are correct
- Rebuild the project

## Support

For issues, contact: hello@dzaman.dz
