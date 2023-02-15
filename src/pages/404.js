
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/Seo'

const NotFoundPage = () => (
  <Layout pageTitle="Oops, Somethig went wrong..">
    <div className="row d-flex justify-content-center mb-4">
    <Link className="btn btn-secondary text-uppercase" to={'/'}>
      Go home
    </Link>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => (
  <SEO
    title="Jr devs blog - 404 page"
    description="Looks like something went wrong click here to go back."
  />
);