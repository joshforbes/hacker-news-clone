import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 123,
    title: "Test title",
    url: "google.com",
    by: "author",
    time: "1558422372",
    descendants: 100
  },
  {
    id: 124,
    title: "Test title II",
    url: "heroku.com",
    by: "another author",
    time: "1558422372",
    descendants: 5
  }
];

function AuthorPosts({ author }) {
  return (
    <div className="author-posts">
      <div>
        <div>{author.id}</div>
        <div>
          <span>joined {author.created}</span>
          <span>has {author.karma} karma</span>
        </div>
      </div>
      <ul>
        {posts.map(post => {
          return <Post post={post} />;
        })}
      </ul>
    </div>
  );
}

export default AuthorPosts;
