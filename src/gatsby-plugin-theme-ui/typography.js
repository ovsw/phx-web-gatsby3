const typography = {
  'fonts': {
    // 'sans': '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    // 'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
    'mono': 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'heading': 'Sarabun, sans-serif',
    'heading2': '"Roboto Condensed", sans-serif',
    'body': 'Roboto, sans-serif'
    // 'monospace': 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading'
    },
    superHeading: {
      fontFamily: 'heading2',
      fontWeight: 'normal',
      lineHeight: 'tight',
      textTransform: 'uppercase',
      fontSize: [1, null, null, '1.125rem'],
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      my: 0,
      '&::before': {
        content: '" "',
        width: ['2rem', '4.375rem'],
        height: '2px',
        borderTopColor: 'primary',
        borderTopWidth: '2px',
        borderTopStyle: 'solid',
        flexGrow: '0',
        flexShrink: '0',
        marginRight: '10px',
        marginTop: '-1px'
      }
    },
    mainHeading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'none',
      fontSize: [5, null, 6, 7, 8, null],
      letterSpacing: '-.03em',
      mt: 0,
      mb: 5
    },
    // display: {
    //   fontFamily: 'heading',
    //   fontWeight: 'heading',
    //   lineHeight: 'heading',
    //   letterSpacing: 'heading',
    //   fontSize: [ 5, 6, 7 ]
    // },
    caps: {
      textTransform: 'uppercase'
    }
  },
  'fontSizes': [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '5rem'
  ],
  'fontWeights': {
    'hairline': '100',
    'thin': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900',
    'body': '400',
    'heading': '800'
  },
  'letterSpacings': {
    'tighter': '-0.05em',
    'tight': '-0.025em',
    'normal': '0',
    'wide': '0.025em',
    'wider': '0.05em',
    'widest': '0.1em',
    'heading': '-.03em'
  },
  'lineHeights': {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
    'body': '1.625',
    'heading': '1'
  }
}

export default typography
