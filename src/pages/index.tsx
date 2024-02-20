// @ts-ignore


import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const DATA = {
  title: "Basic Database",
  description: "The serverless database for user owned data",
  image: "/bg.png",
  url: "https://basic.tech"

}

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic Database</title>
        <meta name="description" content="The serverless database for user owned data" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >



        <HeroSection />

        <HowItWorks />

        <DeveloperFeatureSection />

        <UseCases />
        {/* <ZKSection /> */}

        {/* <Footer /> */}
      </main>
    </>
  )
}

const NavBar = () => {
  return (
    //background image
    <div className="navbar bg-opacity-20 top-0 absolute" >
      <div className="flex-1">
        {/* <Image alt="twitter" width={50} height={50} src="/icons/twitter.png" className="h-6 w-6" /> */}

        <a className="btn btn-ghost normal-case text-xl">
          <Image alt="twitter" width={50} height={50} src="/logo.png" className="h-6 w-6 mr-4" />
          Basic</a>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal px-1 ">

          <li>
            <a className="btn btn-ghost " href='https://twitter.com/basic_db' target="_blank" rel="noreferrer" >
              {/* <Image alt="twitter" width={50} height={50} src="https://img.icons8.com/ios/50/000000/twitter--v1.png" className="h-6 w-6" /> */}
              <Image alt="twitter" width={25} height={25} src="/icons/twitter.png" className="h-6 w-6" />
              Say hi :)
            </a>
          </li>
          <li>
            <a href="https://basic.tech/careers" target="_blank" rel="noreferrer" className="btn btn-ghost ">Careers<span className="indicator-item badge badge-secondary ">2</span></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (

    <section className='bg-black ' style={{ backgroundImage: `url('/bg.png')` }}>


      <div className="py-24 flex flex-col justify-center min-h-screen ">

        <NavBar />

        <div className="relative px-8">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div><p className="text-2xl font-medium font-mono tracking-tight text-white sm:text-4xl">
                the database for <br /> <span className='text-4xl'>user-owned data</span>
              </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-400">
                  Basic is the easiest way to build privacy-centric apps, by letting your users control their data.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">

                <a href="https://airtable.com/shr5ALU6Ha9uBzErA" target="_blank" rel="noreferrer" className="btn glass" >Request Early Access</a>

                <a href="https://basic.tech/careers" target="_blank" rel="noreferrer" className="btn btn-secondary ">We're Hiring! Join our team :) </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

const DeveloperFeatureSection = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto bg-slate-900 p-20">
      <h1 className='text-2xl font-mono pb-6'> Benefits </h1>
      <div className="px-8 py-12 mx-auto max-w-7xl md:px-12 lg:px-16 xl:px-36 lg:flex">
        <ul className="grid grid-cols-3 gap-12 mt-6 lg:gap-24" role="list">
          <li>
            <p className="mt-5 text-lg font-medium leading-6">Privacy</p>
            <div className="mt-2 text-base text-gray-500">
              Users retain full ownership and control over their data - sensitive data doesn't touch your servers.
            </div>
          </li>
          <li>
            <p className="mt-5 text-lg font-medium leading-6">Interoperable data</p>
            <div className="mt-2 text-base text-gray-500">
              Integrate data from other apps and let apps build on top of yours - without any extra work.
            </div>
          </li>
          <li>
            <p className="mt-5 text-lg font-medium leading-6">EZ PZ</p>
            <div className="mt-2 text-base text-gray-500">
              No need to store or pay for user data - no more expensive cloud bills.
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

const UseCases = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto bg-gray-900-900 p-20">
      <h1 className='text-2xl font-mono pb-6'> Use cases </h1>
      <div className="px-8 py-12 mx-auto max-w-7xl md:px-12 lg:px-16 xl:px-36 lg:flex">
        <ul className="grid grid-cols-3 gap-12 mt-6 lg:gap-24" role="list">
        <li>
            <p className="mt-5 text-lg font-medium leading-6">Local-first</p>
            <div className="mt-2 text-base text-gray-500">
            offer backups, multi-device support, and collaborative features to your local-first app
            </div>
          </li>
          <li>
            <p className="mt-5 text-lg font-medium leading-6">Private apps</p>
            <div className="mt-2 text-base text-gray-500">
            offer data ownership and end-to-end encryption, without building anything extra
            </div>
          </li>
          <li>
            <p className="mt-5 text-lg font-medium leading-6">Decentralized</p>
            <div className="mt-2 text-base text-gray-500">
            store user data off-chain, while keeping it private & self sovereign, without relying on centralized providers
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

const HowItWorks = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto bg-[#131315] p-20 flex">

      <div className='w-1/3 py-12'>
        <h1 className='text-2xl font-mono pb-12'> How it works</h1>
        <p className='text-grey-100'>Basic creates personal data stores for every end user, which applications can access if given permission. This gives apps a fast and easy database, while letting users ultimately retain ownership over their data. </p>
      </div>


      <div className="px-8 py-12 mx-auto lg:px-16 md:px-12 xl:px-36">
        <div>
          <h2 className='text-base text-gray-300 font-mono'>Traditional apps:</h2>
          <img src="/traditional.png" alt="traditional apps" width={300} />
        </div>

        <div className='pt-20'>
          <h2 className='text-base text-gray-300 font-mono'>Basic apps:</h2>
          <img src="/traditional.png" alt="traditional apps" width={300} />
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto bg-[#131315] p-20 flex">

      <div className='w-1/3 py-12'>
        <h1 className='text-2xl font-mono pb-12'> Interesed in building on Basic?</h1>
        <p className='text-grey-100'>reach out for beta access </p>
      </div>

    
    </section>
  )
}


const ZKSection = () => {
  return (
    <section className="relative flex items-center w-full ">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle bg-slate-900 p-5 rounded-lg ">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div>

                  <p className="text-2xl font-medium sm:text-4xl">
                    the zero-knowledge database
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-300">
                    The first of its kind, Basic lets you create zero-knowledge applications so you can build data-intensive apps for your users, without needing to store anything in your database. This keeps user data private, without sacrificing functionality.                   </p>            </div>

              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              {/* <img className="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}