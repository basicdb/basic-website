// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import JoinDiscord from '@/components/JoinDiscord'
import { NavBar, Footer } from '@/components/NavFooter'
import GiantCard from '@/components/GiantCard'
import { StarIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const heroCardElements = {
    image: '/landing-image.webp',

}

function DynamicFooter() { 
    const [inputFocused, setInputFocused] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    
    return (
        <motion.div 
            className={`w-1/2 bg-opacity-60 bg-black rounded-lg mb-4 mx-auto backdrop-blur-sm flex flex-col gap-0 `}
            layout
            transition={{ type: "spring", stiffness: 30, damping: 30 }}
        >
            <motion.button 
                onClick={() => setExpanded(!expanded)}
                className="text-white font-bold text-left focus:outline-none px-4 py-2"
                layout
            >
                About
            </motion.button>
            
            <AnimatePresence>
                {expanded && (
                    <motion.div 
                        className="overflow-auto"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "60vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="text-white space-y-6 px-4 py-8">
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
                                Data remains gold even in a post-AI world where apps and agents will be as powerful as the context they have. Developers will focus on function instead of having to connect the spread of data across a user's apps. We will build on top of the "infinite context" of our users where their digital interactions even outside our own apps will improve all aspects of personalization for them.
                            </p>

                            <h2 className="text-lg font-bold">Apps will be local-first</h2>
                            <p className="text-sm">
                                Devices and models continue to get powerful, and there's a lot more we can do with what our users hold in their hands before punting it to the cloud. Apps will have instant page loads, and work seamlessly across devices even with spotty wifi connections. Personal AI agents will be highly private and secure.
                            </p>

                            <h2 className="text-lg font-bold">Collaboration will be real-time</h2>
                            <p className="text-sm">
                                The lack of collaboration in real-time causes information to exist in multiple places with the chance of inconsistencies. Tech like Google Drive, Figma, and CRDTs have made huge strides in this — real-time collaboration will become the default for every app.
                            </p>

                            <h2 className="text-lg font-bold">Data will be user-owned</h2>
                            <p className="text-sm">
                                Developers will build lean apps that read data directly from their users. We will iterate and ship faster without worrying about compliance and security. Onboarding users will become instant as every app will start with existing context (e.g., a new user on a new social media platform will bring over all their existing followers and relevant posts). AI / ML models will improve securely without any leakage of sensitive information.
                            </p>

                            <h2 className="text-lg font-bold">Systems will be interoperable</h2>
                            <p className="text-sm">
                                Schemas will be public for developers to build on top of each other's applications. Apps will speak to each other and allow information to flow between them in real-time. Teams will access all relevant information instantly while referring to a single source of truth. Friends and family will share memories and experiences seamlessly despite using different apps.
                            </p>

                            <h2 className="text-lg font-bold">…and more!</h2>
                            <p className="text-sm">
                                We, at Basic, are dedicated to further the rate of innovation for infrastructure alongside the developments in AI and app creation. Meanwhile, we love to gather like-minded people because empowering creators allows for transformational change. And we love having a lot of fun along the way!
                            </p>

                            <p className="text-sm">
                                If you'd like to chat about building on Basic or working with us drop us an email!
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <motion.div className="flex gap-3 items-center  p-2" layout>
                <div className="relative bg-black bg-opacity-70 rounded-lg flex-1 font-mono">
                    <input 
                        type="email" 
                        placeholder="email for early access" 
                        className="w-full px-4 py-2 pr-24 bg-transparent  rounded text-white focus:outline-none"
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                    />
                    <motion.button 
                        className="absolute right-0 top-0 bottom-0 px-5 border-l border-gray-800 text-white"
                        animate={{ opacity: inputFocused ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        Submit
                    </motion.button>
                </div>
                <button className="px-4 py-2 rounded-lg text-white bg-black bg-opacity-70 font-mono">
                    Discord
                </button>
            </motion.div>
        </motion.div>
    )
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Basic</title>
                <meta name="description" content="The database for a frictionless, user-owned web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-green-100 dark:bg-black min-h-screen overflow-x-hidden">
                <div className="w-full h-screen flex flex-col bg-black">


                    <div className="flex-1 m-4 rounded-lg flex flex-col justify-between"
                        style={{ backgroundImage: `url(${heroCardElements.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
                    >

                        <h1 className="p-10 text-white text-4xl font-bold "> welcome to the user-owned web </h1>

                        <DynamicFooter />
                       
                    </div>


                    <div className="h-[10px] flex items-center justify-between p-4">
                        <p className="text-[#666666] text-sm font-mono"> basic.tech | 2025  </p>
                    </div>
                </div>
            </main>
        </>
    )
}