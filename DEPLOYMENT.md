# Deployment Guide - Ankhbayr's Portfolio

This guide walks you through deploying your portfolio to Vercel step by step.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Gmail account (for contact form)

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial portfolio setup"
```

2. **Create a GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name: `portfolio` or `ankhbayr-portfolio`
   - Keep it public or private
   - Don't initialize with README (you already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Gmail App Password Setup

For the contact form to work, you need a Gmail App Password:

1. **Enable 2-Factor Authentication**:
   - Go to [myaccount.google.com](https://myaccount.google.com)
   - Security → 2-Step Verification
   - Follow the setup process

2. **Generate App Password**:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select app: "Mail"
   - Select device: "Other (Custom name)" → enter "Portfolio"
   - Click "Generate"
   - **Save the 16-character password** (you'll need it in Step 4)

## Step 3: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Build Settings**:
   - Framework Preset: `Next.js` (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Add Environment Variables** (IMPORTANT):
   Click "Environment Variables" and add:

   | Name | Value | Notes |
   |------|-------|-------|
   | `EMAIL_USER` | your-email@gmail.com | Your Gmail address |
   | `EMAIL_PASS` | xxxx-xxxx-xxxx-xxxx | App Password from Step 2 |
   | `EMAIL_TO` | ankhbayr@example.com | Where to receive messages |
   | `NEXT_PUBLIC_SITE_URL` | (leave empty for now) | Will add after deployment |

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

## Step 4: Add Your Domain URL

1. **Copy your Vercel URL** (e.g., `ankhbayr-portfolio.vercel.app`)

2. **Update Environment Variable**:
   - Go to your project in Vercel
   - Settings → Environment Variables
   - Find `NEXT_PUBLIC_SITE_URL`
   - Set value to `https://your-project-name.vercel.app`
   - Click "Save"

3. **Redeploy**:
   - Go to Deployments tab
   - Click "..." on the latest deployment → "Redeploy"

## Step 5: Custom Domain (Optional)

If you have a custom domain (e.g., `ankhbayr.dev`):

1. **Add Domain in Vercel**:
   - Settings → Domains
   - Enter your domain: `ankhbayr.dev`
   - Click "Add"

2. **Configure DNS**:
   - Vercel will show you DNS records to add
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records as shown

   **Example DNS records**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation**:
   - Can take 5 minutes to 48 hours
   - Usually works within 1 hour

4. **Update Environment Variable**:
   - Change `NEXT_PUBLIC_SITE_URL` to `https://ankhbayr.dev`
   - Redeploy

## Step 6: Verify Everything Works

Test these features on your live site:

- [ ] Homepage loads correctly
- [ ] All sections are visible and animated
- [ ] Navigation menu works
- [ ] Project modals open and close
- [ ] Contact form works (send a test message)
- [ ] Check your email for the test message
- [ ] GitHub link works
- [ ] Phone link works (tel:90560444)
- [ ] CV download works (after you add your CV)
- [ ] Mobile responsiveness (test on your phone)
- [ ] Dark mode toggle works

## Step 7: Ongoing Updates

### Update Content

1. **Edit files locally**:
   - Update project descriptions
   - Add photos
   - Modify experience

2. **Push changes**:
```bash
git add .
git commit -m "Update project descriptions"
git push
```

3. **Automatic deployment**:
   - Vercel automatically deploys when you push to `main`
   - Check the Deployments tab to monitor progress

### Update Environment Variables

If you need to change email settings:
1. Vercel Dashboard → Settings → Environment Variables
2. Edit the variable
3. Redeploy from Deployments tab

## Troubleshooting

### Build Failed

**Check build logs**:
- Vercel → Deployments → Click on failed deployment → View logs
- Common issues:
  - TypeScript errors: Run `npm run type-check` locally
  - Missing dependencies: Ensure `package.json` is committed
  - Environment variables: Check they're set correctly

### Contact Form Not Working

1. **Check environment variables** are set in Vercel
2. **Verify Gmail App Password** is correct
3. **Test locally first**:
   ```bash
   # Add variables to .env.local
   npm run dev
   # Test the form
   ```
4. **Check Vercel Function Logs**:
   - Vercel Dashboard → Functions
   - View logs for `/api/contact`

### Images Not Showing

1. **Ensure images are in `public/` folder**
2. **Check file names match** (case-sensitive)
3. **Uncomment Image components** in the code
4. **Verify images are committed** to Git

### Domain Not Working

1. **Wait longer** - DNS can take up to 48 hours
2. **Check DNS configuration**:
   ```bash
   nslookup ankhbayr.dev
   ```
3. **Verify in Vercel**:
   - Settings → Domains
   - Should show green checkmark

### Phone Number Privacy

If you want to remove your phone number from the public site:

1. Edit `components/sections/Contact.tsx`
2. Remove or comment out the phone entry in `contactInfo`
3. Edit `components/layout/Footer.tsx`
4. Push changes

## Performance Optimization

Your site is already optimized, but you can check:

1. **Lighthouse Score**:
   - Open site in Chrome
   - DevTools → Lighthouse → Run audit
   - Aim for 90+ in all categories

2. **Vercel Analytics** (optional):
   - Settings → Analytics
   - Enable Real Experience Score

3. **Monitor Bundle Size**:
   ```bash
   npm run build
   # Check .next/analyze/bundle-sizes.json
   ```

## Security Checklist

- [x] Environment variables not committed to Git
- [x] `.env.local` in `.gitignore`
- [x] Email credentials using App Password (not main password)
- [x] HTTPS enabled (automatic with Vercel)
- [x] Security headers configured in `vercel.json`
- [x] Input validation in contact form

## Maintenance

### Regular Updates

Every few months:

1. **Update dependencies**:
```bash
npm update
npm audit fix
git commit -am "Update dependencies"
git push
```

2. **Review analytics**:
   - Check which projects get most attention
   - Update content based on feedback

3. **Backup**:
   - Your Git repository is your backup
   - Vercel keeps deployment history

## Support & Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

## Success! 🎉

Your portfolio is now live! Share it:
- Update your GitHub profile with the URL
- Add to your resume
- Share on LinkedIn
- Add to your email signature

---

**Need help?** Check the main README.md or consult the troubleshooting section above.

**Next steps**: Start customizing the content with your actual project details and photos!

