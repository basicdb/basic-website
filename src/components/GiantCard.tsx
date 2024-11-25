interface GiantCardProps {
    image: string;
    title?: string;
    subtitle?: string;
    blurb?: string;
    blurb2?: string;
    pillText?: string;
    backgroundEffect?: string;
}

export default function GiantCard({ image, title, subtitle, blurb, blurb2, pillText, backgroundEffect }: GiantCardProps) {
    const handlePillClick = (event: React.MouseEvent<HTMLElement>) => {
        navigator.clipboard.writeText(pillText || '');
        const el = event.currentTarget;
        const originalText = el.innerText;
        el.innerText = 'Copied!';
        setTimeout(() => {
            el.innerText = originalText;
        }, 700);
    };

    return (
        <div className="relative w-[calc(100%-2rem)] h-full m-4">
            {/* Blurred background layer */}
            <div
                className={`absolute inset-0 rounded-3xl bg-cover bg-[center_95%] bg-no-repeat ${backgroundEffect}`}
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Content layer */}
            <div className="relative w-full lg:w-3/4 h-full flex flex-col justify-center p-10">
                {pillText && (
                    <div className="inline-block mb-4 px-4 py-1.5 bg-pink text-pink-700 dark:bg-indigo-700 dark:text-indigo border border-pink-700 dark:border-indigo rounded-full font-mono font-semibold text-sm cursor-pointer w-[230px] text-center" onClick={handlePillClick}>
                        {pillText}
                    </div>
                )}
                <h1 className='text-green-100 text-6xl font-bold drop-shadow-lg'>{title}</h1>
                {subtitle && <h2 className='text-green-100 text-xl drop-shadow-lg mt-4'>{subtitle}</h2>}
                {blurb && <p className='text-green-100 text-xl sm:text-2xl font-semibold drop-shadow-lg mt-8'>{blurb}</p>}
                {blurb2 && <p className='text-green-100 text-xl sm:text-2xl font-semibold drop-shadow-lg mt-4'>{blurb2}</p>}
            </div>
        </div>
    )
}