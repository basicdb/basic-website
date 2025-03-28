// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import JoinDiscord from '@/components/JoinDiscord'
import { NavBar, Footer } from '@/components/NavFooter'

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
          {/* <Banner /> */}
          <NavBar />
          <Hero />
          <Products />
          <JoinDiscord />
          {/* <Cal /> */}
          <Footer />
        </div>
      </main>
    </>
  )
}