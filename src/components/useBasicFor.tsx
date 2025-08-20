import React from 'react'

// Data structure for use cases
interface UseCase {
    title: string;
    image: string;
}

// Content data - easily editable
const useCaseData: UseCase[] = [
    {
        title: "consumer AI",
        image: "/consumerAI.webp"
    },
    {
        title: "AI devices",
        image: "/AIdevices.webp"
    },
    {
        title: "AI gen platforms",
        image: "/genAI.webp"
    }
];

// Styling classes - easily customizable
const styles = {
    container: "w-full min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-blue-50 to-gray-100 px-2 sm:px-8",
    wrapper: "w-full px-4 sm:px-10",
    title: "text-4xl md:text-5xl lg:text-6xl text-black mb-16 font-sans",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-16",
    imageCard: "flex flex-col items-start w-full",
    image: "w-full aspect-square object-cover rounded-lg shadow-lg",
    label: "text-2xl font-sans text-black mt-4 text-center w-full"
};

// Individual use case card component
const UseCaseCard: React.FC<{ item: UseCase }> = ({ item }) => {
    return (
        <div className={styles.imageCard}>
            <img
                src={item.image}
                alt={item.title}
                className={styles.image}
            />
            <span className={styles.label}>
                {item.title}
            </span>
        </div>
    );
};

export default function UseBasicFor() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Main Title */}
                <h2 className={styles.title} style={{ lineHeight: '1.2' }}>
                    use Basic for
                </h2>

                {/* Grid of Use Cases */}
                <div className={styles.grid}>
                    {useCaseData.map((item, index) => (
                        <UseCaseCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
} 