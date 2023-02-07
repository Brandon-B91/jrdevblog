import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"
import { SEO } from "../components/Seo"
import "../styles/index.scss"


const IndexPage = () => {
  const postsPerPage = 5
  let numberOfPages

  return (
    <Layout pageTitle="Latest posts">
      <StaticQuery
        query={indexQuery} 
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
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
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
query indexQuery {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 5) {
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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 600
                )
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
`

export default IndexPage

export const Head = () => (
  <SEO />
)
