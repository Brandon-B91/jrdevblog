import React from "react";
import Layout from "../components/layout";
import Post from "../components/Post";
import { graphql } from "gatsby";
import authors from "../util/author";
import { SEO } from "../components/Seo";

const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark;
  const author = authors.find((x) => x.name === pageContext.authorName);
  const pageHeader = `${totalCount} Posts by: ${pageContext.authorName}`;

  return (
    <Layout
      pageTitle={pageHeader}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
    </Layout>
  );
};

export const authorQuery = graphql`
  query ($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        gatsbyImageData(width: 500)
      }
    }
  }
`;

export default authorPosts;

export const Head = () => (
  <SEO title='' />
)
