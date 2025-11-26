# Free Photographer Portfolio Template

A beautiful, modern portfolio template designed specifically for photographers. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean, minimalist aesthetic that puts your work front and center
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast & Optimized** - Built with Next.js for optimal performance
- 🎯 **Easy to Customize** - All content managed through a single config file
- 📧 **Contact Form** - Ready-to-use contact form with no backend required

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ogjayp/photographer-portfolio-template.git
   cd photographer-portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Customize your content**
   - Open `lib/site-config.ts`
   - Update your name, tagline, contact information, and portfolio images
   - All content is managed in this single file

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Contact Form Setup

The contact form uses [FormSubmit](https://formsubmit.co), a free service that requires **no backend setup** or coding knowledge.

### Setup Steps:

1. **Update your email** in `lib/site-config.ts`:
   ```typescript
   contact: {
     email: "your-email@example.com", // Change this to your email
     // ...
   }
   ```

2. **Deploy your site** (to Vercel, Netlify, or any hosting service)

3. **Test the form** - Submit a test message from your live site

4. **Verify your email** - FormSubmit will send you a verification email on the first submission. Click the link to activate your form.

5. **That's it!** Your form will now receive submissions directly to your email inbox.

### FormSubmit Details:

- ✅ **Free to use** - No registration required
- ✅ **No registration required** - Just verify your email once
- ✅ **Spam protection** - Built-in honeypot protection
- ✅ **Privacy-friendly** - FormSubmit doesn't store your data
- ✅ **SSL encrypted** - All submissions are secure

## Customization

### Adding Your Portfolio Images

1. Add your images to the `public/` folder
2. Update the `portfolioItems` array in `lib/site-config.ts` with your image paths:
   ```typescript
   {
     id: 1,
     title: "Your Photo Title",
     category: "Portrait",
     image: "/your-image.jpg",
     featured: true,
   }
   ```

### Changing Colors & Styling

The template uses Tailwind CSS. You can customize colors and styles in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Individual component styling

### Site Configuration

All site content is managed in `lib/site-config.ts`:
- Name and tagline
- Hero section text
- About section content
- Contact information
- Social media links
- Portfolio items

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Next.js.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)

## Support

For issues or questions, please open an issue on GitHub.

## License

This template is open source and available for personal and commercial use. [MIT License](https://opensource.org/licenses/MIT)

