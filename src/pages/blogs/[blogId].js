import Head from "next/head";

const BlogId = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='text-red-700 text-4xl'>Article</h1>
    </>
  )
}

export default BlogId

//Dynamic Head
export async function getServerSideProps() {
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description'
    },
  };
}
