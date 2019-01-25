import { mediaQueries } from './MediaQueries';
import { globalMediaQueries } from './MediaQueries';

// React flex grid uses pixels
export const columnMargin = {
  marginBottom: '8px',
  [mediaQueries.tabletLandscape]: {
    marginBottom: '16px',
  }
};

export const rowMargin = {
  margin: '16px -8px',
  [mediaQueries.tabletLandscape]: {
    margin: '32px -8px',
  }
};

// Global export for App.js
const grid = {
  // Home Page Columns
  '.home-column-text': {
    margin: '4px 0 8px 0'
  },
  '.home-column-img': {
    margin: '8px 0 4px 0'
  },
  // Columns
  '.column-margin': {
    margin: '8px 0'
  },
  // Rows
  '.row-margin': {
    margin: '8px -8px'
  },
  '.row-extra-margin-top-mobile': {
    marginTop: '32px'
  },
  '.row-extra-margin-desktop': {
    margin: '0 -8px'
  },
  '.row-extra-margin-desktop-1': {
    margin: '0 -8px'
  },
  '.row-extra-margin-desktop-2': {
    margin: '0 -8px'
  },
  '.row-extra-margin-desktop-3': {
    margin: '0 -8px'
  },
  '.row-extra-margin-desktop-4': {
    margin: '0 -8px'
  },
  '.row-extra-margin-desktop-5': {
    margin: '0 -8px'
  },
  '.row-extra-margin': {
    margin: '16px -8px'
  },
  '.row-extra-margin-1': {
    margin: '32px -8px'
  },
  '.row-extra-margin-2': {
    margin: '48px -8px'
  },
  '.row-extra-margin-3': {
    margin: '64px -8px'
  },
  '.row-extra-margin-4': {
    margin: '80px -8px'
  },
  '.row-extra-margin-5': {
    margin: '96px -8px'
  },
  mediaQueries: {
    [globalMediaQueries.tablet]: {
      '.row-extra-padding-desktop-3': {
        padding: '64px 0'
      }
    },
    [globalMediaQueries.desktopSmall]: {
      // Home Page Columns
      '.home-column-text': {
        margin: '8px 0'
      },
      '.home-column-img': {
        margin: '8px 0'
      },
      // Columns,
      '.column-margin': {
        margin: '8px 0'
      },
      // Rows
      '.row-extra-margin-top-mobile': {
        marginTop: 'none'
      },
      '.row-extra-margin-desktop': {
        margin: '16px -8px'
      },
      '.row-extra-margin-desktop-1': {
        margin: '32px -8px'
      },
      '.row-extra-margin-desktop-2': {
        margin: '48px -8px'
      },
      '.row-extra-margin-desktop-3': {
        margin: '64px -8px'
      },
      '.row-extra-margin-desktop-4': {
        margin: '80px -8px'
      },
      '.row-extra-margin-desktop-5': {
        margin: '96px -8px'
      },
      '.row-extra-padding-desktop-3': {
        padding: '96px 0'
      }
    }
  }
};

export default grid;