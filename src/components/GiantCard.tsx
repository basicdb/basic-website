import React from 'react';

interface GiantCardProps {
    image: string;
    title?: string;
    title2?: string;
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
    backgroundPosition?: string;
    video?: string | string[];
}

export default function GiantCard({ image, title, title2, titleStyle, subtitle, subtitleStyle, blurb, blurb2, pillText, buttonText, buttonURL, buttonTarget, buttonBorderColor, buttonIcon, buttonColor, backgroundEffect, backgroundPosition, video }: GiantCardProps) {
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

    return (
        <div className="relative w-[calc(100%-2rem)] h-full m-4">
            {/* Blurred background layer */}
            <div
                className={`absolute inset-0 rounded-3xl bg-cover bg-no-repeat ${backgroundEffect}`}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: backgroundPosition
                }}
            />
            {/* Content layer */}
            <div className="relative w-full h-full flex flex-col lg:flex-row px-4">
                <div className={`w-full ${selectedVideo ? 'lg:w-1/2' : 'lg:w-full'} h-full flex flex-col justify-center ${selectedVideo ? 'items-center text-center lg:text-left lg:items-start' : ''} p-10 ${selectedVideo ? 'mt-16' : ''} lg:mt-0`}>
                    {pillText && (
                        <div className="mb-4 px-4 py-1.5 bg-pink text-pink-700 border border-pink-700 rounded-full font-mono font-semibold text-sm text-center" /* cursor-pointer */ /* onClick={handlePillClick} */>
                            {pillText}
                        </div>
                    )}
                    <h1 className={`${titleStyle}  font-bold`}>
                        {title}
                        {title2 && <br />}
                        {title2}
                    </h1>
                    {subtitle && <p className={`${subtitleStyle} font-medium mt-1`}>{subtitle}</p>}
                    {blurb && <p className='text-green-100 text-xl sm:text-2xl font-medium'>{blurb}</p>}
                    {blurb2 && <p className='text-green-100 text-xl sm:text-2xl font-medium mt-4'>{blurb2}</p>}
                    {buttonText && (
                        <a
                            href={buttonURL}
                            target={buttonTarget}
                            rel={buttonTarget === '_blank' ? "noopener noreferrer" : undefined}
                            className={`inline-flex items-center mt-4 py-3 border-2 text-lg font-semibold ${buttonBorderColor} ${buttonColor} rounded-md  gap-2 w-fit drop-shadow-lg hover:drop-shadow-xl hover:scale-105 transition-all duration-100`}
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