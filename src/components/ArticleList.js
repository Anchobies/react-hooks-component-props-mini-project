import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const postsElement = posts.map(post => {
        return <Article title={post.title} date={post.date} preview={post.preview} key={post.id} minutes={post.minutes} />
    })

    return (
      <main>
        {postsElement}
      </main>
    );
  }
  
  export default ArticleList;