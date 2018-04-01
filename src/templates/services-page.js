import React from 'react'
import { mapIndexed, createMarkup, notNilOrEmpty } from '../lib/helpers'
import SqBg from '../assets/imgs/sq-pattern.png'

export const ServicesPageTemplate = ({ service }) => {
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
          <h2>Our Services</h2>
        </div>
      </section>
      <section id="content-wrapper">
        {mapIndexed((item, index) => (
          <section
            id="one"
            className="panel panel--services spotlight"
            key={index}
          >
            <div className="inner">
              <a href="#" className="image">
                <img src={item.image} alt="" />
              </a>
              <div className="content">
                <h2 className="major">{item.title}</h2>
                <p>{item.text}</p>
                <a href="#" className="special">
                  Learn more
                </a>
              </div>
            </div>
          </section>
        ))(service)}
      </section>
    </React.Fragment>
  )
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return <ServicesPageTemplate service={post.frontmatter.service} />
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        service {
          icon
          title
          text
          image
        }
      }
    }
  }
`
