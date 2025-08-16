import React from 'react';
import { NavBar } from './NavFooter';
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
    title,
    subtitle,
    ctaText,
    ctaIcon,
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
                        <span className="font-heading mb-4 md:mb-8 block">build consumer AI</span>
                        <span className="font-heading text-4xl md:text-6xl lg:text-7xl">that feels uniquely </span>
                        <span className="font-script text-4xl md:text-6xl lg:text-7xl">theirs</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-thin text-green-600 italic mb-12 max-w-3xl mx-auto leading-relaxed">
                        deploy per-user DB + Auth with Personal Data Stores,
                        <br />
                        scale to millions of users without overhead
                    </p>

                    {/* Call to Action */}
                    <div className="flex items-center justify-center">
                        <a
                            href="https://discord.gg/S4DmEhuk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-indigo-800 underline hover:no-underline transition-all duration-200 text-lg md:text-xl cursor-pointer"
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