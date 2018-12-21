import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import global from 'styles/Global/Global';

const ThankYou = (props) => {
  const ty = {
    tWrapper: {
      position: 'fixed',
      top: 0, 
      left: 0,
      width: '100%',
      height: '100%',
      boxShadow: '0 0 10px 1px #787A62',
      overflow: 'hidden',
      zIndex: 30,
    }, 
    halves: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '50%',
      width: '100%'
    },
    top: {   
      backgroundColor: '#E6D4AA'
    },
    bottom: {
      backgroundColor: '#787A62'
    },
    spinny: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    img: {
      width: '6em',
      height: '6em',
      transform: 'rotateZ(0deg)',
      '@media (max-width: 767px) and (orientation: landscape)': {
        width: '5.5em',
        height: '5.5em'
      },
      '@media (min-width: 1024px)': {
        width: '10.5em',
        height: '10.5em'
      }
    },
    back: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'transparent',
      boxShadow: 'none', 
      border: 'none', 
      borderRadius: 0,
      cursor: 'pointer',
      '@media (max-width: 767px) and (orientation: landscape)': {
        bottom: '10px'
      }
    }
  };

  return (
    <div style={ty.tWrapper}>
      <div style={ty.spinny}>
        <img src="/images/icons/circle_text.svg" alt="Thank you, we'll be in touch." style={ty.img}/>
      </div>
      <div style={[ty.halves, ty.top]}>
        <h2>
          Thank you<span className="mobile-br"> </span> 
          for your interest<span className="desktop-br"> </span> 
          in<span className="mobile-br"> </span> 
          25 Park Row. 
        </h2>
      </div>
      <div style={[ty.halves, ty.bottom]}>
        <h2>
          We look forward<span className="mobile-br"> </span> 
          to introducing you<span className="desktop-br"> </span>  
          to this<span className="mobile-br"> </span> 
          spectacular new building<span className="mobile-br"> </span> 
          this fall.
        </h2>
      </div>
      <button style={[ty.back, global.button]} onClick={() => { props.onBack(); }}>Back</button>
    </div>
  );
};

ThankYou.propTypes = {
  reveal: PropTypes.bool,
  onBackClick: PropTypes.func
};

export default Radium(ThankYou);