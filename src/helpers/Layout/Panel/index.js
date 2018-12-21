import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';

const Panel = (props) => {
  const { tabletLandscape } = mediaQueries;

  const PanelInline = {
    main: {
      width: '100%',
      textAlign: props.textAlign ? props.textAlign : 'left',
      background: props.mobileBackground ? props.background : null,
      padding: props.mobileBackground ? `${rem(10)} 0` : 0,
      [tabletLandscape]: {
        background: props.background ? props.background : null,
        padding: `${rem(60)} 0`
      },
      p: {
        width: '100%',
        [tabletLandscape]: {
          width: '50%',
          margin: '0 auto'
        }
      }
    }
  };
  
  const { main } = PanelInline;

  return (
    <div style={main} ref={props.innerRef ? props.innerRef : null}>
      <p style={main.p}>{props.text} </p>
      {props.quote ? <p className='italic'>{props.quote}</p> : null}
    </div>
  );
};

export default Radium(Panel);