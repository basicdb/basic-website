import GiantCard from '@/components/GiantCard';
import { FaDiscord } from 'react-icons/fa';

const heroCardElements = {
    image: '/bonfire.png',
    title: 'you don\'t have to build alone!',
    subtitle: 'join our discord for an active community of builders, and get live support from our founders',
    backgroundEffect: ' brightness-50',
    buttonText: 'join Discord',
    buttonURL: 'https://discord.gg/M57gcazvYk',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-pink-700 dark:border-pink-700',
    buttonIcon: <FaDiscord className='w-5 h-5' />,
    buttonColor: 'bg-pink-700/80 dark:bg-pink-700/70'
}

export default function JoinDiscord() {
    return (
        <div className='w-full min-h-[50vh] py-8'>
            <GiantCard {...heroCardElements} />
        </div>
    )
} 