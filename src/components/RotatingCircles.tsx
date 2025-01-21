import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";
import {
    ClipboardPlusIcon,
    BadgeDollarSign,
    FileVideoIcon,
    NotebookTextIcon,
    MessagesSquareIcon,
    FileImageIcon,
    FingerprintIcon,
    IdCardIcon,
    MailIcon
} from "lucide-react";

export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                <Image src="/user-owned-cylinder.svg" alt="user-owned" width={325} height={325} />
            </span>

            <OrbitingCircles iconSize={20} radius={180} path={false} speed={0.7} className="text-green-700 dark:text-green-400">
                <BadgeDollarSign />
                <NotebookTextIcon />
                <MessagesSquareIcon />
                <MailIcon />
            </OrbitingCircles>
            <OrbitingCircles radius={95} path={false} speed={1.2} className="text-green-500">
                <FileImageIcon />
                <FingerprintIcon />
                <IdCardIcon />
                <ClipboardPlusIcon />
                <FileVideoIcon />
            </OrbitingCircles>
        </div>
    );
}