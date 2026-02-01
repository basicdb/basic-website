import React, { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const customStyles = {
  clipNotch: {
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
  },
  gridBg: {
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
    backgroundSize: '40px 40px'
  }
};

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 z-10 relative">
      <Link href="/" className="flex items-center gap-3 group">
        <div 
          className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-2xl font-display group-hover:bg-[#FF4400] transition-colors duration-300"
          style={customStyles.clipNotch}
        >
          b
        </div>
        <span className="font-bold text-sm tracking-tight">basic</span>
      </Link>

      <div className="flex items-center gap-8">
        <a href="https://docs.basic.tech" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Docs</a>
        <Link href="/about" className="text-sm font-medium text-black transition-colors">About</Link>
        <a href="https://discord.gg/PuWD3zhsCk" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-[#FF4400] transition-colors">
          Join Discord
        </a>
      </div>
    </nav>
  );
};

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="absolute inset-0 pointer-events-none z-0 fixed" style={customStyles.gridBg}></div>

      <Navigation />

      <main className="w-full flex-grow flex flex-col z-10">
        <section className="w-full relative px-6 pt-16 pb-24 md:px-12 md:pt-24 lg:px-24">
          <div className="relative max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">//about</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter font-hero lowercase text-black mt-2">
                Basic is the platform for personal computing
              </h1>
            </div>

            {/* Intro */}
            <div className="space-y-6 mb-16">
              <p className="text-xl text-gray-600 leading-relaxed">
                The next 1 billion apps will be different. They will be built at exponentially faster rates using newer tools, and by a broader range of people. Yet one thing will remain the same — the best of them will still feel like magic.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                However, the future of the web can&apos;t be built on the platforms of the past - on walled gardens, centralized clouds, and rigid structures that own your data.
              </p>
            </div>

            {/* Principles Header */}
            <div className="border-t-2 border-black pt-8 mb-12">
              <p className="font-mono text-sm text-gray-500 italic">
                Basic is built on three core principles:
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-12 mb-16">
              {/* Principle 1 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-gray-400">01</span>
                  <h2 className="text-2xl font-black tracking-tight">Personal Software & AI</h2>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  The next generation of software won&apos;t be about centralizing data, but about utilizing users&apos; own context & memory to build apps and agents that understand them. Developers shouldn&apos;t have to stitch data together across a dozen platforms - they should just build great experiences that plug right into the user&apos;s world.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-gray-400">02</span>
                  <h2 className="text-2xl font-black tracking-tight">User-owned Data</h2>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  Your data should live with you, not be rented out to someone else&apos;s cloud. When users own their data, apps become portable, personal, and actually interoperable. Instead of platforms competing for lock-in, they compete on experience — and that&apos;s how software should be.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-gray-400">03</span>
                  <h2 className="text-2xl font-black tracking-tight">Realtime & Multiplayer</h2>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  Software is better when it&apos;s shared. Whether it&apos;s humans or AI agents, everyone should be able to collaborate in real time on the same source of truth - without conflicts, lag, or version hell. Realtime sync turns static apps into living systems, where data, people, and context all work together.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="border-t border-gray-200 pt-12 space-y-6">
              <h2 className="text-2xl font-black tracking-tight">…and more!</h2>
              <p className="text-gray-600 leading-relaxed">
                Basic is built on these principles to help create a new kind of internet - one where users own their data, apps are personal, and collaboration is seamless. But most important, the future of the web will be created by <em>you</em>: like-minded builders who care about the open web and personal computing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you&apos;d like to chat about building on Basic or working with us, join our Discord!
              </p>

              {/* CTA */}
              <div className="pt-8">
                <a 
                  href="https://discord.gg/M57gcazvYk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-mono text-sm font-bold hover:bg-[#FF4400] transition-colors"
                >
                  Join the Discord
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#111] text-white py-12 px-6 md:px-12 lg:px-24 mt-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 font-mono text-xs">
            <div className="flex gap-8 mb-4 md:mb-0">
              <span>© Basic Studio Inc.</span>
              <span>Copyright 2026</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default function About() {
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
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About | Basic</title>
        <meta name="description" content="Basic is the platform for personal computing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About | Basic" />
        <meta property="og:description" content="Basic is the platform for personal computing" />
        <meta property="og:image" content="https://basic.tech/landing-image.webp" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Basic" />
        <meta name="twitter:description" content="Basic is the platform for personal computing" />
        <meta name="twitter:image" content="https://basic.tech/landing-image.webp" />
      </Head>
      <div className="bg-[#e6e6e6] text-black w-full min-h-screen flex flex-col relative overflow-x-hidden">
        <AboutPage />
      </div>
    </>
  );
}
