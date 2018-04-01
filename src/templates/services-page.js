import React from 'react'
import SqBg from '../assets/imgs/sq-pattern.png'

export const ServicesPageTemplate = ({ title, content }) => {
  return (
    <section
      id="banner"
      style={{
        backgroundImage: `url(${SqBg}),linear-gradient(to top, rgba(43, 90, 150, 0.9), rgba(43, 90, 150, 0.9))`,
      }}
    >
      <div className="inner">
        <div className="logo">
          <i className="fa fa-terminal fa-3x" />
        </div>
        <h2>Our Services</h2>
        <p>
          We offer many technical services; such as, Web Design, Programming in
          PHP, ASP, SQL and others, and Application Development. You will find
          what your company needs. Our experience in each of these areas
          guarantees the implementation of an efficient and effective product.
          We guarantee the success and satisfaction in your project. Let us
          assist you.
        </p>
      </div>
    </section>
  )
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ServicesPageTemplate title={post.frontmatter.title} content={post.html} />
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
