
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout pageTitle="Oops, Somethig went wrong..">
    <Seo title="404: Not found" />
    <div className="row d-flex justify-content-center mb-4">
    <Link className="btn btn-secondary text-uppercase" to={'/'}>
      Go home
    </Link>
    </div>
  </Layout>
)

export default NotFoundPage