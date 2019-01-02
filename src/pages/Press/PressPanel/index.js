import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';

const PressPanel = (props) => {
  let { publication, title, date, filename, panelNumber, mounted } = props;
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullYear = `${month}.${day}.${year}`;

  const PressPanelInline = {
    main: {
      border: '2px solid #000',
      padding: `${rem(8)} ${rem(30)}`,
      margin: `${rem(8)} 0`,
      position: 'relative',
      cursor: 'pointer',
      height: 'auto',
      [mediaQueries.desktopSmall]: {
        height: '200px',
      },
      [mediaQueries.desktop]: {
        height: '250px',
      },
      arrow: {
        position: 'absolute',
        right: 20,
        top: 20
      }
    }
  };
  const { main } = PressPanelInline;

  return (
    <a href={`/downloads/press/${filename}.pdf`} target='_blank' rel='noopener noreferrer'>
      <div style={main} className={mounted ? `press-reveal-delay-${panelNumber} press-panel` : 'hidden'}>
        <h3>{publication}</h3>
        <p style={{ textTransform: 'uppercase' }}>{title}</p>
        <p>{fullYear}</p>
        <svg style={main.arrow} width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>Press Arrow</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-537.000000, -26.000000)" stroke="#000000" strokeWidth="1.5">
              <g transform="translate(554.500000, 44.500000) scale(-1, 1) rotate(-180.000000) translate(-554.500000, -44.500000) translate(537.000000, 27.000000)">
                <g id="press-arrow-lines">
                  <polyline transform="translate(17.250000, 17.250000) rotate(-180.000000) translate(-17.250000, -17.250000) " points="34.5 2.77555756e-16 3.55271368e-15 2.77555756e-16 3.55271368e-15 34.5"></polyline>
                  <path d="M0,0 L33.5,33.5" transform="translate(17.000000, 17.000000) rotate(-180.000000) translate(-17.000000, -17.000000) "></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </a>
  );
};

export default Radium(PressPanel);