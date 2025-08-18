import Head from 'next/head';
import GiantCard from '@/components/GiantCard';
import JoinDiscord from '@/components/JoinDiscord_old';
import { NavBar, Footer } from '@/components/NavFooter';

const heroCardElements = {
    image: '/aboutus-hero.webp',
    title: 'magic with just a few lines of code.',
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
            <section className="bg-green-100 w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[40vh] landscape:h-[70vh] md:landscape:h-[40vh]">
                    <GiantCard {...heroCardElements} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full relative">
                    <div className="mx-auto mt-16 max-w-3xl">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-600">The next 1 billion apps will be different. They will be built at exponentially faster rates using newer tools, and by a broader range of people.</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Yet one thing will remain the same — the best of them will still feel like magic.</p>
                            </div>
                            <div>
                                <p className="text-gray-600">We remember experiencing it many times, from the real-time collaboration in Figma, and the open ecosystem of Raycast, to the potential for creativity with genAI. Building apps like these isn’t easy because it requires complex code, despite a lot of the architecture already having been solved for. It ought to be made accessible so that we can focus on creating new types of magic.</p>
                            </div>
                            <div>
                                <p className="text-gray-600">At Basic, we believe it's time to raise the bar for infrastructure to usher in this new internet. </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black">AI will be hyper-personalized</h2>
                            </div>
                            <div>
                                <p className="text-gray-600">Data remains gold even in a post-AI world where apps and agents will be as powerful as the context they have. Developers will focus on function instead of having to connect the spread of data across a user's apps. We will build on top of the "infinite context" of our users where their digital interactions even outside our own apps will improve all aspects of personalization for them.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black">Collaboration will be real-time</h2>
                            </div>
                            <div>
                                <p className="text-gray-600">The lack of collaboration in real-time causes information to exist in multiple places with the chance of inconsistencies. Tech like Google Drive, Figma, and CRDTs have made huge strides in this — real-time collaboration will become the default for every app.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black">Data will be user-owned</h2>
                            </div>
                            <div>
                                <p className="text-gray-600">Developers will build lean apps that read data directly from their users. We will iterate and ship faster without worrying about compliance and security. Onboarding users will become instant as every app will start with existing context (e.g., a new user on a new social media platform will bring over all their existing followers and relevant posts). AI / ML models will improve securely without any leakage of sensitive information.</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black">… and more!</h2>
                            </div>
                            <div>
                                <p className="text-gray-600">At Basic, we are dedicated to further the rate of innovation for infrastructure alongside the developments in AI. Meanwhile, we love to gather like-minded people because empowering creators allows for transformational change. And we love having a lot of fun along the way!</p>
                            </div>
                            <div>
                                <p className="text-gray-600">If you&apos;d like to chat about building on Basic or work with us, <a href="#discord" className="text-indigo-500 underline">join our Discord</a>!</p>
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