# Quick Customization Guide

This is a quick reference for customizing the most important parts of your portfolio.

## 🎯 Priority Updates (Do These First!)

### 1. Projects: Malchincamp & Bathongorfence

**File**: `components/sections/Projects.tsx`

Look for this section around line 20:

```typescript
const projects: Project[] = [
  {
    id: 'malchincamp',
    title: 'Malchincamp',
    description: 'YOUR SHORT DESCRIPTION HERE', // ← Update this
    longDescription: 'YOUR DETAILED DESCRIPTION',  // ← Update this
    image: '/projects/malchincamp.jpg',  // ← Add this image
    techStack: ['Next.js', 'TypeScript', ...],  // ← Update technologies used
    githubUrl: 'YOUR_ACTUAL_REPO_URL',  // ← Update with real URL
    liveUrl: 'YOUR_LIVE_DEMO_URL',  // ← Update if you have a live demo
    caseStudy: {
      overview: 'REPLACE WITH PROJECT OVERVIEW',  // ← Update
      role: 'REPLACE WITH YOUR ROLE',  // ← Update
      challenges: ['Update challenge 1', 'Update challenge 2'],  // ← Update
      solutions: ['Update solution 1', 'Update solution 2'],  // ← Update
      architecture: 'DESCRIBE YOUR ARCHITECTURE',  // ← Update
      results: ['Update result 1', 'Update result 2'],  // ← Update
    },
  },
  // ... same for Bathongorfence
]
```

### 2. Add Your Photos

**Profile Photo**:
1. Save your photo as `public/profile.jpg`
2. Open `components/sections/About.tsx`
3. Find line ~45 and uncomment the `<Image>` component:

```tsx
{/* Uncomment this: */}
<Image
  src="/profile.jpg"
  alt="Ankhbayr"
  fill
  className="object-cover"
  priority
/>
```

**Project Screenshots**:
1. Create folder: `public/projects/`
2. Add images:
   - `public/projects/malchincamp.jpg`
   - `public/projects/bathongorfence.jpg`
3. Open `components/ui/ProjectCard.tsx`
4. Find line ~30 and uncomment the `<Image>` component

### 3. Your Resume/CV

Replace `public/cv.pdf` with your actual PDF resume.

### 4. Contact Information

**Email**: 
- File: `components/sections/Contact.tsx` (line 10)
- File: `components/layout/Footer.tsx` (line 50)
- Change from `ankhbayr@example.com` to your real email

**Phone**: Already set to `90560444`
- To change: Search for `90560444` in all files and replace

**GitHub**: Already set to `https://github.com/anhaa-arch`
- To change: Search for `anhaa-arch` and replace with your username

## 📝 Content Updates

### About Section

**File**: `components/sections/About.tsx` (line 60-80)

Update these paragraphs with your own story:

```tsx
<p>
  YOUR PROFESSIONAL INTRO - Who you are, what you do
</p>

<p>
  YOUR APPROACH - How you work, your methodology
</p>

<p>
  YOUR EXPERTISE - Your key skills and passions
</p>
```

### Work Experience

**File**: `components/sections/Experience.tsx` (line 10-70)

Update the `experiences` array with your actual job history:

```typescript
{
  title: 'Your Job Title',
  company: 'Company Name',
  period: '2022 - Present',
  responsibilities: [
    'What you did',
    'What you achieved',
  ],
  technologies: ['Tech 1', 'Tech 2'],
}
```

### Skills

**File**: `components/sections/Skills.tsx` (line 10-60)

Adjust skill levels (0-100) to match your proficiency:

```typescript
{ name: 'React', level: 95, description: 'Your description' }
```

### Certifications

**File**: `components/sections/Certifications.tsx` (line 10)

Replace example certifications with your own:

```typescript
{
  title: 'Your Certification',
  issuer: 'Issuing Organization',
  date: '2023',
  link: 'credential-url',
}
```

## 🎨 Style Customization

### Change Theme Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  neon: {
    cyan: '#00d9ff',     // Change main accent color
    magenta: '#ff0080',  // Change secondary accent
    purple: '#a855f7',
    blue: '#3b82f6',
  },
}
```

### Change Fonts

**File**: `app/layout.tsx` (line 3)

```typescript
import { Inter } from 'next/font/google'
// Change to another Google Font:
// import { Roboto } from 'next/font/google'
```

## 🔧 SEO Updates

### Site Metadata

**File**: `app/layout.tsx` (line 10-40)

Update:
- `title`
- `description`
- `keywords`
- `openGraph` details

### Structured Data

**File**: `lib/structured-data.ts`

Update all instances of:
- `'Ankhbayr'` → Your name
- `'ankhbayr@example.com'` → Your email
- `'https://ankhbayr.dev'` → Your domain
- Phone number
- Social links

## 📧 Email Setup

**File**: `.env.local` (create this file)

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx  # Gmail App Password
EMAIL_TO=where-to-receive-emails@gmail.com
```

Get Gmail App Password: https://support.google.com/accounts/answer/185833

## ✅ Verification Checklist

Before deploying, search and replace these in ALL files:

- [ ] `ankhbayr@example.com` → your email
- [ ] `https://ankhbayr.dev` → your domain
- [ ] `TODO:` comments → complete all TODOs
- [ ] Test contact form locally
- [ ] Check all images load
- [ ] Review all text for accuracy

## 🚀 Quick Deploy

Once customized:

```bash
# 1. Commit changes
git add .
git commit -m "Customize portfolio"

# 2. Push to GitHub
git push origin main

# 3. Deploy to Vercel (see DEPLOYMENT.md)
```

## 📞 Where to Find What

| What to Update | File Location |
|----------------|---------------|
| Projects (Malchincamp/Bathongorfence) | `components/sections/Projects.tsx` |
| Work Experience | `components/sections/Experience.tsx` |
| Skills & Proficiency | `components/sections/Skills.tsx` |
| About Me Bio | `components/sections/About.tsx` |
| Contact Info | `components/sections/Contact.tsx` + `components/layout/Footer.tsx` |
| Certifications | `components/sections/Certifications.tsx` |
| SEO & Metadata | `app/layout.tsx` + `lib/structured-data.ts` |
| Colors & Theme | `tailwind.config.ts` |
| Profile Photo | `public/profile.jpg` |
| Resume/CV | `public/cv.pdf` |
| Project Images | `public/projects/` |

---

**Pro Tip**: Use VS Code's global search (Ctrl+Shift+F / Cmd+Shift+F) to find all instances of placeholder text like "TODO" or "ankhbayr@example.com" and replace them systematically.

