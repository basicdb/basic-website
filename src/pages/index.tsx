// @ts-ignore


import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RocketLaunchIcon } from '@heroicons/react/24/solid'; // Import any icon you want to use
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const DATA = {
  title: "Basic Database",
  description: "Open source infrastructure for local-first apps",
  image: "/bg.png",
  url: "https://basic.tech"

}

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic Database</title>
        <meta name="description" content="Open source infrastructure for local-first apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="basic.tech" src="https://plausible.io/js/script.js"></script>

      </Head>
      <main >
        <HeroSection />

        <DeveloperFeatureSection />

        <HowItWorks />

        {/* <UseCases /> */}
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

        <a className="btn btn-ghost normal-case text-xl" style={{ color: "white" }}>
          <Image alt="twitter" width={50} height={50} src="/logo.png" className="h-6 w-6 mr-4" />
          Basic</a>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal px-1 ">

          <li>
            <a className="btn btn-ghost " href='https://twitter.com/basic_db' target="_blank" rel="noreferrer" >
              {/* <Image alt="twitter" width={50} height={50} src="https://img.icons8.com/ios/50/000000/twitter--v1.png" className="h-6 w-6" /> */}
              <Image alt="twitter" width={25} height={25} src="/icons/twitter.png" className="h-6 w-6" />
              Connect with us
            </a>
          </li>
          <li>
            {/* <a href="https://basic.tech/careers" target="_blank" rel="noreferrer" className="btn btn-ghost ">Careers<span className="indicator-item badge badge-secondary ">2</span></a> */}
            <a href="https://basic.tech/careers" target="_blank" rel="noreferrer" className="btn btn-ghost ">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className='bg-black' style={{ backgroundImage: `url('/bg.png')` }}>
      <div className="py-24 flex flex-col justify-center min-h-screen">
        <NavBar />
        <div className="relative px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div>
                <p className="text-2xl font-medium font-mono tracking-tight text-white sm:text-4xl">
                  Open source infra for <br /> <span className='text-4xl'>local-first apps</span>
                </p>
                <h3 className="max-w-xl mx-auto lg:mx-0 mt-4 text-base tracking-tight text-gray-300" style={{ fontSize: 18 }}>
                  Deliver high-performance apps with a powerful sync engine, offline support, and user-owned data stores
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a
                  href="https://airtable.com/shr5ALU6Ha9uBzErA"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary flex items-center justify-center bg-white text-black py-2 px-4 rounded hover:text-white"
                >
                  <RocketLaunchIcon className="h-5 w-5 mr-2 hover:text-white" /> Request Early Access
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">
              <Image
                alt="basic code snippet"
                width={1000}
                height={1000}
                src="/basic_snippet.png"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const DeveloperFeatureSection = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto flex justify-center p-8">

      <div className='max-w-5xl p-8'>

        <h1 className='text-2xl font-mono pb-6'> Benefits with Basic</h1>

        <div className="py-8 mx-auto lg:flex">
          <ul className="grid grid-cols-1 gap-12 mt-6 lg:gap-24 sm:grid-cols-3" role="list">
            <li>
              <p className="mt-5 text-lg font-medium leading-6">Improved app performance with local-first architecture</p>
              <div className="mt-2 text-base text-gray-500">
                User data is stored on client devices, and backed-up to the cloud automatically. Startup times are fast, filters work instantly, and there are no page loads.
              </div>
            </li>
            <li>
              <p className="mt-5 text-lg font-medium leading-6">Simpler architecture for better developer productivity</p>
              <div className="mt-2 text-base text-gray-500">
                Eliminate state management, conflict resolution, and error handling. Comes with built-in auth, realtime multiplayer, and offline-support.
              </div>
            </li>
            <li>
              <p className="mt-5 text-lg font-medium leading-6">Built-in privacy with user-owned cloud data stores</p>
              <div className="mt-2 text-base text-gray-500">
                Users retain full ownership and control over their data. We spin up personal data stores for each of your users so that sensitive data doesn't touch your servers.
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}



const UseCases = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto flex justify-center p-8">

      <div className='max-w-5xl p-8'>

        <h1 className='text-2xl font-mono pb-6'> Use cases </h1>

        <div className="py-8 mx-auto lg:flex">

          <ul className="grid grid-cols-1 gap-12 mt-6 lg:gap-24 sm:grid-cols-3" role="list">
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

      </div>
    </section>
  )
}

const HowItWorks = () => {
  return (
    <section aria-labelledby="features" id="feature-five" className="overflow-y-auto bg-[#131315] flex justify-center">

      <div className='p-4 flex flex-col sm:flex-row max-w-5xl justify-center'>

        <div className='flex-1 px-8 py-12 text-gray-200 '>
          <h1 className='text-2xl font-mono pb-12'>Privacy out-of-the-box</h1>
          <p className='text-gray-100'>Basic creates personal data stores for every end user, which applications can access if given permission. This gives apps a fast and easy database, while letting users ultimately retain ownership over their data. </p>
          <a href='https://docs.basic.tech' target='_blank' className="btn btn-secondary mt-8">Read the Docs</a>
        </div>

        <div className="flex-1 px-8 py-12 mx-auto ">
          <div>
            <h2 className='text-base text-gray-300 font-mono'>Traditional apps:</h2>
            <img src="/traditional.png" alt="traditional apps" width={300} />
          </div>

          <div className='pt-20'>
            <h2 className='text-base text-gray-300 font-mono'>Basic apps:</h2>
            <img src="/diagram_2.png" alt="traditional apps" width={320} />
          </div>
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