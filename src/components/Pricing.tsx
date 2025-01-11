import GiantCard from '@/components/GiantCard';
import { BookOpenIcon } from 'lucide-react';

const heroCardElements = {
    image: '/bonfire.png',
    title: 'get started for free',
    subtitle: 'Basic will always be free for indie devs and small projects. Beta access available now.',
    backgroundEffect: ' brightness-50',
    buttonText: 'Basic docs',
    buttonURL: 'https://docs.basic.tech',
    buttonBorderColor: 'border-pink-700 dark:border-pink-700',
    buttonIcon: <BookOpenIcon className='w-5 h-5' />,
    buttonColor: 'bg-pink-700/80 dark:bg-pink-700/70'
}

export default function Pricing() {
    return (
        <div className='w-full h-[50vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}