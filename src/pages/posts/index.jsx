import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1 className="text-red-700 text-4xl">List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>Post Id : {post.id}</h1>
            <h2>Title : {post.title}</h2>
            <p>Messages : {post.body}</p>
            <Link href={`posts/${post.id}`} passHref>
              View
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

//static generation with get static props
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
