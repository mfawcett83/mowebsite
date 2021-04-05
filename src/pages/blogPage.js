import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import BlogLayout from "../components/BlogLayout"

const IndexPage = () => (
  <Layout>
  <BlogLayout>
    <h1>Hi people</h1>
    <p>Welcome to my blog - I will be writing about Software/Web Development, general tech topics, and muse about life in general!</p>
    <p>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
      <br />
      <Link to="/blog/my-second-post/">Go to my second Markdown blog post</Link>
    </p>
  </BlogLayout>
  </Layout>
)

export default IndexPage