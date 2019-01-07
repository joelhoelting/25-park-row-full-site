import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import { mediaQueries } from '../../styles/Global/MediaQueries';
import { pxToRem } from '../../helpers/Math';

const RadiumLink = Radium(Link);

const Footer = (props) => {
  const { tablet, tabletLandscape, desktopSmall, desktopLarge } = mediaQueries;

  let route = window.location.pathname.replace('/', '').toLowerCase() || 'home';
  // !Object.keys(props.colors).includes(route) ? route = 'notfoundpage' : null;
  let { color, footerBackground } = props.colors[route];

  var arrowAnimation = Radium.keyframes({
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(.8)' },
    '100%': { transform: 'scale(1.3)' },
  });

  const FooterInline = { 
    wrapper: {
      textAlign: 'center',
      width: '100%',
      height: 'auto',
      padding: route !== 'home' ? `${pxToRem(100)} ${pxToRem(15)} 0` : `0 ${pxToRem(15)}`,
      background: footerBackground ? footerBackground : 'none',
      [tabletLandscape]: {
        padding: `0 ${pxToRem(30)}`,
      }
    },
    topNav: {
      display: 'flex',
      flexFlow: 'row nowrap',
      width: '100%',
      height: pxToRem(30),
      [tabletLandscape]: {
        height: pxToRem(50),
        margin: `${pxToRem(40)} 0`
      },
      left: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '50%'
      },
      right: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%'
      }
    },
    btn: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      [tabletLandscape]: {
        flexFlow: 'row nowrap',
      }
    },
    arrow: {
      width: pxToRem(26),
      height: pxToRem(26),
      display: 'block',
      [desktopSmall]: {
        display: 'inline',
        width: pxToRem(30),
        height: pxToRem(30),
        ':hover': {
          // Use a placeholder animation name in `animation`
          animation: 'x 300ms ease 0s forwards',
          // Assign the result of `keyframes` to `animationName`
          animationName: arrowAnimation,
        }
      }
    },
    btnText: {
      fontFamily: 'Maison Neue Extended Book, sans-serif',
      fontWeight: 300,
      fontSize: pxToRem(12),
      color: `${color}`,
      textTransform: 'uppercase',
      letterSpacing: pxToRem(1.5), 
      lineHeight: pxToRem(20),
      display: 'block',
      width: '100%',
      prev: {
        margin: `${pxToRem(10)} 0`,
        [tabletLandscape]: {
          margin: `0 0 0 ${pxToRem(30)}`
        }
      },
      next: {
        margin: `${pxToRem(10)} 0`,
        [tabletLandscape]: {
          margin: `0 ${pxToRem(30)} 0 0`
        }
      },
      [tablet]: {
        display: 'inline',
        fontSize: pxToRem(12.5),
        lineHeight: pxToRem(16)
      }
    },
    nav: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      borderTop: `2px solid ${color}`,
      padding: 0,
      marginTop: pxToRem(15),
      link: {
        fontFamily: 'Maison Neue Extended Book, sans-serif',
        fontSize: pxToRem(12),
        textTransform: 'uppercase',
        letterSpacing: pxToRem(1),
        padding: `${pxToRem(20)} 0`,
        color: color,
        height: '100%',
        [tablet]: {
          fontSize: pxToRem(16),
          padding: `${pxToRem(20)} 0`,
        },
        [tabletLandscape]: {
          width: '25%',
          ':hover': {
            textDecoration: 'underline',
          }
        },
        [desktopSmall]: {
          padding: `${pxToRem(40)} ${pxToRem(30)}`,
          fontSize: pxToRem(12)
        },
        [desktopLarge]: {
          fontSize: pxToRem(14)
        }
      }
    }
  };

  //getting prev and next pages
  let pages = Object.keys(props.pages);
  let curInd = pages.indexOf(route);
  let nextInd = (curInd + 1) === pages.length ? 0 : curInd + 1;
  let prevInd = (curInd - 1) < 0 ? pages.length - 1 : curInd - 1;
  let next = pages[nextInd];
  let previous = pages[prevInd];

  // add classes to animate arro
  const hideArrows = () => {
    if (route === 'brochure' || route === 'press' || route === 'legal') {
      return true;
    } else {
      return false;
    }
  };

  // Function to render prev and next arrows
  const renderArrows = () => {
    if (route !== 'home' && route !== 'brochure' && route !== 'press' && route !== 'legal' ) {
      return (
        <div style={FooterInline.topNav}>
          <div style={FooterInline.topNav.left}>
            <RadiumLink className={ hideArrows() ? 'hidden' : 'animate-reveal'} key="prev" to={`/${previous}`}>
              <div style={FooterInline.btn}>
                <img key="previmg" src={`/images/icons/left_${color}.svg`} alt='go to previous page' style={{...FooterInline.arrow, marginRight: 'auto'}}/>
                <span key="prevspan" style={[FooterInline.btnText, FooterInline.btnText.prev]}>{props.pages[previous]}</span>
              </div>
            </RadiumLink>
          </div>
          
          <div style={FooterInline.topNav.right}>
            <RadiumLink className={ hideArrows() ? 'hidden' : 'animate-reveal'} key="next" to={`/${next}`}>
              <div style={{...FooterInline.btn, flexFlow: 'column-reverse nowrap'}}>
                <span key="nextspan" style={[FooterInline.btnText, FooterInline.btnText.next]}>{props.pages[next]}</span>
                <img key="nextimg" src={`/images/icons/right_${color}.svg`} alt='go to next page' style={{...FooterInline.arrow, marginLeft: 'auto'}}/>
              </div>
            </RadiumLink>
          </div>    
        </div>
      );
    }
  };

  return (
    <footer style={FooterInline.wrapper}>
      {renderArrows()}
      <div style={FooterInline.nav}>
        <RadiumLink style={FooterInline.nav.link} to={`/brochure`}>
          Brochure
        </RadiumLink>
        <RadiumLink style={FooterInline.nav.link} to={`/press`}>
          Press
        </RadiumLink>
        <RadiumLink style={FooterInline.nav.link} to={`/legal`}>
          Legal
        </RadiumLink>
        <a style={FooterInline.nav.link} href="https://www.instagram.com/25parkrownyc" rel='noreferrer noopener' target="_blank">Instagram</a>
      </div>
    </footer>
  );
};

export default Radium(Footer);