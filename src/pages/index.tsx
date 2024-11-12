// @ts-ignore

import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { RocketLaunchIcon, LockClosedIcon, ArrowPathIcon, CircleStackIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import Benefits from '@/components/Benefits';
import benefitsForDevelopers from '@/utils/benefitsForDevelopers';
import benefitsForUsers from '@/utils/benefitsForUsers';
import Script from 'next/script'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { JetBrains_Mono, Lora } from 'next/font/google'; // Update font imports
import CodeBlock from '@/components/CodeBlock';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] }); // Initialize JetBrains Mono
const lora = Lora({ subsets: ['latin'] }); // Initialize Lora

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic Database</title>
        <meta name="description" content="The database for a frictionless, user-owned web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" data-domain="basic.tech" src="https://plausible.io/js/script.js" />
      <main className="flex flex-col items-center">
        <div className="w-full">
          <HeroSection />
          <ProductsSection />
          <WhyBasicSection />
          <Benefits benefits={benefitsForDevelopers} title={"Basic-ally better for developers 📱"} />
          <PrivacySection />
          <Benefits benefits={benefitsForUsers} title={"Also better for users 👯"} />
          <Footer />
        </div>
      </main>
    </>
  )
}

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar bg-opacity-20 absolute top-0 left-0 right-0 px-8 py-4 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <a className="btn btn-ghost normal-case text-xl text-white flex items-center" href="/">
            <Image alt="logo" width={32} height={32} src="/logo.png" className="mr-2" />
            <span>Basic</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white space-x-4 flex items-center">
            <li>
              <a className="btn btn-ghost" href='https://twitter.com/basic_db' target="_blank" rel="noreferrer">
                <Image alt="twitter" width={20} height={20} src="/icons/twitter.png" className="mr-2 hidden sm:inline" />
                <span className={isMobile ? 'hidden' : ''}>Connect with us</span>
                <span className={!isMobile ? 'hidden' : ''}>Connect</span>
              </a>
            </li>
            <li>
              <a href="https://docs.basic.tech/" target="_blank" rel="noreferrer" className="btn btn-ghost">Docs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const HeroSection = () => {
  const demoCode = `import { useBasic } from '@basictech/react';

function App() {
  const { db } = useBasic();
  
  db.collection('todos').add({
    title: 'My first todo',
    completed: false,
  });
}`;

  return (
    <section className='bg-black w-full' style={{ backgroundImage: `url('/bg.png')` }}>
      <div className="py-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[92vh]">
        <NavBar />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center mt-32 lg:mt-0">
          <div className="text-center lg:text-left lg:w-1/2">
            <div>
              <div
                className="inline-block mb-4 px-4 py-1.5 bg-black-700 text-white border border-white-300 rounded-full font-mono text-sm cursor-pointer w-[220px] text-center"
                onClick={() => {
                  navigator.clipboard.writeText('npm i @basictech/react');
                  const el = event?.target as HTMLElement;
                  const originalText = el.innerText;
                  el.innerText = 'Copied!';
                  setTimeout(() => {
                    el.innerText = originalText;
                  }, 700);
                }}
              >
                npm i @basictech/react

              </div>
              <p className="text-4xl font-medium font-mono tracking-tight text-white-100 leading-relaxed">
                Build on a frictionless, <br /> <strong className={`${lora.className} text-5xl text-white-500`}>user-owned cloud</strong> 🏆
              </p>
              <h3 className="max-w-xl mx-auto lg:mx-0 mt-4 text-lg tracking-tight text-white">
                Ship powerful apps with <i>built-in auth</i>, <i>realtime</i>, and <i>multi-device offline support</i> on Basic's user-owned Personal Data Stores
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
              <a
                href="https://airtable.com/shr5ALU6Ha9uBzErA"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary inline-flex items-center justify-center bg-white text-black py-2.5 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:bg-white-100 hover:text-black-800 shadow-lg hover:shadow-xl border-2 border-black hover:border-black-800"
              >
                <RocketLaunchIcon className="h-7 w-7 mr-3 animate-bounce" />
                <span className="relative flex items-center justify-center">
                  <span className="absolute -inset-1.5 bg-black opacity-20 rounded-full blur"></span>
                  <span className="relative">Request Early Access</span>
                </span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <CodeBlock code={demoCode} />
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductsSection = () => {
  const products = [
    {
      title: "Basic Auth",
      icon: <LockClosedIcon className="w-12 h-12 text-authmagenta-500" />,
      description: "With pre-built UI components, you get highly secure plug-and-play Auth and User Management via simple APIs or SDKs",
    },
    {
      title: "Basic DB",
      icon: <CircleStackIcon className="w-12 h-12 text-dbblue-500" />,
      description: "Build leaner apps with enhanced privacy and interoperability on Basic's open source, user-owned Personal Data Stores",
    },
    {
      title: "Basic Sync",
      icon: <ArrowPathIcon className="w-12 h-12 text-syncgreen-500" />,
      description: "Opt into Basic's local-first architecture for instant UI, offline support, and automatic multi-device sync",
    },
  ];

  return (
    <section className="bg-black py-4">
      <h2 className={`${jetbrainsMono.className} text-4xl font-bold text-white-100 mb-12 text-center leading-relaxed`}>
        Three <strong className={`${lora.className} text-5xl text-white-500`}>Basic</strong> products...
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black-800 rounded-lg shadow-lg p-8 w-full max-w-[320px]"
            >
              <div className="flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-white-100">{product.title}</h3>
              <p className="text-white text-center">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyBasicSection = () => {
  return (
    <section className="bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <h2 className={`${jetbrainsMono.className} text-4xl font-bold text-white-100 mb-6 mt-12 text-center leading-relaxed`}>
          ...for a <strong className={`${lora.className} text-5xl text-white-500`}>new</strong> ✨ way to build
        </h2>
        <div className="max-w-2xl mx-auto">
          <FadeInParagraph>
            {[
              "We're <strong>web enthusiasts</strong> frustrated with <i>walled gardens</i> 🥀 <i>lack of interoperability</i> 🔗 and the <i>security risks</i> 🚨 of apps today",
            ]}
          </FadeInParagraph>
          <FadeInParagraph>
            {[
              "We envisioned an internet with portable <i>personal data</i> 📊 that automatically <i>syncs across devices</i> ☁️ and shares securely.",
              "Where developers could easily build <i>collaborative and offline-capable apps</i> 👏🏽 without worrying about <i>data privacy</i> 🔐"
            ]}
          </FadeInParagraph>
          <FadeInParagraph>
            {["We dreamt of a <strong>frictionless, user-owned web</strong> 🌐"]}
          </FadeInParagraph>
          <FadeInParagraph>
            {["So we built <strong>Basic</strong>."]}
          </FadeInParagraph>
        </div>
      </div>
    </section>
  )
}

const FadeInParagraph = ({ children }: { children: Array<string> }) => {
  return (
    <p className="text-2xl text-white mb-8 mt-12 leading-relaxed">
      {children.map((sentence: string, index: number) => (
        <FadeInSentence key={index}>{sentence}</FadeInSentence>
      ))}
    </p>
  );
};

const FadeInSentence = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '10% 0px -40% 0px'
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: inView ? 1 : 0.3 }}
      transition={{ duration: 0.3 }}
      dangerouslySetInnerHTML={{ __html: children + ' ' }}
    />
  );
};

const PrivacySection = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-black-800 p-6 sm:p-12 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mb-8 sm:mb-0 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2 className={`${jetbrainsMono.className} text-2xl text-white-300 mb-6`}>🔍 Secured by Basic 🔍</h2>
              <p className="text-white mb-8">
                Basic creates personal data stores for every user, which apps can access if given permission.
                Sensitive data never touches the developer servers, and users always own their data.
              </p>
              <a href="https://docs.basic.tech" target="_blank" rel="noopener noreferrer"
                className="btn bg-black-700 text-white border-2 border-white-300 hover:bg-black-600 hover:border-white transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-md hover:shadow-lg px-6 py-2 rounded-full font-semibold">
                📖 Read the Docs
              </a>
            </div>
            <div className="hidden sm:block w-full sm:w-1/2 pl-0 sm:pl-8">
              <div className="text-center mb-12">
                <h3 className="text-base text-white-300 font-mono mb-4">Traditional apps:</h3>
                <Image src="/traditional.png" alt="Traditional apps diagram" className="mx-auto max-w-full" width={300} height={300} />
              </div>
              <div className="text-center">
                <h3 className="text-base text-white-300 font-mono mb-4">Basic apps:</h3>
                <Image src="/diagram_2.png" alt="Basic apps diagram" className="mx-auto max-w-full" width={320} height={320} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-white py-6 dark:bg-black">
      <hr className="border-t border-white-200 mb-6" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Image alt="logo" width={32} height={32} src="/logo.png" className="mr-2" />
            <span className="text-xl font-semibold text-black dark:text-white">Basic</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com/basic_db" target="_blank" rel="noreferrer" className="text-black-600 dark:text-white-400 hover:text-black-900 dark:hover:text-white-100">Twitter</a>
            <a href="https://airtable.com/shr5ALU6Ha9uBzErA" target="_blank" rel="noreferrer" className="text-black-600 dark:text-white-400 hover:text-black-900 dark:hover:text-white-100">Waitlist</a>
            <a href="https://docs.basic.tech" target="_blank" rel="noreferrer" className="text-black-600 dark:text-white-400 hover:text-black-900 dark:hover:text-white-100">Docs</a>
          </div>
          <div className="text-black-500 dark:text-white-500">
            © {new Date().getFullYear()} Basic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}