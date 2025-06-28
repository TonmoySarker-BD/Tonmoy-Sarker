
# Tonmoy Sarker - Portfolio Website

![Portfolio Preview](https://i.postimg.cc/8zQJvW1k/portfolio-preview.png)

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing my skills, projects, education, and contact information.

## 🚀 Features

✔ **Modern UI/UX** – Dark theme with gradient accents  
✔ **Responsive Design** – Works on mobile, tablet & desktop  
✔ **Interactive Animations** – Smooth transitions using Framer Motion  
✔ **Project Showcase** – Auto-scrolling project images  
✔ **Contact Form** – Functional email submission via EmailJS  
✔ **Dynamic Skills Section** – Circular progress meters  
✔ **Sticky Navbar** – With active section highlighting  
✔ **Scroll Animations** – Smooth in-view animations  
✔ **SEO-Friendly** – Clean structure and proper semantic elements

## 🛠 Tech Stack

**Frontend**: React, Tailwind CSS, DaisyUI  
**Animations**: Framer Motion  
**Icons**: React Icons  
**Form Handling**: EmailJS, React Hook Form  
**Deployment**: Firebase Hosting 
**Version Control**: Git, GitHub

## 📂 Project Structure

```
src/
├── components/
│   ├── Home/              # Main homepage components
│   │   ├── ContactSection.jsx # Contact form & info
│   │   ├── EducationSection.jsx # Education timeline
│   │   ├── HeroSection.jsx # Hero section with intro
│   │   ├── ProjectsSection.jsx # Project showcase
│   │   ├── SkillsSection.jsx # Skills with progress bars
│   │   └── 
│   └── Shared/             # Reusable components
│       ├── Navbar.jsx      # Sticky navigation bar
│       ├── Footer.jsx      # Footer with social links
│       └── ScrollToTop.jsx  # Scroll to top button
├── App.js                 # Main app layout
└── index.js               # React entry point
```

## ⚡ Installation

Clone the repository:

```bash
git clone https://github.com/TonmoySarker-BD/Tonmoy-Sarker.git
cd Tonmoy-Sarker
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 🔧 Configuration

### 1. Personalize Content

- Update `projectsData` in `Projects.jsx`
- Modify `educationData` in `Education.jsx`
- Edit skills in `Skills.jsx`

### 2. Contact Form Setup

- Sign up at [EmailJS](https://www.emailjs.com/)
- Replace the credentials in `.env.local` file

```javascript
import emailjs from 'emailjs-com';

emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  data,
  import.meta.env.VITE_EMAILJS_USER_ID
)
```

### 3. Environment Variables

Create a `.env.local` file in root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## 🎨 Customization Tips

- **Change Colors**: Modify Tailwind gradient classes like `from-pink-500 to-violet-600`
- **Add Sections**: Duplicate and modify existing components
- **Optimize Images**: Compress using [TinyPNG](https://tinypng.com/)
- **Favicon & Title**: Update in `public/index.html`

## 🌐 Deployment

Easily deploy on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) with zero configuration.

## 🔗 Live Demo

👉 [Live Preview](https://tonmoysarker.com)


## 📄 License

MIT © [Tonmoy Sarker](https://github.com/TonmoySarker-BD)

💡 Tip: Star ⭐ this repo if you find it useful!
## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

## 🙏 Acknowledgements

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [EmailJS](https://www.emailjs.com/) for email handling