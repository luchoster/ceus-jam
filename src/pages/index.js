import * as R from 'ramda'
import React from 'react'
import Link from 'gatsby-link'
import Marked from 'marked'
import Slider from 'react-slick'
import LogoVertical from '../assets/imgs/logo.png'
import SqBg from '../assets/imgs/sq-pattern.png'
import {
  createMarkup,
  notNilOrEmpty,
  mapIndexed,
  rawMarkup,
} from '../lib/helpers'

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
                backgroundImage: `url(${SqBg}),linear-gradient(to top, rgba(43, 90, 150, 0.9), rgba(43, 90, 150, 0.9)), url(${
                  item.image
                })`,
              }}
              key={index}
            >
              <div className="inner">
                <div className="logo">
                  <img src={LogoVertical} alt="CompuExpress Logo" />
                </div>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
              </div>
            </section>
          ))(page.hero)}
        </Slider>
        <section id="content-wrapper">
          <section className="panel panel--off-white">
            <div className="inner">
              <section className="spotlights">
                {mapIndexed((item, index) => (
                  <article key={index}>
                    <header className="major">
                      <p>{item.subtitle}</p>
                      <h2>{item.title}</h2>
                    </header>
                    <p>{item.text}</p>
                    <ul className="actions">
                      <li>
                        <Link to={item.link} className="button">
                          More
                        </Link>
                      </li>
                    </ul>
                  </article>
                ))(page.intro.spotlight)}
              </section>
            </div>
          </section>
        </section>
        <section className="panel panel--green cta">
          <div className="inner">
            <ul className="features">
              <li>
                <span className="icon fa major fa-bar-chart" />
                <h4>Placerat</h4>
                <p>Lorem ipsum dolor sit amet nullam et consequat.</p>
              </li>
              <li>
                <span className="icon fa major fa-paper-plane-o" />
                <h4>Libero</h4>
                <p>Lorem ipsum dolor sit amet nullam et consequat.</p>
              </li>
              <li>
                <span className="icon fa major fa-area-chart" />
                <h4>Solicitu</h4>
                <p>Lorem ipsum dolor sit amet nullam et consequat.</p>
              </li>
              <li>
                <span className="icon fa major fa-file-image-o" />
                <h4>Tempor</h4>
                <p>Lorem ipsum dolor sit amet nullam et consequat.</p>
              </li>
            </ul>
          </div>
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
