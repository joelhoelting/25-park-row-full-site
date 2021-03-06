import React from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';
import { mediaQueries } from 'styles/Global/MediaQueries';

import { pxToRem } from 'helpers/Math';

const SalesAddress = () => {
  const SalesAddressInline = {
    main: {
      h3: {
        margin: `${pxToRem(10)} 0`,
        fontFamily: 'Maison Neue Extended Book, sans-serif',
        fontSize: pxToRem(14),
        [mediaQueries.tablet]: {
          fontSize: pxToRem(18)
        },
        [mediaQueries.desktop]: {
          fontSize: pxToRem(22)
        }
      }
    }
  };

  const { main } = SalesAddressInline;

  return (
    <div className="text-center" style={{ padding: '1em 0' }}>
      <h3 style={main.h3}>
        <MediaQuery maxWidth={413}>
          25 Park Row
          <br /> Sales Gallery
        </MediaQuery>
        <MediaQuery minWidth={414}>25 Park Row Sales Gallery</MediaQuery>
      </h3>
      <h3 style={main.h3}>
        <MediaQuery maxWidth={413}>
          217 Broadway, Suite 600,
          <br /> New York, NY 10007
        </MediaQuery>
        <MediaQuery minWidth={414}>217 Broadway, Suite 600, New York, NY 10007</MediaQuery>
      </h3>
      <h3 style={main.h3}>
        <a href="mailto:info@25parkrow.com">INFO@25PARKROW.COM</a>
      </h3>
      <h3 style={main.h3}>
        <a href="tel:1-646-933-4625">646.933.4625</a>
      </h3>
    </div>
  );
};

export default Radium(SalesAddress);
