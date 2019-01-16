import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const SubTitle = (props) => {
  const { tabletLandscape } = mediaQueries;

  const SubTitleInline = {
    main: {
      fontSize: pxToRem(22),
      [tabletLandscape]: {
        fontSize: pxToRem(32),
        margin: `${pxToRem(50)} 0`
      }
    }
  };

  return (
    <h3 
      style={SubTitleInline.main} 
      className='text-center' 
      ref={props.innerRef ? props.innerRef : null}
    >
      <MediaQuery maxWidth={991}>
        {props.mobile}
      </MediaQuery>
      <MediaQuery minWidth={992}>
        {props.desktop}
      </MediaQuery>
    </h3>
  );
};

export default Radium(SubTitle);