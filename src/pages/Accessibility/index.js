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
    h1: {
      [mediaQueries.desktop]: {
        fontSize: '2rem'
      }
    },
    p: {
      maxWidth: '1200px',
      textAlign: 'left'
    }
  }
};

const Accessibility = () => {
  const { wrapper } = AccessibilityInline;
  return (
    <div style={wrapper}>
      <h1 style={wrapper.h1}>25 PARK ROW ACCESSIBILITY STATEMENT</h1>
      <p style={wrapper.p}>
        25 Park Row is committed to providing a website that is accessible to the widest possible audience, regardless
        of technology or ability. We aim to comply with all applicable standards, including WCAG 2.0 accessibility
        standards up to level AA.
      </p>
      <p style={wrapper.p}>
        If you experience any difficulty in accessing any part of this website, please contact us by emailing
        access@kyliecosmetics.com or calling us at 1-818-287-0639
      </p>
    </div>
  );
};

export default Radium(Accessibility);
