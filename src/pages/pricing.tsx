import Head from 'next/head';
import GiantCard from '@/components/GiantCard';
import JoinDiscord from '@/components/JoinDiscord';
import { NavBar, Footer } from '@/components/NavFooter';

const heroCardElements = {
    image: '/pricing-hero.webp',
    title: 'always free for indie hackers.',
    titleStyle: 'text-4xl md:text-6xl sm:text-5xl',
    backgroundEffect: 'brightness-50'
};

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Pricing - Basic</title>
                <meta name="description" content="Pricing plans for Basic Database - from free tier to enterprise solutions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className="bg-green-100 dark:bg-black w-full min-h-screen flex flex-col">
                <NavBar />
                <div className="w-full h-[40vh] landscape:h-[70vh] md:landscape:h-[40vh]">
                    <GiantCard {...heroCardElements} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full relative">
                    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 lg:max-w-6xl lg:grid-cols-3">
                        {/* Free Plan */}
                        <div className="ring-1 ring-gray-200 dark:ring-gray-800 rounded-3xl p-8 sm:p-10">
                            <div className="h-56 flex flex-col justify-between">
                                <h3 className="text-2xl font-bold text-black dark:text-white text-center">free</h3>
                                <p className="flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold text-black dark:text-white">$0</span>
                                    <span className="text-base text-gray-500 dark:text-gray-400">/mo</span>
                                </p>
                                <a href="https://app.basic.tech" target="_blank" rel="noopener noreferrer" className="block rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-90">
                                    go to app
                                </a>
                            </div>
                            <ul className="mt-8 space-y-3 list-disc pl-5">
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Unlimited projects</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Unlimited users</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">No additional cost for user-data bandwidth</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Access to all dev tools (CLI, admin panel, SDKs)</li>
                            </ul>
                        </div>

                        {/* Startup Plan */}
                        <div className="ring-1 ring-gray-200 dark:ring-gray-800 rounded-3xl p-8 sm:p-10">
                            <div className="h-56 flex flex-col justify-between">
                                <h3 className="text-2xl font-bold text-black dark:text-white text-center">startup</h3>
                                <p className="flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold text-black dark:text-white">$20</span>
                                    <span className="text-base text-gray-500 dark:text-gray-400">/user/mo</span>
                                </p>
                                <a className="block rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold bg-gray-400 dark:bg-gray-600 text-white dark:text-gray-300 opacity-50 cursor-not-allowed">
                                    included for free while in beta!
                                </a>
                            </div>
                            <ul className="mt-8 space-y-3 list-disc pl-5">
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Everything in free plan</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Index to view data across all your users in real-time</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">User-analytics (e.g., DAU, MAU, user sign-ups)</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Publish to Basic.ID app store</li>
                            </ul>
                        </div>

                        {/* Growth Plan */}
                        <div className="ring-1 ring-gray-200 dark:ring-gray-800 rounded-3xl p-8 sm:p-10">
                            <div className="h-56 flex flex-col justify-between">
                                <h3 className="text-2xl font-bold text-black dark:text-white text-center">custom</h3>
                                <p className="flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold text-black dark:text-white">contact us</span>
                                </p>
                                <a href="mailto:sales@basic.tech" className="block rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-90">
                                    email sales
                                </a>
                            </div>
                            <ul className="mt-8 space-y-3 list-disc pl-5">
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Everything in startup plan</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">API access to indices</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Custom SDKs</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Dedicated engineering support</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Automated backups</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Logging & monitoring</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">Data encryption</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">SSO</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">SLAs</li>
                                <li className="text-gray-600 dark:text-gray-300 pl-2">SOC II & HIPAA compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <JoinDiscord />
                <Footer />
            </section>
        </>
    );
} 