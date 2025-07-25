import React from 'react';

interface GiantCardProps {
    image: string;
    title?: string;
    titleStyle?: string;
    subtitle?: string;
    subtitleStyle?: string,
    blurb?: string;
    blurb2?: string;
    pillText?: string;
    buttonText?: string;
    buttonURL?: string;
    buttonTarget?: string;
    buttonBorderColor?: string;
    buttonIcon?: React.ReactNode;
    buttonColor?: string;
    backgroundEffect?: string;
    video?: string | string[];
}

export default function GiantCard({ image, title, titleStyle, subtitle, subtitleStyle, blurb, blurb2, pillText, buttonText, buttonURL, buttonTarget, buttonBorderColor, buttonIcon, buttonColor, backgroundEffect, video }: GiantCardProps) {
    // Randomly select a video if multiple are provided
    const selectedVideo = React.useMemo(() => {
        if (!video) return undefined;
        if (typeof video === 'string') return video;
        if (Array.isArray(video) && video.length > 0) {
            const randomIndex = Math.floor(Math.random() * video.length);
            return video[randomIndex];
        }
        return undefined;
    }, [video]);

    // const handlePillClick = (event: React.MouseEvent<HTMLElement>) => {
    //     navigator.clipboard.writeText(pillText || '');
    //     const el = event.currentTarget;
    //     const originalText = el.innerText;
    //     el.innerText = 'Copied!';
    //     setTimeout(() => {
    //         el.innerText = originalText;
    //     }, 700);
    // };

    return (
        <div className="relative w-[calc(100%-2rem)] h-full m-4">
            {/* Blurred background layer */}
            <div
                className={`absolute inset-0 rounded-3xl bg-cover bg-no-repeat ${backgroundEffect}`}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'var(--bg-position, center)'
                }}
            />
            {/* Content layer */}
            <div className="relative w-full h-full flex flex-col lg:flex-row">
                <div className={`w-full ${selectedVideo ? 'lg:w-1/2' : 'lg:w-full'} h-full flex flex-col justify-center ${selectedVideo ? 'items-center text-center lg:text-left lg:items-start' : ''} p-10 ${selectedVideo ? 'mt-16' : ''} lg:mt-0`}>
                    {pillText && (
                        <div className="mb-4 px-4 py-1.5 bg-pink text-pink-700 border border-pink-700 rounded-full font-mono font-semibold text-sm text-center" /* cursor-pointer */ /* onClick={handlePillClick} */>
                            {pillText}
                        </div>
                    )}
                    <h1 className={`text-green-100 ${titleStyle} lg:mt-0 font-bold drop-shadow-lg`}>{title}</h1>
                    {subtitle && <p className={`text-green-100 ${subtitleStyle} font-medium text-xl mt-4 text-shadow-lg/90 drop-shadow-lg/90`}>{subtitle}</p>}
                    {blurb && <p className='text-green-100 text-xl sm:text-2xl font-semibold drop-shadow-lg mt-8'>{blurb}</p>}
                    {blurb2 && <p className='text-green-100 text-xl sm:text-2xl font-semibold drop-shadow-lg mt-4'>{blurb2}</p>}
                    {buttonText && (
                        <a
                            href={buttonURL}
                            target={buttonTarget}
                            rel={buttonTarget === '_blank' ? "noopener noreferrer" : undefined}
                            className={`inline-flex items-center mt-4 px-10 py-3 border-2 ${buttonBorderColor} ${buttonColor} text-white rounded-md text-lg font-semibold gap-2 w-fit drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition-all duration-100`}
                        >
                            {buttonIcon}
                            {buttonText}
                        </a>
                    )}
                </div>
                {selectedVideo && (
                    <div className="w-full lg:w-1/2 h-full flex items-center justify-center px-10 pb-10 lg:pt-10">
                        <video
                            className="w-full h-auto rounded-xl shadow-2xl"
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
    )
}