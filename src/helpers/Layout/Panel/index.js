import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const Panel = (props) => {
  const { tablet, tabletLandscape } = mediaQueries;

  const PanelInline = {
    main: {
      width: '100%',
      textAlign: props.textAlign ? props.textAlign : 'left',
      background: props.mobileBackground ? props.background : null,
      padding: props.mobileBackground ? `${pxToRem(40)} 0` : 0,
      margin: props.mobileBackground ? 0 : `${pxToRem(20)} 0 ${pxToRem(40)}`,
      [tabletLandscape]: {
        background: props.background ? props.background : null,
        padding: `${pxToRem(60)} 0`,
        margin: 0
      },
      p: {
        width: '90%',
        margin: '0 auto',
        fontSize: pxToRem(22),
        quote: {
          margin: 0
        }
      },
      mobile: {
        p: {
          width: '90%',
          margin: `0 auto ${pxToRem(20)}`,
          fontSize: pxToRem(16),
          [tablet]: {
            fontSize: pxToRem(20)
          }
        }
      }
    }
  };
  
  const { main } = PanelInline;

  return (
    <div 
      style={main} 
      ref={props.innerRef ? props.innerRef : null}
    >
      <MediaQuery minWidth={992}>
        <p style={main.p}>{props.text}</p>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <p style={main.mobile.p}>{props.mobileText}</p>
      </MediaQuery>
      {props.quote ? <p className='italic' style={main.p.quote}>{props.quote}</p> : null}
    </div>
  );
};

export default Radium(Panel);