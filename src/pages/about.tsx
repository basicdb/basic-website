import Head from 'next/head';
import GiantCard from '@/components/GiantCard';
import JoinDiscord from '@/components/JoinDiscord';
import { NavBar, Footer } from '@/components/NavFooter';

const heroCardElements = {
    image: '/aboutus-hero.webp',
    title: 'make magic with Basic.',
    titleStyle: 'text-4xl md:text-6xl sm:text-5xl',
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
                <div className="w-full h-[40vh] landscape:h-[70vh] md:landscape:h-[40vh]">
                    <GiantCard {...heroCardElements} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full relative">
                    <div className="mx-auto mt-16 max-w-3xl">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">The next 1 billion apps will be different. They will be built at exponentially faster rates using newer tools, and by a broader range of people.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Yet one thing will remain the same — the best of them will still feel like magic.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">We remember experiencing it many times, from the real-time collaboration in Figma, and the open ecosystem of Raycast, to the potential for creativity with genAI. Making magic isn’t easy because it requires complex code, but what we consider magic today has already been solved for. It ought to be made accessible so that we can focus on creating new types of magic.</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">At Basic, we believe it’s time to raise the bar for infrastructure to usher in this new internet. </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">AI will be hyper-personalized</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Data remains gold even in a post-AI world where apps and agents will be as powerful as the context they have. Developers will focus on function instead of having to connect the spread of data across a user’s apps. We will build on top of the “infinite context” of our users where their digital interactions even outside our own apps will improve all aspects of personalization for them.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">Apps will be local-first</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Devices and models continue to get powerful, and there’s a lot more we can do with what our users hold in their hands before punting it to the cloud. Apps will have instant page loads, and work seamlessly across devices even with spotty wifi connections. Personal AI agents will be highly private and secure.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">Collaboration will be real-time</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">The lack of collaboration in real-time causes information to exist in multiple places with the chance of inconsistencies. Tech like Google Drive, Figma, and CRDTs have made huge strides in this — real-time collaboration will become the default for every app.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">Data will be user-owned</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Developers will build lean apps that read data directly from their users. We will iterate and ship faster without worrying about compliance and security. Onboarding users will become instant as every app will start with existing context (e.g., a new user on a new social media platform will bring over all their existing followers and relevant posts). AI / ML models will improve securely without any leakage of sensitive information.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">Systems will be interoperable</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Schemas will be public for developers to build on top of each other’s applications. Apps will speak to each other and allow information to flow between them in real-time. Teams will access all relevant information instantly while referring to a single source of truth. Friends and family will share memories and experiences seamlessly despite using different apps.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">… and more!</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">We, at Basic, are dedicated to further the rate of innovation for infrastructure alongside the developments in AI and app creation. Meanwhile, we love to gather like-minded people because empowering creators allows for transformational change. And we love having a lot of fun along the way!</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">If you&apos;d like to chat about building on Basic or work with us, <a href="mailto:founders@basic.tech" className="text-indigo-500 underline">drop us an email</a>!</p>
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