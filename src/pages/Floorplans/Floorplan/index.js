import React, { Component } from 'react';
import Radium from 'radium';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem, mtr } from 'helpers/Math';
import { colorVars } from 'styles/Global/Colors';

class Floorplan extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hover: false
    };
  }
  
  handleClick() {
    this.props.toggleOverlay(this.props.unit);
  }

  floorplanHoverOn() {
    if (this.props.width >= 1200) {
      this.setState({ hover: true });
    }
  }

  floorplanHoverOff() {
    if (this.props.width >= 1200) {
      this.setState({ hover: false });
    }
  }

  render() {
    
    const { phone, tablet, tabletLandscape, desktop, desktopSmall, desktopLarge } = mediaQueries;
    const styles = {
      main: {
        padding: `${rem(10)} ${rem(20)}`,
        [desktopSmall]: {
          margin: 0,
          padding: `${rem(20)} ${rem(30)}`,
          ':hover': {
            cursor: 'pointer',
            background: colorVars.floorplanBlue,
            boxShadow: '2px 2px 3px rgba(0,0,0,.2)',
          },
        },
        titleSection: {
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          margin: `${rem(20)} 0`,
          [desktopSmall]: {
            margin: 0,
            padding: `0 ${rem(20)}`,
          },
          view: {
            fontFamily: 'Maison Neue Extended Book, sans-serif',
            fontSize: rem(12),
            letterSpacing: rem(1),
            [phone]: {
              fontSize: rem(16)
            },
            [tablet]: {
              fontSize: rem(22)
            },
            [desktopSmall]: {
              fontSize: rem(12)
            },
            [desktop]: {
              fontSize: rem(14)
            },
            [desktopLarge]: {
              fontSize: rem(14.5)
            }
          }
        },
        floorplanSection: {
          height: '300px',
          padding: `${rem(10)} 0`,
          [desktopSmall]: {
            height: '400px',
          },
          [desktopLarge]: {
            height: '500px'
          },
          img: {
            height: '100%', 
            width: '100%',
            margin: '0 auto',
            display: 'block',
            [desktopSmall]: {
              width: '80%'
            },
          }
        },
        detailSection: {
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          width: '100%', 
          flexWrap: 'wrap',
          [desktopSmall]: {
            padding: `0 ${rem(5)}`
          },
          subSection: {
            width: '50%',
            margin: `${rem(10)} 0`,
            [desktopSmall]: {
              margin: `${rem(20)} 0`,
              width: 'auto'
            },
            p: {
              fontSize: rem(12),
              [tabletLandscape]: {
                fontSize: rem(14)
              }
            }
          }
        }
      }
    };

    const { main } = styles;
    const { bathrooms, bedrooms, interior, price, residence } = this.props.unit;
    
    return (
      <div style={main} 
        onClick={() => this.handleClick()}
        onMouseOver={() => this.floorplanHoverOn()}
        onMouseLeave={() => this.floorplanHoverOff()}
      >
        <div style={main.titleSection}>
          <p className='no-margin'>{`Residence ${residence}`}</p>
          <h4 className='no-margin' style={main.titleSection.view}>View</h4>
        </div>
        <div style={main.floorplanSection}>
          <img 
            src={this.state.hover ? `/images/floorplans/25PR_${residence}_hover.svg` : `/images/floorplans/25PR_${residence}_rest.svg`} 
            style={main.floorplanSection.img}
            alt={`Floorplan ${residence}`}
          />
        </div>
        <div style={ main.detailSection }>
          <div className="bedrooms" style={main.detailSection.subSection}>
            <p className='no-margin' style={main.detailSection.subSection.p}>{`${bedrooms} Bedrooms`}</p>
            <p className='no-margin' style={main.detailSection.subSection.p}>{`${bathrooms} Bathrooms`}</p>
          </div>
          <div className="interior_sf" style={main.detailSection.subSection}>
            <p className='no-margin' style={main.detailSection.subSection.p}>Interior</p>
            <p className='no-margin' style={main.detailSection.subSection.p}>{`${interior} SF/${mtr(interior)} SM`}</p>
          </div>
          <div className="exterior_sf" style={main.detailSection.subSection}>
            <p className='no-margin' style={main.detailSection.subSection.p}>Exterior</p>
            <p className='no-margin' style={main.detailSection.subSection.p}>2,276 SF/348 SM</p>
          </div>
          <div className="price" style={main.detailSection.subSection}>
            <p className='no-margin' style={main.detailSection.subSection.p}>Price</p>
            <p className='no-margin' style={main.detailSection.subSection.p}>{`$${price}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Floorplan);