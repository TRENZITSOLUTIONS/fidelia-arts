# Fidelia Arts - Premier Art Gallery Website

A mesmerizing, animated art gallery website built with Next.js, featuring stunning visual effects, smooth animations, and a unique artistic design.

## Features

- 🎨 **Stunning Visual Design** - The website itself is a work of art with mesmerizing effects
- ✨ **Smooth Animations** - Powered by Framer Motion for fluid, engaging interactions
- 🖼️ **Art Gallery** - Beautiful grid layout showcasing curated artworks
- 💰 **Buy & Sell** - Dedicated sections for purchasing and selling art
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎭 **Glass Morphism** - Modern UI with glassmorphic design elements
- 🌟 **Gradient Effects** - Beautiful gold gradients and glow effects
- ⚡ **Performance Optimized** - Next.js Image optimization for fast loading

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd fidelia-arts
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
fidelia-arts/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── ArtGallery.tsx  # Art gallery grid
│   ├── BuySell.tsx     # Buy/Sell sections
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Customization

### Art Images

Currently using Unsplash images. To replace with your own:
1. Update image URLs in `components/ArtGallery.tsx`
2. Add your images to `public/` folder
3. Update `next.config.ts` if using external domains

### Colors

Main color scheme is defined in `app/globals.css`:
- Gold/Accent: `#d4af37`
- Background: `#0a0a0a` (dark)
- Foreground: `#ededed` (light)

### Animations

All animations are powered by Framer Motion. Customize in individual component files.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is created for Fidelia Arts gallery.
# fidelia-arts
# FIDELIA-ARTS
