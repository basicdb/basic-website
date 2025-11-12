

import React from 'react'
import Head from 'next/head'

import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const heroCardElements = {
  image: '/landing-image.webp',
}

const communityVideo = "https://basicwebsitecontent.s3.us-east-2.amazonaws.com/Event+Recap_v3.mp4"

function DynamicFooter() {
  const [activeTab, setActiveTab] = React.useState<string | null>("about");

  const isExpanded = activeTab !== null;

  return (
    <motion.div
      className={`w-full md:w-full md:max-w-xl bg-opacity-60 bg-black mb-0 md:mb-16 mx-auto backdrop-blur-md flex flex-col gap-0 shadow-lg rounded-xl md:px-0`}
      layout
      transition={{ type: "spring", stiffness: 30, damping: 30 }}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-2">
          <motion.button
            onClick={() => setActiveTab(activeTab === "about" ? null : "about")}
            className={`text-white font-bold text-left focus:outline-none px-4 py-2 transition-all duration-200 rounded-md hover:bg-[#5D6B90]/70 ${activeTab === "about" ? "bg-[#5D6B90]/80 text-white" : ""}`}
            layout
          >
            About
          </motion.button>

          <motion.button
            onClick={() => setActiveTab(activeTab === "community" ? null : "community")}
            className={`text-white font-bold text-left focus:outline-none px-4 py-2 transition-all duration-200 rounded-md hover:bg-[#5D6B90]/70 ${activeTab === "community" ? "bg-[#5D6B90]/80 text-white" : ""}`}
            layout
          >
            Community
          </motion.button>
        </div>

        {isExpanded && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveTab(null)}
            className="mr-2 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors duration-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {activeTab === "about" && (
          <motion.div
            className="overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-[#5D6B90]/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#5D6B90]/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "60vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="text-white space-y-4 px-4 py-8">
              <h1 className="text-2xl font-bold">Basic is the platform for personal software</h1>
              <p className="text-sm">
                The next 1 billion apps will be different.
                They will be built at exponentially faster rates using newer tools, and by a broader range of people.
                Yet one thing will remain the same — the best of them will still feel like magic.
              </p>


              <p className="text-sm">
                However, the future of the web can't be built on the platforms of the past - on walled gardens, centralized clouds, and rigid structures that own your data.
              </p>

              <p className="text-sm italic">
                Basic is built on three core principles:
              </p>

              <h2 className="text-lg font-bold">Personal Software & AI</h2>
              <p className="text-sm">
                The next generation of software won't be about centralizing data, but about utilizing users' own context & memory to build apps and agents that understand them.
                Developers shouldn't have to stitch data together across a dozen platforms - they should just build great experiences that plug right into the user's world.
              </p>

              <h2 className="text-lg font-bold">User-owned Data</h2>
              <p className="text-sm">
                Your data should live with you, not be rented out to someone else's cloud.
                When users own their data, apps become portable, personal, and actually interoperable.
                Instead of platforms competing for lock-in, they compete on experience — and that's how software should be.
              </p>

              <h2 className="text-lg font-bold">Realtime & Multiplayer</h2>
              <p className="text-sm">
                Software is better when it's shared.
                Whether it's humans or AI agents, everyone should be able to collaborate in real time on the same source of truth - without conflicts, lag, or version hell.
                Realtime sync turns static apps into living systems, where data, people, and context all work together.
              </p>


              <h2 className="text-lg font-bold">…and more!</h2>
              <p className="text-sm">
                Basic is built on these principles to help create a new kind of internet - one where users own their data, apps are personal, and collaboration is seamless.
                We love gathering like-minded builders who care about the open web and personal computing.
              </p>

              <p className="text-sm">
                If you'd like to chat about building on Basic or working with us, join our Discord!
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === "community" && (
          <motion.div
            className="overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-[#5D6B90]/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#5D6B90]/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "60vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="text-white space-y-4 px-4 py-4">
              <h2 className="text-lg font-bold">Join Our Community</h2>
              <p className="text-sm">
                We're building a community of developers, designers, and creators who are passionate about the future of the web. Join us to share ideas, get early access to new features, and shape the future of Basic.
              </p>
              {/* Social Icons */}
              <div className="flex gap-2">
                <a href="https://x.com/basic_db" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image src="/x-logo.webp" alt="X (Twitter)" width={24} height={24} className="w-6 h-6" />
                </a>
              </div>

              <div className="mt-8 mb-4">
                <video
                  className="w-full h-auto rounded-xl shadow-2xl"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={communityVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="flex flex-col gap-3 items-start p-3 bg-black bg-opacity-40 shadow-lg rounded-b-lg" layout>
        <motion.a
          href="https://discord.gg/M57gcazvYk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-lg text-white bg-[#5D6B90]/60 hover:bg-[#5D6B90]/90 font-mono transition-colors duration-200 whitespace-nowrap overflow-hidden text-left py-2 pl-4 pr-4 flex items-center gap-2"
        >
          <span>Join the Discord</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic</title>
        <meta name="description" content="building the user-owned web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[100dvh] overflow-x-hidden">
        <div className="w-full h-[100dvh] flex flex-col bg-black overflow-hidden">
          <div
            className="flex-1 m-0 md:m-4 rounded-none md:rounded-xl justify-between"
            style={{ backgroundImage: `url(${heroCardElements.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
          >
            <div className="mt-14 mx-2 md:mx-0 md:px-0">
              <DynamicFooter />
            </div>
          </div>

          <div className="hidden sm:flex absolute bottom-2 left-0 h-[10px] items-center justify-between p-4">
            <p className="text-[#666666] z-10 text-xs font-mono bg-black rounded-tr-[10px] px-2 py-1">basic | 2025</p>
            <div className="w-8 h-5 relative -left-3.5 -bottom-2 bg-black rotate-180 [mask-image:_radial-gradient(farthest-corner_at_bottom_left,_transparent_40%,_black_41%)] [-webkit-mask-image:_radial-gradient(circle_at_bottom_left,_transparent_40%,_black_41%)]" />
          </div>

        </div>
      </main >
    </>
  )
}