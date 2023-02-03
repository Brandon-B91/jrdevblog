import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "reactstrap"
import RecentPosts from "../components/RecentPost"

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" />
    <Card className="p-3">
      Well to put it simply I am lerning web development with no degree. Here
      comes the buzzword "self-taught", I know this can come with some negative
      annotations all of it's own. The purpose of this blog is so I can document
      my journey what I'm learning and best practices along the way if any other
      jrDevs are interested in contrubuting to this then I'd love to talk.
      Self-taught or traditionally trained, I'd also love to hear from other
      jrDevs You don't have to be in "web" any fields of programming would be
      good to post on here so if you would like to partiticpate there is a few
      ways you can reach out to me all my social media is linked. You can E-mail
      me or leave a comment on one of the posts and we can talk!
    </Card>
    <RecentPosts></RecentPosts>
  </Layout>
)

export default AboutPage
