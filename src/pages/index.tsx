// @ts-ignore

import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Rocket, Twitter, Github } from 'lucide-react';
import benefitsForUsers from '@/utils/benefitsForUsers';
import Script from 'next/script'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { JetBrains_Mono, Lora } from 'next/font/google'; // Update font imports
import CodeBlock from '@/components/CodeBlock';
import products from '@/utils/productsData';
import developerFeatures from '@/utils/developerFeaturesData';
import Cal, { getCalApi } from "@calcom/embed-react";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] }); // Initialize JetBrains Mono
const lora = Lora({ subsets: ['latin'] }); // Initialize Lora

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "speak-to-a-basic-founder" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
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
          <BenefitsForDevelopers />
          <PrivacySection />
          <BenefitsForUsers benefits={benefitsForUsers} />
          <PricingSection />
          <Cal namespace="speak-to-a-basic-founder"
            calLink="abhicvk/speak-to-a-basic-founder"
            style={{ width: "100%", height: "100%", overflow: "scroll", backgroundColor: "#FFF3EB", padding: "20px" }}
            config={{ "layout": "month_view" }}
          />
          <Footer />
        </div>
      </main>
    </>
  )
}

const NavBar = () => {
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
              <a className="btn btn-ghost" href='https://github.com/basicdb' target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 mr-2" />
              </a>
            </li>
            <li>
              <a className="btn btn-ghost" href='https://twitter.com/basic_db' target="_blank" rel="noreferrer">
                <Twitter className="w-5 h-5 mr-2" />
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
                className="inline-block mb-4 px-4 py-1.5 bg-black-700 text-white border border-white-300 rounded-full font-mono text-sm cursor-pointer w-[230px] text-center"
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
              <p className="text-2xl md:text-4xl font-medium font-mono tracking-tight text-white-100 leading-relaxed">
                Open source infra for <br /> <strong className={`${lora.className} text-4xl md:text-5xl text-white-500`}>data ownership</strong> 🏆
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
                <Rocket className="h-7 w-7 mr-3 animate-bounce" />
                <span className="relative flex items-center justify-center">
                  <span className="absolute -inset-1.5 bg-black opacity-20 rounded-full blur"></span>
                  <span className="relative">Request Early Access</span>
                </span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 text-xs md:text-base">
            <CodeBlock code={demoCode} />
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductsSection = () => {
  return (
    <section className="bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black-800 rounded-lg shadow-lg p-8 w-full max-w-[320px] cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(product.url, '_blank')}
              role="link"
              tabIndex={0}
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
    <section className="bg-black w-full py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${jetbrainsMono.className} text-2xl md:text-4xl font-bold text-white-100 mb-6 mt-12 text-center leading-relaxed`}>
          A <strong className={`${lora.className} text-3xl md:text-5xl text-white-500`}>new</strong> ✨ way to build
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
    <p className="text-xl md:text-2xl text-white mb-8 mt-12 leading-relaxed">
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

const BenefitsForDevelopers = () => {
  return (
    <section className="bg-white dark:bg-black w-full min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 py-16 w-full">
        <h2 className={`${jetbrainsMono.className} text-2xl md:text-4xl font-bold text-black dark:text-white-100 mb-12 mt-12 text-center leading-relaxed`}>
          That's <strong className={`${lora.className} text-3xl md:text-5xl text-black-500 dark:text-white-500`}>basic-ally</strong> better for developers 📱
        </h2>

        <div className="space-y-24">
          {developerFeatures.map((feature) => (
            <div key={feature.id} className={`flex flex-col md:flex-row gap-8 items-center`}>
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl mb-4 text-black dark:text-white">
                  {feature.content.title} {feature.content.labelIcon}
                </h3>
                {feature.content.description && (
                  <p className="text-black dark:text-white">{feature.content.description}</p>
                )}
                {feature.content.description2 && (
                  <p className="text-black dark:text-white mt-4">{feature.content.description2}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 bg-black-800 rounded-lg min-h-[300px] flex items-center justify-center p-6">
                {feature.content.image &&
                  <Image
                    src={feature.content.image.src}
                    alt={feature.label}
                    width={feature.content.image.width}
                    height={feature.content.image.height}
                  />
                }
                {feature.content.code && <CodeBlock code={feature.content.code} />}
                {feature.content.icon === 'github' && (
                  <a href="https://github.com/basicdb" target="_blank" rel="noopener noreferrer">
                    <Github className="w-20 h-20 text-white-100 hover:text-white-300 transition-colors" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrivacySection = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black-800 p-6 sm:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
            <h2 className={`${jetbrainsMono.className} text-2xl text-white-300 mb-6`}>🔍 Secured by Basic 🔍</h2>
            <p className="text-white mb-8">
              Basic creates personal data stores that give users full control of their data. Apps request access via OAuth2, ensuring data privacy with enterprise-grade security.
            </p>
            <a href="https://docs.basic.tech" target="_blank" rel="noopener noreferrer"
              className="btn bg-black-700 text-white border-2 border-white-300 hover:bg-black-600 hover:border-white transition-all duration-150 transform hover:scale-105 hover:rotate-1 shadow-md hover:shadow-lg px-6 py-2 rounded-full font-semibold">
              📖 Read the Docs
            </a>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <Image src="/basic-auth-flow.png" alt="Basic apps diagram" className="mx-auto max-w-full" width={450} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

const BenefitsForUsers = ({ benefits }: { benefits: Array<{ title: string; description: string }> }) => {
  return (
    <section className="bg-white dark:bg-black w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${jetbrainsMono.className} text-2xl md:text-4xl font-bold text-black dark:text-white-100 mb-6 mt-12 text-center leading-relaxed`}>
          And better for your <strong className={`${lora.className} text-3xl md:text-5xl text-black-500 dark:text-white-500`}>users</strong> 👯
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <p className="mt-3 text-lg font-medium leading-6 text-black-700 dark:text-white-100 text-center">{benefit.title}</p>
              <div className="mt-2 text-base text-black-200 dark:text-white text-center">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://basic.id"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block mt-12 p-12 text-center text-xl font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
          style={{
            background: "linear-gradient(45deg, #ffe7d6, #313149, #ff8533)",
            backgroundSize: "200% 200%",
            animation: "gradient 5s ease infinite",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-black-500 flex items-center justify-center">
              👤
            </div>
            <span className="text-2xl font-semibold">Explore Basic ID</span>
          </div>
        </a>
      </div>
    </section>
  )
}

const PricingSection = () => {
  return (
    <section className="bg-white dark:bg-black w-full min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 py-16 w-full relative">
        {/* Background gradient effect */}
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff8533] to-[#313149] opacity-30"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`${jetbrainsMono.className} text-2xl md:text-4xl font-bold text-black dark:text-white-100 mb-6 leading-relaxed`}>
            With simple pricing that scales
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-12">
          {/* Free Plan */}
          <div className="rounded-3xl bg-white/60 dark:bg-black-800 p-8 ring-1 ring-white-300 sm:mx-8 sm:p-10 lg:mx-0 flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">Free</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold text-black dark:text-white">$0</span>
                <span className="text-base text-black-500 dark:text-white-500">/month</span>
              </p>
              <p className="mt-6 text-black-600 dark:text-white-300">For indie developers to try out Basic</p>
              <p className="text-xs text-black-600 dark:text-white-300">Everything you need to get started</p>
            </div>

            <ul className="mt-8 space-y-3 flex-grow">
              {['1 member per project', 'Unlimited projects', 'Unlimited users', 'Local-first sync', 'Schema-as-code', 'Project-level privacy & permissions'].map((feature) => (
                <li key={feature} className="flex gap-x-3 text-black-600 dark:text-white-300">
                  <svg className="h-6 w-5 flex-none text-white-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="https://airtable.com/shr5ALU6Ha9uBzErA" className="mt-8 block rounded-full px-3.5 py-2.5 text-center text-sm font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-90">
              Request early access
            </a>
          </div>

          {/* Custom Plan */}
          <div className="relative rounded-3xl bg-white/60 dark:bg-black-800 p-8 ring-1 ring-white-300 sm:p-10 flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">Custom</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-3xl font-semibold text-black dark:text-white">Contact for pricing</span>
              </p>
              <p className="mt-6 text-black-600 dark:text-white-300">For teams and enterprises</p>
              <p className="text-xs text-black-600 dark:text-white-300">Free tier features and more</p>
            </div>

            <ul className="mt-8 space-y-3 flex-grow">
              {['Unlimited members', 'Advanced user analytics', 'AI vector embeddings', 'Federated learning', 'Enterprise Data Stores', 'HIPAA & SOC 2 compliance checks', 'Uptime SLAs', 'SAML SSO', 'Dedicated engineering support'].map((feature) => (
                <li key={feature} className="flex gap-x-3 text-black-600 dark:text-white-300">
                  <svg className="h-6 w-5 flex-none text-white-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="mailto:abhi@basic.tech" className="mt-8 block rounded-full px-3.5 py-2.5 text-center text-sm font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-90">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
            <a href="https://github.com/basicdb" target="_blank" rel="noreferrer" className="text-black-600 dark:text-white-400 hover:text-black-900 dark:hover:text-white-100">Github</a>
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