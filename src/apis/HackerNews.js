const api = `https://hacker-news.firebaseio.com/v0`;
const json = ".json?print=pretty";

const HackerNews = {
  async post(id) {
    const res = await fetch(`${api}/item/${id}${json}`);
    return await res.json();
  }
};

export default HackerNews;
