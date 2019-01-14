import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const TeamSection = (props) => {
  const { company, role, blurb } = props.teamDetails;
  
  const TeamSectionInline = {
    main: {
      height: '600px',
      maxHeight: props.categoryActive ? '600px' : '300px',
      transition: 'max-height 400ms ease',
      primary: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        role: {
          textTransform: 'uppercase',
          fontSize: '90%',
        },
        plus: {
          transition: 'transform 200ms ease',
          transform: props.categoryActive ? 'rotate(45deg)' : 'rotate(0)'
        }
      },
      secondary: {
        position: 'relative',
        bottom: '50px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        transition: props.categoryActive ? 'all 400ms ease 200ms' : 'all 75ms ease',
        visibility: props.categoryActive ? 'visible' : 'hidden',
        opacity: props.categoryActive ? 1 : 0,
        width: '80%',
        margin: '0 auto',
        [mediaQueries.phoneLarge]: {
          width: '90%'
        },
        blurb: {
          fontSize: pxToRem(14)
        }
      }
    }
  };

  const { main } = TeamSectionInline;
  
  return (
    <div style={main}>
      <div style={main.primary}>
        <h3 className='text-center no-margin'>{company}</h3>
        <p style={main.primary.role}>{role}</p>
        <img 
          alt={`Expand section for ${company}`}
          src='/images/icons/close_plus.svg' 
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