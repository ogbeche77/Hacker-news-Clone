import { useState, useEffect } from "react";
import { getAllAritcles } from "../utils/ApiProvider";

export const DataFetcher = (type) => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllAritcles(type)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, articles };
};
