import Marquee from "@/components/ui/marquee";

const firstRow = [
    'fintech',
    'personal finance',
    'healthtech',
    'consumer ai',
    'web3',
    'local-first apps',
    'decentralized web',
];

const secondRow = [
    'cozy computing',
    'personal ai',
    'personal apps',
    'collaborative spaces',
    'personal computing',
    'voice assistants',
    'video ai'
];

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-16 text-green-500">
            <Marquee pauseOnHover className="[--duration:200s]">
                {firstRow.map((text) => (
                    <div key={text} className="text-xl font-medium">
                        {text}
                    </div>
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:200s]">
                {secondRow.map((text) => (
                    <div key={text} className="mx-4 text-xl font-medium">
                        {text}
                    </div>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
    );
}
