import { useState, useEffect } from 'react'

interface UseScrollFadeProps {
    fadeStartOffset?: number
    fadeEndOffset?: number
}

export function useScrollFade({
    fadeStartOffset = 100,
    fadeEndOffset = 300
}: UseScrollFadeProps = {}) {
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight

            // Calculate opacity based on scroll position
            let newOpacity = 1

            if (scrollY > fadeStartOffset) {
                const fadeDistance = fadeEndOffset - fadeStartOffset
                const scrolledPast = scrollY - fadeStartOffset
                newOpacity = Math.max(0, 1 - (scrolledPast / fadeDistance))
            }

            setOpacity(newOpacity)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Call once to set initial opacity

        return () => window.removeEventListener('scroll', handleScroll)
    }, [fadeStartOffset, fadeEndOffset])

    return opacity
} 