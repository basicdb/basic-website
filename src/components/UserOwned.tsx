import GiantCard from '@/components/GiantCard';

const heroCardElements = {
    image: '/user-owned.jpg',
    title: 'user-owned data stores',
    blurb: "user-owned data stores are independent databases spun up and managed by Basic for each of your users. All of a user's data across their Basic apps is contained in their data store instead of being sprawled across apps",
    blurb2: "users are always in full control of their data stores",
    backgroundEffect: 'blur-[1px] brightness-50',
}

export default function UserOwned() {
    return (
        <div className='w-full h-[70vh]'>
            <GiantCard {...heroCardElements} />
        </div>
    )
}