import React from 'react';
import { BookOpen } from 'lucide-react';

const JoinDiscord: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-2 sm:px-4 bg-gradient-to-b from-green-200 via-pink-100 to-green-200">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-7xl text-indigo-900 mb-24 md:mb-8" style={{ lineHeight: '1.5' }}>
                    <span className="">build on the</span>{' '}
                    <span className="italic font-script">open,</span>
                    <br />
                    <span className="italic font-script">interoperable</span>{' '}
                    <span className="">web today.</span>
                </h2>

                {/* Call-to-Action Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
                    {/* Join 1,000+ apps */}
                    <a
                        href="https://discord.gg/S4DmEhuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black underline hover:no-underline transition-all duration-200 group"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                        </svg>
                        <span className="text-lg">join 1,000+ apps</span>
                    </a>

                    {/* Try out Basic */}
                    <a
                        href="https://docs.basic.tech/get-started/welcome"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black underline hover:no-underline transition-all duration-200 group"
                    >
                        <BookOpen className="w-6 h-6" />
                        <span className="text-lg">try out Basic</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinDiscord;
