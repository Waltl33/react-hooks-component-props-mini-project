import React from "react";
import Article from "./Article";

function ArticleList({post}){
console.log(post)
const myPosts = post.map(eachPost =>(
        <Article
            title = {eachPost.title}
            date = {eachPost.date}
            preview = {eachPost.preview}
            key = {eachPost.id}
        />

)
)


    return (

        <main>{myPosts}</main>


    
    )
}


export default ArticleList