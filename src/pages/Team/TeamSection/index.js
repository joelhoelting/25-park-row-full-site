import React from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';

const TeamSection = (props) => {
  const { company, role, blurb } = props.teamDetails;
  
  const TeamSectionInline = {
    main: {
      cursor: 'pointer',
      height: '700px',
      maxHeight: props.categoryActive ? '700px' : '400px',
      transition: 'max-height 400ms ease',
      primary: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px',
        plus: {
          transition: 'transform 200ms ease',
          transform: props.categoryActive ? 'rotate(45deg)' : 'rotate(0)'
        }
      },
      secondary: {
        position: 'relative',
        bottom: '100px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        transition: props.categoryActive ? 'all 400ms ease 200ms' : 'all 75ms ease',
        visibility: props.categoryActive ? 'visible' : 'hidden',
        opacity: props.categoryActive ? 1 : 0,
        width: '80%',
        margin: '0 auto',
        [mediaQueries.phoneLarge]: {
          width: '70%'
        }
      }
    }
  };

  const { main } = TeamSectionInline;
  
  return (
    <div style={main} onClick={() => props.activateCategory(props.category)}>
      <div style={main.primary}>
        <h3 className='text-center no-margin'>{company}</h3>
        <h4>{role}</h4>
        <img src='/images/icons/close_plus.svg' style={main.primary.plus}/>
      </div>
      <div style={main.secondary}>
        <p>{blurb}</p>
      </div>
    </div>
  );
};

export default Radium(TeamSection);