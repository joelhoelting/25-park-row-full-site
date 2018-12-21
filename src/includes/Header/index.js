import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Link } from 'react-router-dom';
import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';

import MainLogo from './MainLogo';

const RadiumLink = Radium(Link);

class Header extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      mobileMenuActive: false,
      lastScrollPosition: 0,
      scrollDown: false,
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
    // Listen for scroll and determine whether user scrolls up or down
    window.addEventListener('scroll', () => this.scrollDirection());
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    window.removeEventListener('scroll');
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
      document.body.style.overflow = 'hidden';
    } else {
      this.setState({ mobileMenuActive: false});
      document.body.style.overflow = 'initial';
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

  scrollDirection() {
    let currentScrollPosition = window.scrollY || window.scrollTop || 0;
    if (this.state.lastScrollPosition < currentScrollPosition && currentScrollPosition > 50) {
      this.setState({ lastScrollPosition: currentScrollPosition, scrollDown: true });
    } else {
      this.setState({ lastScrollPosition: currentScrollPosition, scrollDown: false });
    }
  }

  render() {
    // Get Current Route
    let route = window.location.pathname.replace('/', '').toLowerCase() || 'home';
    // !Object.keys(this.props.colors).includes(route) ? route = 'notfoundpage' : null;
    
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
          height: '60px',
          maxHeight: !this.state.scrollDown ? '60px' : '40px',
          position: 'relative',
          backgroundColor: backgroundColor,
          transition: 'background-color 500ms ease-in-out, max-height 100ms linear',
          [mediaQueries.desktopSmall]: {
            height: rem(60),
            maxHeight: 'none',
            alignItems: 'center',
          },
          arrowBox: {
            height: '100%',
            width: '20%',
            display: 'flex',
            alignItems: 'center',
            left: {
              justifyContent: 'flex-start',
              paddingLeft: rem(15),
              [mediaQueries.desktopSmall]: {
                paddingLeft: rem(30),
              }
            },
            right: {
              justifyContent: 'flex-end',
              paddingRight: rem(15),
              [mediaQueries.desktopSmall]: {
                paddingRight: rem(30),
              }
            },
            arrow: {
              backgroundColor: 'transparent',
              border: 0,
              boxShadow: 'none',
              padding: 0,
              width: rem(26),
              height: rem(26),
              outline: 'none',
              [mediaQueries.desktopSmall]: {
                width: rem(30),
                height: rem(30),
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
            fontSize: '16px',
            [mediaQueries.phone]: {
              fontSize: '18px'
            },
            logo: {
              width: '200px',
              [mediaQueries.tablet]: {
                width: '250px'
              },
              [mediaQueries.desktopSmall]: {
                width: '300px'
              },
              [mediaQueries.desktopLarge]: {
                width: '350px'
              },
              margin: `${rem(3)} 0`,
              [mediaQueries.desktopSmall]: {
                margin: 0
              }
            },
            mobileLogo: {
              color,
              position: 'relative',
              transform: 'translateY(6px)',
            },
            currentPage: {
              color,
              position: 'relative',
              transform: !this.state.scrollDown ? 'translateY(2px)' : 'translateY(0)',
              opacity: !this.state.scrollDown ? 1 : 0
            }
          }
        },
        mobileHamburger: {
          border: 'none',
          borderRadius: 0,
          background: 'transparent',
          left: '50%',
          width: '35px',
          height: '60px',
          position: 'fixed',
          top: !this.state.scrollDown ? '60px' : '40px',
          transform: 'translateX(-50%)',
          padding: `${rem(2)} 0`,
          zIndex: 100,
          transition: 'top 100ms linear',
          lines: {
            background: this.state.mobileMenuActive ? '#000' : color, 
            position: 'absolute',
            height: rem(2), 
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
            opacity: this.state.scrollDown ? 0 : 1,
          }
        },
        bottomNavWrapper: {
          width: '100%',
          backgroundColor: backgroundColor,
          transition: 'background-color 500ms ease-in-out, max-height 300ms ease',
          height: rem(30),
          maxHeight: this.state.scrollDown ? '0' : rem(30),
          bottomNav: {
            width: 'calc(79.5% - 16px)',
            display: 'inline-flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            height: rem(30),
            maxHeight: this.state.scrollDown ? '0' : rem(30),
            opacity: this.state.scrollDown ? 0 : 1,
            margin: 'none',
            zIndex: 10,
            transition: this.state.scrollDown ? 'max-height 300ms ease, opacity 200ms ease' : 'max-height 300ms ease, opacity 300ms ease 200ms',
            '@media (max-width: 1199px)': {
              width: '100%',
              position: 'fixed',
              left: 0,
              opacity: 1,
              flexFlow: 'column wrap',
              height: '100%',
              maxHeight: this.state.mobileMenuActive ? '100%' : '0%',
              justifyContent: 'center',
              backgroundColor: '#787A62',
              padding: `${rem(5)} ${rem(15)}`,
              top: 0,
              transition: this.state.mobileMenuActive ? 'max-height 300ms ease 100ms' : 'max-height 300ms ease 200ms',
              zIndex: -1
            },
            subNav: {
              position: 'absolute',
              bottom: rem(10),
              display: 'flex',
              width: '100%',
              justifyContent: 'space-around',
              listStyleType: 'none',
              padding: 0,
              opacity: this.state.mobileMenuActive ? 1 : 0,
              transition: this.state.mobileMenuActive ? 'opacity 800ms ease 600ms' : 'opacity 200ms ease',
              subNavItem: {
                fontFamily: 'Maison Neue Extended Book, sans-serif',
                fontSize: rem(10),
                letterSpacing: rem(1),
                textTransform: 'uppercase',
                color: '#000',
                [mediaQueries.phone]: {
                  fontSize: rem(12)
                }
              }
            }
          }
        },
        item: {
          fontFamily: 'Maison Neue Extended Book, sans-serif',
          fontSize: rem(12),
          letterSpacing: rem(1),
          textTransform: 'uppercase',
          margin: `${rem(10)} 0`,
          transition: 'color 500ms ease',
          [mediaQueries.phone]: {
            fontSize: rem(16),
          },
          [mediaQueries.tablet]: {
            fontSize: rem(22),
            margin: `${rem(15)} 0`,
          },
          [mediaQueries.desktopSmall]: {
            fontSize: rem(12),
            margin: `0 ${rem(15)}`
          },
          [mediaQueries.desktop]: {
            fontSize: rem(12),
            paddingTop: rem(2),
            margin: `0 ${rem(15)}`,
          },
          [mediaQueries.desktopLarge]: {
            fontSize: rem(14),
            margin: `0 ${rem(20)}`
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
      if (route === 'brochure' || route === 'press' || route === 'legal') {
        return true;
      } else {
        return false;
      }
    };

    // Function to render header logo
    const renderLogo = () => {
      if (this.props.width > 1200) {
        return (
          <RadiumLink key="-1" to="/" onClick={() => this.closeMobileMenu()}>
            <div style={logoDiv.logo}>
              <MainLogo fill={color} />
            </div>
          </RadiumLink>
        );
      } else {
        return (
          <React.Fragment>
            <RadiumLink key="-1" to="/" onClick={() => this.closeMobileMenu()}>
              <h3 className='no-margin' style={logoDiv.mobileLogo}>25 Park Row</h3>
            </RadiumLink>
            <h3 className='no-margin' style={logoDiv.currentPage} >{route}</h3>
          </React.Fragment>
        );
      }
    };

    // Function to render nav based on screen width
    const renderNavigation = () => {
      if (this.props.width > 1200) {
        return (
          <React.Fragment>
            <div style={bottomNavWrapper}>
              <div style={bottomNavWrapper.bottomNav} ref={this.bottomNav}>
                {Object.keys(this.props.pages).map((page, key) => {
                  if ((page !== 'information') && (page !== 'press') && (page !== 'legal')) {
                    return (
                      <RadiumLink id={`link-${page}`} key={key} data-page={page} to={`/${page}`}>
                        <div 
                          style={page === route ? [{ color: sliderActiveColor}, item] : [{color}, item] }
                        >
                          {this.props.pages[page]}
                        </div>
                      </RadiumLink>
                    );
                  }
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
                if ((page !== 'information') && (page !== 'press') && (page !== 'legal')) {
                  return (
                    <RadiumLink className='mobile-nav-link' 
                      key={key}  
                      to={`/${page}`} 
                      onClick={() => this.closeMobileMenu()}
                    >
                      <div style={[{ textDecoration: route === page ? 'underline' : 'none', color: '#000' }, item]}>
                        {this.props.pages[page]}
                      </div>
                    </RadiumLink>
                  );
                }
              })}
              <ul style={bottomNavWrapper.bottomNav.subNav}>
                {Object.keys(this.props.subPages).map((subPage, key) => {
                  return (
                    <RadiumLink
                      key={key + 8}
                      to={`/${subPage}`}
                      onClick={() => this.closeMobileMenu()}
                    >
                      <li style={bottomNavWrapper.bottomNav.subNav.subNavItem}>{this.props.subPages[subPage]}</li>
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
      <header style={wrapper}>
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
            {renderLogo()}
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