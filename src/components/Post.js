import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <React.Fragment>
      <a href={post.url}>{post.title}</a>
      <div>
        <span>by {post.by}</span>
        <span>on {post.time}</span>
        <span>
          with
          <Link to={`/post/${post.id}`} post={post}>
            {post.descendants}
          </Link>
          comments
        </span>
      </div>
    </React.Fragment>
  );
}

export default Post;
