
import { CalendarIcon } from 'lucide-react';
import GiantCard from './GiantCard';

const heroCardElements = {
    image: '/landing-image.jpg',
    title: 'build a user-owned web',
    titleColor: 'text-green-100 dark:text-black',
    subtitle: 'ship powerful apps with our new data storage protocol for user-owned data',
    pillText: 'npm i @basictech/react',
    backgroundEffect: 'brightness-95',
    buttonText: 'talk to a founder',
    buttonURL: '#speak-to-a-basic-founder',
    buttonBorderColor: 'border-indigo-700 dark:border-indigo-700',
    buttonIcon: <CalendarIcon className='w-5 h-5' />,
    buttonColor: 'bg-indigo-700/80 dark:bg-indigo-700/70'
}


export default function Hero() {
    return (
        <div className='w-full h-[95vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}