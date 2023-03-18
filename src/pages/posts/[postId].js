import Link from 'next/link'

const Post = ({ post }) => {
    return (
        <>
            <h1>Post Id : {post.id}</h1>
            <h2>Title : {post.title}</h2>
            <p>Messages : {post.body}</p>
            <Link href="/posts">
                Back To Post List
            </Link>
        </>
    )
}

export default Post

//static path parameters
export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { postId: '1' },
            },
            {
                params: { postId: '2' },
            },
            {
                params: { postId: '3' },
            },
        ],
        fallback: false,
    }
}

//SSG
export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json()

    return {
        props: {
            post: data,
        }
    }
}