import Head from 'next/head';
import { NavBar, Footer } from '@/components/NavFooter';
import JoinDiscord from '@/components/archive/JoinDiscord_old';
import SolutionsComparison from '@/components/archive/SolutionsComparison';
import GiantCard from '@/components/archive/GiantCard';

const heroCardElements = {
    image: '/local-first-hero.webp',
    title: 'build local-first apps with sync.',
    titleStyle: 'text-4xl md:text-6xl lg:text-5xl',
    backgroundEffect: 'brightness-50'
};

const comparisonData = {
    leftColumn: {
        title: "existing solution",
        steps: [
            {
                title: "step 1: set up local storage",
                subtitle: [
                    "Set up a local-storage library like IndexedDB or SQLite"
                ]
            },
            {
                title: "step 2: UI with optimistic updates",
                subtitle: [
                    "Manage state on your users' devices with local-storage",
                    "Update UI optimistically when data changes"
                ]
            },
            {
                title: "step 3: create sync engine",
                subtitle: [
                    "Set up sync engine (e.g., websockets, HTTP polling)",
                    "Create a queueing system for changes",
                    "Determine and merge conflicts"
                ]
            },
            {
                title: "step 4: create network layer",
                subtitle: [
                    "Create a layer for connectivity detection across devices and users",
                    "Implement retries and backoffs",
                    "Build request batching to reduce the payload size"
                ]
            },
            {
                title: "step 5: misc.",
                subtitle: [
                    "Test your sync engine's performance, reliability, and scale across different network conditions",
                    "Ensure you maintain security and privacy of your users' data"
                ]
            }
        ],
        bottomText: "And anyone that's built a sync engine knows that the first (and second) rule of sync engines is 'don't build your own sync engine from scratch'"
    },
    rightColumn: {
        title: "with Basic",
        steps: [
            {
                title: "step 1: install Basic",
                subtitle: [
                    "run 'npx create-lofi-app' in your terminal"
                ]
            },
            {
                title: "step 2: write single-line database commands",
                subtitle: [
                    "Implement Basic sync + db in your app with single-line DB commands like .getAll(), .add(), and .update()"
                ]
            }
        ],
        bottomText: "That's it! Local-first sync is enabled in your app. Basic automatically handles the sync across devices, users, and offline-mode. You also attain much simpler state management."
    }
};

export default function LocalFirst() {
    return (
        <>
            <Head>
                <title>Local-First - Basic</title>
                <meta name="description" content="Learn how Basic enables modern local-first architecture where UIs load instantly and apps work offline" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className="bg-green-100 w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[50vh] landscape:h-[70vh] md:landscape:h-[50vh]">
                    <GiantCard {...heroCardElements} />
                </div>
                <div className="container mx-auto py-16">
                    <h1 className="text-4xl font-bold mb-12 px-4 xl:px-20">Local-first is a modern architecture where UIs load instantly, apps works offline, and state is automatically synced across all user devices</h1>
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