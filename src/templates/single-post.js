import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { SEO } from "../components/Seo";
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { slugify } from "../util/utilityFunctions";
import authors from "../util/author";

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter;
  const author = authors.find((x) => x.name === post.author);
  const baseUrl = "https://www.jrdevsblog.com";

  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      image={data.file.childImageSharp.gatsbyImageData}
    >
      <Card>
        <GatsbyImage className="card-img-top" image={post.image.childImageSharp.gatsbyImageData} alt={post.alt} />
        <CardBody>
          <CardSubtitle>
            <span className="text-light">Written: {post.date}</span> by {""}
            <span className="text-light">{post.author}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul className="post-tags">
            {" "}
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="secondary">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <h3 className="text-center">Share this post.</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "https://www.facebook.com/sharer.php?u=" +
                baseUrl +
                pageContext.slug
              }
              className="facebook text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.twitter.com/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterHandle"
              }
              className="twitter text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.linkedin.com/sharing/share-offsite/?url=" +
                baseUrl +
                pageContext.slug
              }
              className="linkedin text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

export default SinglePost;

export const Head = ({data}) => <SEO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.tags}/>;
