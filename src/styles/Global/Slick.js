import { globalMediaQueries } from './MediaQueries';
import { rem } from 'helpers/Math';

const slick = {
  '.slider-dots': {
    padding: 0,
    textAlign: 'center',
    margin: `${rem(5)} 0`
  },
  '.gallery-slider': {
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  '.slick-list': {
    height: '100%',
    width: '100%'
  },
  '.slick-track': {
    height: '100%',
    width: '100%'
  },
  '.slick-slide div': {
    height: '100%',
    width: '100%'
  },
  '.gallery-img-col': {
    width: '100%',
    height: '100%'
  },
  '.gallery-img-col .large-image': {
    width: '100%',
    height: '100%'
  },
  '.gallery-img-col .large-image img': {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  '.slick-next::before': {
    content: 'none'
  },
  '.slick-prev::before': {
    content: 'none'
  },
  '.slick-next': {
    right: '-60px'
  },
  '.slick-prev': {
    left: '-60px'
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
    background: 'transparent',
    border: '1px solid #666666',
    borderRadius: '50%',
    padding: rem(5),
    margin: `0 ${rem(10)}`,
    outline: 'none',
    transition: 'background 800ms ease'
  },
  '.slider-dots li button:hover': {
    background: '#666',
    cursor: 'pointer'
  },
  '.slider-dots li.slick-active button ': {
    background: '#666'
  },
  mediaQueries: {
    [globalMediaQueries.tabletLandscape]: {
      '.slick-list': {
        // height: 'auto'
      },
      '.gallery-slider': {
        width: '90%',
        height: '90%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      '.slick-track': {
        height: '100%'
      },
      '.slick-slide': {
        height: '100%'
      },
      '.slick-slide div': {
        height: '100%'
      },
      '.slider-dots': {
        margin: `${rem(5)} 0`
      },
      '.slider-dots li button': {
        fontSize: 0,
        background: 'transparent',
        border: '1px solid #666666',
        borderRadius: '50%',
        height: rem(10),
        width: rem(10),
        margin: `0 ${rem(20)}`,
        outline: 'none',
        transition: 'background 800ms ease'
      }
    },
    [globalMediaQueries.desktopSmall]: {
      '.slick-arrow': {
        display: 'block !important'
      }
    }
  }
};

export default slick;
