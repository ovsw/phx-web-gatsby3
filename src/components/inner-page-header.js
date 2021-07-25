/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const InnerPageHeader = ({title}) => {
  const {headerBgImage} = useStaticQuery(graphql`
  query{
    headerBgImage: file(relativePath: { eq: "inner-banner.jpg" }) {
      childImageSharp {
        original{
          width
          height
          src
        }
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
          srcSet
          src
        }
      }
    }
  }
`)

  const backgroundFluidImageStack = [
    headerBgImage.childImageSharp.fluid
    // `linear-gradient(
    //   to bottom,
    // rgba(285, 183, 69, 0.7) 0%,
    // rgba(235, 183, 69, 0.86) 80%
    // )`
    // `linear-gradient(
    //   to bottom,
    // rgba(285, 183, 69, 0.9) 0%,
    // rgba(235, 183, 69, 0.8) 100%
    // )`
    // `linear-gradient(
    // rgba(255, 255, 255, 0.3) 0%,
    // rgba(255, 255, 255, 0.4) 80%
    // )`
  ].reverse()

  return (
    <BackgroundImage fluid={backgroundFluidImageStack} className='pageHeaderWrapper'
      sx={{
        pt: 7,
        pb: 5,
        backgroundPosition: 'bottom left'
      }}
    >
      <Container>
        <div>
          {/* <span sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white'}}}>Mortgage Application</span> */}
          <h1 sx={{variant: 'text.mainHeading', mb: 0, color: 'white', textShadow: '0 2px 5px rgba(0,0,0,.5)'}}>{title}</h1>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default InnerPageHeader
