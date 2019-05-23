import React from "react";

function Post({ post }) {
  return (
    <React.Fragment>
      <a href={post.url}>{post.title}</a>
      <div>
        <span>by {post.by}</span>
        <span>on {post.time}</span>
        <span>with {post.descendants} comments</span>
      </div>
    </React.Fragment>
  );
}

export default Post;
