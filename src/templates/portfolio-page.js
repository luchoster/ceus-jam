import React from 'react'
import { graphql } from 'gatsby'
import { mapIndexed } from '../lib/helpers'
import SqBg from '../assets/imgs/sq-pattern.png'

export const PortfolioPageTemplate = ({ client }) => {
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
      <section className="panel panel--white">
        <div className="inner">
          <section className="features">
            {mapIndexed((item, index) => (
              <article>
                {item.link ? (
                  <a
                    rel="noopener noreferrer"
                    href={item.link}
                    target="_blank"
                    className="image"
                  >
                    <img src={item.image} alt={item.name} />
                  </a>
                ) : (
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>
                )}
                <h3 className="major">{item.name}</h3>
              </article>
            ))(client)}
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <PortfolioPageTemplate client={post.frontmatter.client} />
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        client {
          name
          image
          link
        }
      }
    }
  }
`
