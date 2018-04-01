import React from 'react'
import { mapIndexed, createMarkup, notNilOrEmpty } from '../lib/helpers'
import SqBg from '../assets/imgs/sq-pattern.png'

export const PortfolioPageTemplate = ({ service }) => {
  return (
    <React.Fragment>
      <section
        id="banner"
        style={{
          backgroundImage: `url(${SqBg})`,
        }}
      >
        <div className="inner">
          <div className="logo">
            <i className="fa fa-terminal fa-3x" />
          </div>
          <h2>Our Portfolio</h2>
        </div>
      </section>
    </React.Fragment>
  )
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <PortfolioPageTemplate service={post.frontmatter.service} />
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
      }
    }
  }
`
