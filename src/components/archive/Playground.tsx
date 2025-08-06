import React from 'react'
import Image from 'next/image'

export default function Playground() {
    return (
        <>
            {/* Show different image based on light/dark mode */}
            <div className="block transition-transform duration-100 hover:scale-[1.01] relative">
                <picture>
                    <source
                        srcSet="/playground_dark.svg"
                        media="(prefers-color-scheme: dark)"
                    />
                    <Image
                        src="/playground_light.svg"
                        alt="Rooted in Users"
                        width={1920}
                        height={400}
                        className="mx-auto mt-48 md:mt-16 w-full h-auto"
                    />
                </picture>
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-green-100/70 to-green-100/20 dark:from-black/80 dark:to-black/0'></div>
            </div>
            <div className='w-[calc(100%-2rem)] mx-4 mb-32'>
                <div className='px-4'>
                    <div className='px-2 md:px-8 text-right'>
                        <h2 className='text-3xl md:text-5xl lg:text-6xl text-indigo-900 dark:text-green-100 font-bold'>open playground for developers</h2>
                        <p className='text-green-700 dark:text-green-400 text-lg lg:text-2xl font-thin mt-2.5'>remix apps with creative freedom</p>
                    </div>
                </div>
            </div>
        </>
    )
} 