// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Hero from '@/components/Hero'
import Products from '@/components/archive/Products'
import JoinDiscord from '@/components/archive/JoinDiscord_old'
import { NavBar, Footer } from '@/components/NavFooter'
import GiantCard from '@/components/archive/GiantCard'
import { StarIcon, XIcon, ArrowRight } from 'lucide-react'
import { RiTwitterXLine } from "react-icons/ri"
import { FaDiscord } from "react-icons/fa"
import { motion, AnimatePresence } from 'framer-motion'

const heroCardElements = {
    image: '/landing-image.webp',
}

const communityVideo = "https://basicwebsitecontent.s3.us-east-2.amazonaws.com/Event+Recap_v3.mp4"

function DynamicFooter() {
    const [activeTab, setActiveTab] = React.useState<string | null>(null);

    const isExpanded = activeTab !== null;

    return (
        <motion.div
            className={`w-full md:w-full md:max-w-xl bg-opacity-60 bg-black mb-0 md:mb-16 mx-auto backdrop-blur-md flex flex-col gap-0 shadow-lg rounded-xl px-4 md:px-0`}
            layout
            transition={{ type: "spring", stiffness: 30, damping: 30 }}
        >
            <div className="flex items-center justify-between p-2">
                <div className="flex gap-2">
                    <motion.button
                        onClick={() => setActiveTab(activeTab === "about" ? null : "about")}
                        className={`text-white font-bold text-left focus:outline-none px-4 py-2 transition-all duration-200 rounded-full hover:bg-[#5D6B90]/70 ${activeTab === "about" ? "bg-[#5D6B90]/80 text-white" : "bg-black bg-opacity-10"}`}
                        layout
                    >
                        About
                    </motion.button>

                    <motion.button
                        onClick={() => setActiveTab(activeTab === "community" ? null : "community")}
                        className={`text-white font-bold text-left focus:outline-none px-4 py-2 transition-all duration-200 rounded-full hover:bg-[#5D6B90]/70 ${activeTab === "community" ? "bg-[#5D6B90]/80 text-white" : "bg-black bg-opacity-10"}`}
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
                        className="mr-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200 focus:outline-none"
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
                        className="overflow-auto"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "60vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="text-white space-y-4 px-4 py-8">
                            <h1 className="text-xl font-bold">Universal API for user data</h1>
                            <p className="text-sm">
                                The next 1 billion apps will be different. They will be built at exponentially faster rates using newer tools, and by a broader range of people.
                            </p>

                            <p className="text-sm">
                                Yet one thing will remain the same — the best of them will still feel like magic.
                            </p>

                            <p className="text-sm">
                                We remember experiencing it many times, from the real-time collaboration in Figma, and the open ecosystem of Raycast, to the potential for creativity with genAI. Making magic isn't easy because it requires complex code, but what we consider magic today has already been solved for. It ought to be made accessible so that we can focus on creating new types of magic.
                            </p>

                            <p className="text-sm">
                                At Basic, we believe it's time to raise the bar for infrastructure to usher in this new internet.
                            </p>

                            <h2 className="text-lg font-bold">AI will be hyper-personalized</h2>
                            <p className="text-sm">
                                Context becomes gold, instead of data, in a post-AI world where apps and agents will be as powerful as the context they have. Developers will focus on function instead of having to connect the spread of data across a user's apps. We will build on top of the "infinite context" of our users where their digital interactions even outside our own apps will improve all aspects of personalization for them.
                            </p>

                            <h2 className="text-lg font-bold">Collaboration will be real-time</h2>
                            <p className="text-sm">
                                The lack of collaboration in real-time causes information to exist in multiple places with the chance of inconsistencies. Tech like Google Drive, Figma, and CRDTs have made huge strides in this — real-time collaboration will become the default for every app.
                            </p>

                            <h2 className="text-lg font-bold">Data will be user-owned</h2>
                            <p className="text-sm">
                                Developers will build lean apps that read data directly from their users. We will iterate and ship faster without worrying about compliance and security. Onboarding users will become instant as every app will start with existing context (e.g., a new user on a new social media platform will bring over all their existing followers and relevant posts). AI / ML models will improve securely without any leakage of sensitive information.
                            </p>

                            <h2 className="text-lg font-bold">…and more!</h2>
                            <p className="text-sm">
                                We, at Basic, are dedicated to further the rate of innovation for infrastructure alongside the developments in AI and app creation. Meanwhile, we love to gather like-minded people interested in building the open web.
                            </p>

                            <p className="text-sm">
                                If you'd like to chat about building on Basic or working with us, join our Discord!
                            </p>
                        </div>
                    </motion.div>
                )}

                {activeTab === "community" && (
                    <motion.div
                        className="overflow-auto"
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
                                    {React.createElement(RiTwitterXLine as any, { className: "w-6 h-6" })}
                                </a>
                                <a href="https://discord.gg/M57gcazvYk" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    {React.createElement(FaDiscord as any, { className: "w-6 h-6" })}
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
                        className="flex-1 m-4 rounded-xl justify-between"
                        style={{ backgroundImage: `url(${heroCardElements.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
                    >
                        <div className="mt-14 px-4 md:px-0">
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