import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Styles object for reusable CSS patterns
const styles = {
  clipNotch: {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
  },
  clipCornerTopRight: {
    clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'
  },
  gridBg: {
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
    backgroundSize: '40px 40px'
  },
  barcodeWhite: {
    background: 'repeating-linear-gradient(90deg, #fff, #fff 2px, transparent 2px, transparent 4px, #fff 4px, #fff 5px, transparent 5px, transparent 7px)'
  },
  dotPattern: {
    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  }
};

// Navigation Component
function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center p-4 md:p-6 relative">
      <Link href="/" className="flex items-center gap-2 md:gap-3 group">
        <div 
          className="w-8 h-8 md:w-10 md:h-10 bg-black text-white flex items-center justify-center font-bold text-xl md:text-2xl font-display group-hover:bg-[#FF4400] transition-colors duration-300"
          style={styles.clipNotch}
        >
          b
        </div>
        <span className="font-bold text-sm tracking-tight hidden sm:inline">basic</span>
      </Link>

      <div className="flex items-center gap-4 md:gap-8">
        <a 
          href="https://docs.basic.tech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:inline"
        >
          Docs
        </a>
        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:inline">
          About
        </Link>
        <a 
          href="https://discord.gg/PuWD3zhsCk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium hover:bg-[#FF4400] transition-colors"
        >
          Join Discord
        </a>
      </div>
    </nav>
  );
}

// Corner Accents Component
function CornerAccents({ hoverColor }: { hoverColor: string }) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gray-300 group-hover:${hoverColor} transition-colors pointer-events-none`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-gray-300 group-hover:${hoverColor} transition-colors pointer-events-none`} />
    </>
  );
}

// Spaces Card Component
function SpacesCard() {
  return (
    <div className="h-full w-full p-6 flex flex-col bg-[#f5f5f5] border border-black/5">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs font-bold text-gray-400">bt.01</span>
        <a 
          href="https://spaces.fun" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-xs text-gray-400 hover:text-[#DB2777] transition-colors"
        >
          spaces.fun ↗
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-2 border-[#DB2777]/20 rounded-full" />
          <div className="absolute inset-4 border-2 border-[#DB2777]/40 rounded-full" />
          <div className="absolute inset-8 bg-[#DB2777] rounded-full group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>

      <div>
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">//early access</span>
        <h2 className="text-4xl font-black tracking-tighter font-display text-black mb-2">spaces</h2>
        <p className="font-mono text-xs text-gray-500">
          a new agentic interface for your digital life. your own ai operating system.
        </p>
      </div>
    </div>
  );
}

// Basic.id Card Component
function BasicIdCard() {
  return (
    <div className="h-full w-full p-6 flex flex-col bg-[#f8f8f5] border border-black/5">
      <div className="flex justify-between items-start">
        <span className="font-mono text-xs font-bold text-gray-400">bt.02</span>
        <a 
          href="https://basic.id" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-xs text-gray-400 hover:text-[#FF4400] transition-colors"
        >
          basic.id ↗
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-orange-500 rounded-full mix-blend-multiply opacity-80 group-hover:translate-x-3 transition-transform duration-500" />
          <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-multiply opacity-80 translate-x-6 group-hover:-translate-x-3 transition-transform duration-500" />
          <div className="absolute inset-0 bg-pink-500 rounded-full mix-blend-multiply opacity-80 translate-y-3 group-hover:-translate-y-3 transition-transform duration-500" />
        </div>
      </div>

      <div>
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">//beta</span>
        <h2 className="text-4xl font-black tracking-tighter font-display text-black">basic.id</h2>
        <p className="font-mono text-xs text-gray-500 mt-2">
          a place for all your files, data, and context. your own personal cloud.
        </p>
      </div>
    </div>
  );
}

// Platform Card Component
function PlatformCard() {
  return (
    <div className="h-full w-full p-6 flex flex-col bg-[#f5f5f5] border border-black/5">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs font-bold text-gray-400">bt.03</span>
        <a 
          href="https://docs.basic.tech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-xs text-gray-400 hover:text-black transition-colors"
        >
          docs.basic.tech ↗
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#0a0a0a] rounded p-4">
          <div className="font-mono text-sm">
            <div className="text-white/30 mb-1">{"// init"}</div>
            <div className="text-white">
              <span className="text-emerald-400">import</span> {"{ "}
              <span className="text-blue-400">db</span>, <span className="text-blue-400">auth</span>, <span className="text-blue-400">sync</span>
              {" }"} <span className="text-emerald-400">from</span> <span className="text-amber-300">&apos;basic&apos;</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">//beta</span>
        <h2 className="text-3xl font-black tracking-tighter font-display text-black mb-2">platform</h2>
        <p className="text-gray-500 text-xs font-mono">
          a complete platform for building & deploying local-first software, built on open standards.
        </p>
      </div>
    </div>
  );
}

// Module Card Wrapper
function ModuleCard({ index }: { index: number }) {
  const cardStyles = [
    { bgOuter: '#e5e5e5', hoverBorder: 'border-[#DB2777]' },
    { bgOuter: '#e8e8e3', hoverBorder: 'border-orange-500' },
    { bgOuter: '#f5f5f5', hoverBorder: 'border-blue-500' }
  ];

  const { bgOuter, hoverBorder } = cardStyles[index];

  return (
    <div 
      className="group relative h-[450px] p-1 transition-transform hover:-translate-y-2 duration-300"
      style={{ backgroundColor: bgOuter }}
    >
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gray-300 group-hover:${hoverBorder} transition-colors pointer-events-none`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-gray-300 group-hover:${hoverBorder} transition-colors pointer-events-none`} />
      
      {index === 0 && <SpacesCard />}
      {index === 1 && <BasicIdCard />}
      {index === 2 && <PlatformCard />}
    </div>
  );
}

// Hero Section Component
function HeroSection({ currentWord }: { currentWord: string }) {
  return (
    <section className="w-full relative px-4 pt-8 pb-16 md:px-12 md:pt-24 md:pb-24 lg:px-24">
      {/* Side decoration */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-8 opacity-30 hidden xl:flex">
        <div className="w-[1px] h-32 bg-black" />
        <span 
          className="font-mono text-xs tracking-widest rotate-180" 
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL DOWN FOR DATA
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[14vw] md:text-[12vw] leading-[0.85] md:leading-[0.8] font-black lowercase font-hero mix-blend-darken text-black relative z-10 mt-8 md:mt-24">
          basic tech
          <a 
            href="https://discord.gg/PuWD3zhsCk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute -right-4 -top-[111px] hidden md:block group"
          >
            <svg className="w-20 h-20 animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
              </defs>
              <text 
                className="text-[10px] uppercase tracking-[0.3em] fill-gray-500 group-hover:fill-black transition-colors" 
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <textPath href="#circlePath">• join the basic community •</textPath>
              </text>
            </svg>
          </a>
        </h1>

        {/* Subtitle grid */}
        <div className="mt-8 md:mt-12 border-t-2 border-black pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:gap-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h2 className="text-xl md:text-3xl font-bold leading-tight">
                the personal<br className="hidden md:inline" /> computing<br className="hidden md:inline" /> company
              </h2>
              <div className="mt-4 md:mt-6 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-black" />
                <div className="w-3 h-3 rounded-sm bg-[#FF4400]" />
                <div className="w-3 h-3 bg-[#0066FF]" />
              </div>
            </div>
            
            <div className="md:w-2/3 flex flex-col justify-between">
              <p className="text-base md:text-xl font-mono font-normal leading-relaxed text-gray-500">
                we build products, tools, and standards to make computers more{' '}
                <span className="bg-[#00F0FF] px-1 transition-all duration-300 text-black">
                  {currentWord}.
                </span>
              </p>
              
              <div className="mt-6 md:mt-8 flex gap-4 items-center">
                <div className="h-[1px] bg-black flex-grow" />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">Scroll for Modules</span>
                <div className="w-4 h-4 border border-black rotate-45 flex items-center justify-center">
                  <div className="w-1 h-1 bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modules Section Component
function ModulesSection() {
  return (
    <section className="w-full bg-[#111] text-white relative py-20 px-6 md:px-12 lg:px-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={styles.dotPattern} />

      {/* Section header */}
      <div className="relative z-10 flex justify-between items-end mb-16 border-b border-white/20 pb-4 max-w-7xl mx-auto">
        <div>
          <span className="text-[#00F0FF] font-mono text-xs tracking-[0.3em] uppercase block mb-2">
            //Index
          </span>
          <h3 className="text-4xl font-bold font-display uppercase tracking-tight">What we do</h3>
        </div>
        <div className="hidden md:block text-right">
          <div 
            style={{ ...styles.barcodeWhite, width: '128px', height: '32px', opacity: 0.5, marginBottom: '4px' }} 
          />
          <span className="font-mono text-[10px] text-gray-500">SERIAL: 884-X-99</span>
        </div>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {[0, 1, 2].map((index) => (
          <ModuleCard key={index} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 font-mono text-xs max-w-7xl mx-auto">
        <div className="flex gap-8 mb-4 md:mb-0">
          <span>© Basic Studio Inc.</span>
          <span>Copyright 2026</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white hover:underline decoration-cyan-500 underline-offset-4">
            TERMS
          </a>
          <a href="#" className="hover:text-white hover:underline decoration-cyan-500 underline-offset-4">
            PRIVACY
          </a>
          <Link href="/about" className="hover:text-white hover:underline decoration-cyan-500 underline-offset-4">
            ABOUT
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  const rotatingWords = ['personal', 'local-first', 'collaborative', 'humane', 'malleable', 'private'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Inject custom fonts
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;800;900&display=swap');
      
      body {
        font-family: 'Space Grotesk', sans-serif;
      }
      .font-mono {
        font-family: 'JetBrains Mono', monospace;
      }
      .font-display {
        font-family: 'Inter', sans-serif;
      }
      .font-hero {
        font-family: 'Audiowide', sans-serif;
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin 15s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Basic | The Personal Computing Platform</title>
        <meta name="description" content="We build products, tools, and standards to make computers more personal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e6e6e6" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Basic | The Personal Computing Platform" />
        <meta property="og:description" content="We build products, tools, and standards to make computers more personal." />
        <meta property="og:image" content="https://basic.tech/landing-image.webp" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Basic | The Personal Computing Platform" />
        <meta name="twitter:description" content="We build products, tools, and standards to make computers more personal." />
        <meta name="twitter:image" content="https://basic.tech/landing-image.webp" />
      </Head>

      <div 
        className="bg-[#e6e6e6] text-black min-h-screen"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navigation />
        <main>
          <HeroSection currentWord={rotatingWords[currentWordIndex]} />
          <ModulesSection />
        </main>
      </div>
    </>
  );
}
