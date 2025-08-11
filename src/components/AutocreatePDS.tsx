import React from 'react';
import Image from 'next/image';

export default function AutocreatePDS() {
    return (
        <div className="w-full py-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl text-gray-900 px-10 mb-4 md:mb-4">
                        <span className="block md:hidden">auto-create Personal Data Stores, access data from users securely</span>
                        <span className="hidden md:block">auto-create Personal Data Stores,</span>
                    </h2>
                    <h2 className="hidden md:block text-3xl md:text-4xl lg:text-6xl text-gray-900 px-10">
                        access data from users securely
                    </h2>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-full">
                        <Image
                            src="/autocreatePDS.svg"
                            alt="Auto-create PDS architecture diagram showing AI app accessing user data through Basic's infrastructure"
                            width={800}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 