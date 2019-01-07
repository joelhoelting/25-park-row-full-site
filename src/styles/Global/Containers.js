import { pxToRem } from 'helpers/Math';
import { globalMediaQueries } from './MediaQueries';

const { tablet, desktopSmall } = globalMediaQueries;

const containers = {
  // Sticky Footer
  '.main': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  '.main-content': {
    flex: '1 0 auto'
  },
  // Desktop Height
  // Upper Nav: 60rem, Lower Nav: 30rem
  // Mobile Height
  // Upper Nav: 60(active)/40rem(inactive), Lower Nav: 100%

  // Main Container (w/ top margin)
  '.main-container': {
    marginTop: `120px`,
    width: '100%',
    height: 'auto',
    transition: 'opacity 400ms ease-in-out'
  },
  // Home Container
  '.home-container': {
    marginTop: 'calc(120px - 8px)',
    width: '100%',
    height: 'auto',
    transition: 'opacity 400ms ease-in-out'
  },
  // Gallery Container
  '.gallery-container': {
    marginTop: `120px`,
    width: '100%',
    height: 'auto',
    transition: 'opacity 400ms ease-in-out'
  },
  // Floorplan Container
  '.floorplan-container': {
    marginTop: `120px`,
    width: '100%',
    height: 'auto',
    paddingLeft: '8px',
    paddingRight: '8px',
    transition: 'opacity 400ms ease-in-out'
  },
  '.team-container': {
    marginTop: `120px`,
    width: '100%',
    height: 'auto',
    paddingLeft: '8px',
    paddingRight: '8px',
    transition: 'opacity 400ms ease-in-out'
  },
  // Full Width Container
  '.full-width-container': {
    marginTop: `120px`,
    width: '100%',
    height: 'auto',
    transition: 'opacity 400ms ease-in-out'
  },
  // Contact Container
  '.contact-container': {
    marginTop: 'calc(120px - 8px)',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    height: 'auto',
    transition: 'opacity 400ms ease-in-out'
  },
  // Brochure Container
  '.brochure-container': {
    marginTop: `120px`,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'opacity 400ms ease-in-out',
    height: '100%'
  },
  // Neighborhood Map Container
  '.neighborhood-map-container': {
    width: '100%'
  },
  mediaQueries: {
    [tablet]: {
      '.brochure-container': {
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }
    },
    [desktopSmall]: {
      /* Container Styles */
      // Main Container (w/ top margin)
      '.main-container': {
        marginTop: pxToRem(110),
        paddingBottom: pxToRem(50),
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      // Home Container
      '.home-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: pxToRem(110),
        width: '98%'
      },
      // Gallery Container
      '.gallery-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: pxToRem(105),
        width: '98%'
      },
      // Floorplan Container
      '.floorplan-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: pxToRem(105),
        width: '100%'
      },
      // Team Container
      '.full-width-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: pxToRem(105),
        width: '100%'
      },
      // Contact Container
      '.contact-container': {
        marginTop: 'calc(120px - 8px)',
        width: '60%',
        maxWidth: '1000px',
        height: 'auto',
        transition: 'opacity 400ms ease-in-out'
      },
      // Brochure Container
      '.brochure-container': {
        marginTop: pxToRem(110),
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0
      },
      // Neighborhood Map Container
      '.neighborhood-map-container': {
        padding: `${pxToRem(50)} 0`,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    }
  }
};

export default containers;