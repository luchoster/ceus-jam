import React from 'react'
import { graphql } from 'gatsby'

export const HomePageTemplate = ({ title }) => {
  return <section className="section section--gradient">Home Page</section>
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return <HomePageTemplate title={post.frontmatter.title} />
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
