import React from 'react';
import Radium from 'radium';
import { mediaQueries } from 'styles/Global/MediaQueries';

const AccessibilityInline = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '0 auto',
    width: '90%',
    fontSize: '.8rem',
    height: 'calc(100vh - 300px)',
    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
    h1: {
      fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
      [mediaQueries.desktop]: {
        fontSize: '2rem'
      }
    },
    p: {
      fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
      maxWidth: '1200px',
      textAlign: 'left',
      [mediaQueries.desktop]: {
        fontSize: '1.6rem'
      }
    }
  }
};

const Accessibility = () => {
  const { wrapper } = AccessibilityInline;
  return (
    <div style={wrapper}>
      <h1 style={wrapper.h1}>25 PARK ROW ACCESSIBILITY STATEMENT</h1>
      <p style={wrapper.p}>
        Park Row 23 Owners LLC, is committed to providing a website that is accessible to the widest possible audience,
        regardless of technology or ability. We aim to comply with all applicable standards. If you experience any
        difficulty in accessing any part of this website, please contact us by emailing info@25parkrow.com or calling us
        at 646-933-4625. Link to accessibility statement.
      </p>
    </div>
  );
};

export default Radium(Accessibility);
