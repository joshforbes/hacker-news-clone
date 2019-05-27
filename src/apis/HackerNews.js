const api = `https://hacker-news.firebaseio.com/v0`;
const json = ".json?print=pretty";

const HackerNews = {
  async fetchItem(id) {
    const res = await fetch(`${api}/item/${id}${json}`);
    return await res.json();
  },
  async fetchUser(id) {
    const res = await fetch(`${api}/user/${id}${json}`);
    return await res.json();
  },
  async fetchPosts(ids) {
    const posts = await Promise.all(ids.map(HackerNews.fetchItem));
    return posts.filter(({ type }) => type === "story");
  },
  async fetchComments(ids) {
    const comments = await Promise.all(ids.map(HackerNews.fetchItem));
    return comments.filter(({ type }) => type === "comment");
  },
};

export default HackerNews;
