import React from 'react';
import { } from 'lucide-react';
import GiantCard from './GiantCard';
import { FaDiscord } from 'react-icons/fa';

const heroCardElements = {
    image: '/landing-image.webp',
    title: 'build with Basic,',
    title2: 'grow on the open web',
    titleStyle: 'text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-indigo-900 mt-0 lg:mt-12',
    subtitle: 'effortless, open-source backends',
    subtitleStyle: 'text-indigo-900 italic font-semibold text-xl md:text-3xl',
    backgroundEffect: '',
    backgroundPosition: 'bottom',
    buttonText: 'join private beta',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-transparent mt-4 text-indigo-900 lg:text-green-100 md:text-xl lg:mt-24 px-0',
    buttonIcon: React.createElement(FaDiscord, { className: 'w-5 h-5' }),
    buttonColor: '',
}

export default function Hero() {
    return (
        <div className='w-full min-h-[90vh] h-[90vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}