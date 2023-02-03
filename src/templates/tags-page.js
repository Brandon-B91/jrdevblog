
import React from 'react'
import Layout from '../components/layout'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'
import RecentPosts from "../components/RecentPost"


const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All tags">
      <ul className="tags-ul d-flex justify-content-center flex-wrap text-center">
        {tags.map(tag => (
          <li key={tag} style={{ marginRight: '10px', marginBottom: '10px' }}>
            <Button color="secondary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="dark">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
      <RecentPosts></RecentPosts>
    </Layout>
  )
}

export default tagsPage