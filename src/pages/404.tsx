import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

// Styles
const styles = {
  clipNotch: {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
  },
  gridBg: {
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
    backgroundSize: '40px 40px'
  }
};

export default function Custom404() {
  // Inject custom fonts
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
      
      .font-hero {
        font-family: 'Space Grotesk', sans-serif;
      }

      @keyframes scan {
        0% { top: 0%; }
        100% { top: 100%; }
      }

      .scanning-line {
        animation: scan 3s ease-in-out infinite;
      }

      @keyframes radar {
        0% { transform: scale(0.8); opacity: 1; }
        100% { transform: scale(1.5); opacity: 0; }
      }

      .radar-pulse {
        animation: radar 3s linear infinite;
      }

      .radar-pulse-delayed {
        animation: radar 3s linear infinite;
        animation-delay: 1s;
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
        <title>404 - Page Not Found | Basic</title>
        <meta name="description" content="The requested page could not be found." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div 
        className="bg-[#e6e6e6] text-black min-h-screen flex flex-col relative"
        style={styles.gridBg}
      >
        {/* Navigation */}
        <nav className="w-full flex justify-between items-center p-4 md:p-6 z-20 relative">
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div 
              className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-2xl font-display group-hover:bg-[#FF4400] transition-colors duration-300"
              style={styles.clipNotch}
            >
              b
            </div>
            <span className="font-bold text-sm tracking-tight">basic</span>
          </Link>

          <div className="flex items-center gap-6">
            <a 
              href="https://docs.basic.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:inline"
            >
              Docs
            </a>
            <a 
              href="https://discord.gg/PuWD3zhsCk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-[#FF4400] transition-colors"
            >
              Join Discord
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center p-6 md:p-12">
          <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 block">
                //error 404
              </span>
              
              <h1 className="text-[20vw] md:text-[15vw] lg:text-[10rem] font-black leading-[0.85] font-hero tracking-tighter mb-6">
                404
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link 
                  href="/" 
                  className="px-6 py-3 bg-black text-white font-medium text-sm flex items-center gap-2 hover:bg-[#FF4400] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
                <button 
                  onClick={() => window.history.back()}
                  className="px-6 py-3 border border-black/20 font-medium text-sm hover:border-black transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>

            {/* Right - Radar Visual */}
            <div className="w-64 h-64 md:w-72 md:h-72 relative flex items-center justify-center">
              {/* Outer circle */}
              <div className="absolute inset-0 border border-black/10 rounded-full" />
              
              {/* Pulsing circles */}
              <div className="absolute inset-4 border border-black/5 rounded-full radar-pulse" />
              <div className="absolute inset-8 border border-black/5 rounded-full radar-pulse-delayed" />
              
              {/* Crosshairs */}
              <div className="w-[1px] h-full bg-black/10 absolute left-1/2 -translate-x-1/2" />
              <div className="h-[1px] w-full bg-black/10 absolute top-1/2 -translate-y-1/2" />
              
              {/* Scanning line */}
              <div className="scanning-line w-full h-[1px] bg-[#FF4400]/60 absolute" />
              
              {/* Center dot */}
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              
              {/* Status text */}
              <div className="font-mono text-[10px] absolute bottom-12 uppercase tracking-widest text-gray-400">
                not found
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 md:p-6 flex justify-center">
          <span className="font-mono text-xs text-gray-400">
            © Basic Studio Inc.
          </span>
        </footer>
      </div>
    </>
  );
}
