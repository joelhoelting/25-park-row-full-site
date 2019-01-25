import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Link } from 'react-router-dom';

import { globalMediaQueries, mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const RadiumLink = Radium(Link);

class Header extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      mobileMenuActive: false,
      desktopNavPositions: {
        architecture: { position: '', width: '' },
        interiors: { position: '', width: '' },
        amenities: { position: '', width: '' },
        views: { position: '', width: '' },
        floorplans: { position: '', width: '' },
        neighborhood: { position: '', width: '' },
        team: { position: '', width: '' },
        gallery: { position: '', width: '' },
        contact: { position: '', width: '' }
      }
    };

    // Refs
    this.slidingRectangle = React.createRef();
    this.bottomNav = React.createRef();
  }

  componentDidMount() {
    // Map nav item positions when component mounts
    setTimeout(() => {
      this.mapNavSliderPositions();
    }, 300);

    // If mobile nav menu is open on resize, close it
    window.addEventListener('resize', () => this.closeMobileMenu());
    
    // Remap positions of desktop nav links when screen is resized
    // window.addEventListener('resize', () => this.mapNavSliderPositions());
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.mapNavSliderPositions();
      }, 100);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      setTimeout(() => {
        this.mapNavSliderPositions();
      }, 100);
    });
  }

  closeMobileMenu() {
    if (this.state.mobileMenuActive) {
      this.setState({ mobileMenuActive: false });
      document.body.style.overflow = 'initial';
    } else {
      return;
    }
  }

  toggleMobileMenu() {
    if (!this.state.mobileMenuActive) {
      this.setState({ mobileMenuActive: true});
    } else {
      this.setState({ mobileMenuActive: false});
    }
  }

  mapNavSliderPositions() {
    let width = this.props.width;
    if (width > 1200 && this.bottomNav.current) {
      let navigationPosition = this.bottomNav.current.getBoundingClientRect().x;
      let desktopNavPositions = {};
      this.bottomNav.current.childNodes.forEach(link => {
        // Skip animated rectangle
        if (link.nodeName === 'DIV') return;
        // Page title
        let page = link.dataset.page;
        // Left position of link
        let position = link.getBoundingClientRect().x - navigationPosition;
        // Width of link
        let width = link.getBoundingClientRect().width;
        // Create object with position and width of each link
        desktopNavPositions[page] = { position, width };
      });
      // Update state
      this.setState({ desktopNavPositions });
    }
  }

  render() {
    // Get Current Route
    let route = window.location.pathname.replace('/', '').toLowerCase() || 'home';
    // !Object.keys(this.props.colors).includes(route) ? route = 'notfoundpage' : null;
    if ( !Object.keys(this.props.colors).includes(route) ) { route = 'notfoundpage'; }
    
    // Declare/assign color variables
    let { color, backgroundColor, sliderColors } = this.props.colors[route];
    let sliderBackground = sliderColors ? sliderColors.background : 'none';
    let sliderActiveColor = sliderColors ? sliderColors.activeColor : null;

    // Keyframes animation 
    var arrowAnimation = Radium.keyframes({
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(.8)' },
      '100%': { transform: 'scale(1.3)' },
    });

    let wordAnimation = Radium.keyframes({
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    });

    // Desktop Height
    // Upper Nav: 60px, Lower Nav: 30px
    // Mobile Height
    // Upper Nav: 60px(active)/40px(inactive), Lower Nav: 100%
    const HeaderInline = { 
      wrapper: {
        textAlign: 'center',
        width: '100%',
        height: 'auto',
        position: 'fixed',
        top: 0, 
        left: 0,
        zIndex: 100,
        topNav: {
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          height: '50px',
          position: 'relative',
          backgroundColor: backgroundColor,
          transition: 'background-color 500ms ease-in-out, max-height 100ms linear',
          [mediaQueries.desktopSmall]: {
            height: '50px',
            maxHeight: 'none',
            alignItems: 'center',
          },
          [mediaQueries.desktopLarge]: {
            height: '60px'
          },
          arrowBox: {
            height: '100%',
            width: '20%',
            display: 'none',
            alignItems: 'center',
            [mediaQueries.desktopSmall]: {
              display: 'flex'
            },
            left: {
              justifyContent: 'flex-start',
              paddingLeft: pxToRem(15),
              [mediaQueries.desktopSmall]: {
                paddingLeft: pxToRem(30),
              }
            },
            right: {
              justifyContent: 'flex-end',
              paddingRight: pxToRem(15),
              [mediaQueries.desktopSmall]: {
                paddingRight: pxToRem(30),
              }
            },
            arrow: {
              backgroundColor: 'transparent',
              border: 0,
              boxShadow: 'none',
              padding: 0,
              width: pxToRem(26),
              height: pxToRem(26),
              outline: 'none',
              [mediaQueries.desktopSmall]: {
                width: pxToRem(30),
                height: pxToRem(30),
                ':hover': { 
                  cursor: 'pointer',
                  // Use a placeholder animation name in `animation`
                  animation: 'x 300ms ease 0s forwards',
                  // Assign the result of `keyframes` to `animationName`
                  animationName: arrowAnimation,
                }
              },
              img: {
                height: '100%',
                width: '100%'
              }
            },
          },
          logoDiv: {
            width: '65%',
            margin: '0 auto',
            fontSize: pxToRem(10),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateY(2px)',
            [mediaQueries.phone]: {
              width: '70%',
              fontSize: pxToRem(12),
            },
            [mediaQueries.tablet]: {
              width: '80%',
            },
            mainLogo: {
              color
            }
          }
        },
        mobileHamburger: {
          border: 'none',
          borderRadius: 0,
          background: 'transparent',
          width: '30px',
          height: '50px',
          position: 'fixed',
          top: 0,
          right: '20px',
          padding: `${pxToRem(2)} 0`,
          zIndex: 100,
          transition: 'top 100ms linear',
          lines: {
            background: color, 
            position: 'absolute',
            height: '2px', 
            left: 0, 
            display: 'block',
            width: '100%',
            transition: this.state.mobileMenuActive ? 'background 150ms ease, top 150ms ease, transform 150ms ease 150ms' : 'background 300ms ease 150ms, top 150ms ease 150ms, transform 150ms ease',
            upper: {
              top: this.state.mobileMenuActive ? '50%' : '35%',
              transform: this.state.mobileMenuActive ? 'rotate(45deg)' : 'rotate(0)',
              width: '100%',
            },
            lower: {
              top: this.state.mobileMenuActive ? '50%' : '65%',
              transform: this.state.mobileMenuActive ? 'rotate(-45deg)' : 'rotate(0)',
              width: '100%'
            }
          }
        },
        hr: {
          height: '2px',
          width: '100%',
          backgroundColor: color,
          margin: 0,
          border: 0,
          transition: 'opacity 500ms ease',
          hrDesktop: {
            opacity: 1,
          }
        },
        bottomNavWrapper: {
          width: '100%',
          backgroundColor: backgroundColor,
          transition: 'background-color 500ms ease-in-out',
          height: '30px',
          [mediaQueries.desktopLarge]: {
            height: '35px'
          },
          bottomNav: {
            width: '80%',
            maxWidth: '2000px',
            display: 'inline-flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            height: '30px',
            margin: 'none',
            zIndex: 10,
            [mediaQueries.desktopLarge]: {
              height: '35px'
            },
            '@media (max-width: 1199px)': {
              width: '100%',
              position: 'fixed',
              left: 0,
              opacity: 1,
              flexFlow: 'column wrap',
              height: '100%',
              maxHeight: this.state.mobileMenuActive ? '100%' : '0%',
              justifyContent: 'center',
              backgroundColor: '#000',
              color: '#fff',
              padding: `${pxToRem(5)} ${pxToRem(15)}`,
              top: 0,
              transition: this.state.mobileMenuActive ? 'max-height 300ms ease 100ms' : 'max-height 300ms ease 200ms',
              zIndex: -1
            },
            subNav: {
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'center',
              listStyleType: 'none',
              padding: 0,
              opacity: this.state.mobileMenuActive ? 1 : 0,
              transition: this.state.mobileMenuActive ? 'opacity 800ms ease 600ms' : 'opacity 200ms ease',
              [mediaQueries.tablet]: {
                justifyContent: 'space-around',
              },
              link: {
                width: '33.3333333%',
                padding: 0,
                [mediaQueries.tablet]: {
                  width: '20%',
                  fontSize: pxToRem(16),
                  padding: `${pxToRem(20)} 0`,
                },
                subNavItem: {
                  fontFamily: 'Maison Neue Extended Book, sans-serif',
                  fontSize: pxToRem(10),
                  letterSpacing: pxToRem(1),
                  textTransform: 'uppercase',
                  color: '#fff',
                  lineHeight: pxToRem(30),
                  brochureWord: {
                    animation: 'x 500ms ease',
                    animationName: wordAnimation,
                  },
                  [mediaQueries.phone]: {
                    fontSize: pxToRem(12)
                  }
                }
              }
            }
          }
        },
        item: {
          fontFamily: 'Maison Neue Extended Book, sans-serif',
          fontSize: pxToRem(12),
          letterSpacing: pxToRem(1),
          textTransform: 'uppercase',
          margin: `${pxToRem(10)} 0`,
          transition: 'color 500ms ease',
          [mediaQueries.phone]: {
            fontSize: pxToRem(16),
          },
          [mediaQueries.tablet]: {
            fontSize: pxToRem(22),
            margin: `${pxToRem(15)} 0`,
          },
          [mediaQueries.desktopSmall]: {
            fontSize: pxToRem(12),
            margin: `0 ${pxToRem(15)}`
          },
          [mediaQueries.desktop]: {
            fontSize: pxToRem(12),
            paddingTop: pxToRem(2),
            margin: `0 ${pxToRem(15)}`,
          },
          [mediaQueries.desktopLarge]: {
            fontSize: pxToRem(14),
            margin: `0 ${pxToRem(20)}`
          }
        }
      },
      slidingRectangle: {
        position: 'absolute',
        bottom: 0,
        height: '100%',
        zIndex: '-1',
        left: this.state.desktopNavPositions[route] ? this.state.desktopNavPositions[route].position : 0,
        width: this.state.desktopNavPositions[route] ? this.state.desktopNavPositions[route].width : null,
        backgroundColor: sliderBackground,
        transition: 'all 300ms ease'
      }
    };

    // CSS styles for mobile nav (style tag)
    const HeaderCSS = {
      // Fix for fixed element 'jumping' on Chrome
      '.mobile-nav .mobile-nav-link': {
        opacity: 0,
        transition: 'opacity 300ms linear'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(1)': {
        opacity: 1,
        transitionDelay: '100ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(2)': {
        opacity: 1,
        transitionDelay: '150ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(3)': {
        opacity: 1,
        transitionDelay: '200ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(4)': {
        opacity: 1,
        transitionDelay: '250ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(5)': {
        opacity: 1,
        transitionDelay: '300ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(6)': {
        opacity: 1,
        transitionDelay: '350ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(7)': {
        opacity: 1,
        transitionDelay: '400ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(8)': {
        opacity: 1,
        transitionDelay: '450ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(9)': {
        opacity: 1,
        transitionDelay: '500ms'
      },
      '.mobile-nav.active .mobile-nav-link:nth-child(10)': {
        opacity: 1,
        transitionDelay: '550ms'
      },
      mediaQueries: {
        [globalMediaQueries.desktopSmall]: {
          'header': {
            '-webkit-transform': 'translateZ(0)'
          },
        }
      }
    };

    // Function for updating the position, width and background color of the desktop sliding nav rectangle
    let animateRectangle = () => {
      // Hide animated rectangle (home, information, press, legal)
      if (route === 'home' || route === 'brochure' || route === 'press' || route === 'legal') {
        return;
      } else {
        return (
          <div style={HeaderInline.slidingRectangle}></div>
        );
      }
    };

    // Function to hide arrows on peripheral pages
    const hideArrows = () => {
      if (route === 'brochure' || route === 'press' || route === 'legal' || route === 'team') {
        return true;
      } else {
        return false;
      }
    };

    const renderBrochureWord = () => {
      // if (this.props.width < 1200) {
      //   if (this.state.interval) {
      //     return <span key='english' style={bottomNavWrapper.bottomNav.subNav.link.subNavItem.brochureWord}>Brochure</span>;
      //   } else {
      //     return <span key='chinese' style={bottomNavWrapper.bottomNav.subNav.link.subNavItem.brochureWord}>宣传册</span>;
      //   }
      // }
      return <span key='english' style={bottomNavWrapper.bottomNav.subNav.link.subNavItem.brochureWord}>Brochure</span>;
    };

    // Function to render nav based on screen width
    const renderNavigation = () => {
      if (this.props.width > 1200) {
        return (
          <React.Fragment>
            <div style={bottomNavWrapper}>
              <div style={bottomNavWrapper.bottomNav} ref={this.bottomNav}>
                {Object.keys(this.props.pages).map((page, key) => {
                  return (
                    <RadiumLink id={`link-${page}`} key={key} data-page={page} to={`/${page}`}>
                      <div 
                        style={page === route ? [{ color: sliderActiveColor}, item] : [{color}, item] }
                      >
                        {this.props.pages[page]}
                      </div>
                    </RadiumLink>
                  );
                })}
                {animateRectangle()}
              </div>
            </div>
            <hr style={[hr, hr.hrDesktop]}/>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div 
              onClick={ () => this.toggleMobileMenu()} 
              style={mobileHamburger}
            >
              <span style={[mobileHamburger.lines, mobileHamburger.lines.upper]}></span>
              <span style={[mobileHamburger.lines, mobileHamburger.lines.lower]}></span>
            </div>
            <nav 
              className={this.state.mobileMenuActive ? 'mobile-nav active' : 'mobile-nav'} 
              style={bottomNavWrapper.bottomNav}
            >
              {Object.keys(this.props.pages).map((page, key) => {
                return (
                  <RadiumLink className='mobile-nav-link' 
                    key={key}  
                    to={`/${page}`} 
                    onClick={() => this.closeMobileMenu()}
                  >
                    <div style={[{ textDecoration: route === page ? 'underline' : 'none', color: '#fff' }, item]}>
                      {this.props.pages[page]}
                    </div>
                  </RadiumLink>
                );
              })}
              <ul style={bottomNavWrapper.bottomNav.subNav}>
                {Object.keys(this.props.subPages).map((subPage, key) => {
                  return (
                    <RadiumLink
                      key={key + 8}
                      to={`/${subPage}`}
                      onClick={() => this.closeMobileMenu()}
                      style={bottomNavWrapper.bottomNav.subNav.link}
                    >
                      <li 
                        style={[bottomNavWrapper.bottomNav.subNav.link.subNavItem, {textDecoration: route === subPage ? 'underline' : null}]}>
                        {subPage === 'brochure' ? renderBrochureWord() : this.props.subPages[subPage]}
                      </li>
                    </RadiumLink>
                  );
                })}
              </ul>
            </nav>
          </React.Fragment>
        );
      }
    };

    // Get previous and next pages
    let pages = Object.keys(this.props.pages);
    let curInd = pages.indexOf(route);
    let nextInd = (curInd + 1) === pages.length ? 0 : curInd + 1;
    let prevInd = (curInd - 1) < 0 ? pages.length - 1 : curInd - 1;
    let next = pages[nextInd];
    let previous = pages[prevInd];

    // Style assignment destructuring
    const { wrapper } = HeaderInline;
    const { topNav, bottomNavWrapper, mobileHamburger, hr, item } = wrapper;
    const { arrowBox, logoDiv } = topNav;

    return (
      <header style={wrapper} className='header'>
        <Style rules={HeaderCSS}/>
        <div style={topNav}>
          <RadiumLink 
            className={ hideArrows() ? 'hidden' : 'animate-reveal'} key="prev" to={route === 'architecture' ? '/' : previous}
            style={[arrowBox, arrowBox.left]} 
          >
            <button 
              key='left' 
              style={arrowBox.arrow} 
              onClick={() => this.closeMobileMenu()} 
            >
              <img 
                src={`/images/icons/left_${color}.svg`} alt={route === 'architecture' ? 'go to home page' : 'go to previous page'} 
                style={arrowBox.arrow.img}
              />
            </button>
          </RadiumLink>
            
          <div style={logoDiv}>
            <RadiumLink style={{ width: '100%' }} key="-1" to="/" onClick={() => this.closeMobileMenu()}>
              <h1 className='no-margin' style={logoDiv.mainLogo}>25 Park Row</h1>
            </RadiumLink>
          </div>
          
          <RadiumLink 
            className={ hideArrows() ? 'hidden' : 'animate-reveal'} key="next" to={route === 'contact' ? '/' : next}
            style={[arrowBox, arrowBox.right]} 
          >
            <button 
              key='right' 
              style={arrowBox.arrow}
              onClick={() => this.closeMobileMenu()} 
            >
              <img 
                src={`/images/icons/right_${color}.svg`} alt='go to next page' 
                style={arrowBox.arrow.img}
              />
            </button>
          </RadiumLink>
        </div>
        
        <hr style={hr}/>
        {renderNavigation()}
      </header>
    );
  }
}
export default Radium(Header);