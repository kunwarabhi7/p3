import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-cyan-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Head>
        <title>Abhishek || Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header  */}
      <Header />
      {/* Hero  */}
      <section id='hero' className='snap-center'>

      <Hero />
      </section>
     {/* About  */}
     {/* Experience  */}
     {/* Skills  */}
     {/* Projects  */}
     {/* Contact Me  */}
    </div>
  )
}
