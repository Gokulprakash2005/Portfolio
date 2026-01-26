# 🚀 Developer Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**. Features dark mode, smooth animations, and a premium design optimized for recruiters.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌗 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎨 **Modern Design** - Glassmorphism effects and smooth animations
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🔧 **Easy to Customize** - Well-organized component structure

## 📋 Sections

1. **Hero** - Eye-catching introduction with gradient animations
2. **About Me** - Professional summary and expertise
3. **Experience** - Work history at Adrig AI Technologies
4. **Projects** - Showcase of 6 production-grade projects
5. **Skills** - Tech stack with 16+ technologies
6. **Certifications** - Awards and achievements
7. **Education** - Academic background
8. **Contact** - Multiple ways to connect

## 🛠️ Tech Stack

**Framework & Libraries:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

**Additional Dependencies:**
- next-themes - Dark mode support
- react-icons - Icon library

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Customization

### Update Personal Information

Before deploying, update the following placeholders:

1. **Hero Section** (`components/Hero.tsx`)
   - Replace `"Your Name"` with your actual name

2. **Contact Section** (`components/Contact.tsx`)
   - Update email address
   - Update LinkedIn, GitHub, LeetCode URLs

3. **Certifications** (`components/Certifications.tsx`)
   - Add your real certifications

4. **Education** (`components/Education.tsx`)
   - Add university/college name
   - Update degree, CGPA, dates

5. **Footer** (`components/Footer.tsx`)
   - Replace `"Your Name"` with your name
   - Update social media links

### Change Colors

Edit `app/globals.css` to modify the primary color:

```css
:root {
  --primary: 262 83% 58%; /* Your HSL color */
}
```

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Project showcase
│   ├── Skills.tsx       # Tech stack
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/              # Static assets
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your portfolio will be live in ~2 minutes!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Alternative Platforms

- **Netlify:** Connect GitHub repo for auto-deployment
- **AWS Amplify:** Deploy with `amplify publish`
- **GitHub Pages:** Use `next export` for static export

## 📱 Responsive Design

The portfolio is optimized for all screen sizes:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎨 Design Features

- Custom gradient text effects
- Floating background animations
- Glassmorphism cards
- Smooth scroll navigation
- Hover animations on cards and buttons
- Interactive dark mode toggle

## 🔍 SEO

Includes:
- Proper meta tags
- Semantic HTML
- Descriptive title and description
- Fast loading times
- Mobile-friendly design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email:** your.email@example.com
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)
- **LeetCode:** [leetcode.com/yourusername](https://leetcode.com/yourusername)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

🌟 **Don't forget to star this repo if you found it helpful!**
