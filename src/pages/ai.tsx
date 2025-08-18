import Head from 'next/head';
import { NavBar, Footer } from '@/components/NavFooter';
import JoinDiscord from '@/components/JoinDiscord_old';
import SolutionsComparison from '@/components/archive/SolutionsComparison';
import GiantCard from '@/components/GiantCard';

const heroCardElements = {
    image: '/ai-hero.webp',
    title: 'build AI apps with shared memory.',
    titleStyle: 'text-4xl md:text-6xl lg:text-5xl',
    backgroundEffect: 'brightness-50'
};

const comparisonData = {
    leftColumn: {
        title: "existing solution",
        steps: [
            {
                title: "step 1: integrate with existing APIs",
                subtitle: [
                    "Use individual apps' APIs to gather data ",
                ]
            },
            {
                title: "step 2: implement a scraper",
                subtitle: [
                    "For apps that don't have their data exposed through an API, implement a scraper to gather data continuously",
                ]
            },
            {
                title: "step 3: clean the data",
                subtitle: [
                    "Gather data into a data lake",
                    "Clean, structure and tag the data"
                ]
            },
            {
                title: "step 4: misc.",
                subtitle: [
                    "Set up data permissions and security for privacy",
                    "Keep scrapers up to date",
                    "Update APIs across all the apps as they release new versions"
                ]
            }
        ],
        bottomText: "You end up building out a data cleaning business instead of being able to focus on an application that brings your users joy"
    },
    rightColumn: {
        title: "with Basic",
        steps: [
            {
                title: "step 1: add project ID to your schema",
                subtitle: [
                    "Find a Basic app you want to include the context of in your app",
                    "Grab its project-id from its public schema and add it to your app's schema",
                ]
            }
        ],
        bottomText: "That's it! Basic handles bi-directional read/writes between apps, user permissions, and security"
    }
};

export default function AI() {
    return (
        <>
            <Head>
                <title>Consumer AI - Basic</title>
                <meta name="description" content="Learn how Basic Database enables AI-powered applications with user-owned data" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className="bg-green-100 w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[50vh] landscape:h-[70vh] md:landscape:h-[50vh]">
                    <GiantCard {...heroCardElements} />
                </div>
                <div className="container mx-auto py-16">
                    <h1 className="text-4xl font-bold mb-12 px-4 xl:px-20">Create hyper-personalized AI and consumer apps with "infinite context" of your users across all Basic apps</h1>
                    <SolutionsComparison
                        leftColumn={comparisonData.leftColumn}
                        rightColumn={comparisonData.rightColumn}
                    />
                </div>
                <JoinDiscord />
                <Footer />
            </section>
        </>
    );
} 