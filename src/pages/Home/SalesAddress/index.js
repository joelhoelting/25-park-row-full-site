import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';

import { pxToRem } from 'helpers/Math';

const SalesAddress = () => {
  const SalesAddressInline = {
    main: {
      h3: {
        margin: `${pxToRem(10)} 0`
      }
    }
  };

  const { main } = SalesAddressInline;

  return (
    <div className='text-center' style={{ padding: '1em 0'}}>
      
      <h3 style={main.h3}>
        <MediaQuery maxWidth={413}>
          25 Park Row<br/> Sales Gallery
        </MediaQuery>
        <MediaQuery minWidth={414}>
          25 Park Row Sales Gallery
        </MediaQuery>
      </h3>
      <h3 style={main.h3}>217 Broadway, Suite 600, New York, NY 10007</h3>
    </div>
  );
};

export default Radium(SalesAddress);