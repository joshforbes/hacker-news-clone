import React from "react";
import Post from "./Post";

const comments = [
  {
    id: 123,
    parent: 1234,
    by: "author",
    text: "a test comment",
    time: "1558422372",
    type: "comment"
  },
  {
    id: 124,
    parent: 12345,
    by: "another author",
    text: "some follow up",
    time: "1558422375",
    type: "comment"
  }
];

function PostComments({ post }) {
  return (
    <div className="post-comments">
      <Post post={post} />
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.id}>
              <div>
                <span>by {post.by}</span>
                <span>on {post.time}</span>
              </div>
              <p>{comment.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostComments;
