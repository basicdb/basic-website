import React from 'react'
import Image from 'next/image'

export default function Toolkit() {
    const handleSectionClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="w-[calc(100%-2rem)] my-24 w-full min-h-screen items-center justify-center bg-green-100 dark:bg-black">
            {/* Dark mode top divider */}
            <div className="hidden dark:block w-full h-px bg-gray-700 mb-8"></div>

            {/* Header Section */}
            <div className="w-full px-10 md:px-16 bg-gradient-to-b from-green-200 to-green-100 dark:from-black dark:to-black dark:bg-black">
                <div className='pt-24 pb-16'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl text-indigo-900 dark:text-green-100 font-bold'>bundle for building apps</h2>
                    <p className='text-green-700 dark:text-green-400 text-lg lg:text-2xl font-thin mt-2.5'>for developers working on what's next</p>
                </div>
            </div>

            {/* First Section - Full Width */}
            <div className="w-full px-10 md:px-16">
                <div
                    className="border-t border-b border-gray-300 dark:border-gray-600 pt-2 h-[90vh] cursor-pointer transition-transform duration-100 hover:scale-[1.01] relative bg-[url('/context_light.svg')] dark:bg-[url('/context_dark.svg')] bg-cover bg-no-repeat bg-center bg-[length:cover] bg-[position:50%_calc(50%)] lg:bg-[position:50%_calc(50%-150px)]"
                    onClick={() => handleSectionClick('https://docs.basic.tech/readings/interop')}
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-green-100/80 via green-99 to-green-100/100 dark:from-black/100 dark:to-black/80 bg-blend-multiply pointer-events-none"></div>
                    <div className="relative">

                        <h2 className="text-lg md:text-2xl text-green-900 dark:text-green-100">
                            context of users across apps
                        </h2>
                        <p className="text-sm md:text-lg text-green-600 dark:text-green-400">
                            realtime events of users across other apps
                        </p>
                        <p className="text-sm md:text-lg text-green-600 dark:text-green-400">
                            via their memory palace
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Section - Two Columns */}
            <div className="w-full px-10 md:px-16">
                <div className="border-b border-gray-300 dark:border-gray-600 py-4 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        <div
                            className="md:pb-0 cursor-pointer transition-transform duration-100 hover:scale-[1.01] relative h-[60vh] md:h-[75vh] bg-[url('/sync.svg')] dark:bg-[url('/sync.svg')] bg-cover bg-no-repeat bg-left bg-[length:500px_500px]"
                            onClick={() => handleSectionClick('https://docs.basic.tech/readings/local-first-sync')}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-green-100/100 via-green-100/90 to-green-100/95 dark:from-black/100 dark:via-black/90 dark:to-black/80 bg-blend-multiply pointer-events-none"></div>
                            <div className="relative">
                                <h3 className="text-lg md:text-2xl text-green-800 dark:text-green-100">
                                    sync
                                </h3>
                                <p className="text-sm md:text-lg text-green-600 dark:text-green-400">
                                    zero-latency frontends
                                </p>
                                <p className="text-sm md:text-lg text-green-600 dark:text-green-400">
                                    across devices and users
                                </p>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-[1.01] pb-8 relative h-[60vh] md:h-[75vh] bg-[url('/storage_light.svg')] dark:bg-[url('/storage_dark.svg')] bg-cover bg-no-repeat bg-right"
                            onClick={() => handleSectionClick('https://docs.basic.tech/basic-react/basic-react-sdk#adding-auth')}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-green-100/100 via-green-100/90 to-green-100/100 dark:from-black/100 dark:via-black/90 dark:to-black/80 bg-blend-multiply pointer-events-none"></div>
                            <div className="relative">
                                <h3 className="text-lg md:text-2xl text-green-800 dark:text-green-100">
                                    storage
                                </h3>
                                <p className="text-sm md:text-lg text-green-600 dark:text-green-400">
                                    SQlite performance
                                </p>
                                <p className="text-sm md:text-lg text-green-600 dark:text-green-400">
                                    at 1/10th the cost
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Vertical divider - only visible on medium screens and up */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"></div>
                </div>
            </div>

            {/* Third Section - Four Columns */}
            <div className="w-full px-10 md:px-16">
                <div className="pt-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-105"
                            onClick={() => handleSectionClick('https://docs.basic.tech/readings/personal-data-stores')}
                        >
                            <h3 className="text-md md:text-lg text-green-700 dark:text-green-100">
                                auth
                            </h3>
                            <p className="text-xs md:text-sm text-green-600 dark:text-green-400">
                                plug-and-play auth
                            </p>
                            <p className="text-xs md:text-sm text-green-600 dark:text-gray-400">
                                for millions of users
                            </p>
                        </div>
                        <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-105"
                            onClick={() => handleSectionClick('https://docs.basic.tech/readings/personal-data-stores')}
                        >
                            <h3 className="text-md md:text-lg text-green-700 dark:text-green-100">
                                stateless backends
                            </h3>
                            <p className="text-xs md:text-sm text-green-600 dark:text-green-400">
                                scale apps without a server
                            </p>
                            <p className="text-xs md:text-sm text-green-600 dark:text-gray-400">
                                as state that lives with users
                            </p>
                        </div>
                        <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-105"
                            onClick={() => handleSectionClick('https://docs.basic.tech/readings/schema')}
                        >
                            <h3 className="text-md md:text-lg text-green-700 dark:text-green-100">
                                schema-as-code
                            </h3>
                            <p className="text-xs md:text-sm text-green-600 dark:text-green-400">
                                declare and manage schema
                            </p>
                            <p className="text-xs md:text-sm text-green-600 dark:text-green-400">
                                within your codebase
                            </p>
                        </div>
                        {/* <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-105"
                            onClick={() => handleSectionClick('https://docs.basic.tech/readings/personal-data-stores')}
                        >
                            <h3 className="text-md md:text-lg text-green-700 dark:text-green-100">
                                security effortlessly
                            </h3>
                            <p className="text-xs md:text-sm text-green-600 dark:text-green-400">
                                data is scoped to each user
                            </p>
                            <p className="text-xs md:text-sm text-green-600 dark:text-gray-400">
                                encrypted at rest and transit
                            </p>
                        </div> */}
                        <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-105"
                            onClick={() => handleSectionClick('https://docs.basic.tech/basic-react/react-schema#fields-2')}
                        >
                            <h3 className="text-md md:text-lg text-green-700 dark:text-green-100">
                                Typescript for LLMs
                            </h3>
                            <p className="text-xs md:text-sm text-green-500">
                                data is type-safe
                            </p>
                            <p className="text-xs md:text-sm text-green-500">
                                LLMs make less mistakes
                            </p>
                        </div>
                        {/* <div
                            className="cursor-pointer transition-transform duration-100 hover:scale-105"
                            onClick={() => handleSectionClick('https://docs.basic.tech/readings/personal-data-stores#control%2C-ownership%2C-and-permanence')}
                        >
                            <h3 className="text-md md:text-lg text-green-700 dark:text-green-100">
                                self-hostable
                            </h3>
                            <p className="text-xs md:text-sm text-green-500">
                                PDS are open-source
                            </p>
                            <p className="text-xs md:text-sm text-green-500">
                                users keep their data forever
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
} 