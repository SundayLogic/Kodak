import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="justify-center">
      <Head>
        <title>Kodak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center text-4xl">
        <h1>Kodak</h1>
      </main>
    </div>
  )
}

export default Home
