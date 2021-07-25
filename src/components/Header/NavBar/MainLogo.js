/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'

const MainLogo = () => {
  const {logoImage} = useStaticQuery(graphql`
  query{
    logoImage: file(relativePath: { eq: "goldwater-vercellino-team-logo.png" }) {
      childImageSharp {
        original{
          width
          height
          src
        }
        fixed(width: 320) {
          ...GatsbyImageSharpFixed_noBase64
          srcSet
          src
        }
      }
    }
  }
`)
  return (
    <Link to='/' title='Phoenix Home Loans' sx={{display: 'inline-block', lineHeight: 0}}>
      <img src={logoImage.childImageSharp.fixed.src} alt='Goldwater Bank - Vercellino Team logo' sx={{
        maxWidth: ['190px', '250px']
      }} />
    </Link>
  )
}

export default MainLogo
