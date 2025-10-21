# Ankhbayr's Portfolio - Modern Full-Stack Developer Portfolio

A cutting-edge, performance-focused portfolio website built with **Next.js 14**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. Featuring a futuristic design inspired by Apple, Tesla, and Vercel aesthetics.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- 🎨 **Modern Design**: Dark theme with neon accents (cyan/magenta), glassmorphism, and smooth animations
- ⚡ **High Performance**: Optimized with code-splitting, lazy loading, and Next.js image optimization
- 📱 **Fully Responsive**: Mobile-first design that works beautifully on all devices
- 🎭 **Smooth Animations**: Framer Motion powered entrance/exit animations and interactive elements
- 🎯 **SEO Optimized**: Complete meta tags, Open Graph, structured data (JSON-LD), and sitemap
- 🔥 **Interactive Components**: 
  - Animated particle background
  - Project filtering and case study modals
  - Tech stack visualization with network connections
  - Contact form with serverless API
- ♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- 🌐 **Production Ready**: Configured for Vercel deployment with environment variables

## 📋 Sections

1. **Hero** - Eye-catching intro with animated background and CTAs
2. **About** - Professional summary and quick facts
3. **Skills** - Categorized tech stack with animated progress bars
4. **Tech Stack** - Interactive network visualization of technologies
5. **Projects** - Filterable project cards with detailed case studies
6. **Experience & Education** - Timeline of work history and education
7. **Certifications** - Professional certifications and achievements
8. **Contact** - Working contact form with email integration
9. **Blog** - Optional blog section (ready for CMS integration)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone or use this repository**:
```bash
git clone <your-repo-url>
cd protfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**:
```bash
# Copy the example env file
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=ankhbayr@example.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note**: For Gmail, you need to create an [App Password](https://support.google.com/accounts/answer/185833). Don't use your regular Gmail password.

4. **Run the development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Personal Information

Update these files with your information:

#### **Components to update**:
- `components/sections/Hero.tsx` - Name, title, tagline
- `components/sections/About.tsx` - Professional summary, facts
- `components/layout/Footer.tsx` - Email, social links
- `app/layout.tsx` - SEO metadata

#### **Structured Data (for SEO)**:
- `lib/structured-data.ts` - Update with your details

### 2. Projects (Malchincamp & Bathongorfence)

Edit `components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 'malchincamp',
    title: 'Malchincamp',
    description: 'YOUR PROJECT DESCRIPTION HERE',
    longDescription: 'DETAILED DESCRIPTION',
    image: '/projects/malchincamp.jpg', // Add your screenshot
    techStack: ['Next.js', 'TypeScript', ...],
    githubUrl: 'YOUR_REPO_URL',
    liveUrl: 'YOUR_LIVE_URL',
    caseStudy: {
      overview: 'PROJECT OVERVIEW',
      role: 'YOUR ROLE',
      challenges: ['Challenge 1', 'Challenge 2'],
      solutions: ['Solution 1', 'Solution 2'],
      architecture: 'TECHNICAL ARCHITECTURE',
      results: ['Result 1', 'Result 2'],
    },
  },
  // ... add more projects
]
```

**Add project images**:
- Place screenshots in `public/projects/`
- Update the `image` field in each project

### 3. Skills

Update `components/sections/Skills.tsx` with your actual skill levels:

```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95, description: 'Your description' },
      // ... add/modify skills
    ],
  },
  // ... other categories
]
```

### 4. Experience & Education

Edit `components/sections/Experience.tsx`:

```typescript
const experiences = [
  {
    title: 'YOUR JOB TITLE',
    company: 'COMPANY NAME',
    period: '2022 - Present',
    responsibilities: ['Responsibility 1', ...],
    technologies: ['Tech 1', ...],
  },
]

const education = [
  {
    title: 'YOUR DEGREE',
    company: 'UNIVERSITY NAME',
    // ...
  },
]
```

### 5. Contact Information

Update these places with your contact details:

1. **Footer** (`components/layout/Footer.tsx`):
   - Email address
   - Phone number: `90560444`
   - Social links

2. **Contact Section** (`components/sections/Contact.tsx`):
   - Update the `contactInfo` array

3. **GitHub Link**: Already set to `https://github.com/anhaa-arch`

### 6. Profile Photo

1. Add your profile image to `public/profile.jpg`
2. Uncomment the Image component in `components/sections/About.tsx`:

```tsx
<Image
  src="/profile.jpg"
  alt="Ankhbayr"
  fill
  className="object-cover"
  priority
/>
```

### 7. CV/Resume

Replace `public/cv.pdf` with your actual PDF resume.

### 8. Certifications

Update `components/sections/Certifications.tsx` with your actual certifications and achievements.

### 9. Theme Colors

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  neon: {
    cyan: '#00d9ff',     // Change to your preferred accent
    magenta: '#ff0080',  // Change to your preferred accent
    purple: '#a855f7',
    blue: '#3b82f6',
  },
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from your `.env.local`:
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `EMAIL_TO`
     - `NEXT_PUBLIC_SITE_URL` (your production domain)

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain (e.g., `ankhbayr.dev`)
3. Follow Vercel's DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## 📧 Email Configuration

The contact form uses **Nodemailer** with Gmail. To set it up:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account → Security
   - Under "Signing in to Google," select "App passwords"
   - Generate a new password for "Mail"
3. **Add to `.env.local`**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=xxxx-xxxx-xxxx-xxxx  # App password
   EMAIL_TO=where-to-receive@email.com
   ```

### Alternative Email Services

To use other email services, edit `app/api/contact/route.ts` and update the transporter configuration.

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library

### Backend
- **Next.js API Routes** - Serverless functions
- **Nodemailer** - Email sending

### Tools & Deployment
- **Git/GitHub** - Version control
- **Vercel** - Hosting and deployment
- **ESLint** - Code linting

## 📁 Project Structure

```
protfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── blog/
│   │   └── page.tsx              # Blog listing page
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── robots.txt                # SEO robots file
│   └── sitemap.ts                # Dynamic sitemap
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation header
│   │   └── Footer.tsx            # Site footer
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section
│   │   ├── About.tsx             # About section
│   │   ├── Skills.tsx            # Skills section
│   │   ├── Projects.tsx          # Projects with filtering
│   │   ├── Experience.tsx        # Work & education timeline
│   │   ├── Certifications.tsx    # Certs & achievements
│   │   ├── TechStack.tsx         # Tech network visualization
│   │   └── Contact.tsx           # Contact form
│   ├── ui/
│   │   ├── ProjectCard.tsx       # Individual project card
│   │   ├── ProjectModal.tsx      # Case study modal
│   │   ├── SkillCard.tsx         # Skill with progress bar
│   │   ├── TimelineItem.tsx      # Experience timeline item
│   │   └── ParticlesBackground.tsx  # Animated background
│   └── StructuredData.tsx        # JSON-LD for SEO
├── lib/
│   └── structured-data.ts        # SEO structured data
├── public/
│   ├── cv.pdf                    # Your resume (TODO: replace)
│   ├── projects/                 # Project screenshots
│   └── profile.jpg               # Your photo (TODO: add)
├── .env.example                  # Environment variables template
├── .gitignore
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json
├── vercel.json                   # Vercel deployment config
└── README.md                     # This file
```

## ✅ TODO Checklist

Before deploying, make sure to:

- [ ] Update all personal information (name, bio, contact)
- [ ] Replace placeholder project descriptions for **Malchincamp** and **Bathongorfence**
- [ ] Add actual project screenshots to `public/projects/`
- [ ] Add your profile photo to `public/profile.jpg`
- [ ] Replace `public/cv.pdf` with your actual resume
- [ ] Update experience and education in `Experience.tsx`
- [ ] Update certifications in `Certifications.tsx`
- [ ] Configure email environment variables
- [ ] Update GitHub link (already set to `https://github.com/anhaa-arch`)
- [ ] Update phone number (already set to `90560444`) - remove if you want privacy
- [ ] Update SEO metadata in `app/layout.tsx`
- [ ] Update structured data in `lib/structured-data.ts`
- [ ] Test contact form locally
- [ ] Test on mobile devices
- [ ] Deploy to Vercel
- [ ] Configure custom domain (optional)
- [ ] Test deployed site thoroughly

## 🔍 SEO Checklist

Configured and ready:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (for social sharing)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person, WebSite, ProfessionalService)
- ✅ Sitemap
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt tags on images
- ✅ Fast loading (optimized images, code-splitting)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### Contact form not working
- Check that environment variables are set correctly
- For Gmail, ensure you're using an App Password, not your regular password
- Check the browser console and server logs for errors

### Images not loading
- Ensure images are in the `public/` directory
- Check file paths are correct (case-sensitive)
- Uncomment the Image components after adding your images

### Build errors
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Check linting errors
```

### Port already in use
```bash
# Kill the process using port 3000
npx kill-port 3000
```

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Developer

**Ankhbayr**
- GitHub: [@anhaa-arch](https://github.com/anhaa-arch)
- Phone: 90560444

---

## 🎉 Getting Help

If you encounter issues:
1. Check this README thoroughly
2. Look for `TODO` comments in the code
3. Review the Vercel deployment logs
4. Check the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

**Built with 💙 using Next.js, TypeScript, and TailwindCSS**

---

### Quick Reference: Files to Customize

| File | What to Update |
|------|---------------|
| `components/sections/Projects.tsx` | **Malchincamp** & **Bathongorfence** details |
| `components/sections/About.tsx` | Your bio and profile photo |
| `components/sections/Experience.tsx` | Work experience and education |
| `components/sections/Skills.tsx` | Your skill levels |
| `components/sections/Certifications.tsx` | Your certifications |
| `components/sections/Contact.tsx` | Contact information |
| `components/layout/Footer.tsx` | Footer links and info |
| `lib/structured-data.ts` | SEO data |
| `app/layout.tsx` | Page metadata |
| `public/cv.pdf` | Your resume |
| `public/profile.jpg` | Your photo |
| `.env.local` | Email credentials |

Happy coding! 🚀

#   p o r f o l i o -  
 