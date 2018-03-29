import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import Marked from 'marked'
import Slider from 'react-slick'
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
      <React.Fragment>
        <Slider>
          {mapIndexed((item, index) => (
            <section
              id="banner"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(43, 90, 150, 0.9), rgba(43, 90, 150, 0.9)), url(${
                  item.image
                })`,
              }}
              key={index}
            >
              <div className="inner">
                <div className="logo">
                  <span className="icon fa-diamond" />
                </div>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
              </div>
            </section>
          ))(page.hero)}
        </Slider>
        <section id="wrapper">
          <section id="one" className="wrapper style1">
            <div className="inner">
              <section className="spotlights">
                <article>
                  <header className="major">
                    <p>Magna</p>
                    <h2>Dolor sit amet vivamus</h2>
                  </header>
                  <p>
                    Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
                    Vestibulum blandit ex a elementum viverra. Sed quat diam,
                    aliquet tempus felis nisl at lacus.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        More
                      </a>{' '}
                    </li>
                  </ul>
                </article>
                <article>
                  <header className="major">
                    <p>Lorem</p>
                    <h2>Ipsum dolor sit amet</h2>
                  </header>
                  <p>
                    Phasellus in ante vitae nibh porttitor tempus vitae ut ante.
                    Vestibulum blandit ex a elementum viverra. Sed quat diam,
                    aliquet tempus felis nisl at lacus.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        More
                      </a>
                    </li>
                  </ul>
                </article>
              </section>
            </div>
          </section>
        </section>
      </React.Fragment>
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
