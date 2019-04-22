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
        height: '350px'
      },
      [mediaQueries.desktopLarge]: {
        height: '450px'
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
          fontSize: pxToRem(20)
        }
      },
      body: {
        [mediaQueries.desktopSmall]: {
          position: 'absolute',
          bottom: '25%',
          width: '90%'
        },
        [mediaQueries.desktopLarge]: {
          bottom: '35%'
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
        <h3>{publisher}</h3>
        <p style={main.title}>{title}</p>
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
