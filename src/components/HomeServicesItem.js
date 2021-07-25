/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'

import Icon from './icon'

import {FaArrowAltCircleRight, FaCheck} from 'react-icons/fa'

const HomeServicesItem = ({title, slug, shortDescription, description, bullets, icon = 'adjustable-rate-mortgage', i}) => {
  return (
    <Link to={slug} sx={linkWrapperStyles} className='linkWrapper'>
      <div className='icon' sx={iconStyles}>
        <span><Icon symbol={icon} /></span>
      </div>
      <div className='contentWrapper' sx={contentWrapperStyles}>
        <h3 sx={{
          fontSize: [(i === 0) ? '3' : '5', null, null, i === 0 ? '4' : '5', (i === 0) ? '5' : '6'],
          lineHeight: '2.2rem'
        }}><span className='overTitle'>Phoenix</span><span className='accentTitle'>{title}</span> Loan</h3>
        {/* <p>{shortDescription} <br /> <Link to={slug}>Learn More <span sx={{fontSize: '0.7em'}}><FaChevronRight /></span></Link></p> */}
        <ul>
          {bullets.map((bullet, i) => (
            <li key={i}><span><FaCheck /></span> {bullet}</li>
          ))}
        </ul>
        <p className='readMore'>read more <FaArrowAltCircleRight /></p>
      </div>
    </Link>
  )
}

export default HomeServicesItem

const linkWrapperStyles = {
  position: 'relative',
  display: 'flex',
  width: 'full',
  flexDirection: ['column', null, null, 'row'],
  alignItems: 'space-between',
  textDecoration: 'none',
  transition: 'all 300ms ease',
  color: 'text',
  '.readMore': {
    color: 'primary'
  },
  ':hover': {
    boxShadow: '0 -3px 0 0 rgba(24,24,24,.15) inset, 0 3px 10px rgba(0,0,0,0.3)',
    transform: 'translateY(-3px)',
    color: 'white',
    '.icon': {
      bg: 'black'
    },
    'span.accentTitle': {
      color: 'white'
    },
    '.contentWrapper': {
      bg: 'primary',
      'ul li span': {
        color: 'text'
      }
    },
    '.readMore': {
      color: 'text'
    }
  }
}

const iconStyles = {
  variant: 'utils.skewedright',
  bg: 'primary',
  position: 'absolute',
  top: 0,
  right: '2rem',
  lineHeight: 0,
  px: '3',
  py: '1rem',
  fontSize: '3.5rem',
  color: 'white'
}

const contentWrapperStyles = {
  transition: 'background-color 300ms ease',
  width: 'full',
  bg: 'mutedBg',
  px: 4,
  pt: '3rem',
  pb: 2,
  h3: {
    py: 3,
    mt: 0,
    mb: 4,
    borderTop: '1px solid',
    borderBottom: '1px solid gray',
    borderColor: '#f1c37d',
    color: 'black',
    'span.overTitle': {
      textTransform: 'uppercase',
      fontFamily: 'heading2',
      fontWeight: '400',
      fontSize: 0,
      display: 'block',
      mb: 2
    },
    'span.accentTitle': {
      color: 'primary'
    }
  },
  ul: {
    variant: 'lists.reset',
    li: {
      pl: '1.5rem',
      position: 'relative',
      lineHeight: 'snug',
      mb: 2,
      span: {
        color: 'primary',
        position: 'absolute',
        left: 0,
        top: '3px'
      }
    }
  },
  '.readMore': {
    color: 'black',
    textAlign: 'right',
    my: 3,
    fontSize: 3
  }
}
