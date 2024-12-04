// @ts-ignore

import Head from 'next/head'
import Image from 'next/image'
import { Twitter, Github } from 'lucide-react';
import Script from 'next/script'
import Link from 'next/link'

import Hero from '@/components/Hero';
import OpenResilientPortable from '@/components/OpenResilientPortable';
import UserOwned from '@/components/UserOwned';
import BasicTiles from '@/components/BasicTiles';

export default function Home() {
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
          <NavBar />
          <Hero />
          <OpenResilientPortable />
          <UserOwned />
          <BasicTiles />
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
          <ul className="menu menu-horizontal px-1 space-x-1 md:space-x-4 flex items-center">
            <li><a className="hidden sm:block px-3 py-2" href="https://docs.basic.tech/get-started/implement-basic/using-react" target="_blank" rel="noopener noreferrer">database</a></li>
            <li><a className="hidden sm:block px-3 py-2" href="https://basic.id" target="_blank" rel="noopener noreferrer">auth</a></li>
            <li><a className="px-3 py-2" href="https://app.basic.tech" target="_blank" rel="noopener noreferrer">admin portal</a></li>
            <li><a className="hidden sm:block px-3 py-2" href="https://www.npmjs.com/package/@basictech/cli" target="_blank" rel="noopener noreferrer">cli</a></li>
            <li><a className="hidden md:block px-3 py-2" href="https://github.com/basicdb" target="_blank" rel="noreferrer">github</a></li>
            <li><a className="hidden lg:block px-3 py-2" href="https://twitter.com/basic_db" target="_blank" rel="noreferrer">twitter</a></li>
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
            <a href="https://github.com/basicdb" target="_blank" rel="noreferrer" className="hover:text-black-900 dark:hover:text-white-100">Github</a>
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