import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Post from "../components/Post";

const RecentPosts = () => {
  return (
    <div>
      <h2 class="text-center mb-3">Check out our latest posts!</h2>
      <StaticQuery
        query={RecentPost}
        render={(data) => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          );
        }}
      />
    </div>
  );
};

const RecentPost = graphql`
  query RecentPost {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 2) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED placeholder: BLURRED)
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 180, truncate: true)
        }
      }
    }
  }
`;

export default RecentPosts;
