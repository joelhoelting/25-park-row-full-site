import { pxToRem } from 'helpers/Math';
import { globalMediaQueries } from './MediaQueries';

const { tabletLandscape, desktop, desktopSmall, desktopLarge, desktopXLarge} = globalMediaQueries;

const typography = {
  'html, body': {
    fontSize: '100%',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-font-smoothing': 'antialiased',
    '-o-font-smoothing': 'antialiased'
  },
  // Header Text
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Maison Neue Extended, sans-serif',
    fontWeight: 300,
    textTransform: 'uppercase'
  },
  h1: {
    letterSpacing: pxToRem(6)
  },
  h2: {
    letterSpacing: pxToRem(5)
  },
  h3: {
    letterSpacing: pxToRem(4)
  },
  h4: {
    letterSpacing: pxToRem(3)
  },
  h5: {
    letterSpacing: pxToRem(2)
  },
  h6: {
    letterSpacing: pxToRem(1)
  },
  // Paragraph Text
  p: {
    fontFamily: '"Antwerp", serif',
    fontWeight: 300,
    fontSize: pxToRem(14),
    letterSpacing: pxToRem(1),
  },
  'p.quote': {
    fontWeight: 'bolder',
    textTransform: 'uppercase'
  },
  // Link Styles
  a: {
    textDecoration: 'none',
    color: 'inherit'
  },
  'a:visited': {
    color: 'inherit'
  },
  'a:hover': {
    color: 'inherit'
  },
  'a:active': {
    color: 'inherit'
  },
  // Text Center
  '.text-center': {
    textAlign: 'center'
  },
  // Uppercase
  '.uppercase': {
    textTransform: 'uppercase'
  },
  // Opaque
  '.lighten': {
    opacity: '.4'
  },
  // Italic
  '.italic': {
    fontStyle: 'italic',
  },
  // Justify
  '.justify': {
    textAlign: 'justify',
  },
  // Display Linebreak
  '.display-linebreak': {
    whiteSpace: 'pre-line'
  },
  // No Margin global style
  '.no-margin': {
    margin: 0
  },
  '.no-margin-bottom': {
    marginBottom: 0
  },
  '.no-margin-top': {
    marginTop: 0
  },
  mediaQueries: {
    [tabletLandscape]: {
      'html, body': {
        fontSize: '85%'
      },
      // Paragraph
      p: {
        fontSize: pxToRem(18)
      },
      'p.quote': {
        fontSize: pxToRem(16)
      },
      '.mobile-header': {
        fontSize: pxToRem(24)
      },
    },
    [desktopSmall]: {
      'html, body': {
        fontSize: '90%'
      },
      p: {
        fontSize: pxToRem(20)
      },
      'p.quote': {
        fontSize: pxToRem(18)
      },
      '.mobile-header': {
        display: 'none'
      },
    },
    [desktop]: {
      'html, body': {
        fontSize: '100%'
      }
    },
    [desktopLarge]: {
      'html, body': {
        fontSize: '110%'
      }
    },
    [desktopXLarge]: {
      'html, body': {
        fontSize: '120%'
      }
    }
  }
};

export default typography;