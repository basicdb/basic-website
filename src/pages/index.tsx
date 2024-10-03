// @ts-ignore


import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import Benefits from '@/components/Benefits';
import benefitsForDevelopers from '@/utils/benefitsForDevelopers';
import benefitsForUsers from '@/utils/benefitsForUsers';
import Script from 'next/script'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const inter = Inter({ subsets: ['latin'] })

const DATA = {
  title: "Basic Database",
  description: "The database for a frictionless, user-owned web",
  image: "/bg.png",
  url: "https://basic.tech"
}

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
        <div className="w-full max-w-7xl">
          <HeroSection />
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
  return (
    <div className="navbar bg-opacity-20 absolute top-0 left-0 right-0 px-4 py-4 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white" href="/">
            <Image alt="logo" width={32} height={32} src="/logo.png" className="mr-2" />
            Basic
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a className="btn btn-ghost" href='https://twitter.com/basic_db' target="_blank" rel="noreferrer">
                <Image alt="twitter" width={20} height={20} src="/icons/twitter.png" className="mr-2 hidden sm:inline" />
                <span className="sm:hidden">Connect</span>
                <span className="hidden sm:inline">Connect with us</span>
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
  return (
    <section className='bg-black w-full' style={{ backgroundImage: `url('/bg.png')` }}>
      <div className="py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <NavBar />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div>
              <p className="text-2xl font-medium font-mono tracking-tight text-white sm:text-4xl leading-relaxed">
                Frictionless, <br /> <strong style={{ fontSize: 48, color: '#FF00FF' }}>user-owned web</strong> 🏆
              </p>
              <h3 className="max-w-xl mx-auto lg:mx-0 mt-4 text-base tracking-tight text-gray-300" style={{ fontSize: 18 }}>
                Build high-performance apps that have a powerful sync engine, offline support, and user-owned data stores with Basic
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
              <a
                href="https://airtable.com/shr5ALU6Ha9uBzErA"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary inline-flex items-center justify-center bg-white text-black py-2.5 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:bg-gray-100 hover:text-gray-900 shadow-lg hover:shadow-xl border-2 border-black hover:border-gray-900"
              >
                <RocketLaunchIcon className="h-7 w-7 mr-3 animate-bounce" />
                <span className="relative flex items-center justify-center">
                  <span className="absolute -inset-1.5 bg-black opacity-20 rounded-full blur"></span>
                  <span className="relative">Request Early Access</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end">
            <Image
              alt="basic code snippet"
              width={500}
              height={500}
              src="/basic_snippet.png"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const WhyBasicSection = () => {
  return (
    <section className="bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-1 pb-24">
        <h2 className="text-4xl font-bold text-white mb-6 mt-12 text-center font-mono leading-relaxed">
          A <strong style={{ color: '#FF00FF' }}>new</strong> ✨ way to build
        </h2>
        <div className="max-w-2xl mx-auto">
          <FadeInParagraph>
            {[
              "We're <strong><u>web enthusiasts</u></strong> frustrated with <i>walled gardens</i> 🥀 <i>lack of interoperability</i> 🔗 and the <i>security risks</i> 🚨 of apps today",
            ]}
          </FadeInParagraph>
          <FadeInParagraph>
            {[
              "We envisioned an internet with portable <i>personal data</i> 📊 that automatically <i>syncs across devices</i> ☁️ and shares securely.",
              "Where developers could easily build <i>collaborative and offline-capable apps</i> 👏🏽 without worrying about <i>data privacy</i> 🔐"
            ]}
          </FadeInParagraph>
          {/* <FadeInParagraph>
            {[
              "Where developers could easily build <i>collaborative and offline-capable apps</i> 👏🏽",
              "without worrying about <i>data privacy</i> 🔐"
            ]}
          </FadeInParagraph> */}
          <FadeInParagraph>
            {["We dreamt of a <strong><u>frictionless, user-owned web</u></strong> 🌐"]}
          </FadeInParagraph>
          <FadeInParagraph>
            {["So we built <strong><u>Basic</u></strong>."]}
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
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#131315] p-6 sm:p-12 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mb-8 sm:mb-0 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2 className="text-2xl font-mono text-gray-200 mb-6">🔍 Secured by Basic 🔍</h2>
              <p className="text-gray-100 mb-8">
                Basic creates personal data stores for every user, which apps can access if given permission.
                Sensitive data never touches the developer servers, and users always own their data.
              </p>
              <a href="https://docs.basic.tech" target="_blank" rel="noopener noreferrer"
                className="btn bg-gray-800 text-white border-2 border-gray-300 hover:bg-gray-700 hover:border-white transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-md hover:shadow-lg px-6 py-2 rounded-full font-semibold">
                📖 Read the Docs
              </a>
            </div>
            <div className="hidden sm:block w-full sm:w-1/2 pl-0 sm:pl-8">
              <div className="text-center mb-12">
                <h3 className="text-base text-gray-300 font-mono mb-4">Traditional apps:</h3>
                <Image src="/traditional.png" alt="Traditional apps diagram" className="mx-auto max-w-full" width={300} height={300} />
              </div>
              <div className="text-center">
                <h3 className="text-base text-gray-300 font-mono mb-4">Basic apps:</h3>
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
    <footer className="bg-white py-6 dark:bg-gray-900">
      <hr className="border-t border-gray-200 mb-6" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Image alt="logo" width={32} height={32} src="/logo.png" className="mr-2" />
            <span className="text-xl font-semibold">Basic</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com/basic_db" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Twitter</a>
            <a href="https://airtable.com/shr5ALU6Ha9uBzErA" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Waitlist</a>
            <a href="https://docs.basic.tech" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Docs</a>
          </div>
          <div className="text-gray-500">
            © {new Date().getFullYear()} Basic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}