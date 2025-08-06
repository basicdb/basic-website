import React from 'react';
import Image from 'next/image';

export default function UniversalContext() {
    const features = [
        {
            title: "portable data",
            description: "users carry their structured data across apps, and retain it even if apps cease to exist"
        },
        {
            title: "secure for users",
            description: "users can easily provision or decommission access of their data to your app with OAuth 2.0"
        },
        {
            title: "programmable",
            description: "developers can access universal context of users across apps in realtime for personalization"
        }
    ];

    return (
        <div className="relative w-[calc(100%-2rem)] h-full m-4">
            {/* Background image layer */}
            <div
                className="absolute inset-0 rounded-3xl bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(/universalContext.jpg)`,
                    backgroundPosition: 'center'
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-green-100/0 via-green-100/80 to-pink-100/100" />

            {/* Content layer */}
            <div className="relative w-full h-full flex flex-col px-4">
                <div className="w-full h-full flex flex-col justify-center items-start p-10 py-24">
                    {/* Main headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-black leading-tight mb-12" style={{ lineHeight: '1.2' }}>
                        program with universal<br />
                        context of your users
                    </h1>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
                        {features.map((feature, index) => (
                            <div key={index} className="">
                                <h3 className="text-2xl text-gray-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 