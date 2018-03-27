import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import Marked from 'marked'
import { notNilOrEmpty, mapIndexed, rawMarkup } from '../lib/helpers'

export default class Home extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const settings = {
      autoplay: true,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const page = posts.filter(
      post => post.node.frontmatter.templateKey === 'home-page'
    )[0].node.frontmatter

    return (
      <main id="main">
        <section id="banner">
          <div className="inner">
            <div className="logo">
              <span className="icon fa-diamond" />
            </div>
            <h2>This is Solid State</h2>
            <p>
              Another free + fully responsive site template by{' '}
              <a href="http://html5up.net">HTML5 UP</a>
            </p>
          </div>
        </section>
      </main>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            templateKey
            hero {
              heading
              image
              text
            }
            intro {
              spotlight {
                title
                subtitle
                text
                link
              }
            }
          }
        }
      }
    }
  }
`
