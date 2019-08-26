import * as React from 'react'
import { graphql } from 'gatsby'

export default ({data: {markdownRemark: post}}) => (
    <h1>{post.frontmatter.title}</h1>
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
