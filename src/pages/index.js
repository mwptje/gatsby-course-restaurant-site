import React from "react"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Hello from Gatsby</h3>
    <FaBeer />
  </Layout>
)

export default IndexPage
