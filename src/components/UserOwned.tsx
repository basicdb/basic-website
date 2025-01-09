import GiantCard from '@/components/GiantCard';
import { BookOpenIcon } from 'lucide-react';

const heroCardElements = {
    image: '/user-owned.jpg',
    title: 'get started for free',
    subtitle: 'Basic is currently in beta and available for free for all developers and users.',
    backgroundEffect: 'blur-[1px] brightness-50',
    buttonText: 'read Basic docs',
    buttonURL: 'https://docs.basic.tech',
    buttonBorderColor: 'border-pink-700 dark:border-pink-700',
    buttonIcon: <BookOpenIcon className='w-5 h-5' />,
    buttonColor: 'bg-pink-700/80 dark:bg-pink-700/70'
}

export default function UserOwned() {
    return (
        <div className='w-full h-[50vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}