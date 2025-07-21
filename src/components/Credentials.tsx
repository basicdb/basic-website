import React from 'react';
import Image from 'next/image';

const Credentials = () => {
    // Placeholder logos - you can replace these with actual company logos
    const logos = [
        { id: 1, name: 'Cornell', image: '/cornell.png' },
        { id: 2, name: 'YC', image: '/yc.png' },
        { id: 3, name: 'Browserbase', image: '/browserbase.webp' },
        { id: 4, name: 'Lemniscap', image: '/lemniscap.png', lemnis: true },
        { id: 5, name: 'EYP', image: '/eyp.webp', eyp: true },
    ];

    return (
        <div className="w-full pt-10 bg-transparent">
            <div className="container mx-auto px-4">
                <p className="text-center text-green-400 text-sm mb-2 opacity-40">
                    built and supported by teams from
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className={`w-24 h-12 flex items-center justify-center${logo.eyp ? ' pb-3' : ''}${logo.lemnis ? ' pt-1' : ''}`}
                        >
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                width={96}
                                height={48}
                                className="max-w-full max-h-full object-contain grayscale w-auto h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Credentials; 