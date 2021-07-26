/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'

import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const InnerPageHeader = ({title}) => {
  const { headerBgImage } = useStaticQuery(graphql`
    query {
      headerBgImage: file(relativePath: { eq: "inner-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1400)
        }
      }
    }
  `);

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
          <h1 sx={{variant: 'text.mainHeading', mb: 0, color: 'white', textShadow: '0 2px 5px rgba(0,0,0,.5)'}}>{title}</h1>
        </div>
      </Container>
    </BgImage>
  )
}

export default InnerPageHeader
