import React from 'react';
import VerticalTabs from './VerticalTabs';

interface TabContent {
    title: string;
    content: string[] | string;
    image?: string;
    video?: string;
}

export default function PrivateBeta() {
    const betaTechnologies: TabContent[] = [
        {
            title: "AI apps, agents",
            content: [
                "Your apps and agents are missing a crucial piece in their workflows — a memory layer.",
                "You want a super simple way to store and access user context from previous interactions."
            ],
            image: "/ai_app.png"
        },
        {
            title: "AI gen platforms",
            content: [
                "You're building a platform for your users to create AI apps and agents.",
                "You need to scale auth and storage that's scoped to each user, but it's too complex with Supabase / Neon."
            ],
            image: "/ai_platform.png"
        },
        {
            title: "AI wearables",
            content: [
                "You're building wearables that record a lot of personal information about your users.",
                "You want to help them store it securely, but continue improving your models without leaking their data."
            ],
            image: "/ai_wearable.png"
        },
        {
            title: "Embedded AI",
            content: [
                "As you embed LLMs into your app, you want to personalize them for your users rather than providing a generic, bland experience.",
            ],
            image: "/embedded_ai.png"
        },
        {
            title: "...you?",
            content: [
                "What did we miss? What are you building that Basic can help with?"
            ],
            image: "/you.png"
        }
    ];

    return (
        <div className="my-12 mx-auto max-w-5xl">
            <h2 className='text-center mb-4 w-[calc(100%-2rem)] mx-4'>
                <span className='text-green-700 dark:text-green-400 text-3xl md:text-4xl lg:text-5xl font-semibold'>access user-context across apps</span>
            </h2>
            <p className='text-green-700 dark:text-green-400 text-lg text-center mb-8 px-4 sm:px-8 md:px-12 lg:px-16'>we want to prioritize you if you're building any of the following tools</p>

            <VerticalTabs
                tabs={betaTechnologies}
                activeTabColor="bg-green-200 dark:bg-green-800"
                inactiveTabColor="hover:bg-green-100 dark:hover:bg-green-900"
                textColor="text-green-600 dark:text-green-400"
            />
        </div>
    );
} 