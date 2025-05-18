import { } from 'lucide-react';
import GiantCard from './GiantCard';
import { FaDiscord } from 'react-icons/fa';

const heroCardElements = {
    image: '/landing-image.webp',
    title: 'the purpose-built backend, for AI',
    titleStyle: 'text-6xl',
    titleColor: 'text-green-100 dark:text-black',
    subtitle: 'Basic is a new way to store and share user data, designed specifically for AI apps and agents',
    backgroundEffect: 'brightness-95',
    buttonText: 'join private beta',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-indigo-700/80 dark:border-indigo-700/70',
    buttonIcon: <FaDiscord className='w-5 h-5' />,
    buttonColor: 'bg-gradient-to-r from-green-700/80 to-indigo-700/80 dark:from-green-700/70 dark:to-indigo-700/70',
    video: 'https://basicwebsitecontent.s3.us-east-2.amazonaws.com/Event+Recap_v3.mp4'
}

export default function Hero() {
    return (
        <div className='w-full min-h-[90vh] lg:h-[90vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}