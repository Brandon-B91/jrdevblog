import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { graphql, StaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Email from "./Email";
import { slugify } from "../util/utilityFunctions";
import authors from "../util/author";

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {author && (
      <Card>
        <GatsbyImage
          className="card-image-top"
          image={authorFluid}
          maxHeight="200"
        />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3 text-md">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
          <Button
            classname="text-uppercase"
            color="outline-secondary"
            href={`/author/${slugify(authors[0].name)}`}
          >
            View posts
          </Button>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-upppercase mb-3">
          <Email> </Email>
        </CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          New? Start here!
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={(data) => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={`/${node.fields.slug}/`}>
                    <GatsbyImage
                      className="card-image-top"
                      image={
                        node.frontmatter.image.childImageSharp.gatsbyImageData
                      }
                    />
                  </Link>
                  <CardBody>
                    <CardTitle className="text-center">
                      <Link
                        className="text-danger"
                        to={`/${node.fields.slug}/`}
                      >
                        {" "}
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                    <CardSubtitle>
                      <span className="text-danger">
                        {node.frontmatter.date}
                      </span>{" "}
                      by{" "}
                      <span className="text-danger">
                        {node.frontmatter.author}
                      </span>
                    </CardSubtitle>
                    {node.excerpt}
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
);

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: "intro" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 400, layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 80, truncate: true)
        }
      }
    }
  }
`;

export default Sidebar;
