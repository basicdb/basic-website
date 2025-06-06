import Head from 'next/head';
import { NavBar, Footer } from '@/components/NavFooter';
import JoinDiscord from '@/components/JoinDiscord';
import GiantCard from '@/components/GiantCard';

const heroCardElements = {
    image: '/events-hero.webp',
    title: 'we like to bring our hackers together for cool events.',
    titleStyle: 'text-4xl md:text-6xl lg:text-5xl',
    backgroundEffect: 'brightness-50'
};

const eventData = {
    video: {
        url: "https://basicwebsitecontent.s3.us-east-2.amazonaws.com/Event+Recap_v3.mp4",
        poster: "/event-poster.webp"
    },
    memories: [
        { src: "/event4.webp", alt: "Networking at lofihack" },
        { src: "/event3.webp", alt: "Networking at lofihack" },
        { src: "/event5.webp", alt: "Networking at lofihack" },
        { src: "/event1.webp", alt: "Hackers collaborating at lofihack" },
        { src: "/event2.webp", alt: "Presentation at lofihack" },
    ]
};

export default function Events() {
    return (
        <>
            <Head>
                <title>Events - Basic</title>
                <meta name="description" content="Join our community at events!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className="bg-green-100 dark:bg-black w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[60vh] landscape:h-[80vh] md:landscape:h-[60vh]">
                    <GiantCard {...heroCardElements} />
                </div>
                <div className="container mx-auto py-16 px-4 xl:px-20">
                    <h1 className="text-4xl font-bold mb-6 text-center">JOIN NOW: Speaking with Machines — AI hackathon with Windsurf</h1>
                    <div className="flex justify-center">
                        <span className="text-xl mb-12 text-green-500">Jun 21st (virtual + SF option),&nbsp;</span>
                        <a href="#memories" className="text-xl mb-12 text-indigo-500 hover:text-indigo-600 transition-colors underline">sign up while slots last.</a>
                    </div>

                    {/* Video Embed */}
                    <div className="w-full aspect-video mb-16">
                        <video
                            className="w-full h-full object-cover rounded-lg"
                            controls
                            autoPlay
                            muted
                            poster={eventData.video.poster}
                        >
                            <source
                                src="https://basicwebsitecontent.s3.us-east-2.amazonaws.com/swm+4k.m4v"
                                type="video/x-m4v"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <h1 className="text-4xl font-bold mb-6 text-center">Previously, we hosted our first event — lofihack, feb 22nd, SF</h1>
                    <p className="text-xl mb-12 text-green-500 text-center">here are some memories</p>

                    {/* Video Embed */}
                    <div className="w-full aspect-video mb-16">
                        <video
                            className="w-full h-full object-cover rounded-lg"
                            controls
                            autoPlay
                            muted
                            poster={eventData.video.poster}
                        >
                            <source
                                src={eventData.video.url}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {eventData.memories.map(({ src, alt }, index) => (
                            <div key={index} className="break-inside-avoid mb-8">
                                <img
                                    src={src}
                                    alt={alt}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <JoinDiscord />
                <Footer />
            </section>
        </>
    );
} 