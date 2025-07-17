import React from 'react';

export default function Haiku() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen my-8 md:my-20">
            <div className="text-indigo-900 dark:text-green-100 text-center font-mono tracking-widest">
                <div className="md:text-lg lg:text-xl mb-24 -ml-32 md:-ml-40 lg:-ml-72">
                    the simplest backend,
                </div>
                <div className="md:text-lg lg:text-xl mb-24 ml-16 md:ml-20 lg:ml-24">
                    for the most powerful apps,
                </div>
                <div className="md:text-lg lg:text-xl ml-64 md:ml-72 lg:ml-[28rem]">
                    DB, Sync, Context.
                </div>
            </div>
        </div>
    );
} 