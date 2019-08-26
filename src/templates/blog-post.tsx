import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout";

export default ({data: {markdownRemark: post}}) => (
    <Layout>
      <h1 className="text-2xl">{post.frontmatter.title}</h1>
    </Layout>
)

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
