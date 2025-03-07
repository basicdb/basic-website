import GiantCard from '@/components/GiantCard';
import { FaDiscord } from 'react-icons/fa';

const heroCardElements = {
    image: '/bonfire.png',
    title: 'get started for free',
    subtitle: 'Building doesn\'t have to be lonely. Join our discord for an active community and live support from our founders',
    backgroundEffect: ' brightness-50',
    buttonText: 'join Discord',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-pink-700 dark:border-pink-700',
    buttonIcon: <FaDiscord className='w-5 h-5' />,
    buttonColor: 'bg-pink-700/80 dark:bg-pink-700/70'
}

export default function Pricing() {
    return (
        <div className='w-full h-[50vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}