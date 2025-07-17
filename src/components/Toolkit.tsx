import React from 'react'

export default function Toolkit() {
    return (
        <div className="w-[calc(100%-2rem)] my-24 mx-4 w-full min-h-screen h-screen flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <div className='p-8'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl text-indigo-900 dark:text-green-100 font-bold'>breathe life into apps</h2>
                    <p className='text-green-700 dark:text-green-400 text-lg lg:text-2xl font-thin mt-2.5'>for developers building what's next</p>
                </div>

                {/* First Section - Full Width */}
                <div className="border-t border-b border-gray-300 dark:border-gray-600 py-8 mb-8">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-2">
                            context of users across apps
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                            realtime events of users across all their apps
                        </p>
                    </div>
                </div>

                {/* Second Section - Two Columns */}
                <div className="border-b border-gray-300 dark:border-gray-600 py-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-2">
                                sync
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                zero-latency frontends
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                zero-config backend
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-2">
                                auth
                            </h3>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                the last account
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                your users ever make
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Section - Four Columns */}
                <div className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">
                                schema as code
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                declare and manage schema
                            </p>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                within your codebase
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">
                                security effortlessly
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                data is scoped to each user
                            </p>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                encrypted at rest and transit
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">
                                Typescript for LLMs
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                data is type-safe
                            </p>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                LLMs make less mistakes
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-2">
                                self-hostable
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                PDS are open-source
                            </p>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                users keep their data forever
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 