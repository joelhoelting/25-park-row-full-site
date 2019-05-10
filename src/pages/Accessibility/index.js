import React from 'react';
import Radium from 'radium';
import { mediaQueries } from 'styles/Global/MediaQueries';

const AccessibilityInline = {
  wrapper: {
    textAlign: 'center',
    width: '90%',
    h1: {
      fontSize: '1.2rem',
      marginTop: '5em',
      [mediaQueries.tablet]: {
        fontSize: '1.6rem'
      },
      [mediaQueries.desktop]: {
        fontSize: '2rem'
      }
    },
    p: {
      maxWidth: '1200px',
      textAlign: 'left',
      margin: '0 auto',
      fontSize: '.8rem',
      lineHeight: '2rem',
      [mediaQueries.tablet]: {
        fontSize: '1.2rem'
      },
      [mediaQueries.desktop]: {
        fontSize: '1.4rem'
      }
    }
  }
};

const Accessibility = () => {
  const { wrapper } = AccessibilityInline;
  return (
    <div style={wrapper} className="main-container">
      <h1 style={wrapper.h1}>25 PARK ROW ACCESSIBILITY STATEMENT</h1>
      <p style={wrapper.p}>
        Park Row 23 Owners LLC, is committed to providing a website that is accessible to the widest possible audience,
        regardless of technology or ability. We aim to comply with all applicable standards. If you experience any
        difficulty in accessing any part of this website, please contact us by emailing{' '}
        <a style={{ textDecoration: 'underline' }} href="mailto:info@25parkrow.com">
          info@25parkrow.com
        </a>{' '}
        or calling us at{' '}
        <a style={{ textDecoration: 'underline' }} href="tel:6469334625">
          646-933-4625.
        </a>
      </p>
    </div>
  );
};

export default Radium(Accessibility);
