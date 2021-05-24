import React from "react";
import { Card } from "semantic-ui-react";

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const NewsArticle = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <Card>
      <Card.Header>
        <Link url={url} title={title} />
      </Card.Header>
      <div>
        <div>
          <Card.Meta>
            Author:
            <Link
              url={`https://news.ycombinator.com/user?id=${by}`}
              title={by}
            />
          </Card.Meta>
        </div>{" "}
        {new Date(time * 1000).toLocaleDateString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}
        {
          <span>
            {" "}
            <Link
              url={`https://news.ycombinator.com/item?id=${id}`}
              title={`${kids && kids.length > 0 ? kids.length : 0}  comments`}
            />
          </span>
        }
      </div>
    </Card>
  );
};

export default NewsArticle;
