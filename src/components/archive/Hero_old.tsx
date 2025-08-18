import React from 'react';
import { } from 'lucide-react';
import GiantCard from '../GiantCard';
import { FaDiscord } from 'react-icons/fa';

const DiscordIcon = () => React.createElement(FaDiscord as any, { className: 'w-5 h-5' });

const heroCardElements = {
    image: '/landing-image.webp',
    title: 'Basic is the simplest backend',
    title2: 'for powerful apps on the open web',
    titleStyle: 'text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-indigo-900 mt-0 lg:mt-12',
    subtitle: 'developer starter kit with DB + Auth + Sync, where users own their data',
    subtitleStyle: 'text-indigo-900 font-medium italic text-lg md:text-2xl lg:text-3xl mt-0 lg:mt-6 mb-10 lg:mb-20',
    backgroundEffect: '',
    backgroundPosition: 'bottom',
    buttonText: 'join private beta',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-transparent mt-4 text-indigo-900 lg:text-green-100 md:text-xl lg:mt-24 px-0',
    buttonIcon: DiscordIcon(),
    buttonColor: '',
}

export default function Hero() {
    return (
        <div className='w-full min-h-[90vh] h-[90vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}