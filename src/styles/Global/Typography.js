import { rem } from 'helpers/Math';
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
    letterSpacing: rem(6)
  },
  h2: {
    letterSpacing: rem(5)
  },
  h3: {
    letterSpacing: rem(4)
  },
  h4: {
    letterSpacing: rem(3)
  },
  h5: {
    letterSpacing: rem(2)
  },
  h6: {
    letterSpacing: rem(1)
  },
  // Paragraph Text
  p: {
    fontFamily: '"Antwerp", serif',
    fontWeight: 300,
    fontSize: rem(14),
    letterSpacing: rem(1),
  },
  'p.quote': {
    fontWeight: 'bolder',
    textTransform: 'uppercase'
  },
  'p.italic': {
    fontStyle: 'italic',
  },
  'p.justify': {
    textAlign: 'justify',
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
        fontSize: rem(18)
      },
      'p.quote': {
        fontSize: rem(16)
      },
      // Text Center
      '.text-center-desktop': {
        textAlign: 'center'
      }
    },
    [desktopSmall]: {
      'html, body': {
        fontSize: '90%'
      },
      p: {
        fontSize: rem(20)
      },
      'p.quote': {
        fontSize: rem(18)
      }
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