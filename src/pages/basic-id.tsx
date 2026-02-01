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
    backgroundSize: '40px 40px',
    backgroundAttachment: 'fixed'
  }
};

// Navigation Component
function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center p-4 md:p-6 relative">
      <Link href="/" className="flex items-center gap-2 md:gap-3 group">
        <div 
          className="w-8 h-8 md:w-10 md:h-10 bg-black text-white flex items-center justify-center font-bold text-xl md:text-2xl font-display group-hover:opacity-70 transition-opacity duration-300"
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
          className="text-sm text-gray-500 hover:text-black transition-colors hidden sm:inline"
        >
          Docs
        </a>
        <Link href="/about" className="text-sm text-gray-500 hover:text-black transition-colors hidden sm:inline">
          About
        </Link>
        <a 
          href="https://basic.id" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-black text-white px-4 py-2 text-sm hover:opacity-70 transition-opacity"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

// Animated Circles Visual
function CirclesVisual() {
  return (
    <div className="relative w-40 h-40 md:w-56 md:h-56">
      <div className="absolute inset-0 bg-gray-400 rounded-full mix-blend-multiply opacity-60" />
      <div className="absolute inset-0 bg-gray-500 rounded-full mix-blend-multiply opacity-60 translate-x-6" />
      <div className="absolute inset-0 bg-gray-600 rounded-full mix-blend-multiply opacity-60 translate-y-4" />
    </div>
  );
}

export default function BasicIdPage() {
  // Inject custom fonts
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
      .font-hero { font-family: 'Space Grotesk', sans-serif; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Head>
        <title>basic.id — Your Personal Data Store</title>
        <meta name="description" content="One place for all your data. You own it." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="basic.id — Your Personal Data Store" />
        <meta property="og:description" content="One place for all your data. You own it." />
        <meta property="og:image" content="https://basic.tech/landing-image.webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="basic.id — Your Personal Data Store" />
        <meta name="twitter:description" content="One place for all your data. You own it." />
        <meta name="twitter:image" content="https://basic.tech/landing-image.webp" />
      </Head>

      <div className="bg-[#e6e6e6] text-black min-h-screen" style={styles.gridBg}>
        <Navigation />
        
        <main>
          {/* Hero */}
          <section className="px-4 md:px-12 lg:px-24 pt-16 md:pt-32 pb-20 md:pb-40">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="flex-1 text-center lg:text-left">
                  <p className="font-mono text-xs text-gray-400 mb-4">beta</p>
                  
                  <h1 className="text-5xl md:text-7xl font-black tracking-tight font-hero mb-6">
                    basic.id
                  </h1>
                  
                  <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                    One place for all your data. You own it.
                  </p>
                  
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a 
                      href="https://basic.id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-black text-white text-sm hover:opacity-70 transition-opacity"
                    >
                      Get Started
                    </a>
                    <a 
                      href="https://docs.basic.tech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      Documentation →
                    </a>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <CirclesVisual />
                </div>
              </div>
            </div>
          </section>

          {/* What */}
          <section className="px-4 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Your personal data store
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                basic.id is where your files, preferences, and context live together. 
                Apps connect to it with your permission, but they never own your data. 
                When you switch apps, everything stays with you.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="px-4 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div>
                  <h3 className="font-bold mb-2">User-owned</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Your data lives in your personal store. No more renting space.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Portable</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Take your data anywhere. Switch apps without starting over.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Private</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    End-to-end encrypted. You control who sees what.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Local-first</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Works offline, syncs when connected. Always fast.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Universal context</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    All your files and history in one place for apps to use.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Open standard</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Built on open protocols. No vendor lock-in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How */}
          <section className="px-4 md:px-12 lg:px-24 py-20 md:py-32 bg-black text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
                How it works
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="font-mono text-gray-500 text-sm">01</span>
                  <div>
                    <h3 className="font-bold mb-1">Create your basic.id</h3>
                    <p className="text-gray-400 text-sm">Sign up and get your personal data store.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="font-mono text-gray-500 text-sm">02</span>
                  <div>
                    <h3 className="font-bold mb-1">Add your data</h3>
                    <p className="text-gray-400 text-sm">Import files or start fresh. Syncs across devices.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="font-mono text-gray-500 text-sm">03</span>
                  <div>
                    <h3 className="font-bold mb-1">Connect apps</h3>
                    <p className="text-gray-400 text-sm">Apps use your data with permission, never own it.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-4 md:px-12 lg:px-24 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Own your data
              </h2>
              <p className="text-gray-500 mb-8">
                Get started with basic.id today.
              </p>
              <a 
                href="https://basic.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-white text-sm hover:opacity-70 transition-opacity"
              >
                Create your basic.id
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="px-4 md:px-12 lg:px-24 py-6 border-t border-black/5">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <span className="text-xs text-gray-400">© Basic Studio Inc.</span>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="https://docs.basic.tech" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Docs</a>
              <a href="https://discord.gg/PuWD3zhsCk" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
