

const ArticleListByCategory = ({ articles, category }) => {
    return (
        <>
            <h1 className="text-red-700 text-4xl">Showing News for {category}</h1>
            {articles.map(article => {
                return (
                    <div key={article.id}>
                        <h1>Article Id : {article.id}</h1>
                        <h2>Title : {article.title}</h2>
                        <p>Desciption: {article.description}</p>
                        <p>Category: {article.category}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default ArticleListByCategory

//SSR with Dynamic Parameters
export async function getServerSideProps(context) {
    const { params } = context;
    const { category } = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return {
        props: {
            articles: data,
            category,
        }
    }
}