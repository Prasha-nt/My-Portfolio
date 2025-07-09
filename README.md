# 🚀 Prashant Gupta 

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful glassmorphism design, smooth animations, and dark mode support.

[Portfolio Preview](https://my-portfolio-eight-fawn-90.vercel.app/)

## ✨ Features

- **🎨 Modern Design**: Glassmorphism effects with beautiful gradients and animations
- **🌙 Dark Mode**: Default dark theme with light mode toggle
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Smooth Animations**: Powered by Framer Motion for engaging user experience
- **🎯 Interactive Elements**: Hover effects, typewriter animation, and smooth scrolling
- **📧 Contact Form**: Working contact form with validation
- **💼 Project Showcase**: Beautiful gallery-style project display
- **🔧 Tech Stack Display**: Creative circular arrangement of technologies
- **📄 Resume Download**: Floating button for easy resume access

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/
│   └── images.ts           # Drive images
├── components/
│   ├── About.tsx           # About section with bio and tech stack
│   ├── Contact.tsx         # Contact form with validation
│   ├── Footer.tsx          # Footer with social links
│   ├── Header.tsx          # Navigation header with theme toggle
│   ├── Hero.tsx            # Landing section with typewriter effect
│   ├── Projects.tsx        # Project showcase gallery
│   ├── Services.tsx        # Services offered section
│   └── FloatingResumeButton.tsx  # Resume download button
├── contexts/
│   └── ThemeContext.tsx    # Theme management context
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   ```tsx
   // Update name and titles
   <h1>Hi, I'm Your Name</h1>
   const words = ['Your Title 1', 'Your Title 2', 'Your Title 3'];
   ```

2. **About Section** (`src/components/About.tsx`):
   - Replace profile image
   - Update bio text
   - Modify tech stack array

3. **Contact Section** (`src/components/Contact.tsx`):
   ```tsx
   // Update contact information
   const contactInfo = [
     { title: 'Email', info: 'your.email@example.com' },
     { title: 'Phone', info: 'your-phone-number' },
     { title: 'Location', info: 'Your Location' },
   ];
   ```

### Projects

Update the projects array in `src/components/Projects.tsx`:

```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'path-to-your-image',
    tech: ['React', 'TypeScript', 'etc'],
    liveUrl: 'https://your-live-site.com',
    codeUrl: 'https://github.com/your-repo',
    featured: true,
  },
  // Add more projects...
];
```

### Services

Modify the services array in `src/components/Services.tsx` to match your offerings.

### Colors and Styling

The design uses a consistent color scheme defined in Tailwind classes. Key colors:
- Primary: Blue (`blue-600`, `blue-500`)
- Secondary: Purple (`purple-600`, `purple-500`)
- Accent: Emerald (`emerald-500`)

## 📧 Contact Form Setup

The contact form includes client-side validation. To make it functional:

1. **Backend Integration**: Connect to your preferred backend service
2. **Email Service**: Integrate with EmailJS, Formspree, or similar
3. **API Endpoint**: Update the form submission handler in `Contact.tsx`

Example with EmailJS:
```bash
npm install @emailjs/browser
```

## 🚀 Deployment

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- ✅ Lazy loading for images
- ✅ Optimized animations with Framer Motion
- ✅ Efficient re-renders with React hooks
- ✅ Tailwind CSS purging for smaller bundle size
- ✅ Vite for fast development and building

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons


## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: prashantg29ta@gmail.com


---

⭐ **Star this repository if you found it helpful!**
