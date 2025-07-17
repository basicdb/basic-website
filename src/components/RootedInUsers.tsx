import React from 'react'
import Image from 'next/image'

export default function RootedInUsers() {
    return (
        <>
            {/* Show different image based on light/dark mode */}
            <picture>
                <source
                    srcSet="/rootedinusers_dark.png"
                    media="(prefers-color-scheme: dark)"
                />
                <Image
                    src="/rootedinusers_light.png"
                    alt="Rooted in Users"
                    width={1920}
                    height={400}
                    className="mx-auto mt-8 w-full -mr-[50px]"
                />
            </picture>
            <div className='w-[calc(100%-2rem)] mx-4'>
                <div className='px-4'>
                    <div className='p-10'>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl text-indigo-900 dark:text-green-100 font-bold'>rooted in users</h2>
                        <p className='text-green-700 dark:text-green-400 text-lg lg:text-2xl font-thin mt-2.5'>Personal Data Stores with stateless backends</p>
                    </div>
                </div>
            </div>
        </>
    )
} 