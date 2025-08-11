import React from 'react';
import Image from 'next/image';

export default function UserOwned() {
    return (
        <div className="relative w-[calc(100%-2rem)] h-full m-4">
            {/* Background image layer */}
            <div
                className="absolute inset-0 rounded-3xl bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(/landing-image.webp)`,
                    backgroundPosition: 'bottom'
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-100/100 via-pink-100/70 to-green-100/0" />

            {/* Content layer */}
            <div className="relative w-full h-full flex flex-col lg:flex-row px-4">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-10 py-16">
                    {/* Main headline */}
                    <h1 className="text-4xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                        <div className="font-script italic leading-tight mb-2">user-owned data,</div>
                        <div className="leading-tight">for software that adapts to every user</div>
                    </h1>

                    {/* First paragraph */}
                    <p className="md:text-lg font-light text-gray-800 mb-6 leading-relaxed max-w-lg">
                        The future belongs to AI that understands and evolves. But traditional data systems limit us from getting a full picture of our users across their different apps.
                    </p>

                    {/* Second paragraph */}
                    <p className="md:text-lg font-light text-gray-800 leading-relaxed max-w-lg">
                        We designed Personal Data Stores (PDS) so that users can accumulate their data across apps, and developers can build deeply personalized technologies for their users without any overhead.
                    </p>
                </div>

                {/* Right side - could be used for additional content or kept empty for the background image */}
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                    {/* The background image will show through here */}
                </div>
            </div>
        </div>
    );
} 