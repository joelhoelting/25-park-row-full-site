import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { mediaQueries } from '../../styles/Global/MediaQueries';
import { pxToRem } from '../../helpers/Math';

// import InfoContainer from './InfoContainer';

const RadiumLink = Radium(Link);

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: 0,
      infoContainerActive: false
    };
  }

  componentDidMount() {
    // Create interval for rotating words
    setInterval(() => this.changeBrochureWord(), 2500);
  }

  changeBrochureWord() {
    let interval;
    this.state.interval === 0 ? (interval = 1) : (interval = 0);
    this.setState({ interval });
  }

  openInfoContainer() {
    let newStatus = !this.state.infoContainerActive;
    this.setState({ infoContainerActive: newStatus });

    if (newStatus) {
      var body = document.body;
      var html = document.documentElement;
      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      $('html, body').animate(
        {
          scrollTop: height + 'px'
        },
        400
      );
    }
  }

  render() {
    const { tablet, tabletLandscape, desktopSmall, desktopLarge } = mediaQueries;
    let route = window.location.pathname.replace('/', '').toLowerCase() || 'home';
    // !Object.keys(this.props.colors).includes(route) ? route = 'notfoundpage' : null;
    if (!Object.keys(this.props.colors).includes(route)) {
      route = 'notfoundpage';
    }

    let { color, footerBackground } = this.props.colors[route];

    let illustrations = {
      architecture: 'flower1',
      interiors: 'butterfly',
      amenities: 'bee',
      views: 'flower2',
      neighborhood: 'flower3'
    };

    let arrowAnimation = Radium.keyframes({
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(.8)' },
      '100%': { transform: 'scale(1.3)' }
    });

    let wordAnimation = Radium.keyframes({
      '0%': { opacity: 0 },
      '100%': { opacity: 1 }
    });

    const FooterInline = {
      wrapper: {
        textAlign: 'center',
        width: '100%',
        height: 'auto',
        padding: `0 ${pxToRem(15)}`,
        background: footerBackground ? footerBackground : 'none',
        [tabletLandscape]: {
          padding: `0 ${pxToRem(30)}`
        }
      },
      illustrationDiv: {
        height: pxToRem(200),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [tablet]: {
          height: pxToRem(200)
        },
        illustration: {
          position: 'relative',
          top: pxToRem(80),
          height: '100%',
          maxHeight: pxToRem(150),
          [desktopSmall]: {
            position: 'relative',
            top: pxToRem(50),
            maxHeight: pxToRem(200)
          },
          [desktopLarge]: {
            maxHeight: pxToRem(200)
          }
        }
      },
      topNav: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: pxToRem(20),
        paddingTop: !illustrations[route] ? pxToRem(50) : 0,
        [tabletLandscape]: {
          marginBottom: pxToRem(50)
        },
        left: {
          display: 'flex',
          alignItems: 'flex-end'
        },
        right: {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }
      },
      btn: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [tabletLandscape]: {
          flexFlow: 'row nowrap'
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
            animationName: arrowAnimation
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
          fontSize: pxToRem(16),
          lineHeight: pxToRem(16)
        },
        [desktopSmall]: {
          fontSize: pxToRem(16)
        },
        [desktopLarge]: {
          fontSize: pxToRem(18)
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
        [tablet]: {
          justifyContent: 'space-around'
        },
        link: {
          fontFamily: 'Maison Neue Extended Book, sans-serif',
          fontSize: pxToRem(12),
          textTransform: 'uppercase',
          letterSpacing: pxToRem(2),
          padding: `${pxToRem(5)} 0`,
          color: color,
          height: '100%',
          width: '33%',
          lineHeight: pxToRem(30),
          accessibility: {
            width: '100%',
            lineHeight: pxToRem(20)
          },
          [tablet]: {
            width: '16.6666%',
            fontSize: pxToRem(14),
            padding: `${pxToRem(20)} 0`
          },
          [tabletLandscape]: {
            ':hover': {
              textDecoration: 'underline'
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
    let nextInd = curInd + 1 === pages.length ? 0 : curInd + 1;
    let prevInd = curInd - 1 < 0 ? pages.length - 1 : curInd - 1;
    let next = pages[nextInd];
    let previous = pages[prevInd];

    const renderIllustration = () => {
      if (illustrations[route]) {
        return (
          <div style={FooterInline.illustrationDiv}>
            <img
              alt={`illustration for end of ${illustrations[route]} page`}
              src={`/images/icons/illustration/${illustrations[route]}.svg`}
              style={FooterInline.illustrationDiv.illustration}
            />
          </div>
        );
      }
    };

    // add classes to animate arro
    const hideArrows = () => {
      const hiddenRoutes = ['brochure', 'press', 'legal', 'team', 'accessibility-statement'];
      if (hiddenRoutes.includes(route)) {
        return true;
      } else {
        return false;
      }
    };

    // Function to render prev and next arrows
    const renderArrows = () => {
      if (route !== 'home' && route !== 'brochure' && route !== 'press' && route !== 'legal') {
        return (
          <div style={FooterInline.topNav}>
            <div style={FooterInline.topNav.left}>
              <RadiumLink className={hideArrows() ? 'hidden' : 'animate-reveal'} key="prev" to={`/${previous}`}>
                <div style={FooterInline.btn}>
                  <img
                    key="previmg"
                    src={`/images/icons/left_${color}.svg`}
                    alt="go to previous page"
                    style={{ ...FooterInline.arrow, marginRight: 'auto' }}
                  />
                  <span key="prevspan" style={[FooterInline.btnText, FooterInline.btnText.prev]}>
                    {this.props.pages[previous]}
                  </span>
                </div>
              </RadiumLink>
            </div>

            <div style={FooterInline.topNav.right}>
              <RadiumLink className={hideArrows() ? 'hidden' : 'animate-reveal'} key="next" to={`/${next}`}>
                <div style={{ ...FooterInline.btn, flexFlow: 'column-reverse nowrap' }}>
                  <span key="nextspan" style={[FooterInline.btnText, FooterInline.btnText.next]}>
                    {this.props.pages[next]}
                  </span>
                  <img
                    key="nextimg"
                    src={`/images/icons/right_${color}.svg`}
                    alt="go to next page"
                    style={{ ...FooterInline.arrow, marginLeft: 'auto' }}
                  />
                </div>
              </RadiumLink>
            </div>
          </div>
        );
      }
    };

    const renderBrochureWord = () => {
      if (this.state.interval) {
        return (
          <span key="english" style={FooterInline.nav.brochureWord}>
            Brochure
          </span>
        );
      } else {
        return (
          <span key="chinese" style={FooterInline.nav.brochureWord}>
            宣传册
          </span>
        );
      }
    };
    return (
      <React.Fragment>
        <footer style={FooterInline.wrapper} role="contentinfo">
          {renderIllustration()}
          {renderArrows()}
          <div id="footer-navigation" style={FooterInline.nav} role="navigation">
            <RadiumLink
              style={[FooterInline.nav.link, { textDecoration: route === 'brochure' ? 'underline' : null }]}
              to={`/brochure`}
            >
              {renderBrochureWord()}
            </RadiumLink>
            <RadiumLink
              style={[FooterInline.nav.link, { textDecoration: route === 'press' ? 'underline' : null }]}
              to={`/press`}
            >
              Press
            </RadiumLink>
            <RadiumLink
              style={[FooterInline.nav.link, { textDecoration: route === 'team' ? 'underline' : null }]}
              to={`/team`}
            >
              Team
            </RadiumLink>
            <RadiumLink
              style={[FooterInline.nav.link, { textDecoration: route === 'legal' ? 'underline' : null }]}
              to={`/legal`}
            >
              Legal
            </RadiumLink>
            <RadiumLink
              style={[
                FooterInline.nav.link,
                FooterInline.nav.link.accessibility,
                { textDecoration: route === 'accessibility-statement' ? 'underline' : null }
              ]}
              to={`/accessibility-statement`}
            >
              Accessibility Statement
            </RadiumLink>
            <a
              style={FooterInline.nav.link}
              href="https://www.instagram.com/25parkrownyc"
              rel="noreferrer noopener"
              target="_blank"
              key="instagram-link"
            >
              Instagram
            </a>
          </div>
        </footer>
        <span className="info-container-scroll-waypoint" />
      </React.Fragment>
    );
  }
}

export default Radium(Footer);
