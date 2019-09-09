import * as React from 'react';
import '../style/index.css';
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import Article from "../components/Article";

export default ({ data: { allMarkdownRemark  } } ) => (
    <Layout>
        <div className="bg-gray-200 h-full">
            <div className="container bg-white m-auto">
                {allMarkdownRemark.edges.map((edge, index) => (
                    <Article
                        id={edge.node.id}
                        key={edge.node.id}
                        position={index}
                        title={edge.node.frontmatter.title}
                        description={edge.node.frontmatter.description}
                        date={edge.node.frontmatter.date}
                        link={edge.node.fields.slug}
                    />
                ))}
            </div>
        </div>
    </Layout>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YY")
            description
          }
        }
      }
    }
  }
`;
