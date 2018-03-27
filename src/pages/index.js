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
            <h2>{page.intro.about.title}</h2>
            <p>
              Another free + fully responsive site template by{' '}
              <a href="http://html5up.net">HTML5 UP</a>
            </p>
          </div>
        </section>
        <section id="one" class="wrapper style1">
          <div class="inner">
            <section class="spotlights">
              <article>
                <header class="major">
                  <p>Magna</p>
                  <h2>Dolor sit amet vivamus</h2>
                </header>
                <p>
                  Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
                  Vestibulum blandit ex a elementum viverra. Sed quat diam,
                  aliquet tempus felis nisl at lacus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>{' '}
                  </li>
                </ul>
              </article>
              <article>
                <header class="major">
                  <p>Lorem</p>
                  <h2>Ipsum dolor sit amet</h2>
                </header>
                <p>
                  Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
                  Vestibulum blandit ex a elementum viverra. Sed quat diam,
                  aliquet tempus felis nisl at lacus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
            </section>
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
            intro {
              about {
                title
              }
            }
          }
        }
      }
    }
  }
`
