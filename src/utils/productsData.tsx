import { LockClosedIcon, ArrowPathIcon, CircleStackIcon } from '@heroicons/react/24/solid';

const products = [
    {
        title: "Basic Auth",
        icon: <LockClosedIcon className="w-12 h-12 text-authmagenta-500" />,
        description: "Plug-and-play OAuth2 authentication with enterprise-grade user management and permissions",
        url: "https://docs.basic.tech/info/auth-basic"
    },
    {
        title: "Basic DB",
        icon: <CircleStackIcon className="w-12 h-12 text-dbblue-500" />,
        description: "Build privacy-first apps with user-owned data stores. Minimum backend infrastructure and data hosting required",
        url: "/https://docs.basic.tech/info/PDS"
    },
    {
        title: "Basic Sync",
        icon: <ArrowPathIcon className="w-12 h-12 text-syncgreen-500" />,
        description: "Real-time multiplayer sync with automatic conflict resolution and offline support across devices",
        url: "https://docs.basic.tech/info/local-first-sync"
    },
];

export default products; 