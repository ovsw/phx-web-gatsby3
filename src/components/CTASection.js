/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link} from 'gatsby'

import {FaArrowCircleRight} from 'react-icons/fa'

const CTASection = ({children, buttonText = 'button text', link = '/'}) => {
  return (
    <section sx={{
      variant: 'sections.hpSection',
      bg: 'black',
      color: 'white',
      py: [4, 5, 5, 5],
      h2: {

      }
    }}>
      <Container sx={{
        display: [null, 'flex'],
        alignItems: 'center',
        justifyContent: 'space-around',
        px: 2,
        textAlign: ['center', 'left']
      }}>
        <div>
          {children}
        </div>
        <Link to={link} sx={{variant: 'buttons.simpleAccent', fontSize: 0, mt: [4, 0]}}>
          <span>{buttonText} <FaArrowCircleRight style={{verticalAlign: 'middle'}} /></span>
        </Link>
      </Container>
    </section>
  )
}

export default CTASection
