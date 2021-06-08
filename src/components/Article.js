import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let emoji = "";

    if (minutes >= 30) {
        for (let i = 0; i < Math.ceil(minutes / 10); i++) {
            emoji += "☕️";
        }
    } else if (minutes >= 0) {
        for (let i = 0; i < Math.ceil(minutes / 5); i++) {
            emoji += "🍱";
        }
    }

    return (
      <article>
        <h3>{title}</h3>
        <p>{emoji + " min read"}</p>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;