import React from "react";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
}

export default Posts;
