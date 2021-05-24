import React from "react";
import NewsArticle from "./NewsArticle";
import { DataFetcher } from "../customhooks/Data";

const DisplayArticles = (props) => {
  const { type } = props.match.params;
  const { isLoading, articles } = DataFetcher(type);

  return (
    <div>
      {isLoading && <div className="ui active centered inline loader"></div>}

      {articles
        ? articles.map(({ data: story }) => {
            return <NewsArticle key={story.id} story={story} />;
          })
        : null}
    </div>
  );
};

export default DisplayArticles;
