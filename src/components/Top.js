import React from "react";
import Posts from "./Posts";
// import AuthorPosts from "./AuthorPosts";

const posts = [
  {
    id: 20004127,
    title: "Test title",
    url: "google.com",
    by: "author",
    time: "1558422372",
    descendants: 100
  },
  {
    id: 20004128,
    title: "Test title II",
    url: "heroku.com",
    by: "another author",
    time: "1558422372",
    descendants: 5
  }
];

// const author = {
//   created: 1358751893,
//   id: "dombili",
//   karma: 1491,
//   submitted: [19986106, 19285364, 19189410]
// };

function Top() {
  return <Posts posts={posts} />;
  // return <AuthorPosts author={author} />;
}

export default Top;
