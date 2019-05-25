import React, { useState, useEffect } from "react";
import Post from "./Post";

const HackerNewsApi = {
  author: {
    created: 1358751893,
    id: "dombili",
    karma: 1491,
    submitted: [19986106, 19285364, 19189410]
  },
  posts: [
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
  ]
};

function AuthorPosts({ id }) {
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setAuthor(HackerNewsApi.author);
  }, [author]);

  useEffect(() => {
    setPosts(HackerNewsApi.posts);
  }, [posts]);

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
          return <Post post={post} />;
        })}
      </ul>
    </div>
  );
}

export default AuthorPosts;
