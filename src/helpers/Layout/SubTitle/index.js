import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const SubTitle = (props) => {
  const { tabletLandscape } = mediaQueries;

  const SubTitleInline = {
    main: {
      [tabletLandscape]: {
        margin: `${pxToRem(50)} 0`
      }
    }
  };

  return (
    <h3 style={SubTitleInline.main} className='text-center'>
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