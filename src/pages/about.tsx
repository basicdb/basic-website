import Head from 'next/head';
import GiantCard from '@/components/GiantCard';
import JoinDiscord from '@/components/JoinDiscord';
import { NavBar, Footer } from '@/components/NavFooter';

const heroCardElements = {
    image: '/aboutus-hero.webp',
    title: 'we believe the best technologies are open',
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
            <section className="bg-white dark:bg-black w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[40vh]">
                    <GiantCard {...heroCardElements} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full relative">
                    <div className="mx-auto mt-16 max-w-3xl">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">Closed source technologies are easy to think of, from the Apple ecosystem to gated cellular networks of Verizon, AT&T, and T-Mobile.</h2>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">However, open source tech is by no means uncommon. The web itself is an open source protocol. Anyone is able to create websites using any language, or editor (e.g., Wordpress, Squarespace). Email is another great example of open source tech. You are free to create an email account with any provider and send them to anyone.</h2>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">Data storage technology (e.g., AWS) has remained closed source in that its centralized to the developers of applications. Uber owns and controls all the data of its riders and drivers, while Twitter owns all the tweets on its platform. Epic may not own your medical records but definitely makes it hard to access your medical records.</h2>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">To flip this paradigm on its head and replace it with a collaborative and open web, we invented an open federated protocol for data storage. We call them user-owned data stores.</h2>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-black dark:text-white">With user-owned data stores, we believe that the user-owned web is truely better because it is frictionless, interoperable and secure.</h2>
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