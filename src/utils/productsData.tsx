import { LockClosedIcon, ArrowPathIcon, CircleStackIcon } from '@heroicons/react/24/solid';

const products = [
    {
        title: "Basic Auth",
        icon: <LockClosedIcon className="w-12 h-12 text-authmagenta-500" />,
        description: "Plug-and-play OAuth2 authentication with built-in user management and permissions.",
    },
    {
        title: "Basic DB",
        icon: <CircleStackIcon className="w-12 h-12 text-dbblue-500" />,
        description: "Local-first database with automatic sync and offline support. No server management needed.",
    },
    {
        title: "Basic Sync",
        icon: <ArrowPathIcon className="w-12 h-12 text-syncgreen-500" />,
        description: "Real-time multiplayer sync with automatic conflict resolution and offline support across devices",
    },
];

export default products; 