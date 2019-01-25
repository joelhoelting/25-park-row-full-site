import { globalMediaQueries } from './MediaQueries';
import { pxToRem } from 'helpers/Math';

const captions = {
  // Image Captions
  '.caption-main-small, .caption-main-large': {
    maxHeight: '0%',
    background: 'rgba(0,0,0,.6)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    color: '#FFF',
    transition: 'max-height 200ms ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '.caption-main-small': {
    height: '20%'
  },
  '.caption-main-large': {
    height: '25%'
  },
  '.caption-main-small.active': {
    maxHeight: '20%',
  },
  '.caption-main-large.active': {
    maxHeight: '25%',
  },
  '.caption': {
    opacity: 0,
    visibility: 'hidden',
    textAlign: 'left',
    fontSize: pxToRem(8),
    textTransform: 'uppercase',
    paddingRight: '30px',
  },
  '.caption-main-small.active .caption, .caption-main-large.active .caption': {
    transition: 'all 100ms ease 100ms',
    opacity: 1,
    visibility: 'visible',
    width: '95%',
    margin: '0 auto'
  },
  '.caption-plus': {
    position: 'absolute',
    cursor: 'pointer',
    bottom: 10,
    right: 10,
    width: '26px',
    height: '26px',
    transform: 'rotate(0) scale(1)',
    zIndex: 1,
    transition: 'transform 100ms ease-in-out',
    display: 'block'
  },
  '.caption-plus.active': {
    transform: 'rotate(45deg) scale(1)',
  },
  mediaQueries: {
    [globalMediaQueries.phone]: {
      '.caption': {
        fontSize: pxToRem(10),
      }
    },
    [globalMediaQueries.phoneLarge]: {
      '.caption-main-small': {
        height: '20%'
      },
      '.caption-main-large': {
        height: '25%'
      },
      '.caption-main-small.active': {
        maxHeight: '20%',
      },
      '.caption-main-large.active': {
        maxHeight: '25%',
      },
    },
    [globalMediaQueries.tablet]: {
      '.caption-main-small': {
        height: '10%'
      },
      '.caption-main-large': {
        height: '10%'
      },
      '.caption-main-small.active': {
        maxHeight: '10%',
      },
      '.caption-main-large.active': {
        maxHeight: '10%',
      },
      '.caption': {
        fontSize: pxToRem(12),
        paddingRight: '20px',
      }
    },
    [globalMediaQueries.tabletLandscape]: {
      '.caption-main-small': {
        height: '15%'
      },
      '.caption-main-large': {
        height: '10%'
      },
      '.caption-main-small.active': {
        maxHeight: '15%',
      },
      '.caption-main-large.active': {
        maxHeight: '10%',
      },
      '.caption-plus': {
        width: '30px',
        height: '30px',
      }
    },
    [globalMediaQueries.desktopSmall]: {
      '.caption-main-small': {
        height: '20%'
      },
      '.caption-main-large': {
        height: '10%'
      },
      '.caption-main-small.active': {
        maxHeight: '20%',
      },
      '.caption-main-large.active': {
        maxHeight: '10%',
      }
    },
    [globalMediaQueries.desktop]: {
      '.caption-main-small': {
        height: '18%'
      },
      '.caption-main-large': {
        height: '10%'
      },
      '.caption-main-small.active': {
        maxHeight: '18%',
      },
      '.caption-main-large.active': {
        maxHeight: '10%',
      },
      '.caption': {
        fontSize: pxToRem(10)
      }
    },
    [globalMediaQueries.desktopLarge]: {
      '.caption-main-small': {
        height: '12%'
      },
      '.caption-main-large': {
        height: '6%'
      },
      '.caption-main-small.active': {
        maxHeight: '12%',
      },
      '.caption-main-large.active': {
        maxHeight: '6%',
      }
    }
  }
};

export default captions;