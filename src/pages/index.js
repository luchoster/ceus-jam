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
                  <i className="fa fa-terminal fa-3x" />
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
              <section className="columns spotlights">
                {mapIndexed((item, index) => (
                  <article key={index} className="column">
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
            <ul className="features columns">
              {mapIndexed((item, index) => (
                <li className="column" key={index}>
                  <span className={`icon fa major fa-${item.icon}`} />
                  <h5>{item.text}</h5>
                </li>
              ))(page.cta)}
            </ul>
          </div>
        </section>
        <section className="panel panel--white">
          <div className="inner">
            <header className="major alt">
              <p>{page.intro.about.subtitle}</p>
              <h2>{page.intro.about.title}</h2>
            </header>
            <section className="posts section--about">
              <article className="columns">
                <span className="image ">
                  <img src={page.intro.about.image} alt="" />
                </span>
                <div className="content">
                  <p>{page.intro.about.text}</p>
                  <ul className="actions">
                    <li>
                      <Link to={page.intro.about.link} className="button">
                        More
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </section>
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
                subtitle
                text
                link
                image
              }
              spotlight {
                title
                subtitle
                text
                link
              }
            }
            cta {
              icon
              title
              text
              link
            }
          }
        }
      }
    }
  }
`
