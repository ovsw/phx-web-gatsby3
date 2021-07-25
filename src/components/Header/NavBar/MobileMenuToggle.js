/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// context
import {appContext} from '../../../context'

const circleRadius = 23

const MobileMenuToggle = () => {
  const {isMobileNavOpen, openMobileNav, closeMobileNav} = useContext(appContext)

  const toggleNav = (e) => {
    e.preventDefault()
    if (isMobileNavOpen) {
      closeMobileNav()
    } else {
      openMobileNav()
    }
  }
  return (
    <a href='#nav' sx={toggleStyles} onClick={toggleNav} role='button' aria-expanded={isMobileNavOpen} aria-controls='menu'>
      <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' sx={{
        ...menuIcon,
        transform: isMobileNavOpen ? 'rotate(0deg)' : 'rotate(180deg)',
        circle: {
          strokeDashoffset: isMobileNavOpen ? '0' : `${circumference(circleRadius)}`
        },
        '.bar:nth-of-type(1),.bar:nth-of-type(4)': {
          opacity: isMobileNavOpen ? '0' : '1'
        },
        '.bar:nth-of-type(2)': {
          transform: isMobileNavOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        },
        '.bar:nth-of-type(3)': {
          transform: isMobileNavOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
        }

      }}>
        <title>Toggle Menu</title>
        <g>
          <line className='bar' x1='13' y1='16.5' x2='37' y2='16.5' />
          <line className='bar' x1='13' y1='24.5' x2='37' y2='24.5' />
          <line className='bar' x1='13' y1='24.5' x2='37' y2='24.5' />
          <line className='bar' x1='13' y1='32.5' x2='37' y2='32.5' />
          {/* <circle className='circle' r='23' cx='25' cy='25' /> */}
        </g>
      </svg>
    </a>
  )
}

function circumference ($r) {
  const pi = 3.141592653
  return 2 * pi * $r
}

const toggleStyles = {
  // position: 'absolute',
  // margin: 'auto',
  // top: '50%',
  // transform: 'translateY(-50%)',
  // bottom: '0',
  // right: '0',
  display: ['flex', null, null, 'none'],
  alignItems: 'center',
  zIndex: '10',
  padding: '0',
  border: '0',
  background: 'transparent',
  outline: '0',
  cursor: 'pointer',
  // borderRadius: '50%',
  transition: 'background-color .15s linear',

  '&: hover, &:focus': {
    // backgroundColor: 'background'
  }
}

const menuIcon = {
  display: 'block',
  cursor: 'pointer',
  color: 'accent',

  transition: '.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)',

  '.bar, .circle': {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '3',
    strokeLinecap: 'round'
  },
  '.bar': {
    transform: 'rotate(0deg)',
    transformOrigin: '50% 50%',
    transition: 'transform .25s ease-in-out'
  },
  '.circle': {
    transition: 'stroke-dashoffset .3s linear .1s',
    strokeDasharray: `${circumference(circleRadius)}`
  }
}

export default MobileMenuToggle
