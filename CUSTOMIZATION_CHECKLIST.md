# 📝 Portfolio Customization Checklist

Before deploying your portfolio, complete the following customization steps:

## 🎯 Required Changes (High Priority)

### 1. Personal Information
- [ ] Update your name in [Hero.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Hero.tsx) (line 16)
- [ ] Update your name in [Footer.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Footer.tsx) (line 18 & 35)

### 2. Contact Information
In [Contact.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Contact.tsx):
- [ ] Replace `your.email@example.com` with your actual email (lines 13, 14, 79)
- [ ] Update LinkedIn URL (line 19)
- [ ] Update GitHub URL (line 25)
- [ ] Update LeetCode URL (line 31)

In [Footer.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Footer.tsx):
- [ ] Update GitHub URL (line 25)
- [ ] Update LinkedIn URL (line 33)
- [ ] Update LeetCode URL (line 41)

### 3. Education Details
In [Education.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Education.tsx):
- [ ] Replace `[Your University Name]` with your actual university
- [ ] Update degree if different from B.Tech CSE
- [ ] Update dates (currently 2020-2024)
- [ ] Update CGPA (currently 8.5/10)
- [ ] Replace `[Your School Name]` with your school
- [ ] Update Higher Secondary percentage (currently 90%)
- [ ] Update Higher Secondary dates (currently 2018-2020)

### 4. Certifications & Achievements
In [Certifications.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Certifications.tsx):
- [ ] Replace placeholder certifications with your actual ones
- [ ] Update issuers and dates
- [ ] Customize the achievements list

## ✨ Optional Enhancements (Medium Priority)

### 5. Projects
In [Projects.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Projects.tsx):
- [ ] Add GitHub links or live demo URLs to projects
- [ ] Adjust project descriptions if needed
- [ ] Add more projects if you have them

### 6. Experience
In [Experience.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/Experience.tsx):
- [ ] Add specific dates for the internship
- [ ] Add more work experiences if applicable

### 7. About Section
In [About.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/components/About.tsx):
- [ ] Customize the bio if you want different wording
- [ ] Adjust experience numbers if needed

### 8. Design Customization
In [globals.css](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/app/globals.css):
- [ ] Change primary color if desired (line 10)
- [ ] Adjust gradient colors if needed (lines 65-81)

## 🚀 Pre-Deployment (High Priority)

### 9. Testing
- [ ] Run `npm run dev` and verify the site at http://localhost:3000
- [ ] Test dark mode toggle
- [ ] Test all navigation links
- [ ] Test mobile responsiveness (use browser DevTools)
- [ ] Check all external links open correctly
- [ ] Verify no console errors

### 10. SEO & Meta
In [layout.tsx](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/app/layout.tsx):
- [ ] Review and customize meta description
- [ ] Add keywords relevant to your skills

## 📦 Deployment

### 11. GitHub Setup
```bash
cd "c:\Users\gokul\OneDrive\Desktop\New folder\portfolio"
git add .
git commit -m "Customize portfolio with personal information"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 12. Vercel Deployment
- [ ] Create account on [vercel.com](https://vercel.com)
- [ ] Import GitHub repository
- [ ] Click Deploy
- [ ] Test live site
- [ ] (Optional) Add custom domain

## 📋 Quality Check

Before sharing with recruiters:
- [ ] All placeholder text replaced
- [ ] All URLs working correctly
- [ ] Portfolio loads fast (< 3 seconds)
- [ ] Mobile experience is smooth
- [ ] Professional email address used
- [ ] LinkedIn profile is up to date
- [ ] GitHub profile has pinned repositories

## 🎨 Branding (Optional)

- [ ] Add a favicon to `/public` folder
- [ ] Add Open Graph image for social sharing
- [ ] Consider adding a logo instead of "Portfolio" text

---

## Quick Command Reference

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production Build
npm run build        # Build for production
npm start            # Run production build locally

# Linting
npm run lint         # Check for code issues
```

---

**Need Help?** 
- Check the [README.md](file:///c:/Users/gokul/OneDrive/Desktop/New%20folder/portfolio/README.md) for detailed instructions
- Review the [walkthrough.md](file:///C:/Users/gokul/.gemini/antigravity/brain/e21aa2bc-d040-4435-945c-e72ee9039415/walkthrough.md) for comprehensive documentation

---

✅ Once all items are checked, your portfolio is ready to share with recruiters and the world! 🚀
