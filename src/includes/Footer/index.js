import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import { mediaQueries } from '../../styles/Global/MediaQueries';
import { pxToRem } from '../../helpers/Math';

const RadiumLink = Radium(Link);

class Footer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      interval: 0
    };
  }

  componentDidMount() {
    // Create interval for rotating words
    setInterval(() => this.changeBrochureWord(), 2500);
  }

  changeBrochureWord() {
    let interval;
    this.state.interval === 0 ? interval = 1 : interval = 0;
    this.setState({ interval });
  }
  
  render() {
    const { tablet, tabletLandscape, desktopSmall, desktopLarge } = mediaQueries;

    let route = window.location.pathname.replace('/', '').toLowerCase() || 'home';
    // !Object.keys(this.props.colors).includes(route) ? route = 'notfoundpage' : null;
    let { color, footerBackground } = this.props.colors[route];

    let arrowAnimation = Radium.keyframes({
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(.8)' },
      '100%': { transform: 'scale(1.3)' },
    });

    let wordAnimation = Radium.keyframes({
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
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
            animation: 'x 300ms ease 0s forwards',
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderTop: `2px solid ${color}`,
        padding: 0,
        marginTop: pxToRem(15),
        [tablet]: {
          justifyContent: 'space-around',
        },
        link: {
          fontFamily: 'Maison Neue Extended Book, sans-serif',
          fontSize: pxToRem(12),
          textTransform: 'uppercase',
          letterSpacing: pxToRem(1),
          padding: `${pxToRem(10)} 0`,
          color: color,
          height: '100%',
          width: '33%',
          lineHeight: pxToRem(30),
          [tablet]: {
            width: '20%',
            fontSize: pxToRem(16),
            padding: `${pxToRem(20)} 0`,
          },
          [tabletLandscape]: {
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
        },
        brochureWord: {
          animation: 'x 500ms ease',
          animationName: wordAnimation,
          lineHeight: pxToRem(30)
        }
      }
    };

    //getting prev and next pages
    let pages = Object.keys(this.props.pages);
    let curInd = pages.indexOf(route);
    let nextInd = (curInd + 1) === pages.length ? 0 : curInd + 1;
    let prevInd = (curInd - 1) < 0 ? pages.length - 1 : curInd - 1;
    let next = pages[nextInd];
    let previous = pages[prevInd];

    // add classes to animate arro
    const hideArrows = () => {
      if (route === 'brochure' || route === 'press' || route === 'legal' || route === 'team') {
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
                  <span key="prevspan" style={[FooterInline.btnText, FooterInline.btnText.prev]}>{this.props.pages[previous]}</span>
                </div>
              </RadiumLink>
            </div>
            
            <div style={FooterInline.topNav.right}>
              <RadiumLink className={ hideArrows() ? 'hidden' : 'animate-reveal'} key="next" to={`/${next}`}>
                <div style={{...FooterInline.btn, flexFlow: 'column-reverse nowrap'}}>
                  <span key="nextspan" style={[FooterInline.btnText, FooterInline.btnText.next]}>{this.props.pages[next]}</span>
                  <img key="nextimg" src={`/images/icons/right_${color}.svg`} alt='go to next page' style={{...FooterInline.arrow, marginLeft: 'auto'}}/>
                </div>
              </RadiumLink>
            </div>    
          </div>
        );
      }
    };

    const renderBrochureWord = () => {
      if (this.state.interval) {
        return <span key='english' style={FooterInline.nav.brochureWord}>Brochure</span>;
      } else {
        return <span key='chinese' style={FooterInline.nav.brochureWord}>宣传册</span>;
      }
    };

    return (
      <footer style={FooterInline.wrapper}>
        {renderArrows()}
        <div style={FooterInline.nav}>
          <RadiumLink 
            style={[FooterInline.nav.link, {textDecoration: route === 'brochure' ? 'underline' : null}]} 
            to={`/brochure`}
          >
            {renderBrochureWord()}
          </RadiumLink>
          <RadiumLink 
            style={[FooterInline.nav.link, {textDecoration: route === 'press' ? 'underline' : null}]} 
            to={`/press`}
          >
            Press
          </RadiumLink>
          <RadiumLink 
            style={[FooterInline.nav.link, {textDecoration: route === 'team' ? 'underline' : null}]} 
            to={`/team`}
          >
            Team
          </RadiumLink>
          <RadiumLink 
            style={[FooterInline.nav.link, {textDecoration: route === 'legal' ? 'underline' : null}]} 
            to={`/legal`}
          >
            Legal
          </RadiumLink>
          <a 
            style={[FooterInline.nav.link, ]} 
            href="https://www.instagram.com/25parkrownyc" 
            rel='noreferrer noopener' 
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </footer>
    );
  }
}

export default Radium(Footer);