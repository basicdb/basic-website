// @ts-ignore

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Hero from '@/components/Hero'
import JoinDiscord from '@/components/JoinDiscord'
import { NavBar, Footer } from '@/components/NavFooter'
import MediumCard from '@/components/MediumCard'
import PrivateBeta from '@/components/PrivateBeta'
import Banner from '@/components/Banner'
import Benefits from '@/components/Benefits'
import moreBenefits from '@/utils/moreBenefits'
const mediumCardElements = {
  title: 'the Basic protocol',
  titleColor: 'text-pink-800 dark:text-pink',
  cardColor: 'bg-pink dark:bg-pink-800',
  subtitleColor: 'text-pink-700 dark:text-pink-400',
  textColor: 'text-pink-600 dark:text-pink-500',
  content: [
    {
      text: 'We\'re on a mission to build the collaborative and frictionless web.',
      text3: 'We\'ve designed the Basic protocol to be an open, federated layer which powers our data stores. Data is ever-lasting and portable.',
      text4: 'We also understand that the future of the internet is only as powerful as its adoption - therefore, we currently invite developers to contribute to and partake in the Basic protocol.',
      url: 'https://github.com/basicdb',
      urlText: 'View Basic codebase',
    },
  ],
  video: '/network-animation.mp4',
}

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
          <Banner />
          <NavBar />
          <Hero />
          <PrivateBeta />
          <MediumCard {...mediumCardElements} />
          <JoinDiscord />
          <Footer />
        </div>
      </main >
    </>
  )
}