/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'

import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

const HomeHero = () => {
  const {mobile, desktop} = useStaticQuery(graphql`
    query GET_HERO_BG_IMAGES {
      mobile: file(relativePath: { eq: "hero-image-bg-mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600,
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      desktop: file(relativePath: { eq: "hero-image-2023-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH,
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const sources = [
    getImage(mobile),
    {
      ...getImage(desktop),
      media: `(min-width: 640px)`
    }
  ]

  return (
    <>
      <BgImage image={sources} loading="eager" Tag='section' sx={{
        paddingTop: ['11rem'],
        minHeight: [null, '80vh', '100vh'],
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container sx={{
          py: [4, 1, 2, 2],
          textAlign: ['center', 'left']
        }}>
          <div className='textWrapper' sx={{
            padding: '3rem',
            backgroundColor: 'white',
            borderRadius: '7px',
            maxWidth: ['full', '70%', null, '3/5', '3xl']
          }}>
            <h1 sx={{
              variant: 'text.superHeading',
              color: 'black',
              justifyContent: ['center', 'flex-start'],
              position: 'relative',
              mb: 2,
              '::before': {
                borderTopColor: 'black',
                marginTop: '-1px',
                position: ['absolute', 'static'],
                bottom: '-.5rem',
                left: '50%',
                transform: ['translateX(-50%)', 'none']
              }
            }}>
              Phoenix Mortgage Lender
            </h1>
            <h2 sx={{
              fontFamily: 'heading',
              color: 'black',
              fontWeight: 'heading',
              lineHeight: 'none',
              fontSize: [3, '3.3rem', '3.4rem', '3.8rem'],
              letterSpacing: '-.03em',
              mt: [0, null, 3, 0],
              mb: [4, null,  5, 4]
            }}>
              <span sx={{
                color: 'primary',
                //textShadow: '0 2px 5px rgba(0,0,0,.5)',
                display: 'block',
                fontSize: [5, '3.1rem'],
                mb: 2
              }}>
              Personalized Service</span> for your Home Loan
            </h2>
            <p sx={{
              fontSize: [0, 1],
              maxWidth: ['none', '70%', '75%', '82%'],
              mb: [4, null, 5, 4]
            }}>
              Buying a house is an exciting adventure, and we want to help you navigate your mortgage loan options so you get the right type of home loan with the best terms. <br/> <br />I’m Jimmy Vercellino, an experienced mortgage originator with Phoenix lender First Western Trust Mortgage Division. My team and I work hard to provide a timely, efficient and excellent home loan process for you. We serve families nationwide.
            </p>
            <Link to='/contact/' sx={{variant: 'buttons.simple', mr: 2}}>
              <span>Contact</span>
            </Link>
            <a href='https://connect.phxhomeloan.com/' target="_blank" rel='noopener noreferrer' sx={{variant: 'buttons.simpleAccent'}}>
              <span>Get Started</span>
            </a>
          </div>
        </Container>
      </BgImage>
    </>
  )
}

export default HomeHero
