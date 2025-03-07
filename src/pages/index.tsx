// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { TwitterIcon } from 'lucide-react';
import Script from 'next/script'
import { RiBlueskyLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Pricing from '@/components/Pricing';
// import Banner from '@/components/Banner';
// import Cal, { useCalEmbed } from '@/components/Cal';

export default function Home() {
  // useCalEmbed();
  return (
    <>
      <Head>
        <title>Basic Database</title>
        <meta name="description" content="The database for a frictionless, user-owned web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" data-domain="basic.tech" src="https://plausible.io/js/script.js" />
      <main className="flex flex-col items-center bg-green-100 dark:bg-black min-h-screen overflow-x-hidden">
        <div className="w-full">
          {/* <Banner /> */}
          <NavBar />
          <Hero />
          <Products />
          <Pricing />
          {/* <Cal /> */}
          <Footer />
        </div>
      </main>
    </>
  )
}

const NavBar = () => {
  return (
    <div className="navbar bg-opacity-20 absolute z-50 top-5 left-0 right-0 py-4 px-8">
      <div className="w-[calc(100%-2rem)] mx-4 my-2 flex justify-between items-center text-green-100 dark:text-black px-2">
        <div className="flex-1 flex items-center">
          <a className="btn btn-ghost normal-case text-xl flex items-center" href="/">
            <Image
              alt="logo"
              width={32}
              height={32}
              src="/logo_light.png"
              className="mr-2 block dark:hidden"
            />
            <Image
              alt="logo"
              width={32}
              height={32}
              src="/logo_dark.png"
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

const Footer = () => {
  return (
    <footer className="py-6">
      <hr className="border-t border-green-400 mb-6" />
      <div className="w-[calc(100%-2rem)] m-4 px-2 text-black dark:text-green-100">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Image
              alt="logo"
              width={32}
              height={32}
              src="/logo_dark.png"
              className="mr-2 block dark:hidden"
            />
            <Image
              alt="logo"
              width={32}
              height={32}
              src="/logo_light.png"
              className="mr-2 hidden dark:block"
            />
            <span className="text-xl font-semibold text-black dark:text-green-100">Basic</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://discord.gg/M57gcazvYk" target="_blank" rel="noreferrer" className="hover:text-black-900 dark:hover:text-white-100">Discord</a>
            <a href="https://github.com/basicdb/create-lofi-app" target="_blank" rel="noreferrer" className="hover:text-black-900 dark:hover:text-white-100">Github</a>
            <a href="https://twitter.com/basic_db" target="_blank" rel="noreferrer" className="hover:text-black-900 dark:hover:text-white-100">Twitter</a>
            <a href="https://docs.basic.tech" target="_blank" rel="noreferrer" className="hover:text-black-900 dark:hover:text-white-100">Docs</a>
          </div>
          <div>
            Made with love by our team ❤️
          </div>
        </div>
      </div>
    </footer>
  )
}