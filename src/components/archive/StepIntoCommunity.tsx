import React, { useState, useRef, useEffect } from 'react'

export default function StepIntoCommunity() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const cards = [
        {
            href: "https://kiki.dev",
            image: "/kiki.png",
            title: "Kiki",
            description: "turn ideas into mobile apps"
        },
        {
            href: "https://writly.com",
            image: "/superagents.png",
            title: "Writly",
            description: "real-time publishing for writers"
        },
        {
            href: "https://thesuperagents.dev",
            image: "/superagents.png",
            title: "Super agents",
            description: "discover and create AI agents"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cards.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    // Touch/swipe handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
        setScrollLeft(carouselRef.current?.scrollLeft || 0)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 2
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk
        }
    }

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0))
        setScrollLeft(carouselRef.current?.scrollLeft || 0)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return
        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 2
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    return (
        <div className="w-[calc(100%-2rem)] my-24 px-8 w-full min-h-screen items-center justify-center">
            <div className="w-full px-2 md:px-8">
                <div className='pt-24'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl text-indigo-900 dark:text-green-100 font-bold'>step into community</h2>
                    <p className='text-green-900 dark:text-green-100 text-xl lg:text-3xl font-thin mt-8'>formed on Basic</p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20">
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-cover bg-center bg-no-repeat p-4 min-h-72 h-72 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group bg-gray-800"
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl text-white font-bold">
                                    {card.title}
                                </h3>
                                <p className="text-white text-sm">
                                    {card.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden mb-20">
                    <div className="relative">
                        {/* Carousel Container */}
                        <div
                            ref={carouselRef}
                            className="flex overflow-hidden"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    <a
                                        href={card.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-cover bg-center bg-no-repeat p-4 min-h-72 h-72 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative group bg-gray-800 mx-2"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="text-xl text-white font-bold">
                                                {card.title}
                                            </h3>
                                            <p className="text-white text-sm">
                                                {card.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {cards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                        ? 'bg-indigo-600 dark:bg-green-400'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="">
                    <p className='text-green-900 dark:text-green-100 text-xl lg:text-3xl font-thin mt-8 pb-8'>nurturing connection</p>
                    <div className="w-full mb-16">
                        <video
                            className="w-full h-auto"
                            controls
                            autoPlay
                            muted
                            poster="/event1.webp"
                        >
                            <source
                                src="https://basicwebsitecontent.s3.us-east-2.amazonaws.com/Event+Recap_v3.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
} 