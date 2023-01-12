import React from "react";
import blogData from "../data/blog"
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

        <>


        </>
    )
}


export default ArticleList