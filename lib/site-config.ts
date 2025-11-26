// ============================================
// SITE CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

export const siteConfig = {
    // Live demo URL - This is the live example of the website
    liveDemoUrl: "https://free-photographer-portfolio-templat.vercel.app/",
    
    // Your name and tagline
    name: "Alexandra Chen",
    tagline: "Photographer",
  
    // Hero section
    hero: {
      greeting: "Hello, I'm Alexandra",
      headline: "I capture moments that tell stories",
      description:
        "Professional photographer based in San Francisco, specializing in portraits, landscapes, and automotive photography. Every frame is crafted to preserve the beauty of fleeting moments.",
    },
  
    // Navigation links
    nav: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  
    // CTA Button
    cta: {
      label: "Book a Session",
      href: "#contact",
    },
  
    // About section
    about: {
      title: "About",
      description: [
        "With over a decade of experience behind the lens, I've dedicated my career to capturing the extraordinary in everyday moments.",
        "My approach combines technical precision with artistic intuition, ensuring each photograph tells a compelling story while maintaining the authenticity of the subject.",
        "Whether it's the raw emotion of a portrait, the grandeur of a landscape, or the sleek lines of an automobile, I bring the same passion and attention to detail to every project.",
      ],
      stats: [
        { value: "10+", label: "Years Experience" },
        { value: "500+", label: "Projects Completed" },
        { value: "50+", label: "Happy Clients" },
      ],
    },
  
    // Contact section
    contact: {
      title: "Let's Create Together",
      description:
        "Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work together.",
      email: "hello@ogjayp.com",
      socials: [
        { platform: "Instagram", handle: "@alexchen.photo", href: "https://instagram.com" },
        { platform: "LinkedIn", handle: "Alexandra Chen", href: "https://linkedin.com" },
      ],
    },
  
    // Footer
    footer: {
      copyright: "Alexandra Chen Photography",
    },
  }
  
  // Portfolio categories and images
  // Replace placeholder URLs with your own images
  export const portfolioItems = [
    {
      id: 1,
      title: "Mountain Sunrise",
      category: "Landscape",
      image: "/dramatic-mountain-sunrise-landscape-photography-go.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Urban Portrait",
      category: "Portrait",
      image: "/professional-portrait-photography-urban-setting-na.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Classic Porsche",
      category: "Automotive",
      image: "/vintage-porsche-911-automotive-photography-moody-l.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Coastal Serenity",
      category: "Landscape",
      image: "/serene-coastal-landscape-photography-long-exposure.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Studio Session",
      category: "Portrait",
      image: "/studio-portrait-photography-dramatic-lighting-prof.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Vintage Ferrari",
      category: "Automotive",
      image: "/classic-ferrari-automotive-photography-detail-shot.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "Desert Dunes",
      category: "Landscape",
      image: "/desert-sand-dunes-landscape-photography-minimalist.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Candid Moment",
      category: "Portrait",
      image: "/candid-portrait-photography-natural-moment-lifesty.jpg",
      featured: false,
    },
  ]
  
  export const categories = ["All", "Portrait", "Landscape", "Automotive"]
  