import MediumCard from '@/components/MediumCard';
import moreBenefits from '@/utils/moreBenefits';
import Benefits from '@/components/Benefits';

import { BookOpenTextIcon, LaptopIcon, GithubIcon } from 'lucide-react';

export default function OpenResilientPortable() {
    const mediumCardElements = [
        {
            title: 'Open ecosystem',
            titleColor: 'text-green-800 dark:text-green',
            cardColor: 'bg-green dark:bg-green-800',
            subtitleColor: 'text-green-700 dark:text-green-400',
            textColor: 'text-green-500',
            content: [
                {
                    subtitle: 'Open schemas',
                    text: 'All apps on Basic have publicly accessible schemas while keeping data secure. Schemas can be forked so that developers can iterate on top of each other\'s work'
                },
                {
                    subtitle: 'Interoperability',
                    text: 'Basic\'s data model is designed for interoperability instead of relying on APIs that limit data access. Developers can build apps that speak to each other without the need for connectors and plugins'
                },
            ],
            buttonText: 'Basic docs',
            buttonURL: 'https://docs.basic.tech/info/PDS',
            buttonBorderColor: 'border-green-800 dark:border-green',
            image: '/PDS.svg',
            buttonIcon: <BookOpenTextIcon className='w-5 h-5' />,
        },
        {
            title: 'Resilient apps and data',
            titleColor: 'text-indigo-800 dark:text-indigo',
            cardColor: 'bg-indigo dark:bg-indigo-800',
            subtitleColor: 'text-indigo-700 dark:text-indigo-400',
            textColor: 'text-indigo-500',
            content: [
                {
                    subtitle: 'Local-first architecture',
                    text: 'Your users should be able to access your apps across all their devices, with their coworkers, friends and family, and even if there\'s downtime in their WiFi'
                },
                {
                    subtitle: 'Permanence of data',
                    text: 'You can sell trust and transparency to your users as their data will perpetually remain in their control. Any data written by them using your apps will always be stored and accessible by them in their User-owned Data Stores, granting them freedom from vendor lock-ins'
                }
            ],
            buttonText: 'React SDK',
            buttonURL: 'https://docs.basic.tech/sdk-reference/react-components',
            buttonBorderColor: 'border-indigo-800 dark:border-indigo',
            image: '/PDS.svg',
            buttonIcon: <LaptopIcon className='w-5 h-5' />,
        },

        {
            title: 'Portable pockets of internet',
            titleColor: 'text-pink-800 dark:text-pink',
            cardColor: 'bg-pink dark:bg-pink-800',
            subtitleColor: 'text-pink-700 dark:text-pink-400',
            textColor: 'text-pink-500',
            content: [
                {
                    subtitle: 'Open source protocol',
                    text: 'All our code is public and we invite everyone to contribute to the Basic protocol. You can fork and run your own Basic server as well (similar to BlueSky / Mastodon)'
                },
                {
                    subtitle: 'Self-hostable data stores',
                    text: 'Users can self-host their data stores or host with any other provider, giving them the flexibility of cost, security and privacy for their personal and business needs'
                }
            ],
            buttonText: 'Basic codebase',
            buttonURL: 'https://github.com/basicdb',
            buttonBorderColor: 'border-pink-800 dark:border-pink',
            image: '/PDS.svg',
            buttonIcon: <GithubIcon className='w-5 h-5' />,
        }
    ]

    return (
        <div>
            <h2 className='h-[15vh] text-center mt-[5vh]'>
                <span className='text-green-700 dark:text-green text-5xl font-bold'>open, </span>
                <span className='text-indigo-700 dark:text-indigo text-5xl font-bold'>resilient, </span>
                <span className='text-pink-700 dark:text-pink text-5xl font-bold'>and portable</span>
            </h2>
            {mediumCardElements.map((card, index) => (
                <MediumCard key={index} {...card} />
            ))}
            <Benefits benefits={moreBenefits} title="many more benefits..." />
        </div>
    )
}