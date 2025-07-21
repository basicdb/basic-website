import React from 'react'

export default function StepIntoCommunity() {
    return (
        <div className="w-[calc(100%-2rem)] my-24 px-8 w-full min-h-screen items-center justify-center">
            <div className="max-w-6xl w-full px-2 md:px-8">
                <div className='pt-24'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl text-indigo-900 dark:text-green-100 font-bold'>step into community</h2>
                    <p className='text-green-900 dark:text-green-100 text-xl lg:text-3xl font-thin mt-8'>formed on Basic</p>
                </div>

                {/* Three Content Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <a
                        href="https://kiki.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cover bg-center bg-no-repeat p-4 min-h-72 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group"
                        style={{ backgroundImage: 'url(/kiki.png)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl text-white font-bold">
                                Kiki
                            </h3>
                            <p className="text-white text-sm">
                                turn ideas into mobile apps
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://writly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cover bg-center bg-no-repeat p-4 min-h-72 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group"
                        style={{ backgroundImage: 'url(/superagents.png)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl text-white font-bold">
                                Writly
                            </h3>
                            <p className="text-white text-sm">
                                real-time publishing for writers
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://thesuperagents.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cover bg-center bg-no-repeat p-4 min-h-72 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group"
                        style={{ backgroundImage: 'url(/superagents.png)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl text-white font-bold">
                                Super agents
                            </h3>
                            <p className="text-white text-sm">
                                discover and create AI agents
                            </p>
                        </div>
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="">
                    <p className='text-green-900 dark:text-green-100 text-xl lg:text-3xl font-thin mt-8 pb-8'>nurturing connection</p>
                    <div className="w-full mb-16">
                        <video
                            className="w-full h-auto"
                            controls
                            autoPlay
                            muted
                            poster="/event1.webp"
                        >
                            <source
                                src="https://basicwebsitecontent.s3.us-east-2.amazonaws.com/Event+Recap_v3.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
} 