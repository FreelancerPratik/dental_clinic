# 🦷 Dr. Javardikar Dental Clinic — डॉ. जवर्डीकर दातांचा दवाखाना

> **Professional dental clinic website** for Dr. Manthan P. Javardikar (BDS, MDS — Prosthodontics, Crown & Bridge and Implantology), located in Anjangaon Surji, Amravati, Maharashtra.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router)](https://reactrouter.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel)](https://vercel.com)

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment-vercel)
- [Contact](#-contact)

---

## 🏥 About the Project

This is a **fully responsive, bilingual (Marathi + English)** dental clinic website built with **React + Vite**. It serves as the official online presence for Dr. Javardikar Dental Clinic, helping patients discover services, learn about the doctor, and book appointments directly via WhatsApp.

---

## 🌐 Live Demo

> Coming soon — deploy to Vercel and update this link.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Bilingual** | Marathi-first content with English subtitles throughout |
| 📱 **Fully Responsive** | Works seamlessly on mobile, tablet, and desktop |
| 📅 **WhatsApp Appointment Booking** | Form sends appointment details directly to the clinic's WhatsApp |
| 🗺️ **Google Maps Embedded** | Live clinic location with one-click directions |
| 🎨 **Scroll Reveal Animations** | Smooth reveal animations as the user scrolls |
| 📊 **Animated Stats Counters** | Live count-up animation for patient stats |
| 💬 **Testimonial Slider** | Auto-playing patient testimonials carousel |
| 🔝 **Scroll To Top Button** | Appears on scroll for quick navigation |
| 💬 **WhatsApp Float Button** | Persistent floating button for instant contact |
| 🏥 **10 Dental Services** | Detailed cards for every treatment offered |
| 📋 **Client-side Form Validation** | Real-time field validation with Marathi error messages |
| ♿ **Accessible Markup** | Semantic HTML5 with ARIA labels throughout |

---

## 📄 Pages

### 🏠 Home (`/`)
- **Hero Section** — Full-screen hero with clinic name, tagline, CTA buttons, and mini stats
- **Stats Bar** — 5000+ patients, 10+ years experience, 10 services, 98% success rate
- **Services Preview** — Grid of top dental services with links
- **Why Choose Us** — Key differentiators of the clinic
- **Doctor Teaser** — Brief introduction to Dr. Javardikar
- **Process Steps** — How to book an appointment (step-by-step)
- **Patient Testimonials** — Auto-scrolling testimonial slider
- **Appointment Banner** — CTA section at the bottom

### 🦷 Services (`/services`)
Detailed full cards for all **10 dental services**:
1. दातांची तपासणी — Dental Examination & General Treatment
2. दातांची स्वच्छता — Scaling & Polishing
3. रूट कॅनाल उपचार — Root Canal Treatment (RCT)
4. क्राऊन व ब्रिज — Crown & Bridge
5. कॉस्मेटिक डेंटिस्ट्री — Cosmetic Dentistry & Smile Design
6. डेंटल इम्प्लांट्स — Dental Implants
7. कबळी — Complete & Partial Dentures
8. दातांची झीज — Teeth Wear & Bite Treatment
9. फिक्सड व रिमूव्हेबल — Fixed & Removable Prosthetics
10. पूर्ण तोंडाचे पुनर्वसन — Full Mouth Rehabilitation

### 👨‍⚕️ About (`/about`)
- Doctor profile with photo
- BDS & MDS qualifications
- Mission & values cards
- Modern equipment list (Digital X-Ray, OPG, Rotary Endodontics, etc.)
- Animated stats counters

### 📞 Contact (`/contact`)
- Appointment booking form with full validation
- Sends pre-filled message to clinic's WhatsApp on submit
- Clinic address, phone numbers, and business hours
- WhatsApp quick-contact card
- Embedded Google Maps + Get Directions button

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI library |
| **Vite** | 8 | Build tool & dev server |
| **React Router DOM** | 7 | Client-side routing |
| **Vanilla CSS** | — | All styling (no UI framework) |
| **Google Maps Embed** | — | Clinic location map |
| **WhatsApp API** | — | Appointment booking via `wa.me` |

---

## 📁 Project Structure

```
javardikar_dental_clinic/
├── public/                  # Static assets
├── src/
│   ├── assets/
│   │   └── images/          # Doctor photo and other images
│   ├── components/          # Shared/reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx
│   │   ├── AppointmentBanner.jsx
│   │   ├── TestimonialSlider.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   └── ScrollTopButton.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollReveal.js   # Intersection Observer scroll animations
│   │   └── useCounter.js        # Animated number counter
│   ├── pages/               # Route-level pages
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── sections/            # Home page sections
│   │   ├── HeroSection.jsx
│   │   ├── StatsBar.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── DoctorTeaser.jsx
│   │   └── ProcessSteps.jsx
│   ├── styles/              # Global CSS files
│   │   ├── style.css            # Design tokens & base styles
│   │   ├── components.css       # Component-level styles
│   │   └── animations.css       # Scroll reveal & micro-animations
│   ├── App.jsx              # Root component with router & layout
│   ├── App.css
│   ├── index.css
│   └── main.jsx             # React entry point
├── vercel.json              # Vercel SPA rewrite rules
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/javardikar-dental-clinic.git

# 2. Navigate into the project
cd javardikar-dental-clinic

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start local dev server with HMR |
| Build | `npm run build` | Build production bundle to `dist/` |
| Preview | `npm run preview` | Preview production build locally |
| Lint | `npm run lint` | Run ESLint |

---

## ☁️ Deployment (Vercel)

This project is configured for **zero-config deployment on Vercel**.

The `vercel.json` file handles client-side routing (so routes like `/services`, `/about` don't 404 on refresh):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Steps to Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "initial commit"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click **Add New Project** → Import your GitHub repo

3. **Build Settings** (auto-detected ✅)
   | Setting | Value |
   |---|---|
   | Framework | Vite |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |

4. **Click Deploy** — done! 🎉

Every push to `main` auto-deploys.

---

## 📞 Contact

**Dr. Manthan P. Javardikar**
- 🏥 Shikshak Colony, D.P. Road, Anjangaon Surji, Dist. Amravati, Maharashtra
- 📱 [8308465188](tel:+918308465188)
- 📱 [9404338713](tel:+919404338713)
- 💬 [WhatsApp](https://wa.me/918308465188)
- 🕐 Mon–Fri: 9 AM – 7 PM | Sat: 9 AM – 6 PM | Sun: 9 AM – 1 PM

---

<div align="center">

Made with ❤️ for **डॉ. जवर्डीकर दातांचा दवाखाना**

</div>
