import React, { useState, useEffect } from "react";
import Post from "./Post";
import HackerNews from "../apis/HackerNews";
import { Link } from "react-router-dom";

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
        setComments(await HackerNews.fetchComments(post.kids));
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
                <Link to={`/user/${comment.by}`} post={comment.by}>
                  <span>by {comment.by}</span>
                </Link>
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
