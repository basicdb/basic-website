import React, { useState } from 'react';
import Image from 'next/image';

interface TabContent {
    title: string;
    content: string[] | string;
    image?: string;
    video?: string;
}

interface VerticalTabsProps {
    tabs: TabContent[];
    activeTabColor?: string;
    inactiveTabColor?: string;
    textColor?: string;
}

export default function VerticalTabs({
    tabs,
    activeTabColor = 'bg-green-200 dark:bg-green-800',
    inactiveTabColor = 'bg-transparent',
    textColor = 'text-green-600 dark:text-green-400'
}: VerticalTabsProps) {
    const [activeTab, setActiveTab] = useState(0);

    const renderContent = (content: string[] | string) => {
        if (Array.isArray(content)) {
            return content.map((paragraph, i) => (
                <p key={i} className={`hidden md:block ${textColor} text-xs ${i > 0 ? 'mt-1' : ''}`}>
                    {paragraph}
                </p>
            ));
        } else {
            return <p className={`hidden md:block ${textColor} text-xs`}>{content}</p>;
        }
    };

    return (
        <div className="w-[calc(100%-1rem)] lg:w-[calc(100%-4rem)] rounded-2xl mx-2 lg:mx-8 p-4 md:p-6 mb-6 bg-green-100 dark:bg-green-900/20">
            <div className="flex flex-row gap-4">
                {/* Left column - Tabs */}
                <div className="w-1/4 md:flex-1 max-w-xs">
                    {/* Fixed height container with evenly spaced tabs */}
                    <div className="flex flex-col justify-between h-[300px]">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`px-3 py-2 rounded-lg cursor-pointer transition-colors duration-150 
                ${activeTab === index ? activeTabColor : inactiveTabColor} hover:bg-green-200 dark:hover:bg-green-700/70`}
                                onClick={() => setActiveTab(index)}
                            >
                                <h4 className={`${textColor} font-medium text-sm md:text-base`}>{tab.title}</h4>
                                <div
                                    className={`mt-1 transition-all duration-300 space-y-1 
                ${activeTab === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                >
                                    {renderContent(tab.content)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column - Image/Video */}
                <div className="w-3/4 md:flex-1 flex flex-col">
                    <div className="rounded-lg overflow-hidden h-[300px] flex items-center justify-center">
                        {tabs[activeTab].video ? (
                            <video autoPlay loop muted playsInline className="w-full h-full rounded-lg object-cover">
                                <source src={tabs[activeTab].video} type="video/mp4" />
                            </video>
                        ) : tabs[activeTab].image ? (
                            <div className="w-full h-full rounded-lg bg-transparent dark:bg-green-600 flex items-center justify-center">
                                <Image
                                    src={tabs[activeTab].image || '/placeholder.jpg'}
                                    alt={tabs[activeTab].title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full rounded-lg object-contain p-2"
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
} 