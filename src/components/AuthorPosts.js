import React, { useState, useEffect } from "react";
import Post from "./Post";
import HackerNews from "../apis/HackerNews";

function AuthorPosts({
  match: {
    params: { id }
  }
}) {
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAuthor = async () => {
      setAuthor(await HackerNews.fetchUser(id));
    };

    fetchAuthor();
  }, [id]);

  useEffect(() => {
    if (author) {
      const fetchPosts = async () => {
        setPosts(await HackerNews.fetchPosts(author.submitted));
      };

      fetchPosts();
    }
  }, [author]);

  if (!author) {
    return <div>Loading...</div>;
  }

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
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AuthorPosts;
