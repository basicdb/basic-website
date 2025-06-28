import { } from 'lucide-react';
import GiantCard from './GiantCard';
import { FaDiscord } from 'react-icons/fa';

const heroCardElements = {
    image: '/landing-image.webp',
    pillText: '1000+ apps built on Basic',
    title: 'universal context for LLMs',
    titleStyle: 'text-5xl md:text-6xl',
    titleColor: 'text-green-100 dark:text-black',
    subtitle: 'Store data easily with a no-DB, no-auth design. Access user-context across apps using their Personal Data Stores.',
    subtitleStyle: 'text-indigo-900',
    backgroundEffect: 'brightness-95',
    buttonText: 'join private beta',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-indigo-700/80 dark:border-indigo-700/70',
    buttonIcon: <FaDiscord className='w-5 h-5' />,
    buttonColor: 'bg-gradient-to-r from-green-700/80 to-indigo-700/80 dark:from-green-700/70 dark:to-indigo-700/70',
    video: 'https://basicwebsitecontent.s3.us-east-2.amazonaws.com/post-swm.m4v'
}

export default function Hero() {
    return (
        <div className='w-full min-h-[90vh] lg:h-[90vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}