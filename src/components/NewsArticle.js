import React from "react";

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const NewsArticle = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <div>
      <div>
        <Link url={url} title={title} />
      </div>
      <div>
        <span>
          by{" "}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default NewsArticle;
