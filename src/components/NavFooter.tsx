import React from 'react'
import Image from 'next/image'
import { TwitterIcon, Github } from 'lucide-react'

export const NavBar = () => {
    return (
        <div className="navbar bg-opacity-20 absolute z-50 top-5 left-0 right-0 py-4 px-8">
            <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] mx-2 sm:mx-4 my-1 sm:my-2 flex justify-between items-center text-indigo-900 px-1 sm:px-2">
                <div className="flex-1 flex items-center">
                    <a className="btn btn-ghost normal-case text-xl flex items-center" href="/">
                        <Image
                            alt="logo"
                            width={32}
                            height={32}
                            src="/logo_dark.webp"
                            className="mr-2 w-auto h-auto"
                        />
                        <span className='font-bold'>Basic</span>
                        <h4 className="ml-2 text-xs italic font-light bg-indigo-800 text-green-200 px-2 py-0.5 rounded-full ">beta</h4>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        <li className="hidden sm:block"><a className="px-3 py-2" href="https://github.com/basicdb" target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a></li>
                        <li className="hidden sm:block"><a className="px-3 py-2" href="https://twitter.com/basic_db" target="_blank" rel="noreferrer"><TwitterIcon className="w-5 h-5" /></a></li>
                        <li><a className="btn btn-ghost" href="https://docs.basic.tech/" target="_blank" rel="noreferrer">docs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal text-base-content p-10 border-t border-black">
            <aside className="flex items-center gap-4 lg:mt-10">
                <a href="/" className="rounded-lg hover:bg-black/5 transition-all duration-200 flex items-center gap-4 p-2">
                    <div>
                        <Image
                            alt="logo"
                            width={50}
                            height={50}
                            src="/logo_dark.webp"
                            className="w-auto h-auto"
                        />
                    </div>
                    <p>
                        <span className="text-xl font-semibold block">Basic</span>
                        Made with love by our team ❤️
                    </p>
                </a>
            </aside>
            <nav>
                <h6 className="footer-title">Get started</h6>
                <a href="https://discord.gg/M57gcazvYk" target="_blank" rel="noreferrer" className="link link-hover">Discord</a>
                <a href="https://docs.basic.tech/basic-react/create-lofi-app" target="_blank" rel="noreferrer" className="link link-hover">Quickstart</a>
            </nav>
            <nav>
                <h6 className="footer-title">Dev platform</h6>
                <a href="https://app.basic.tech" target="_blank" rel="noreferrer" className="link link-hover">Admin Panel</a>
                <a href="https://docs.basic.tech" target="_blank" rel="noreferrer" className="link link-hover">Docs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href="/about" className="link link-hover">About us</a>
                <a href="/pricing" className="link link-hover">Pricing</a>
                <a href="/events" className="link link-hover">Events</a>
            </nav>
            <nav>
                <h6 className="footer-title">Socials</h6>
                <a href="https://github.com/basicdb/" target="_blank" rel="noreferrer" className="link link-hover">Github</a>
                <a href="https://twitter.com/basic_db" target="_blank" rel="noreferrer" className="link link-hover">Twitter</a>
                <a href="https://bsky.app/profile/basic.tech" target="_blank" rel="noreferrer" className="link link-hover">Bluesky</a>
            </nav>
        </footer>
    )
} 