/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {FaPhone, FaCalculator} from 'react-icons/fa'

import {Link} from 'gatsby'

const Topbar = () => {
  return (
    <div sx={{
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      bg: 'black',
      py: 1,
      px: [2, 4],
      p: {
        display: 'inline-block',
        fontSize: [0, 1],
        m: 0,
        a: {
          color: 'white',
          textDecoration: 'none',
          ml: 3,
          ':hover': {
            color: 'primary'
          },
          '&.accented': {
            color: 'primary',
            ':hover': {
              color: 'white'
            }
          }
        }
      }
    }}>
      <p>Phoenix Mortgage Lender</p>
      <p><Link to='/mortgage-calculator/' className='accented'><FaCalculator /> Mortgage Calculator</Link > <a href='tel:480-800-8387'><FaPhone /> 480-800-8387</a></p>
    </div>
  )
}

export default Topbar
