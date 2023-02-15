
import React from 'react'
import Layout from '../components/layout'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'
import RecentPosts from "../components/RecentPost"
import { SEO } from '../components/Seo'


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

export const Head = () => (
  <SEO
    title="Jr devs blog - Tags page a list of all current tags being used on all blog posts"
    description="The journey of a self taught web developer and a place to talk about all things mechanic withcraft and wizardry."
  />
);