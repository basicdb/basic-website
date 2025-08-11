import React from 'react';

export default function Haiku() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen my-8">
            <div className="text-indigo-900 dark:text-green-100 text-center font-mono tracking-widest">
                <div className="md:text-lg lg:text-xl mb-24 -ml-40 md:-ml-48 lg:-ml-80">
                    Basic's open web,
                </div>
                <div className="md:text-lg lg:text-xl mb-24 -ml-8 md:-ml-4 lg:ml-0">
                    devs string personalized apps,
                </div>
                <div className="md:text-lg lg:text-xl ml-48 md:ml-56 lg:ml-80">
                    users own data.
                </div>
            </div>
        </div>
    );
} 