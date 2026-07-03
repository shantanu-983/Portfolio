# Shantanu Pandey — Portfolio

A modern, dark-themed personal portfolio website built with **React**, **Tailwind CSS**, and **Lucide Icons**.

## 🚀 Live Demo
> Deployed on Vercel — link will be added after deployment.

## 🛠️ Tech Stack
- React 18 (CDN)
- Tailwind CSS (CDN)
- Lucide Icons
- EmailJS (contact form → Gmail)

## 📬 Contact Form Setup (EmailJS)
1. Sign up free at [emailjs.com](https://www.emailjs.com)
2. Add **Gmail** as an Email Service
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, **Public Key**
5. Replace the placeholder values in `src/main.jsx` inside the `Contact` component

## 📁 Project Structure
```
Portfolio/
├── index.html       # Main HTML with CDN imports
├── style.css        # Custom CSS + glassmorphism
├── src/
│   └── main.jsx     # All React components
└── public/
    └── profile.png  # Profile photo
```
