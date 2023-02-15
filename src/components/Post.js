import React from "react";
import { Link } from "gatsby";
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { slugify } from "../util/utilityFunctions";

const Post = ({ title, author, slug, date, body, image, tags }) => {
  return (
    <Card className="">
      <Link to={`/${slug}/`}>
        <GatsbyImage className="card-img-top" image={image} alt={title} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={`/${slug}/`} className="text-light d-flex h3 text-wrap">
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-light">Written: {date}</span> by{" "}
          <span className="text-light">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags d-flex flex-wrap">
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="secondary" className="text-uppercase text-wrap">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/${slug}/`} className="btn btn-outline-light float-right">
          Read more...
        </Link>
      </CardBody>
    </Card>
  );
};

export default Post;
