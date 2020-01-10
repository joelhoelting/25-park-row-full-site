import React from 'react';
import Radium from 'radium';
import { mediaQueries } from 'styles/Global/MediaQueries';
import gaTracker from 'utils/gaTracker';

const AccessibilityInline = {
  wrapper: {
    textAlign: 'center',
    width: '90%',
    h3: {
      marginTop: '5em',
      [mediaQueries.tablet]: {
        marginTop: '10em'
      },
    },
    p: {
      maxWidth: '1200px',
      textAlign: 'left',
      margin: '0 auto',
      fontSize: '.8rem',
      [mediaQueries.tablet]: {
        fontSize: '1.2rem',
      }
    }
  }
};

const Accessibility = () => {
  const { wrapper } = AccessibilityInline;
  return (
    <div style={wrapper} className="main-container">
      <h3 style={wrapper.h3}>25 PARK ROW ACCESSIBILITY STATEMENT</h3>
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

export default gaTracker(Radium(Accessibility));
