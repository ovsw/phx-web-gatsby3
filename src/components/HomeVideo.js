/** @jsx jsx */
import React, {useState} from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'

function HomeVideo () {
  const [videoToggler, setvideoToggler] = useState(false)

  const {videoBgImage} = useStaticQuery(
    graphql`
    
      {
        videoBgImage: file(relativePath: { eq: "jimmy-vercellino-welcome-video-thumbnail.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 984)
          }
        }
      }
    
    `
  )

  return (

    <section sx={{variant: 'sections.hpSection', bg: '#fdf9f2'}}>
      <Container>
        <div sx={{mb: [2,null, null, null, 5]}}>
          <span sx={{variant: 'text.superHeading'}}>Meet</span>
          <h2 sx={{variant: 'text.mainHeading', mb: 0}}> Jimmy <span sx={{color: 'primary'}}>Vercellino</span></h2>
        </div>

        <div sx={{
          display: 'flex',
          flexWrap: ['wrap', null, null, 'nowrap']
        }}>
          <div sx={{
            width: ['full', null, null, '1/2'],
            pr: ['none', null, null, 5],
            pb: ['4', null, null, 0]
          }}>
            <h3>Serving Families Nationwide with Custom-Tailored Mortgage Solutions</h3>
            <p>Obtaining a mortgage is often one of the largest debts you and I will acquire in a lifetime.</p>

            <p>Because my team and I will be responsible for helping you create this debt, we want to learn what is most important to you. This will enable us to provide the custom-tailored mortgage solution you deserve.</p>

            <Link to='/contact/' sx={{variant: 'buttons.simple', mr: 2}}>
              <span>Contact</span>
            </Link>
            <a href='https://connect.phxhomeloan.com/' target="_blank" rel='noopener noreferrer' sx={{variant: 'buttons.simpleAccent'}}>
              <span>Get Started</span>
            </a>
            </div>

          <div sx={{
            width: ['full', null, null, '1/2']
          }}>
            <div onClick={() => setvideoToggler(true)} sx={{cursor: 'pointer'}}>
              <GatsbyImage image={videoBgImage.childImageSharp.gatsbyImageData} alt="Jimmy Vercellino" className='w-100' style={{height: '100%'}} />
            </div>
          </div>

        </div>
        <ModalVideo channel='youtube' isOpen={videoToggler} videoId='-NBlEj7C8vM' autoplay="1" onClose={() => setvideoToggler(false)} />
      </Container>
    </section>
  )
}

export default HomeVideo
