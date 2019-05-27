import React, { useState, useEffect } from "react";
import Post from "./Post";
import HackerNews from "../apis/HackerNews";

function PostComments({
  match: {
    params: { id }
  }
}) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      setPost(await HackerNews.fetchItem(id));
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post) {
      const fetchComments = async () => {
        const comments = post.kids.map(async id => {
          return await HackerNews.fetchItem(id);
        });

        setComments(await Promise.all(comments));
      };

      fetchComments();
    }
  }, [post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-comments">
      <Post post={post} />
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.id}>
              <div>
                <span>by {comment.by}</span>
                <span>on {comment.time}</span>
              </div>
              <p dangerouslySetInnerHTML={{ __html: comment.text }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostComments;
