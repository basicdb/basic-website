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
                <p key={i} className={`${textColor} text-sm ${i > 0 ? 'mt-2' : ''} text-center lg:text-left`}>
                    {paragraph}
                </p>
            ));
        } else {
            return <p className={`${textColor} text-sm text-center lg:text-left`}>{content}</p>;
        }
    };

    return (
        <div className="w-full rounded-3xl p-4 lg:px-2 lg:py-6 mb-10 bg-green-100 dark:bg-green-900/20">
            {/* Mobile and Medium view - Vertical layout */}
            <div className="lg:hidden space-y-8">
                {tabs.map((tab, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className={`${textColor} font-medium text-xl text-center`}>{tab.title}</h3>
                        {renderContent(tab.content)}
                        {(tab.image || tab.video) && (
                            <div className="rounded-lg overflow-hidden h-[200px] md:h-[300px] flex items-center justify-center w-full">
                                {tab.video ? (
                                    <video autoPlay loop muted playsInline className="w-full h-full rounded-lg object-cover">
                                        <source src={tab.video} type="video/mp4" />
                                    </video>
                                ) : tab.image ? (
                                    <div className="w-full h-full rounded-lg bg-transparent dark:bg-green-600 flex items-center justify-center relative">
                                        <Image
                                            src={tab.image || '/superagents.png'}
                                            alt={tab.title}
                                            fill
                                            className="w-full h-full rounded-lg object-contain p-2"
                                        />
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop view - Vertical tabs */}
            <div className="hidden lg:flex flex-row gap-8">
                {/* Left column - Tabs */}
                <div className="w-full lg:w-1/3">
                    {/* Fixed height container with evenly spaced tabs */}
                    <div className="flex flex-col justify-between h-[425px]">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`px-4 py-3 rounded-lg cursor-pointer transition-colors duration-150 
                ${activeTab === index ? activeTabColor : inactiveTabColor} hover:bg-green-200 dark:hover:bg-green-700/70`}
                                onClick={() => setActiveTab(index)}
                            >
                                <h4 className={`${textColor} font-medium text-lg lg:text-left`}>{tab.title}</h4>
                                <div
                                    className={`mt-2 transition-all duration-300 space-y-2 
                ${activeTab === index ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                >
                                    {renderContent(tab.content)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column - Image/Video */}
                <div className="w-full lg:w-2/3 flex flex-col">
                    <div className="rounded-lg overflow-hidden h-[425px] flex items-center justify-center">
                        {tabs[activeTab].video ? (
                            <video autoPlay loop muted playsInline className="w-full h-full rounded-lg object-cover">
                                <source src={tabs[activeTab].video} type="video/mp4" />
                            </video>
                        ) : tabs[activeTab].image ? (
                            <div className="w-full h-full rounded-lg bg-transparent dark:bg-green-600 flex items-center justify-center">
                                <Image
                                    src={tabs[activeTab].image || '/superagents.png'}
                                    alt={tabs[activeTab].title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full rounded-lg object-contain p-4 w-auto h-auto"
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
} 