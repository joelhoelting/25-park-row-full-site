import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';

const SubTitle = (props) => {
  const { tabletLandscape } = mediaQueries;

  const SubTitleInline = {
    main: {
      [tabletLandscape]: {
        margin: `${rem(50)} 0`
      }
    }
  };

  return (
    <h3 style={SubTitleInline.main} className='text-center'>
      <MediaQuery maxDeviceWidth={991}>
        {props.mobile}
      </MediaQuery>
      <MediaQuery minDeviceWidth={992}>
        {props.desktop}
      </MediaQuery>
    </h3>
  );
};

export default Radium(SubTitle);