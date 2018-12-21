import { globalMediaQueries } from './MediaQueries';
import { rem } from 'helpers/Math';

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
    justifyContent: 'center',
  },
  '.caption-main-small': {
    height: '25%'
  },
  '.caption-main-large': {
    height: '25%'
  },
  '.caption-main-small.active': {
    maxHeight: '25%',
  },
  '.caption-main-large.active': {
    maxHeight: '25%',
  },
  '.caption': {
    opacity: 0,
    visibility: 'hidden',
    textAlign: 'left',
    fontSize: rem(10),
    paddingRight: '10%',
    textTransform: 'none'
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
    width: rem(26),
    height: rem(26),
    transform: 'rotate(0) scale(1)',
    zIndex: 1,
    transition: 'transform 100ms ease-in-out',
    display: 'block'
  },
  '.caption-plus.active': {
    transform: 'rotate(45deg) scale(1)',
  },
  mediaQueries: {
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
        fontSize: rem(14),
        paddingRight: rem(20),
      }
    },
    [globalMediaQueries.tabletLandscape]: {
      '.caption-main-small': {
        height: '25%'
      },
      '.caption-main-large': {
        height: '10%'
      },
      '.caption-main-small.active': {
        maxHeight: '25%',
      },
      '.caption-main-large.active': {
        maxHeight: '10%',
      },
      '.caption': {
        fontSize: rem(16),
      },
      '.caption-plus': {
        width: rem(30),
        height: rem(30),
      }
    },
    [globalMediaQueries.desktop]: {
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
      },
    }
  }
};

export default captions;