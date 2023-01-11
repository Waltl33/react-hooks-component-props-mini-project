import Article from "./Article"

// this is a functional component
function ArticleList({posts}){
//
const myPosts = posts.map(post => 
        <Article
            key={post.id} 
            title={post.title} 
            date={post.date}
            preview={post.preview}
        />

) 


    return (
        <main>
            {myPosts}
        </main>
    )
}

export default ArticleList