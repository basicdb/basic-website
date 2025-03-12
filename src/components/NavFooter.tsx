import React from 'react'
import Image from 'next/image'
import { TwitterIcon } from 'lucide-react'
import { RiBlueskyLine } from "react-icons/ri"
import { FaDiscord } from "react-icons/fa"

export const NavBar = () => {
    return (
        <div className="navbar bg-opacity-20 absolute z-50 top-5 left-0 right-0 py-4 px-8">
            <div className="w-[calc(100%-2rem)] mx-4 my-2 flex justify-between items-center text-green-100 dark:text-black px-2">
                <div className="flex-1 flex items-center">
                    <a className="btn btn-ghost normal-case text-xl flex items-center" href="/">
                        <Image
                            alt="logo"
                            width={32}
                            height={32}
                            src="/logo_light.webp"
                            className="mr-2 block dark:hidden"
                        />
                        <Image
                            alt="logo"
                            width={32}
                            height={32}
                            src="/logo_dark.webp"
                            className="mr-2 hidden dark:block"
                        />
                        <span className='font-bold'>Basic</span>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-4 flex items-center">
                        <li><a className="px-3 py-2" href="https://bsky.app/profile/basic.tech" target="_blank" rel="noreferrer">
                            <RiBlueskyLine className="w-5 h-5" />
                        </a></li>
                        <li><a className="px-3 py-2" href="https://discord.gg/M57gcazvYk" target="_blank" rel="noreferrer"><FaDiscord className="w-5 h-5" /></a></li>
                        <li><a className="px-3 py-2" href="https://twitter.com/basic_db" target="_blank" rel="noreferrer"><TwitterIcon className="w-5 h-5" /></a></li>
                        <li><a className="btn btn-ghost" href="https://docs.basic.tech/" target="_blank" rel="noreferrer">docs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal text-base-content p-10 border-t border-black dark:border-white">
            <aside className="flex items-center gap-4 lg:mt-10">
                <div>
                    <Image
                        alt="logo"
                        width={50}
                        height={50}
                        src="/logo_dark.webp"
                        className="block dark:hidden"
                    />
                    <Image
                        alt="logo"
                        width={50}
                        height={50}
                        src="/logo_light.webp"
                        className="hidden dark:block"
                    />
                </div>
                <p>
                    <span className="text-xl font-semibold block">Basic</span>
                    Made with love by our team ❤️
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Dev platform</h6>
                <a href="https://www.npmjs.com/package/@basictech/react" target="_blank" rel="noreferrer" className="link link-hover">React SDK</a>
                <a href="https://www.npmjs.com/package/@basictech/cli" target="_blank" rel="noreferrer" className="link link-hover">CLI</a>
                <a href="https://app.basic.tech" target="_blank" rel="noreferrer" className="link link-hover">Admin Panel</a>
                <a href="https://docs.basic.tech" target="_blank" rel="noreferrer" className="link link-hover">Docs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href="/about" className="link link-hover">About us</a>
                <a href="/pricing" className="link link-hover">Pricing</a>
            </nav>
            <nav>
                <h6 className="footer-title">Socials</h6>
                <a href="https://discord.gg/M57gcazvYk" target="_blank" rel="noreferrer" className="link link-hover">Discord</a>
                <a href="https://github.com/basicdb/" target="_blank" rel="noreferrer" className="link link-hover">Github</a>
                <a href="https://twitter.com/basic_db" target="_blank" rel="noreferrer" className="link link-hover">Twitter</a>
                <a href="https://bsky.app/profile/basic.tech" target="_blank" rel="noreferrer" className="link link-hover">Bluesky</a>
            </nav>
        </footer>
    )
} 