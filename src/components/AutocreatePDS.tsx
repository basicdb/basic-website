import React from 'react';
import Image from 'next/image';

export default function AutocreatePDS() {
    return (
        <div className="w-full py-20">
            <div className="w-full px-2 sm:px-6 lg:px-8 pb-20 md:pb-10">
                <div className="mb-10 md:mb-20 px-4 sm:px-10">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl text-gray-900 mb-4 md:mb-4">
                        <span className="block md:hidden">auto-create Personal Data Stores, securely access user data</span>
                        <span className="hidden md:block">auto-create Personal Data Stores,</span>
                    </h2>
                    <h2 className="hidden md:block text-3xl md:text-4xl lg:text-6xl text-gray-900">
                        securely access user data
                    </h2>
                </div>

                <div className="flex justify-center px-4 sm:px-10">
                    <div className="relative w-full">
                        {/* Mobile Image */}
                        <Image
                            src="/autocreatePDS_mobile.svg"
                            alt="Auto-create PDS architecture diagram (mobile) showing AI app accessing user data through Basic's infrastructure"
                            width={800}
                            height={800}
                            className="w-full h-auto block md:hidden"
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/autocreatePDS.svg"
                            alt="Auto-create PDS architecture diagram showing AI app accessing user data through Basic's infrastructure"
                            width={800}
                            height={800}
                            className="w-full h-auto hidden md:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 