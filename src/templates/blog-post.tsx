import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout";

export default ({data: {markdownRemark: post}}) => (
    <Layout>
        <h1 className="text-2xl mb-3">{post.frontmatter.title}</h1>
        <h2 className="text-gray-500 text-sm mb-6"><i>{post.frontmatter.date}</i></h2>
        <div className="text-base" dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
)

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr")
      }
    }
  }
`;
