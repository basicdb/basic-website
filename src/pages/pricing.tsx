import Head from 'next/head';
import GiantCard from '@/components/GiantCard';
import JoinDiscord from '@/components/JoinDiscord';
import { NavBar, Footer } from '@/components/NavFooter';

const heroCardElements = {
    image: '/pricing-hero.webp',
    title: 'abundance for the ambitious.',
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
                    <div className="mx-auto mt-16 max-w-6xl">
                        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                            always free for indie hackers
                        </h2>

                        {/* Auth Table */}
                        <div className="mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-green-200 dark:border-green-700">
                                            <th className="text-left py-4 px-6 font-semibold text-black dark:text-white w-1/3"></th>
                                            <th className="text-center py-4 px-6 font-semibold text-black dark:text-white w-1/4">free</th>
                                            <th className="text-center py-4 px-6 font-semibold text-black dark:text-white w-1/4">
                                                $25/mo
                                                <div className="text-sm font-normal text-green-500 dark:text-green-400">(free while in beta)</div>
                                            </th>
                                            <th className="text-center py-4 px-6 font-semibold text-black dark:text-white w-1/4">custom</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-green-400 dark:bg-green-900">
                                            <td className="py-3 px-6 font-semibold text-black dark:text-white" colSpan={4}>auth</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200">number of projects</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200">MAU (Monthly Active Users)</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800">
                                                up to 1M
                                                <div className="text-sm text-green-500 dark:text-green-400">$0.02/MAU-month after</div>
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200">multifactor auth</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200">
                                                custom branding
                                                <div className="text-sm text-green-500 dark:text-green-400">colors, font, icon, background</div>
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800">included</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200">pre-built components</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800">included</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200">
                                                remove Basic branding
                                                <div className="text-sm text-green-500 dark:text-green-400">from auth emails</div>
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200">-</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200">included</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200">included</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* DB Table */}
                        <div className="mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <tbody>
                                        <tr className="bg-green-400 dark:bg-green-900">
                                            <td className="py-3 px-6 font-semibold text-black dark:text-white w-1/3" colSpan={4}>db</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">number of projects</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">database per user</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">indexedDB, sqlite</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">unlimited api calls</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">included</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">
                                                database storage
                                                <div className="text-sm text-green-500 dark:text-green-400">per month</div>
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">up to 50GB</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">
                                                up to 200GB
                                                <div className="text-sm text-green-500 dark:text-green-400">$0.125/GB-month after</div>
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">contact us</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">database bandwidth</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">point-in-time recovery</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">-</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">up to 7 days</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">contact us</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">auto-pausing of projects</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">never</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">
                                                number of team members
                                                <div className="text-sm text-green-500 dark:text-green-400">per project</div>
                                            </td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Sync Table */}
                        <div className="mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <tbody>
                                        <tr className="bg-green-400 dark:bg-green-900">
                                            <td className="py-3 px-6 font-semibold text-black dark:text-white w-1/3" colSpan={4}>sync</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">number of devices</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">number of connections</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4">unlimited</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 bg-green-200 dark:bg-green-800 w-1/4"></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3">custom SDK</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">-</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">-</td>
                                            <td className="py-3 px-6 text-center text-green-700 dark:text-green-200 w-1/4">contact us</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* LLM Context Table */}
                        <div className="mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <tbody>
                                        <tr className="bg-green-400 dark:bg-green-900">
                                            <td className="py-3 px-6 font-semibold text-black dark:text-white w-1/3" colSpan={4}>LLM context</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3 italic" colSpan={4} style={{ textAlign: 'center' }}>coming soon</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Blob Storage Table */}
                        <div className="mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <tbody>
                                        <tr className="bg-green-400 dark:bg-green-900">
                                            <td className="py-3 px-6 font-semibold text-black dark:text-white w-1/3" colSpan={4}>blob storage</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3 italic" colSpan={4} style={{ textAlign: 'center' }}>coming soon</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Multiplayer Table */}
                        <div className="mb-12">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <tbody>
                                        <tr className="bg-green-400 dark:bg-green-900">
                                            <td className="py-3 px-6 font-semibold text-black dark:text-white w-1/3" colSpan={4}>multiplayer</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-6 text-green-700 dark:text-green-200 w-1/3 italic" colSpan={4} style={{ textAlign: 'center' }}>coming soon</td>
                                        </tr>
                                    </tbody>
                                </table>
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