import React from 'react'

// Data structure for toolkit items
interface ToolkitItem {
    title: string;
    description: string;
    comingSoon?: boolean;
    url?: string;
}

// Content data - easily editable
const toolkitData: ToolkitItem[] = [
    {
        title: "database",
        description: "user-owned SQLite DBs that are auto-created for each user",
        url: "https://docs.basic.tech/readings/personal-data-stores"
    },
    {
        title: "authentication",
        description: "convenient and customizable no-overhead auth to scale to millions",
        url: "https://docs.basic.tech/basic-react/basic-react-sdk"
    },
    {
        title: "sync engine",
        description: "zero-latency read / writes to local DBs, automatic sync across user devices",
        url: "https://docs.basic.tech/readings/local-first-sync"
    },
    {
        title: "cloud functions",
        description: "lightweight serverless functions for custom backend logic",
        comingSoon: true
    },
    {
        title: "storage",
        description: "full-service blob storage to serve files, images, videos at low latency",
        comingSoon: true
    },
    {
        title: "multiplayer",
        description: "realtime collaboration for users without managing websocket infrastructure",
        comingSoon: true
    }
];

// Styling classes - easily customizable
const styles = {
    container: "w-full min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-green-200 to-pink-100 px-2 sm:px-8",
    wrapper: "w-full px-4 sm:px-10",
    title: "text-4xl md:text-5xl lg:text-6xl text-black mb-16",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
    card: "border border-green-400 p-6 transition-all duration-150 rounded-sm",
    cardHover: "hover:border-green-500 hover:scale-[1.02] cursor-pointer",
    cardDisabled: "opacity-60 cursor-not-allowed",
    cardTitle: "text-xl font-semibold text-black",
    cardDescription: "text-sm text-gray-700",
    comingSoonBadge: "text-xs text-gray-500 self-center",
    titleContainer: "flex items-center gap-2 mb-3"
};

// Individual toolkit card component
const ToolkitCard: React.FC<{ item: ToolkitItem }> = ({ item }) => {
    const isClickable = !item.comingSoon && item.url;

    const handleClick = () => {
        if (isClickable && item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    const cardClasses = `${styles.card} ${isClickable ? styles.cardHover : styles.cardDisabled
        }`;

    return (
        <div
            className={cardClasses}
            onClick={handleClick}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={(e) => {
                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div className={styles.titleContainer}>
                <h3 className={styles.cardTitle}>
                    {item.title}
                </h3>
                {item.comingSoon && (
                    <span className={styles.comingSoonBadge}>
                        (coming soon)
                    </span>
                )}
            </div>
            <p className={styles.cardDescription}>
                {item.description}
            </p>
        </div>
    );
};

export default function Toolkit() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Main Title */}
                <h2 className={styles.title} style={{ lineHeight: '1.2' }}>
                    basically, we architected a powerful <span className="hidden xl:inline"><br /></span>
                    backend you can build with
                </h2>

                {/* Grid of Backend Features */}
                <div className={styles.grid}>
                    {toolkitData.map((item, index) => (
                        <ToolkitCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
} 