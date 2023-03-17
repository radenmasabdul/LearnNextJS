import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    console.log('Placing Your Order');
    router.push('/product')
  }

  return (
    <>
      <Head>
        <title>Learn Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-red-700 text-4xl'>Hello Next JS</h1>
        <Link href="/blogs">
          Blog
        </Link>
        <Link href="/product">
          Products
        </Link>
        <Link href="/docs">
          Docs
        </Link>
        <button
          onClick={handleClick}
          className="btn btn-primary">
          Place Order
        </button>
      </main>
    </>
  )
}
