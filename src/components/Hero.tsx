import React from 'react';
import { FaDiscord } from 'react-icons/fa';

interface HeroProps {
    variant?: 'default' | 'giant';
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaIcon?: React.ReactNode;
    background?: string;
    children?: React.ReactNode;
}

export default function Hero({
    variant = 'default',
    background,
    children
}: HeroProps) {
    if (variant === 'giant') {
        return (
            <div className={`w-full min-h-screen ${background || 'bg-gradient-to-b from-pink to-green-100'} flex flex-col`}>
                {children}
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-pink to-green-100 flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-2 py-8 sm:px-4">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl leading-relaxed text-indigo-900 mb-6">
                        <span className="font-heading mb-4 md:mb-8 block">build AI with</span>
                        <span className="font-script">user-first </span>
                        <span className="font-heading">backends</span>
                        {/* <span className="font-script">backends</span> */}
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl leading-relaxed font-thin text-green-700 italic mb-12 max-w-3xl mx-auto leading-relaxed">
                        deploy Personal Data Stores today, <span className="hidden md:inline">&nbsp;</span>
                        <br />
                        scale to 1M users with free Auth
                    </p>

                    {/* Call to Action */}
                    <div className="flex items-center justify-center">
                        <a
                            href="https://discord.gg/S4DmEhuk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-indigo-800 underline hover:no-underline transition-all duration-200 text-lg md:text-xl cursor-pointer -mb-4"
                        >
                            {React.createElement(FaDiscord as any, { className: "w-6 h-6" })}
                            join 1,000+ apps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 