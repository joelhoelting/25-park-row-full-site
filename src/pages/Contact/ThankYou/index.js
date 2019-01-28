import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const ThankYou = (props) => {
  const ThankYouInline = {
    main: {
      position: 'fixed',
      top: 0, 
      left: 0,
      width: '100%',
      height: '100%',
      boxShadow: '0 0 10px 1px #787A62',
      zIndex: 30,
      transition: 'all 300ms ease',
      visibility: props.active ? 'visible' : 'hidden',
      opacity: props.active ? 1 : 0,
      halves: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center', 
        alignItems: 'center',
        height: '50%',
        width: '100%'
      },
      upper: {   
        backgroundColor: '#B6C1C0'
      },
      lower: {
        backgroundColor: '#787A62'
      },
      p: {
        fontSize: pxToRem(20),
        textAlign: 'center',
        maxWidth: '80%',        
        [mediaQueries.desktopSmall]: {
          fontSize: pxToRem(30),
        }
      }
    }
  };

  const { main } = ThankYouInline;

  return (
    <div style={main}>
      <div style={[main.halves, main.upper]}>
        <p style={main.p}>
          Thank you for your interest in 25 Park Row. 
        </p>
      </div>
      <div style={[main.halves, main.lower]}>
        <p style={main.p}>
          We look forward to introducing you to this spectacular new building this fall.
        </p>
      </div>
    </div>
  );
};

export default Radium(ThankYou);