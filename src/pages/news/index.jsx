import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1 className="text-red-700 text-4xl">List of News Article</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h1>Article Id : {article.id}</h1>
            <h2>Title : {article.title}</h2>
            <p>Desciption: {article.description}</p>
            <p>Category: {article.category}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default NewsArticleList;

//SSR with getServerSideProps
export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      articles: data,
    },
  };
}
