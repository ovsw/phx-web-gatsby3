/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import Header from './Header'
import Footer from './Footer'
import {Global} from '@emotion/core'

const Layout = ({children, doHideNav, doShowNav, showNav, siteTitle}) => (
  <>
    <Global styles={theme => ({
      '*': {boxSizing: 'border-box'},
      body: {
        margin: 0,
        overflow: showNav ? 'hidden' : 'auto'
      },
      img: {
        maxWidth: '100%'
      },
      'a.externalLink::after': {
        content: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)',
        margin: '0 3px 0 3px',
        color: 'red'
      },
      '.slick-track': {
        display: 'flex',
        '.slick-slide': {
          display: 'flex',
          height: 'auto'
        }
      }
    })} />
    <div sx={headerStyles}>
      <Header
        siteTitle={siteTitle}
        showNav={showNav}
        doShowNav={doShowNav}
        doHideNav={doHideNav}
      />
    </div>
    {/* Page Conttent */}
    {children}
    <Footer />
  </>
)

export default Layout

const headerStyles = {
  '.headroom': {
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1',
    position: 'fixed'
  },
  '.headroom--unfixed': {
    transform: 'translateY(0)',
    '.topBarWrapper': {
      transition: 'all 200ms ease-in-out',
      maxHeight: 1000
    },
    '.mainNavWrapper nav': {
      py: 3
    }
  },
  '.headroom--scrolled': {
    transition: 'all 200ms ease-in-out'
  },
  '.headroom--unpinned': {
    // transform: 'translateY(-100%)',
    '.topBarWrapper': {
      maxHeight: 0
    },
    '.mainNavWrapper nav': {
      py: 2
    }
  },
  '.headroom--pinned': {
    transform: 'translateY(0%)',
    '.topBarWrapper': {
      maxHeight: 0
    },
    '.mainNavWrapper nav': {
      py: 2
    }
  }
}
