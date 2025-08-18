import React from 'react';
import GiantCard from '@/components/GiantCard';
import { FaDiscord } from 'react-icons/fa';

const heroCardElements = {
    image: '/discord-hero.webp',
    title: 'you don\'t have to build alone!',
    titleStyle: 'text-3xl sm:text-4xl text-green-100',
    subtitle: 'join our discord for an active community of builders, and get live support from our founders',
    subtitleStyle: 'text-green-100',
    backgroundEffect: 'brightness-50',
    buttonText: 'join our Discord',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-pink-700 text-green-100 mt-8',
    buttonIcon: React.createElement(FaDiscord as any, { className: 'w-5 h-5' }),
    buttonColor: 'bg-pink-700/80'
}

export default function JoinDiscord() {
    return (
        <div className='w-full h-[60vh] py-8' style={{ '--bg-position': 'center 30%' } as React.CSSProperties}>
            <GiantCard {...heroCardElements} />
        </div>
    )
} 