import { globalMediaQueries } from './MediaQueries';
import { pxToRem } from 'helpers/Math';

const slick = {
  '.slider-dots': {
    padding: 0,
    textAlign: 'center',
    margin: `${pxToRem(5)} 0`
  },
  '.gallery-slider': {
    width: '75%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  '.slick-next::before': {
    content: 'none'
  },
  '.slick-prev::before': {
    content: 'none'
  },
  '.slick-next': {
    right: '-12%'
  },
  '.slick-prev': {
    left: '-12%'
  },
  '.slick-arrow': {
    display: 'none !important'
  },
  '.slider-dots li': {
    display: 'inline-block',
    listStyle: 'none'
  },
  '.slider-dots li button': {
    fontSize: 0,
    background: 'rgba(0,0,0,.1)',
    border: '2px solid #000',
    borderRadius: '50%',
    padding: pxToRem(5),
    margin: `0 ${pxToRem(10)}`,
    outline: 'none',
    transition: 'background 800ms ease'
  },
  '.slider-dots li button:hover': {
    background: 'rgba(0,0,0,.8)',
    cursor: 'pointer'
  },
  '.slider-dots li.slick-active button ': {
    background: 'rgba(0,0,0,.8)'
  },
  mediaQueries: {
    [globalMediaQueries.tabletLandscape]: {
      '.slider-dots': {
        margin: `${pxToRem(5)} 0`
      },
      '.slider-dots li button': {
        fontSize: 0,
        background: 'rgba(0,0,0,.2)',        
        border: '2px solid #000',
        borderRadius: '50%',
        height: pxToRem(16),
        width: pxToRem(16),
        margin: `0 ${pxToRem(20)}`,
        outline: 'none',
        transition: 'background 800ms ease'
      }
    },
    [globalMediaQueries.desktopSmall]: {
      '.slick-arrow': {
        display: 'block !important',
        borderRadius: '50%',
        padding: '20px',
      },
      '.gallery-prev-arrow': {
        position: 'relative',
        right: '4px'
      },
      '.gallery-next-arrow': {
        position: 'relative',
        left: '4px'
      },
      '.slick-arrow:hover': {
        background: 'rgba(56, 56, 56, .6)'
      }
    }
  }
};

export default slick;
