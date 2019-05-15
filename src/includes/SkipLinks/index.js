import React from 'react';
import Radium, { Style } from 'radium';
import { globalMediaQueries } from 'styles/Global/MediaQueries';

// CSS styles for mobile nav (style tag)
const SkipLinkCSS = {
  '#skip-links a': {
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    left: '-999px',
    position: 'absolute',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    zIndex: '-999'
  },
  '#skip-links a:focus, #skip-links a:active': {
    color: '#fff',
    backgroundColor: '#000',
    left: 0,
    top: 0,
    width: '30%',
    height: 'auto',
    overflow: 'auto',
    padding: '5px',
    border: '4px solid #C5C9AF',
    textAlign: 'center',
    fontSize: '1.2em',
    zIndex: '999'
  },
  '#skip-links a.desktop': {
    display: 'none'
  },
  mediaQueries: {
    [globalMediaQueries.desktop]: {
      '#skip-links a.desktop': {
        display: 'initial'
      }
    }
  }
};

const SkipLinks = () => {
  return (
    <React.Fragment>
      <Style rules={SkipLinkCSS} />
      <div id="skip-links">
        <a href="/accessibility-statement">
          Park Row 23 Owners LLC, is committed to providing a website that is accessible to the widest possible
          audience, regardless of technology or ability. We aim to comply with all applicable standards. If you
          experience any difficulty in accessing any part of this website, please contact us by emailing
          info@25parkrow.com or calling us at 646-933-4625. Link to accessibility statement.
        </a>
        <a className="desktop" href="#header-navigation">
          Skip to navigation
        </a>
        <a href="#main-content">Skip to main content</a>
        <a className="desktop" href="#footer-navigation">
          Skip to footer
        </a>
      </div>
    </React.Fragment>
  );
};

export default Radium(SkipLinks);
