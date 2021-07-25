/** @jsx jsx */
import React, {useState} from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'

function HomeVideo () {
  const [videoToggler, setvideoToggler] = useState(false)

  const {videoBgImage} = useStaticQuery(
    graphql`
    query {
      videoBgImage: file(relativePath: { eq: "jimmy-vercellino-welcome-video-thumbnail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 736) {
            ...GatsbyImageSharpFluid_withWebp
          }
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
            <a href='https://goldwaterbank.mymortgage-online.com/?loanapp&siteid=4884527613&lar=wstar_jvercellin&workFlowId=29714' target="_blank" rel='noopener noreferrer' sx={{variant: 'buttons.simpleAccent'}}>
              <span>Apply</span>
            </a>
            </div>

          <div sx={{
            width: ['full', null, null, '1/2']
          }}>
            <div onClick={() => setvideoToggler(true)} sx={{cursor: 'pointer'}}>
              <Img fluid={videoBgImage.childImageSharp.fluid} alt='Jimmy' className='w-100' style={{height: '100%'}} />
            </div>
          </div>

        </div>
        <ModalVideo channel='youtube' isOpen={videoToggler} videoId='-NBlEj7C8vM' autoplay="1" onClose={() => setvideoToggler(false)} />
      </Container>
    </section>
  )
}

export default HomeVideo
