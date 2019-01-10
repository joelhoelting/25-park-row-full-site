import { globalMediaQueries } from './MediaQueries';

const { tablet, desktopSmall, desktopLarge } = globalMediaQueries;

// TopNav - 50px (60px Large Screen)
// LowerNav - 30px (35px Large Screen)

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
  // Main Container
  '.main-container': {
    height: 'auto',
    marginTop: `68px`,
    transition: 'opacity 400ms ease-in-out',
    width: '100%',
  },
  // Large Container
  '.large-container': {
    height: 'auto',
    marginTop: '60px',
    transition: 'opacity 400ms ease-in-out',
    width: '100%',
  },
  // Full Width Container
  '.full-width-container': {
    height: 'auto',
    marginTop: '50px',
    paddingLeft: '8px',
    paddingRight: '8px',
    transition: 'opacity 400ms ease-in-out',
    width: '100%',
  },
  // Contact Container
  '.contact-container': {
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    transition: 'opacity 400ms ease-in-out',
    width: '90%'
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
      '.main-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
        maxWidth: '2000px',
        paddingBottom: '50px',
        width: '75%',
      },
      '.large-container': {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '90px',
        width: '90%',
        maxWidth: '2000px'
      },
      '.full-width-container': {
        marginTop: '90px',
        width: '100%'
      },
      '.contact-container': {
        height: 'auto',
        marginTop: '90px',
        maxWidth: '1000px',
        transition: 'opacity 400ms ease-in-out',
        width: '60%',
      },
      '.brochure-container': {
        left: 0,
        marginTop: '110px',
        position: 'fixed',
        top: 0,
        width: '100%'
      },
      '.neighborhood-map-container': {
        padding: '50px 0',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    },
    [desktopLarge]: {
      '.large-container': {
        marginTop: '105px',
        width: '80%'
      },
      '.main-container': {
        marginTop: '120px',
        width: '65%',
      },
      '.full-width-container': {
        marginTop: '105px',
        width: '100%'
      },
    }
  }
};

export default containers;