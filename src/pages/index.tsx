// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Hero from '@/components/Hero'
import UserOwned from '@/components/UserOwned'
import AutocreatePDS from '@/components/AutocreatePDS'
import JoinDiscord from '@/components/JoinDiscord'
import Toolkit from '@/components/Toolkit'
import UniversalContext from '@/components/UniversalContext'
import UseBasicFor from '@/components/useBasicFor'
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
      <main className="flex flex-col items-center min-h-screen overflow-x-hidden bg-pink-100">
        <div className="w-full">
          <NavBar />
          <Hero />
          <UserOwned />
          <AutocreatePDS />
          <Toolkit />
          <UniversalContext />
          <UseBasicFor />
          <JoinDiscord />
          <Footer />
        </div>
      </main >
    </>
  )
}