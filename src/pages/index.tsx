// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Haiku from '@/components/Haiku'
import JoinDiscord from '@/components/JoinDiscord'
import RootedInUsers from '@/components/RootedInUsers'
import MadeFor from '@/components/Playground'
import Toolkit from '@/components/Toolkit'
import StepIntoCommunity from '@/components/StepIntoCommunity'
import { NavBar, Footer } from '@/components/NavFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic</title>
        <meta name="description" content="building the user-owned web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" data-domain="basic.tech" src="https://plausible.io/js/script.js" />
      <main className="flex flex-col items-center bg-green-100 dark:bg-black min-h-screen overflow-x-hidden">
        <div className="w-full">
          <NavBar />
          <Hero />
          <Haiku />
          <RootedInUsers />
          <MadeFor />
          <Toolkit />
          <StepIntoCommunity />
          <JoinDiscord />
          <Footer />
        </div>
      </main >
    </>
  )
}