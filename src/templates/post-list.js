import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import PaginationLinks from '../components/PaginationLinks'

const postList = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = props.pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          image={node.frontmatter.image.childImageSharp.gatsbyImageData}
        />
      ))}
      <PaginationLinks
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </Layout>
  )
}

export const postListQuery = graphql`
query postListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
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
              gatsbyImageData(layout: CONSTRAINED
                placeholder: BLURRED
                )
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
}
`

export default postList
