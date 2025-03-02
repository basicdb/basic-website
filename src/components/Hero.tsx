
import { CalendarIcon } from 'lucide-react';
import GiantCard from './GiantCard';

const heroCardElements = {
    image: '/landing-image.jpg',
    title: 'build on the user-owned web',
    titleColor: 'text-green-100 dark:text-black',
    subtitle: 'ship powerful apps with our new database that gives users control of their data',
    pillText: 'npx create-lofi-app',
    backgroundEffect: 'brightness-95',
    buttonText: 'talk to a founder',
    buttonURL: '#speak-to-a-basic-founder',
    buttonBorderColor: 'border-indigo-700/80 dark:border-indigo-700/70',
    buttonIcon: <CalendarIcon className='w-5 h-5' />,
    buttonColor: 'bg-gradient-to-r from-green-700/80 to-indigo-700/80 dark:from-green-700/70 dark:to-indigo-700/70'
}


export default function Hero() {
    return (
        <div className='w-full h-[90vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}