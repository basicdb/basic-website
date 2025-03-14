import { StarIcon } from 'lucide-react';
import GiantCard from './GiantCard';

const heroCardElements = {
    image: '/landing-image.webp',
    title: 'database for the next one billion apps',
    titleStyle: 'text-4xl sm:text-5xl',
    titleColor: 'text-green-100 dark:text-black',
    subtitle: 'build hyper-personalized, local-first apps with our database-per-user tech',
    backgroundEffect: 'brightness-95',
    buttonText: 'us on GitHub',
    buttonURL: 'https://github.com/basicdb/create-lofi-app',
    buttonTarget: '_blank',
    buttonBorderColor: 'border-indigo-700/80 dark:border-indigo-700/70',
    buttonIcon: <StarIcon className='w-5 h-5' />,
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