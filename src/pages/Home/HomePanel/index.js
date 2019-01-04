import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';

const Panel = (props) => {
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
          fontSize: rem(16),
          [phoneLarge]: {
            fontSize: rem(20)
          },
          [tablet]: {
            fontSize: rem(24)
          },
          [tabletLandscape]: {
            fontSize: rem(28)
          },
          [desktopSmall]: {
            fontSize: rem(32)
          }
        },
        icon: {
          display: 'block',
          margin: `${rem(10)} auto`,
          maxHeight: '30%',
          maxWidth: '20%',
          [tabletLandscape]: {
            maxWidth: '10%'
          }
        },
        title: {
          fontSize: rem(12),
          margin: `${rem(4)} 0`,
          letterSpacing: rem(4),
          [phoneLarge]: {
            fontSize: rem(14)
          },
          [tablet]: {
            fontSize: rem(16)
          },
          [tabletLandscape]: {
            fontSize: rem(18)
          },
          [desktopSmall]: {
            fontSize: rem(20),
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
          <h2 style={main.sub.description} className='text-center'>{props.description}</h2>
        </div>
        <img style={main.sub.icon} src={`/images/icons/${props.iconSrc}.svg`} alt={props.iconAlt} />
        <h6 style={main.sub.title} className='text-center'>{props.title}</h6>
      </div>
    </div>
  );
};

export default Radium(Panel);
