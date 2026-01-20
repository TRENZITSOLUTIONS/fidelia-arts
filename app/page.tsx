"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Diamond } from "lucide-react";
import Image from "next/image";

// --- DATA ---
const ART_PIECES = [
  {
    id: 1,
    title: "The Silent Vow",
    artist: "Unknown Entity",
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200&auto=format&fit=crop",
    desc: "Oil on canvas, circa 1890. Recovered."
  },
  {
    id: 2,
    title: "Neon Genesis",
    artist: "Fidelia Collective",
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    desc: "Digital Sculpture, 2024. Available."
  },
  {
    id: 3,
    title: "Liquid Chroma",
    artist: "Elena V.",
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
    desc: "Mixed media. The chaos of silence."
  },
  {
    id: 4,
    title: "The Fallen King",
    artist: "Roman Revival",
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200&auto=format&fit=crop",
    desc: "Restored bust. Heavy distortion."
  },
];

// --- COMPONENTS ---

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
};

const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[50] opacity-20 mix-blend-overlay">
    <svg className="w-full h-full">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

export default function FideliaArts() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-neutral-950 text-neutral-200 min-h-[400vh] selection:bg-purple-500 selection:text-white font-sans cursor-none overflow-x-hidden">
      <CustomCursor />
      <GrainOverlay />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[100] mix-blend-difference">
        <div className="flex items-center gap-2">
          <Diamond className="w-4 h-4 text-purple-400" />
          <span className="tracking-[0.5em] text-sm font-bold">FIDELIA</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          <a href="#vault" className="hover:text-purple-400 transition-colors">The Vault</a>
          <a href="#collection" className="hover:text-purple-400 transition-colors">Collection</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}>
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-serif italic mix-blend-overlay opacity-80">Fidelia</h1>
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">ARTS</h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-8 text-xs md:text-base uppercase tracking-[0.3em] text-neutral-500">
            Where Trade Meets Transcendence
          </motion.p>
        </motion.div>
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse"></div>
        </div>
      </section>

      {/* --- MANIFESTO STRIP --- */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden z-20">
        <div className="whitespace-nowrap flex overflow-hidden">
          <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }} className="flex gap-16 items-center">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-6xl md:text-8xl font-serif italic text-white/10">Curating the Sublime</span>
                <Diamond className="w-6 h-6 md:w-8 md:h-8 text-purple-500/50" />
                <span className="text-6xl md:text-8xl font-bold uppercase text-white/20">Art Collection</span>
                <Diamond className="w-6 h-6 md:w-8 md:h-8 text-purple-500/50" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- RE-DESIGNED VAULT HEADER --- */}
      <section id="vault" className="relative pt-24 md:pt-32 px-6 md:px-32 z-10 w-full">
        <div className="relative border-t border-white/20 pt-10">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "100%" }} 
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <div className="relative w-full md:w-auto">
              <div className="flex flex-col md:block items-center md:items-start text-center md:text-left">
                  <span className="md:absolute md:-top-12 md:left-2 text-[10px] uppercase tracking-[0.4em] text-neutral-500 flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-0">
                    <div className="w-2 h-2 bg-purple-500 animate-pulse rounded-full" />
                    Live Collection
                  </span>
                  <h2 className="text-[15vw] leading-[0.8] font-serif italic text-white mix-blend-difference">
                    The
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-4 w-full">
                    <h2 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-white">
                      VAULT
                    </h2>
                    <div className="h-[1px] w-20 bg-white/20 hidden md:block"></div>
                    <div className="hidden md:flex flex-col items-end text-right">
                        <span className="text-xs uppercase tracking-widest text-neutral-500">Assets</span>
                        <span className="text-4xl font-mono">004</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-[400px] border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-2 md:pl-8 pb-2">
                <p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed text-center md:text-left">
                    We are currently acquiring rare digital and physical artifacts. The collection is fluid. Items marked "Acquiring" may become available at any moment.
                </p>
            </div>
          </div>
        </div>

        <div id="collection" className="flex flex-col gap-24 md:gap-40 mt-20 md:mt-32">
          {ART_PIECES.map((art, index) => (
            <ParallaxArtCard key={art.id} art={art} index={index} />
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="min-h-screen relative flex flex-col items-center justify-center border-t border-white/10 bg-neutral-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] bg-purple-900/20 rounded-full blur-[100px] md:blur-[150px] animate-pulse"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-0 max-w-[95vw] md:max-w-[90vw]">
            <div className="text-center mb-8 md:mb-10">
                <span className="inline-block py-1 px-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md">
                    Membership Open
                </span>
            </div>

            <div className="flex flex-col items-center justify-center leading-none text-center">
                <span className="text-[5vw] md:text-[3vw] font-light tracking-[0.5em] md:tracking-[1em] uppercase text-neutral-400 mb-2 md:mb-4">
                    Join The
                </span>
                
                <h2 className="text-[16vw] md:text-[15vw] font-bold tracking-tighter text-transparent relative group cursor-default w-full text-center">
                    <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:2px_rgba(168,85,247,0.8)] transition-all duration-500 z-10">
                        EXCHANGE
                    </span>
                    <span className="relative z-20 bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-purple-500/20 group-hover:to-transparent transition-all duration-500">
                        EXCHANGE
                    </span>
                </h2>
            </div>

            <p className="text-center text-neutral-300 max-w-xl mx-auto mt-8 md:mt-12 mb-12 md:mb-16 font-light leading-relaxed text-sm md:text-base px-4">
                Fidelia Arts showcases a curated collection of extraordinary artworks and artistic expressions.
            </p>
        </div>
      </section>

      {/* --- CONTACT SECTION (FIXED: CENTERED STACK) --- */}
      <section id="contact" className="relative py-24 md:py-32 px-4 border-t border-white/10 bg-neutral-950 z-10 flex flex-col justify-center items-center">
        
        <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md mb-4">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">Contact Us</h2>
        </div>
          
        {/* Stacked Layout for Perfect Alignment */}
        <div className="flex flex-col gap-10 text-center items-center w-full">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Email</p>
              <a href="mailto:Fideliagallery@gmail.com" className="text-xl md:text-3xl text-white hover:text-purple-400 transition-colors font-serif italic">
                Fideliagallery@gmail.com
              </a>
            </div>
            
            <div className="w-12 h-px bg-white/20"></div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Phone</p>
              <a href="tel:+919363608225" className="text-xl md:text-3xl text-white hover:text-purple-400 transition-colors font-serif italic">
                +91 93636 08225
              </a>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-8 text-[10px] uppercase tracking-widest text-neutral-600 bg-neutral-950 z-20 relative gap-6 md:gap-0">
        <div className="text-center md:text-left">
             Fidelia Arts <span className="mx-2">//</span> Est. 2026
        </div>
        <div className="flex gap-8">
            
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS (FIXED NUMBERING) ---

function ParallaxArtCard({ art, index }: { art: any; index: number }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]); 
    const rotate = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-2, 2] : [2, -2]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    // FIXED: Positioning numbers relative to the SCREEN edge (opposite to image) so they can't be covered
    const isEven = index % 2 === 0;

    return (
        <div ref={cardRef} className={`flex ${isEven ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} relative group px-0 md:px-10`}>
            
            {/* NUMBERING: Moved completely outside the image container */}
            <div 
                className={`
                    hidden md:block 
                    absolute top-1/2 -translate-y-1/2 
                    text-[12rem] font-bold text-white/5 select-none font-serif italic pointer-events-none
                    ${isEven ? 'right-0 lg:right-10' : 'left-0 lg:left-10'}
                `}
            >
                {String(art.id).padStart(2, '0')}
            </div>

            <motion.div style={{ y, rotate, scale }} className="relative w-[90vw] md:w-[55vw] h-[50vh] md:h-[70vh] bg-neutral-900 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out border border-white/5 z-10">
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 z-20 transition-colors duration-300 mix-blend-overlay"></div>
                <Image src={art.src} alt={art.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out" />
                
                {/* Hover Reveal Details */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-neutral-950/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30 border-t border-white/10">
                    <div>
                        <h3 className="text-xl md:text-2xl font-serif italic text-white">{art.title}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-purple-400 mt-1">{art.artist}</p>
                        <p className="text-sm text-neutral-300 mt-2">{art.desc}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}