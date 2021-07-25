/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'

import Headroom from 'react-headroom'
import TopBar from './Topbar'

// components
import NavBar from './NavBar'

const Header = () => {
  return (
    <Headroom
      disableInlineStyles
      wrapperStyle={{marginBottom: '-171px'}}
    >
      <header>
        <Container sx={{
          boxShadow: '0 2px 30px 0 rgba(0,0,0,.15)'
        }}>
          <div className='topBarWrapper' sx={{

          }}>
            <TopBar />
          </div>
          <div className='mainNavWrapper'>
            <NavBar />
          </div>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
