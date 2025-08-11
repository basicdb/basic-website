import React, { useState } from 'react';
import Image from 'next/image';

interface TabContent {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
}

const developerTabs: TabContent[] = [
    {
        title: "stateless backends",
        subtitle: "Scale apps without a server as state that lives with users",
        description: "Build your entire backend with just TypeScript. No more database migrations, API documentation, or complex deployment pipelines. Everything is type-safe and automatically generated from your schema definitions.",
        image: "/basic_snippet.png",
        imageAlt: "Basic code snippet showing TypeScript schema and queries"
    },
    {
        title: "distributed storage",
        subtitle: "Local database performance with cloud convenience",
        description: "Your data syncs seamlessly across all devices in real-time. Work offline, and when you reconnect, all changes are automatically merged with intelligent conflict resolution. No more data loss or sync issues.",
        image: "/sync_light.svg",
        imageAlt: "Synchronization diagram showing data flow between devices"
    },
    {
        title: "built-in auth",
        subtitle: "Plug-and-play secure authentication for millions of users",
        description: "Drop-in authentication that scales to millions of users. Supports OAuth, magic links, and traditional email/password. Built-in security best practices with zero configuration required.",
        image: "/basic-auth-flow.png",
        imageAlt: "Authentication flow diagram showing user login and data access"
    }
];

export default function DeveloperBenefits() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-green-100 h-[80vh]">
            <div className='w-[calc(100%-2rem)] mx-4 h-full'>
                <div className='px-4 h-full'>
                    <div className='px-2 md:px-8 h-full'>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
                            {/* Left Side - Marketing Content + Tabs */}
                            <div className="lg:w-1/3 space-y-6">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900">
                                        powerful tools for app developers
                                    </h2>
                                    <p className="text-lg md:text-xl text-green-700 font-medium">
                                        we did the grunt work for you
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <button className="w-full bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors">
                                        start building
                                    </button>
                                </div>

                                {/* Vertical Tabs */}
                                <div className="space-y-3">
                                    {developerTabs.map((tab, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${activeTab === index
                                                ? 'bg-indigo-200 border-l-4 border-indigo-600'
                                                : 'bg-green-100 hover:bg-indigo-100'
                                                }`}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <h3 className={`font-semibold text-xl mb-2 ${activeTab === index
                                                ? 'text-indigo-800'
                                                : 'text-gray-700'
                                                }`}>
                                                {tab.title}
                                            </h3>
                                            <p className={`mb-2 ${activeTab === index
                                                ? 'text-indigo-700'
                                                : 'text-gray-600'
                                                }`}>
                                                {tab.subtitle}
                                            </p>
                                            {activeTab === index && (
                                                <p className={`text-sm text-indigo-500`}>
                                                    {tab.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Image Display */}
                            <div className="lg:w-2/3 flex items-center">
                                <div className="rounded-lg p-6 w-full h-full flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={developerTabs[activeTab].image}
                                            alt={developerTabs[activeTab].imageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 