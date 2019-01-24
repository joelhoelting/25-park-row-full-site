import React, { Component } from 'react';
import Radium from 'radium';
import Context from 'config/Context';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem, feetToMeters } from 'helpers/Math';

class Floorplan extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hover: false
    };
  }
  
  handleOpenOverlay(context) {
    this.props.toggleOverlay(this.props.unit);
    context.toggleVerticalScroll();
  }

  render() {
    const { phone, tablet, tabletLandscape, desktop, desktopSmall, desktopLarge } = mediaQueries;
    const styles = {
      main: {
        padding: `${pxToRem(10)} ${pxToRem(20)}`,
        [desktopSmall]: {
          margin: 0,
          padding: `${pxToRem(20)} ${pxToRem(30)}`,
          position: 'relative',
        },
        overlay: {
          display: 'none',
          [desktopSmall]: {
            display: 'block',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'pointer',
          }
        },
        titleSection: {
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          margin: `${pxToRem(20)} 0`,
          [desktopSmall]: {
            margin: 0,
            padding: `0 ${pxToRem(5)}`
          },
          hasTwoLevels: {
            fontSize: pxToRem(12)
          },
          view: {
            fontFamily: 'Maison Neue Extended Book, sans-serif',
            fontSize: pxToRem(12),
            letterSpacing: pxToRem(1),
            [phone]: {
              fontSize: pxToRem(16)
            },
            [tablet]: {
              fontSize: pxToRem(22)
            },
            [desktopSmall]: {
              fontSize: pxToRem(12)
            },
            [desktop]: {
              fontSize: pxToRem(14)
            },
            [desktopLarge]: {
              fontSize: pxToRem(14.5)
            }
          }
        },
        floorplanSection: {
          height: '300px',
          padding: `${pxToRem(10)} 0`,
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
          [tablet]: {
            padding: pxToRem(5),
          },
          subSection: {
            width: '50%',
            margin: `${pxToRem(10)} 0`,
            [tablet]: {
              margin: `${pxToRem(20)} 0`,
              width: 'auto'
            },
            p: {
              fontSize: pxToRem(12),
              [tabletLandscape]: {
                fontSize: pxToRem(14)
              }
            }
          }
        }
      }
    };

    const { main } = styles;
    
    const { bathrooms, bedrooms, hasTwoLevels, exterior, interior, isPenthouse, imgSrc, price, residence } = this.props.unit;
    
    return (
      <Context.Consumer>
        {context => (
          <div style={main} 
            className='floorplan-section'
            onClick={() => this.handleOpenOverlay(context)}
          > 
            <div 
              className='floorplan-section-overlay' 
              key='floorplan_section_overlay' 
              style={main.overlay}>
            </div>
            <div key='floorplan_section_title_section' style={main.titleSection}>
              <div>
                <p className='no-margin'>{`${isPenthouse ? 'Penthouse' : 'Residence'} ${residence}`}</p>
                { hasTwoLevels ? <p style={main.titleSection.hasTwoLevels} className='no-margin'>Main Level & Upper Level</p> : <p style={[main.titleSection.hasTwoLevels, {opacity: 0}]} className='no-margin'>Single Level</p> }
              </div>
              <h4 className='no-margin' style={main.titleSection.view}>View</h4>
            </div>
            <div key='floorplan_section_floorplan_image' style={main.floorplanSection}>
              <img
                src={`/images/floorplans/thumbnail/${imgSrc}.svg`} 
                style={main.floorplanSection.img}
                alt={`Floorplan ${residence}`}
              />
            </div>
            <div key='floorplan_section_detail_section' style={ main.detailSection }>
              <div className="bedrooms" style={main.detailSection.subSection}>
                <p className='no-margin' style={main.detailSection.subSection.p}>{`${bedrooms} Bedrooms`}</p>
                <p className='no-margin' style={main.detailSection.subSection.p}>{`${bathrooms} Bathrooms`}</p>
              </div>
              <div className="interior_sf" style={main.detailSection.subSection}>
                <p className='no-margin' style={main.detailSection.subSection.p}>Interior</p>
                <p className='no-margin' style={main.detailSection.subSection.p}>{`${interior} SF/${feetToMeters(interior)} SM`}</p>
              </div>
              { exterior && 
                <div className="exterior_sf" style={main.detailSection.subSection}>
                  <p className='no-margin' style={main.detailSection.subSection.p}>Exterior</p>
                  <p className='no-margin' style={main.detailSection.subSection.p}>{`${exterior} SF/${feetToMeters(exterior)} SM`}</p>
                </div>
              }
              <div className="price" style={main.detailSection.subSection}>
                <p className='no-margin' style={main.detailSection.subSection.p}>Price</p>
                <p className='no-margin' style={main.detailSection.subSection.p}>{`$${price}`}</p>
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
      
    );
  }
}

export default Radium(Floorplan);