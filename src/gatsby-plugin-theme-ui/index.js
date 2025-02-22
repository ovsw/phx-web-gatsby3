// import {redirectTo} from '@reach/router'
// import {relative} from 'path'

import breakpoints from './breakpoints'
import typography from './typography'
import colors from './colors'
import sizes from './sizes'
import space from './space'
import shadows from './shadows'
import links from './links'
import buttons, {sharedButtonStyles} from './buttons'
import sections from './sections'
import inputs from './inputs'
import lists from './lists'
import misc from './misc'
import {skewedRight} from './common'

const sharedHeadingStyles = {
  'fontWeight': 'heading',
  'lineHeight': 'heading',
  fontFamily: 'Sarabun, sans-serif',
  'mt': 6,
  'mb': 3,
  color: 'text'
}

export default {
  ...breakpoints,
  ...typography,
  ...colors,
  ...sizes,
  ...space,
  ...shadows,
  ...links,
  ...buttons,
  ...sections,
  ...inputs,
  ...lists,
  ...misc, // borderWidths, radii, zindeces
  layout: {
    container: {
      maxWidth: ['1200px'],
      mx: 'auto',
      px: [2, 3, null, 3, 0]
    }
  },
  utils: {
    pin: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    skewedright: {
      ...skewedRight
    }
  },
  'styles': {
    'root': {
      margin: 0,
      'fontFamily': 'body',
      'lineHeight': 'body',
      'fontWeight': 'body'
    },
    Header: {
      display: 'block',
      zIndex: '5',
      position: 'relative'
    },
    Layout: {
      color: 'text',
      fontFamily: 'body',
      fontSize: '2'
    },
    'a': {
      'color': 'primary',
      'fontWeight': 'bold',
      'textDecoration': 'none',
      borderBottom: '2px solid',
      borderColor: 'primary',
      pb: '0.1em',
      ':hover': {
        'color': 'primary'
      },
      '&.contentButton': {
        ...sharedButtonStyles,
        display: 'inline-block',
        'backgroundColor': 'black',
        color: 'white',
        'border': 'none',
        mb: 3,
        'fontWeight': 'bold',
        'borderRadius': 'default',
        ':hover': {
          bg: 'black',
          boxShadow: '0 -3px 0 0 rgba(24,24,24,.15) inset, 0 3px 10px rgba(0,0,0,0.3)',
          transform: 'translateY(-3px) skew(-8deg)',
          color: 'white'
        },
        "span": {
          display: 'inline-flex',
        gap: "0.5rem"
        }
      }
    },
    'p': {
      fontSize: 2,
      lineHeight: 'body',
      color: 'textBody'
    },
    'h1': {
      ...sharedHeadingStyles,
      'fontSize': [6, 6, 7, 8],
      'mt': 2
    },
    'h2': {
      ...sharedHeadingStyles,
      'fontSize': [4, 5, 6, 6],
      mt: '1.5em !important',
      mb: '1em'
    },
    'h3': {
      ...sharedHeadingStyles,
      'fontSize': [3, 4, 5, 5],
      fontWeight: 'bold',
      mt: '1.5em !important'
    },
    'h4': {
      ...sharedHeadingStyles,
      'fontSize': [2, 3, 4]
    },
    'h5': {
      ...sharedHeadingStyles,
      'fontSize': 2
    },
    'h6': {
      ...sharedHeadingStyles,
      'fontSize': 1
    },
    'code': {},
    'pre': {},
    'hr': {
      'bg': 'muted',
      'border': 0,
      'height': '1px',
      'm': 3
    },
    'img': {
      pb: 4
    },
    '.contentImage': {
      ml: 'auto',
      mr: 'auto',
      pt: '0',
      width: "100%",
      objectFit: 'cover'
    },
    'figcaption': {
      textAlign: 'center',
      fontSize: 1,
      mt: 2,
      mb: 4,
      fontStyle: 'italic'
    },
    'table': {
      width: '100%',
      textAlign: 'left',
      'tr': {
        'td': {
          borderTop: '2px solid',
          borderColor: 'gray.3',
          padding: 2
        }
      }
    }
  }
}
