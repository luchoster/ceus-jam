import React from 'react'

export const HomePageTempate = ({}) => <section>hi</section>

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
      }
    }
  }
`
