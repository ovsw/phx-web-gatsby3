/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {appContext} from '../../../context'

import {useSiteMetadata} from '../../../hooks/use-site-metadata'
import {Link} from 'gatsby'

import MainLogo from './MainLogo'
import MobileMenuToggle from './MobileMenuToggle'
import MenuItemWSubMenu from './NavItemWithSubMenu'

const NavBar = () => {
  const {siteNav} = useSiteMetadata()
  const {isMobileNavOpen, openMobileNav, closeMobileNav} = useContext(appContext)

  return (
    <nav sx={navBarStyles(isMobileNavOpen)}>
      <MainLogo />
      <div className='mainMenuWrapper'>
        <ul className='mainMenu'>
          {siteNav.map(navItem => (
            <li key={navItem.title}>
              {(navItem.children.length === 0) &&
              <Link to={navItem.slug}>{navItem.title}</Link>
              }
              {(navItem.children.length > 0) &&
              <MenuItemWSubMenu {...navItem} />
              }
            </li>
          ))}
        </ul>
      </div>
      <MobileMenuToggle />
    </nav>
  )
}

export default NavBar

const navBarStyles = (isMobileNavOpen) => {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    bg: 'white',
    py: 0,
    px: 3,
    '.topBarWrapper': {
      width: 'full'
    },
    '.mainMenuWrapper': {
      position: ['absolute', null, null, 'static'],
      display: [null, null, null, 'flex'],
      right: 0,
      top: ['5.1rem', '5.5rem'],
      // transition animation
      transition: 'all 200ms ease',
      maxHeight: [isMobileNavOpen ? 1000 : 0, null, null, 1000],
      overflow: ['hidden', null, null, 'visible'],
      // display: isMobileNavOpen ? 'block' : 'none'
      bg: ['white', null, null, 'transparent'],
      boxShadow: ['0 0 5px rgba(0,0,0,0.1)', null, null, 'none']
    },
    '.mainMenu': {
      display: ['block', null, null, 'flex'],
      variant: 'lists.reset',
      p: [3, null, null, 0]

    },
    '.mainMenu li': {
      position: 'relative',
      display: [null, null, 'flex'],
      borderBottom: ['1px solid rgba(24,24,24,0.1)', null, 'none'],
      px: 1,
      '@media screen and (min-width: 1024px)': {
        ':hover': {
          '.subMenuWrapperUl': {
            display: 'block'
          }
        }
      }
    },
    a: {
      color: 'text',
      textDecoration: 'none',
      fontSize: 1,
      fontWeight: 'bold',
      px: 2,
      my: 'auto'
    },
    '.mainMenu .subMenuWrapperUl': {
      display: 'none',
      position: [null, null, null, 'absolute'],
      top: '3.5rem',
      left: 0,
      variant: 'lists.reset',
      minWidth: '15rem',
      bg: 'white',
      boxShadow: [null, null, null, '0 0 30px 0 rgba(0,0,0,.12)'],
      py: [null, null, null, 2],
      // tirangle
      '::before': {
        content: '""',
        display: 'block',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '11px solid white',
        zIndex: '3',
        position: 'absolute',
        left: '30px',
        top: '-21px',
        // marginLeft: '-33px',
        // marginTop: '-9px',
        // opacity: '0',
        transition: '200ms ease all',
        pointerEvents: 'none',
        transform: 'translateY(10px)',
        transitionDelay: '0'
      },
      li: {
        px: 0
      },
      a: {
        fontSize: 0,
        fontWeight: 'normal',
        px: [null, null, null, '1.42857em'],
        py: [null, null, null, '2'],
        display: 'inline-block',
        position: 'relative',
        '::before': {
          display: 'block',
          content: '""',
          width: '0',
          height: '2px',
          bg: 'primary',
          top: '50%',
          marginTop: '-1px',
          left: '0',
          transition: '200ms ease all',
          position: 'absolute'
        },
        ':hover:before': {
          width: '10px'
        }
      }
    }
  }

  return styles
}
