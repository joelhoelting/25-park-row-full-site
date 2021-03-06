import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const TeamSection = props => {
  const { company, role, blurb, mobileHeight } = props.teamDetails;

  const TeamSectionInline = {
    main: {
      height: mobileHeight.total,
      maxHeight: props.categoryActive ? `${mobileHeight.total}px` : '250px',
      transition: 'max-height 400ms ease',
      [mediaQueries.tablet]: {
        height: '650px',
        maxHeight: props.categoryActive ? '650px' : '300px'
      },
      primary: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${mobileHeight.top}px`,
        [mediaQueries.tablet]: {
          height: '300px'
        },
        company: {
          maxWidth: '90%'
        },
        role: {
          marginTop: '5px',
          textTransform: 'uppercase',
          fontSize: pxToRem(12),
          margin: `${pxToRem(4)} 0`,
          letterSpacing: pxToRem(4),
          [mediaQueries.phoneLarge]: {
            fontSize: pxToRem(14)
          },
          [mediaQueries.tablet]: {
            fontSize: pxToRem(16)
          }
        },
        plus: {
          transition: 'transform 200ms ease',
          transform: props.categoryActive ? 'rotate(45deg)' : 'rotate(0)'
        }
      },
      secondary: {
        position: 'relative',
        bottom: '50px',
        height: props.categoryActive ? `${mobileHeight.bottom}px` : 0,
        display: 'flex',
        alignItems: 'center',
        transition: props.categoryActive
          ? 'opacity 400ms ease 200ms'
          : 'opacity 75ms ease',
        visibility: props.categoryActive ? 'visible' : 'hidden',
        opacity: props.categoryActive ? 1 : 0,
        width: '85%',
        margin: '0 auto',
        [mediaQueries.tablet]: {
          height: props.categoryActive ? '350px' : 0,
          alignItems: 'flex-start',
          width: '65%'
        },
        blurb: {
          fontSize: pxToRem(12),
          lineHeight: '1.2rem',
          [mediaQueries.tablet]: {
            fontSize: pxToRem(14)
          }
        }
      }
    }
  };

  const { main } = TeamSectionInline;
  return (
    <div style={main}>
      <div style={main.primary}>
        <h3
          style={main.primary.company}
          className="text-center no-margin display-linebreak"
        >
          {company}
        </h3>
        <p style={main.primary.role}>{role}</p>
        <img
          alt={`Expand section for ${company}`}
          src="/images/icons/close_plus.svg"
          style={main.primary.plus}
        />
      </div>
      <div style={main.secondary}>
        <p style={main.secondary.blurb}>{blurb}</p>
      </div>
    </div>
  );
};

export default Radium(TeamSection);
