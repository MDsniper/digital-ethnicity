# Deployment Guide - Digital Ethnicity

Complete checklist for deploying digital-ethnicity.com to Vercel.

## Pre-Deployment Checklist

### 1. GitHub Repository Setup

- [ ] Create GitHub repository: `digital-ethnicity`
- [ ] Initialize Git in project directory: `git init`
- [ ] Add all files: `git add .`
- [ ] Create initial commit: `git commit -m "Initial project setup - Phase 1 foundation"`
- [ ] Add GitHub remote: `git remote add origin https://github.com/YOUR_USERNAME/digital-ethnicity.git`
- [ ] Push to GitHub: `git push -u origin main`

### 2. Environment Variables

- [ ] Create `.env.local` file locally
- [ ] Add your Google Analytics ID:
  ```
  NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
  ```
- [ ] Test locally: `npm run dev`
- [ ] Verify site builds: `npm run build`

### 3. Vercel Deployment

#### Connect Repository to Vercel:
1. [ ] Go to [vercel.com](https://vercel.com) and sign in
2. [ ] Click "New Project"
3. [ ] Import your GitHub repository
4. [ ] Select the `digital-ethnicity` repository
5. [ ] Framework should auto-detect as Next.js
6. [ ] Click "Deploy"

#### Configure Environment Variables in Vercel:
1. [ ] Go to your Vercel project settings
2. [ ] Navigate to "Environment Variables"
3. [ ] Add variable:
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G_XXXXXXXXXX` (your actual GA4 ID)
4. [ ] Make sure it's set for all environments (Production, Preview, Development)
5. [ ] Save

#### Set Custom Domain:
1. [ ] In Vercel project settings, go to "Domains"
2. [ ] Add domain: `digital-ethnicity.com`
3. [ ] Follow Vercel's instructions to update your domain's DNS records
4. [ ] Vercel will provide the nameservers or DNS records to add
5. [ ] DNS can take 24-48 hours to fully propagate
6. [ ] Once confirmed, domain should be live

### 4. DNS Configuration

If you're transferring domain from another registrar:

- [ ] Update nameservers to Vercel's nameservers (provided in Vercel)
  OR
- [ ] Add DNS records directly (CNAME records) if keeping current registrar

Example DNS records needed:
- `digital-ethnicity.com` → points to Vercel
- `www.digital-ethnicity.com` → points to Vercel

### 5. Google Analytics Setup

- [ ] Create Google Analytics 4 property for digital-ethnicity.com
- [ ] Get measurement ID (format: `G_XXXXXXXXXX`)
- [ ] Add to `.env.local` and Vercel environment variables
- [ ] Test tracking on live site (check Real Time in GA4)

## Post-Deployment Verification

### Test Live Site

- [ ] Visit https://digital-ethnicity.com in browser
- [ ] Verify home page loads correctly
- [ ] Check navigation works (Services, About, Contact)
- [ ] Test responsive design on mobile
- [ ] Verify all images load
- [ ] Check footer links work

### Verify Google Analytics

- [ ] Visit Google Analytics 4 dashboard
- [ ] Go to Real Time section
- [ ] Visit your site in another browser tab
- [ ] Verify you see traffic appearing in Real Time within 1-2 seconds

### Test Forms

- [ ] Go to `/contact` page
- [ ] Submit test form
- [ ] Verify form submission succeeds
- [ ] Check server logs (Vercel Functions logs) for submission

### Check Performance

- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) on live URL
- [ ] Check mobile and desktop scores
- [ ] Verify Core Web Vitals are good

## Monitoring & Updates

### After Deployment

- [ ] Monitor error logs in Vercel dashboard
- [ ] Check Google Analytics for traffic
- [ ] Keep backups of content in Git
- [ ] Monitor contact form submissions

### Deployment Workflow for Updates

1. Make changes locally
2. Test with `npm run dev`
3. Commit: `git add . && git commit -m "Description"`
4. Push: `git push origin main`
5. Vercel auto-deploys within seconds

## Domain Configuration Details

### If using Vercel Nameservers:
```
Change your domain registrar's nameservers to:
ns1.vercel.com
ns2.vercel.com
```

### If using DNS Records:
Add these CNAME records in your DNS provider:
```
Type: CNAME
Name: digital-ethnicity.com (or @)
Value: cname.vercel-dns.com

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Troubleshooting

### Domain Not Working
- [ ] Verify DNS records are added correctly
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Check Vercel domain settings show "Valid Configuration"

### Analytics Not Tracking
- [ ] Verify `NEXT_PUBLIC_GA_ID` is set in environment variables
- [ ] Check GA4 property ID format (should start with `G_`)
- [ ] Wait a few minutes for GA4 to populate
- [ ] Use GA4 Real Time to verify tracking

### Form Submissions Not Working
- [ ] Check Vercel function logs
- [ ] Verify email service isn't required for Phase 1
- [ ] Check browser console for JavaScript errors

### Site Not Building
- [ ] Check Vercel build logs
- [ ] Verify all environment variables are set
- [ ] Ensure `package.json` dependencies are correct
- [ ] Run `npm install` locally and test build

## Phase 1 Completion Checklist

- [ ] GitHub repository created and synced
- [ ] Vercel project connected
- [ ] Custom domain configured and resolving
- [ ] Google Analytics integrated and tracking
- [ ] Contact form functional
- [ ] All pages load correctly
- [ ] Mobile responsive design verified
- [ ] Performance tested

## Next Steps (Phase 2)

After Phase 1 deployment, you can proceed with:
- Content migration from benniewilliams.com
- Enhanced service descriptions
- Email integration setup
- Additional service offerings

---

**Estimated Deployment Time**: 2-4 hours (including DNS propagation waiting time)

**Support**: Reference this guide or check Vercel's documentation at vercel.com/docs
