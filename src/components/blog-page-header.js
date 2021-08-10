/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const InnerPageHeader = ({title, isH1 = false}) => {
  const {headerBgImage} = useStaticQuery(graphql`
  query GET_BLOG_HEADER_IMAGE{
    headerBgImage: file(relativePath: { eq: "inner-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
        )
      }
    }
  }
`)

  const blogHeaderImage = getImage(headerBgImage);

  return (
    <BgImage image={blogHeaderImage} className='pageHeaderWrapper'
      sx={{
        pt: 7,
        pb: 5,
        backgroundPosition: 'bottom left'
      }}
    >
      <Container>
        <div>
          {/* <span sx={{variant: 'text.superHeading', '::before': {borderTopColor: 'white'}}}>Mortgage Application</span> */}
          {!isH1 && <p sx={{variant: 'text.mainHeading', mb: 0, color: 'white', textShadow: '0 2px 5px rgba(0,0,0,.5)'}}>{title}</p>}
          {isH1 && <h1 sx={{variant: 'text.mainHeading', mb: 0, color: 'white', textShadow: '0 2px 5px rgba(0,0,0,.5)'}}>{title}</h1>}
          
        </div>
      </Container>
    </BgImage>
  )
}

export default InnerPageHeader
