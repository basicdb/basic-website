// @ts-ignore


import Head from 'next/head'
import Image from 'next/image'
import { RocketLaunchIcon, LockClosedIcon, ArrowPathIcon, CircleStackIcon } from '@heroicons/react/24/solid';
import Benefits from '@/components/Benefits';
import benefitsForDevelopers from '@/utils/benefitsForDevelopers';
import benefitsForUsers from '@/utils/benefitsForUsers';
import Script from 'next/script'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { JetBrains_Mono, Lora } from 'next/font/google'; // Update font imports

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
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20">
      <div className="container-default">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 text-white">
              <Image alt="logo" width={32} height={32} src="/logo.png" />
              <span className="text-xl font-medium">Basic</span>
            </a>
          </div>

          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a
                  href="https://twitter.com/basic_db"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-white-200 transition-colors"
                >
                  <Image
                    alt="twitter"
                    width={20}
                    height={20}
                    src="/icons/twitter.png"
                    className="hidden sm:block"
                  />
                  <span className="sm:hidden">Connect</span>
                  <span className="hidden sm:block">Connect with us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://docs.basic.tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-white-200 transition-colors"
                >
                  Docs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[92vh] bg-black bg-[url('/bg.png')] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 mix-blend-multiply" />
      <div className="absolute inset-0 opacity-20">
        <pre className="animate-slide-up text-xs text-green-500">
          {`const basic = new Basic();
// Breaking free from traditional databases
basic.revolutionize();`}
        </pre>
      </div>

      <div className="container-default flex flex-col justify-center min-h-[92vh] py-4 relative">
        <NavBar />
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-32 lg:mt-0">
          <div className="w-full lg:w-1/2 text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-1 text-sm font-mono bg-red-500/20 text-red-400 rounded-full border border-red-500/40 mb-4">
                  sudo chmod 777 your-data
                </span>
              </div>
              <h1 className="heading-1 font-mono text-white-100 glitch-text">
                Take Back Control<br />
                <strong className={`${lora.className} text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent`}>
                  Break Free from Big Tech
                </strong>
                <span className="inline-block animate-bounce">⚡️</span>
              </h1>
              <h3 className="body-large text-white/80 max-w-xl font-mono border-l-4 border-purple-500 pl-4">
                Ship powerful apps with <span className="text-cyan-400">built-in auth</span>,
                <span className="text-purple-400"> realtime sync</span>, and
                <span className="text-green-400"> offline-first</span> architecture.
                No vendor lock-in. No compromises.
              </h3>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <a
                href="https://airtable.com/shr5ALU6Ha9uBzErA"
                target="_blank"
                rel="noreferrer"
                className="btn-primary group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:animate-pulse" />
                <span className="relative flex items-center">
                  <RocketLaunchIcon className="h-5 w-5 mr-2" />
                  Join the Revolution
                </span>
              </a>

              <a href="https://docs.basic.tech" className="text-white/70 hover:text-white flex items-center gap-2 font-mono">
                <code>$ npm install @basic/db</code>
                <ArrowPathIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <Image
              alt="basic code snippet"
              width={500}
              height={500}
              src="/basic_snippet.png"
              className="relative rounded-lg bg-black/80 p-2 transform hover:scale-105 transition-transform duration-300"
            />
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
      description: "Ditch centralized auth. Get secure, plug-and-play authentication that puts users in control.",
      gradient: "from-authmagenta-600/20 to-authmagenta-900/20",
      borderColor: "border-authmagenta-500/50",
    },
    {
      title: "Basic DB",
      icon: <CircleStackIcon className="w-12 h-12 text-dbblue-500" />,
      description: "Break free from traditional databases. Build with user-owned Personal Data Stores.",
      gradient: "from-dbblue-600/20 to-dbblue-900/20",
      borderColor: "border-dbblue-500/50",
    },
    {
      title: "Basic Sync",
      icon: <ArrowPathIcon className="w-12 h-12 text-syncgreen-500" />,
      description: "Say goodbye to loading states. Ship instant, offline-first apps that just work.",
      gradient: "from-syncgreen-600/20 to-syncgreen-900/20",
      borderColor: "border-syncgreen-500/50",
    },
  ];

  return (
    <section className="bg-black section-padding relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        <pre className="matrix-rain text-xs">
          {Array(100).fill('01').join('')}
        </pre>
      </div>

      <div className="container-default relative">
        <h2 className={`heading-1 ${jetbrainsMono.className} text-white-100 text-center mb-12`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &lt;weapons&gt;
          </span>
          <br />
          for the revolution
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &lt;/weapons&gt;
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative group rounded-lg border ${product.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
              <div className="relative p-8 backdrop-blur-sm">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="heading-2 text-white-100 mb-4 font-mono">
                  {product.title}
                </h3>
                <p className="body-default text-white/80 font-mono">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyBasicSection = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-cyan-900/10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-mono bg-purple-500/20 text-purple-400 border border-purple-500/40">
            manifest.json
          </span>
        </div>

        <h2 className={`${jetbrainsMono.className} text-4xl font-bold text-white-100 mb-6 mt-12 text-center leading-relaxed`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {`{`}
          </span>
          <br />
          "mission": "rebuild the web"
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {`}`}
          </span>
        </h2>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500" />
          <FadeInParagraph>
            {[
              "We're <strong>rebels</strong> fighting against <i>digital tyranny</i> 🔥 <i>data silos</i> 🏢 and the <i>surveillance economy</i> 👁️",
            ]}
          </FadeInParagraph>
          <FadeInParagraph>
            {[
              "Imagine a web where <i>your data is truly yours</i> 🔐 <i>apps work offline</i> ⚡️ and <i>privacy isn't just a checkbox</i> 🛡️",
            ]}
          </FadeInParagraph>
          <FadeInParagraph>
            {["The revolution starts with <strong>Basic</strong>. Are you in? 🚀"]}
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
    <section className="bg-black section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />

      <div className="container-default relative">
        <div className="bg-black-800 rounded-lg border border-white/10 backdrop-blur-lg">
          <div className="flex flex-col sm:flex-row items-center gap-8 p-8">
            <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-mono bg-green-500/20 text-green-400 border border-green-500/40 mb-6">
                chmod 777 privacy.sh
              </div>

              <h2 className={`heading-2 ${jetbrainsMono.className} text-white-300 mb-6`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Security by Design 🛡️
                </span>
              </h2>

              <p className="body-large text-white/80 mb-8 font-mono leading-relaxed">
                <span className="text-green-400"># Your data never touches our servers</span><br />
                <span className="text-purple-400"># End-to-end encryption by default</span><br />
                <span className="text-cyan-400"># Zero-knowledge architecture</span>
              </p>

              <motion.a
                href="https://docs.basic.tech"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center font-mono">
                  <code className="mr-2">./read-docs.sh</code> 📖
                </span>
              </motion.a>
            </div>

            <div className="w-full sm:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-12"
              >
                {/* Keep your existing diagram components but add hover effects */}
                <div className="text-center transform hover:scale-105 transition-transform">
                  <h3 className="text-base text-white-300 font-mono mb-4">
                    $ cat old-architecture.txt
                  </h3>
                  <Image /* ... existing props ... */ />
                </div>

                <div className="text-center transform hover:scale-105 transition-transform">
                  <h3 className="text-base text-white-300 font-mono mb-4">
                    $ cat basic-architecture.txt
                  </h3>
                  <Image /* ... existing props ... */ />
                </div>
              </motion.div>
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