import React from 'react'
import PropTypes from 'prop-types'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

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
