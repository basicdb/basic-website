// @ts-ignore


import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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


        {/* <div className="flex ">
          <div className="flex min-h-screen flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24"
            // add background image
            style={{ backgroundImage: `bg.png')` }}
          >
            <div className="w-full mx-auto lg:max-w-6xl">
              <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
                <div>

                  <p className="text-2xl font-medium font-mono tracking-tighter  sm:text-4xl">
                    the database for user-owned data
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-400">
                    Basic is a serverless database, purpose built for securely storing user data. It's a simple, fast, and scales automatically, so you can focus on your building your app.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 sm:flex-row lg:justify-start">
                  <button className="btn glass">Request Early Access</button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1   lg:block">
            <div>
            </div>
          </div>
        </div> */}

        <HeroSection />

        {/* <DeveloperFeatureSection /> */}

        {/* <ZKSection /> */}
      </main>
    </>
  )
}

const HeroSection = () => {
  return (

    <section className=''>
      <div className="py-24 flex flex-col justify-center min-h-screen ">
        <div className="relative px-8">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div><p className="text-2xl font-medium font-mono tracking-tight  sm:text-4xl">
                the database for user-owned data
              </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-400">
                Basic is a serverless database, purpose built for securely storing user data. It's a simple, fast, and scales automatically, so you can focus on your building your app.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">

              <a href="https://airtable.com/shr5ALU6Ha9uBzErA" target="_blank" rel="noreferrer" className="btn glass" >Request Early Access</a>
              
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
    <section aria-labelledby="feature-five" id="feature-five" className="overflow-y-auto  lg:h-screen">
      <div className="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
        <div className="lg:w-1/2">
          <div className="top-0 pt-8 pb-16 lg:sticky">
            <div>
              <div className="lg:pr-24 md:pr-12">
                <div>

                  <p className="text-4xl  ">
                    the relational serverless database, of your dreams
                  </p>
                  <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                    Basic lets you deploy instantly, integrate anywhere, and scale effortlessly.
                  </p>
                </div>
                {/* <div className="flex flex-col gap-3 mt-10 sm:flex-row">
                <a href="#" className="items-center justify-center w-full px-6 py-3 text-center text-white duration-200 bg-black border-2 border-black nline-flex hover:bg-transparent hover:border-black rounded-xl hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black focus-visible:ring-black">
                  Get started
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex-shrink-0">
            <div>
              <ul className="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24" role="list">
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12  bg-gray-100 rounded-xl">
                      {/* <ion-icon className="w-5 h-5 md hydrated" name="scan-outline" role="img" aria-label="scan outline"></ion-icon> */}
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 ">
                      Deploy instantly
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Define your database schema using the intuitive interface, or directly in your code. Simply publish your schema and deploy automatically.
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12  bg-gray-100 rounded-xl">
                      {/* <ion-icon className="w-5 h-5 md hydrated" name="scan-outline" role="img" aria-label="scan outline"></ion-icon> */}
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 ">
                      Integrate anywhere
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Comes with built in REST & GraphQL API, and native SDKs for TypeScript and React. Built on web native APIs, Basic integrates with any client, server, and wherever else you want it.
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12  bg-gray-100 rounded-xl">
                      {/* <ion-icon className="w-5 h-5 md hydrated" name="scan-outline" role="img" aria-label="scan outline"></ion-icon> */}
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 ">
                      Scale effortlessly
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Basic scales alongside you, and will grow and shrink to your needs. Caching, indexes, read replicas, horizontal & vertical scaling - we can handle everything, so you never have to.
                  </div>
                </li>



              </ul>
            </div>
          </div>
        </div>
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