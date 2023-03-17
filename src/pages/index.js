import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogs App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-red-700 text-4xl'>Hello Next JS</h1>
      </main>
    </>
  )
}
