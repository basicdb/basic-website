import Head from 'next/head';
import GiantCard from '@/components/GiantCard';
import JoinDiscord from '@/components/JoinDiscord';
import { NavBar, Footer } from '@/components/NavFooter';

const heroCardElements = {
    image: '/aboutus-hero.webp',
    title: 'serendipity through a cleaner database architecture',
    titleStyle: 'text-4xl sm:text-5xl',
    backgroundEffect: 'brightness-50'
};

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Basic</title>
                <meta name="description" content="Learn about Basic Database - our mission, team, and vision for the future of data" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className="bg-green-100 dark:bg-black w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[50vh]">
                    <GiantCard {...heroCardElements} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full relative">
                    <div className="mx-auto mt-16 max-w-3xl">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Basic was born from the frustration with existing solutions — where the simplest tasks required increasingly complex code to be written.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">We wanted to build a simpler internet where:</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">users store their data, not applications</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Rather than applications storing data of all their users, what if users stored their data from all their apps?</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Users could then provision access of all their existing data to any new applications they onboard onto. Imagine accessing a new social media page but instead of it being empty, you already had your existing friends, photos, and posts. Similarly, you could cut off access of your data from any “evil” apps with just a switch-flip without worrying about your data being sent to them forever.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Developers could build in a much leaner way without worrying about data bloat and management. They could focus on building better applications instead of handling privacy, security and compliance concerns. They could ship more features without worry as much about breaking their existing databases. They could iterate much quicker with a smaller team by focussing on user experiences and interfaces instead of re-solving data storage.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Crazy thing is, we&apos;ve already achieved this with some aspects of the internet today — like emails, and even websites themselves. You could easily move email clients or website hosting services because you own and store those pieces of information. The best technologies continue to be open.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">we didn&apos;t need to make API calls just to load simple text</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Rather than making a request to the cloud via a satellite for even simple tasks, what if our devices (i.e., phones, laptops) were utilized to their full potential while maintaining cloud-like benefits?</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">It&apos;s silly that the overpowered devices we hold in our hands — that we continue to pay and upgrade annually or biannually for their latest tech — currently are only being used as API wrappers. Every button click creates a spinner loading state as the supercomputers we hold onto ping a satellite in space which then pings a data center hundreds or thousands of miles away just to retrieve even a few kilobytes of data.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Instead, read / writes could happen directly on devices while syncing state automatically in the background — this would eliminate latency for loading data entirely. It’d create a seamless way to work not only when transitioning between devices, but also while weaving in and out of wifi connection. Imagine jotting down a thought on your phone while in the cab, then picking up your laptop to flesh it out while on your flight, and finally proofreading it on your tablet cozily in your bed when you reach home.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Some of the best tools that you may already be using (e.g., Figma, Linear, Superhuman, Raycast) are built on this architecture and have surpassed their competition simply because they work a LOT better for their users.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">applications were <i>actually</i> personalized to users</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Rather than apps being prioritized for the masses, what if they were able to be truly personalized to each and every one of our preferences and needs?</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">We want to push the boundaries of tech as we know it today. If we could learn better because our teachers knew their exact strengths and weaknesses and how to best supplement them; if doctors and other professionals knew all our relevant history and context even if its their first time seeing us; if movies, tv shows, songs, and artistic experiences could be uniquely generated for us, not just discovered, based on our preferences and moods; and if ecommerce wasn't just being suggested the same vacuum cleaner over and over despite having just bought it, we might finally enter a new era of personalization.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">We want to foster more cozy corners on the internet, where applications didn’t need to be built for all 8 billion of us at the cost of personalization. Smaller, leaner apps could be built for fewer folks that REALLY love them because they are easier to spin up and maintain. We could finally start seeing the “mom and pop shops” of software, where people build for their communities rather than for the masses.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">… and more!</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Basically (pun intended), we are folks that believe the internet can be a lot better for everyone when certain assumptions are challenged. We&apos;re dedicated to seeing that mission through while understanding it&apos;s a never-ending pursuit. We like bringing people together who have a similar mindset to us because we know that for any surmountable change to occur, we need to empower many more people with the ability to create. And we like having a lot of fun along the way!</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">If you&apos;d like to chat about building on Basic, work with us, or just to say hi, <a href="mailto:founders@basic.tech" className="text-indigo-500 underline">drop us an email</a>!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <JoinDiscord />
                <Footer />
            </section>
        </>
    );
} 