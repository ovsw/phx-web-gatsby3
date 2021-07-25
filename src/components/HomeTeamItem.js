/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import PortableText from './portableText'

import Img from 'gatsby-image'

import {FaPhone, FaEnvelope} from 'react-icons/fa'

const HomeTestimonialItem = ({name, role, email, phone, nmls, mainImage, _rawBio}) => {
  return (
    <div sx={itemStyles}>

      <Img fluid={mainImage.asset.fluid} alt={name} loading='lazy' sx={{
        width: ['full', null, null, '1/2']
        // height: '400px'
      }} />

      <div className='textWrapper' sx={{
        width: ['full', null, '1/2']
      }}>
        <span sx={{
          variant: 'text.superHeading',
          '::before': {
            width: '2rem'
          }
        }}>NMLS #{nmls}</span>
        <h3 sx={{
          fontSize: 4,
          letterSpacing: '-.03em',
          my: 0,
          pl: [3, null, null, 2, 3]
        }}>{name}</h3>
        <p sx={{mt: 0, pl: [3, null, null, 2, 3]}}>
          {role}
        </p>
        <ul sx={{
          variant: 'lists.reset',
          pl: 3,
          'li a': {
            color: 'primary',
            textDecoration: 'none',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            wordBreak: 'break-all',
            wordBreak: 'break-word', // eslint-disable-line
            hyphens: 'auto',
            fontSize: '0.8rem'
          }

        }}>
          <li><a href={`mailto:{email}`}><FaEnvelope /> {email}</a></li>
          <li><a href={`tel:${phone}`}><FaPhone /> {phone}</a></li>
        </ul>
        <div sx={{fontSize: 0, px: 3}} >
          <PortableText blocks={_rawBio} />
        </div>
      </div>

    </div>
  )
}

export default HomeTestimonialItem

const itemStyles = {
  overflow: 'hidden',
  bg: '#f1f1f1',
  maxWidth: '600px',
  mx: 'auto',
  display: 'flex',
  flexWrap: ['wrap', null, null, 'nowrap'],
  alignContent: 'flex-start',
  '.textWrapper': {

    pt: 4,
    pb: 2
  }

}
