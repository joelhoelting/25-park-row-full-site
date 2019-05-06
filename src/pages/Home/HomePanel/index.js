import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const Panel = props => {
  const { phoneLarge, tablet, tabletLandscape, desktopSmall } = mediaQueries;

  const HomePanelInline = {
    main: {
      background: props.background,
      width: '100%',
      height: 0,
      position: 'relative',
      paddingTop: '57.80%',
      [tabletLandscape]: {
        height: '100%',
        maxHeight: '100%'
      },
      sub: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        description: {
          fontSize: pxToRem(16),
          [phoneLarge]: {
            fontSize: pxToRem(20)
          },
          [tablet]: {
            fontSize: pxToRem(24)
          },
          [tabletLandscape]: {
            fontSize: pxToRem(22)
          },
          [desktopSmall]: {
            fontSize: pxToRem(26)
          }
        },
        icon: {
          display: 'block',
          margin: `${pxToRem(10)} auto`,
          maxHeight: '30%',
          maxWidth: '20%',
          width: '100%',
          [tabletLandscape]: {
            maxWidth: '10%'
          }
        },
        title: {
          fontSize: pxToRem(12),
          margin: `${pxToRem(4)} 0`,
          letterSpacing: pxToRem(4),
          textTransform: 'uppercase',
          [phoneLarge]: {
            fontSize: pxToRem(14)
          },
          [tablet]: {
            fontSize: pxToRem(16)
          },
          [tabletLandscape]: {
            fontSize: pxToRem(18)
          },
          [desktopSmall]: {
            fontSize: pxToRem(20)
          }
        }
      }
    }
  };

  const { main } = HomePanelInline;

  return (
    <div style={main}>
      <div style={main.sub}>
        <div>
          <h2 style={main.sub.description} className="text-center">
            {props.description}
          </h2>
        </div>
        <img
          style={main.sub.icon}
          src={`/images/icons/illustration/${props.iconSrc}.svg`}
          alt={`Home page icon - ${props.iconSrc}`}
        />
        <p style={main.sub.title} className="text-center">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default Radium(Panel);
