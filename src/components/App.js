import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"

import Article from "./Article"
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
     <Header name = {blogData.name}/>
     <About
        image = {blogData.image}
        about = {blogData.about}
       />
       <ArticleList
       post = {blogData.posts}
       />
       <Article 
       title = {blogData.title}
       date = {blogData.date}
       preview = {blogData.preview}
       />
    </div>
  );
}

export default App;
