import axios from "axios";

const hackerNewsApi = "https://hacker-news.firebaseio.com/v0";
const getArticle = async (id) => {
  try {
    const singleArticle = await axios.get(`${hackerNewsApi}/item/${id}.json`);
    return singleArticle;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAritcles = async (type) => {
  try {
    const { data: articleId } = await axios.get(
      `${hackerNewsApi}/${type}stories.json`
    );
    const articles = await Promise.all(articleId.slice(0, 200).map(getArticle));
    return articles;
  } catch (error) {
    console.log(error);
  }
};
