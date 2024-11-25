
import GiantCard from './GiantCard';

const heroCardElements = {
    image: '/landing-image.jpg',
    title: 'build a user-owned web',
    titleColor: 'text-green-100 dark:text-black',
    subtitle: 'ship powerful apps with our open-source infrastructure for data ownership',
    pillText: 'npm i @basictech/react',
    backgroundEffect: 'brightness-95',
}


export default function Hero() {
    return (
        <div className='w-full h-[90vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}