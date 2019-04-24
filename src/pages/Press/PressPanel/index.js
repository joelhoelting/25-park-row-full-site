import React from 'react';
import Radium from 'radium';

import PressArrow from './PressArrow';
import { mediaQueries } from 'styles/Global/MediaQueries';
import { truncateText } from 'helpers/Text';
import { pxToRem } from 'helpers/Math';

const PressPanel = props => {
  let { publisher, title, body, date, url, panelNumber, mounted } = props;

  let day, month, year;

  if (!props.fetchedData) {
    day = date.getDate() + 1;
    month = date.getMonth() + 1;
    year = date.getFullYear();
  } else {
    let dateAry = date.split('T')[0].split('-');
    day = dateAry[2];
    month = dateAry[1];
    year = dateAry[0];
  }

  let fullDate = `${month}.${day}.${year}`;

  const PressPanelInline = {
    main: {
      border: '2px solid #000',
      padding: `${pxToRem(8)} ${pxToRem(30)}`,
      margin: `${pxToRem(8)} 0`,
      position: 'relative',
      cursor: 'pointer',
      height: 'auto',
      [mediaQueries.desktopSmall]: {
        height: '275px'
      },
      [mediaQueries.desktop]: {
        height: '300px'
      },
      [mediaQueries.desktopLarge]: {
        height: '350px'
      },
      publisher: {
        margin: '.5em 0'
      },
      title: {
        fontSize: pxToRem(12),
        margin: `${pxToRem(4)} 0`,
        letterSpacing: pxToRem(2),
        textTransform: 'uppercase',

        [mediaQueries.phoneLarge]: {
          fontSize: pxToRem(14)
        },
        [mediaQueries.tablet]: {
          fontSize: pxToRem(16),
          letterSpacing: pxToRem(4)
        },
        [mediaQueries.tabletLandscape]: {
          fontSize: pxToRem(18)
        },
        [mediaQueries.desktopSmall]: {
          maxWidth: '400px'
        },
        [mediaQueries.desktop]: {
          fontSize: pxToRem(20),
          maxWidth: '500px'
        },
        [mediaQueries.desktopLarge]: {
          maxWidth: '600px'
        }
      },
      body: {
        [mediaQueries.desktopSmall]: {
          position: 'absolute',
          top: '40%',
          width: '90%'
        },
        [mediaQueries.desktop]: {
          top: '45%'
        },
        [mediaQueries.desktopXLarge]: {
          top: '48%'
        },
        p: {
          fontSize: pxToRem(16)
        }
      },
      date: {
        [mediaQueries.desktopSmall]: {
          position: 'absolute',
          bottom: '0',
          width: '90%'
        }
      }
    }
  };
  const { main } = PressPanelInline;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div style={main} className={mounted ? `press-reveal-delay-${panelNumber} press-panel` : 'hidden'}>
        <h3 style={main.publisher}>{publisher}</h3>
        <p style={main.title}>{truncateText(title, 70)}</p>
        <div style={main.body}>
          <p style={main.body.p}>{truncateText(body, 200)}</p>
        </div>
        <div style={main.date}>
          <p>{fullDate}</p>
        </div>
        <PressArrow />
      </div>
    </a>
  );
};

export default Radium(PressPanel);
