import React, { Component } from 'react';
import Radium from 'radium';
import MediaQuery from 'react-responsive';
import Context from 'config/Context';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem, feetToMeters } from 'helpers/Math';

class FloorplanOverlay extends Component {
  constructor(props) {
    super(props);
    
    this.overlayFloorplanImg = React.createRef();
    this.lowerLevelBtn = React.createRef();
    this.upperLevelBtn = React.createRef();
  }

  handleCloseOverlay(context) {
    this.props.toggleOverlay();
    context.toggleVerticalScroll();
  }

  toggleTwoLevelImg(level) {
    let newSrc;
    if (level === 'lower') {
      newSrc = this.overlayFloorplanImg.current.src.replace('Upper', 'Lower');
      this.upperLevelBtn.current.classList.add('lighten');
      this.lowerLevelBtn.current.classList.remove('lighten');
    } else {
      newSrc = this.overlayFloorplanImg.current.src.replace('Lower', 'Upper');
      this.lowerLevelBtn.current.classList.add('lighten');
      this.upperLevelBtn.current.classList.remove('lighten');
    }
    this.overlayFloorplanImg.current.src = newSrc;
  }

  render() {
    const { totalBathrooms, bedrooms, hasTwoLevels, exterior, interior, isPenthouse, imgSrc, pdfSrc, price, residence } = this.props.unit;
    const { tablet, tabletLandscape, desktopSmall } = mediaQueries;

    const FloorplanOverlayInline = {
      main: {
        overflowY: this.props.active ? 'auto' : 'inherit',
        position: 'fixed',
        background: '#fff',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: '1000',
        boxShadow: '0 5px 15px grey',
        opacity: 0,
        transition: 'opacity 500ms ease',
        visibility: 'hidden',
        active: {
          opacity: 1,
          visibility: 'visible'
        },
        inner: {
          height: '100%',
          width: '100%',
          padding: pxToRem(30),
          detail: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            [desktopSmall]: {
              height: '5%',
              padding: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            residence: {
              fontSize: pxToRem(24),
              [tablet]: {
                fontSize: pxToRem(30)
              }
            },
            subDetail: {
              margin: `${pxToRem(5)} 0`,
              width: '50%',
              [desktopSmall]: {
                width: 'auto',
                margin: 0
              }
            },
            buttons: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              [desktopSmall]: {
                width: 'auto'
              },
              download: {
                height: '30px', 
                width: '30px',
                margin: '0 auto',
                position: 'absolute', 
                transform: 'none',
                left: 'initial',
                right: '80px', 
                top: '30px', 
                cursor: 'pointer',
                [tablet]: {
                  height: '40px', 
                  width: '40px',
                }
              },
              closeBtn: {
                height: '30px', 
                width: '30px', 
                position: 'absolute', 
                right: '20px', 
                top: '30px', 
                cursor: 'pointer',
                [tablet]: {
                  height: '40px', 
                  width: '40px'
                }
              }
            },
            twoLevelButtons: {
              margin: `${pxToRem(10)} 0`,
              height: '5%',
              twoLevelButton: {
                display: 'inline-block',
                cursor: 'pointer',
                marginRight: pxToRem(10),                
                [mediaQueries.tablet]: {
                  display: 'block',
                  marginRight: 'none',     
                }
              },
            }
          },
          floorplan: {
            padding: `${pxToRem(10)} 0`,
            height: '50%',
            [desktopSmall]: {
              padding: `${pxToRem(60)} 0`,
              height: hasTwoLevels ? '80%' : '85%',
              maxWidth: '85%',
              margin: '0 auto'
            },
            img: {
              display: 'block',
              height: '100%',
              margin: '0 auto',
              width: '100%'
            }
          },
          legal: {
            [tabletLandscape]: {
              height: '10%',
              display: 'flex',
              alignItems: 'flex-end',
            },
            fontStyle: {
              textTransform: 'none',
              fontFamily: 'Maison Neue Book',
              fontSize: pxToRem(10)
            }
          },
          mobileLegal: {
            fontStyle: {
              textTransform: 'none',
              fontFamily: 'Maison Neue Book',
              fontSize: pxToRem(10)
            }
          }
        }
      }
    };

    const { main } = FloorplanOverlayInline;

    const generateTwoLevelButtons = hasTwoLevels => {
      if (hasTwoLevels) {
        return (
          <div style={main.inner.detail.twoLevelButtons}>
            <p 
              className='no-margin' 
              style={main.inner.detail.twoLevelButtons.twoLevelButton} 
              onClick={() => this.toggleTwoLevelImg('lower')}
              ref={this.lowerLevelBtn}
            >
              Main Level
            </p>
            <p 
              className='no-margin lighten' 
              style={main.inner.detail.twoLevelButtons.twoLevelButton}
              onClick={() => this.toggleTwoLevelImg('upper')}
              ref={this.upperLevelBtn}
            >
              Upper Level
            </p>
          </div>
        );
      } else {
        return null;
      }
    };
    
    return (
      <Context.Consumer>
        {context => (
          <div style={[main, this.props.active ? main.active : null]}>
            <div style={main.inner}>
              <MediaQuery minWidth={1200}>
                <div style={main.inner.detail}>
                  <div>
                    <p 
                      style={main.inner.detail.residence}
                      className='no-margin'>
                      {`${isPenthouse ? 'Penthouse' : 'Residence'} ${residence}`}
                    </p>
                  </div>
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>
                      {`${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                    </p>
                    <p className='no-margin'>
                      {`${totalBathrooms} ${totalBathrooms > 1 ? 'Bathrooms' : 'Bathroom'}`}
                    </p>
                  </div>
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>Interior</p>
                    <p className='no-margin'>{`${interior} SF/${feetToMeters(interior)} SM`}</p>
                  </div>
                  { exterior &&
                    <div style={main.inner.detail.subDetail}>
                      <p className='no-margin'>Exterior</p>
                      <p className='no-margin'>{`${exterior} SF/${feetToMeters(exterior)} SM`}</p>
                    </div>
                  }
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>Price</p>
                    <p className='no-margin'>{`$${price}`}</p>
                  </div>
                  <div style={main.inner.detail.buttons}>
                    <a 
                      href={`/downloads/floorplans/25ParkRow_Floorplan_Unit${pdfSrc}.pdf`} 
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img 
                        className='no-margin' 
                        style={main.inner.detail.buttons.download} 
                        src='/images/icons/download_button.png'
                        alt={`Download PDF of floorplan ${residence}`}
                      />
                    </a>
                    <img 
                      onClick={() => this.handleCloseOverlay(context)}
                      style={ main.inner.detail.buttons.closeBtn} 
                      src={'/images/icons/close_black.svg'}
                      alt='Close floorplan overlay'
                    />
                  </div>
                </div>
                {generateTwoLevelButtons(hasTwoLevels)}
              </MediaQuery>
              <MediaQuery maxWidth={1200}>
                <div>
                  <p 
                    className='no-margin' 
                    style={main.inner.detail.residence}
                  >
                    {`${isPenthouse ? 'Penthouse' : 'Residence'} ${residence}`}
                  </p>
                  {generateTwoLevelButtons(hasTwoLevels)}
                </div>
              </MediaQuery>
              <div style={main.inner.floorplan}>
                <img 
                  style={main.inner.floorplan.img} 
                  src={`/images/floorplans/overlay/${imgSrc}.svg`} 
                  alt={`Floorplan overlay of residence ${residence}`}
                  ref={this.overlayFloorplanImg}
                />
              </div>
              <MediaQuery minWidth={1200}>
                <div style={main.inner.legal}>
                  <h6 style={main.inner.legal.fontStyle}>All computer and/or artist renderings reflect the planned scale and spirit of the Building. Sponsor makes no representation that any future construction in the neighborhood surrounding the Condominium will not result in the obstruction of the views from any windows, gardens, and/or terraces. Where materials, equipment, finishes, fixtures, appliances, landscaping, and/or other construction or design details are indicated herein, Sponsor reserves the right to substitute in each instance one of comparable or better quality as recognized by industry standards for performance, efficiency, longevity, and/or classifications, as applicable, in accordance with the terms of the Offering Plan. All dimensions and square footages are approximate and subject to normal construction variances and tolerances. Sponsor reserves the right to make changes in accordance with the offering plan. Sponsor makes no representations or warranties except as may be set forth in the offering plan. The complete offering terms are in an offering plan available from Sponsor. File no. CD17-0208. Sponsor: Park Row 23 Owners LLC, 1865 Palmer Avenue, Suite 203, Larchmont, New York 10538. Equal housing opportunity.</h6>
                </div>
              </MediaQuery>
              
              <MediaQuery maxWidth={1200}>
                <div style={main.inner.detail}>
                  <img 
                    onClick={() => this.handleCloseOverlay(context)}
                    style={ main.inner.detail.buttons.closeBtn} 
                    src={'/images/icons/close_black.svg'}
                    alt='Close floorplan overlay'
                  />
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>{`${bedrooms} Bedrooms`}</p>
                    <p className='no-margin'>{`${totalBathrooms} ${totalBathrooms > 1 ? 'Bathrooms' : 'Bathroom'}`}</p>
                  </div>
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>Interior</p>
                    <p className='no-margin'>{`${interior} SF/${feetToMeters(interior)} SM`}</p>
                  </div>
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>Exterior</p>
                    <p className='no-margin'>1,022 SF/94 SM</p>
                  </div>
                  <div style={main.inner.detail.subDetail}>
                    <p className='no-margin'>Price</p>
                    <p className='no-margin'>{`$${price}`}</p>
                  </div>
                  <a 
                    href={`/downloads/floorplans/25ParkRow_Floorplan_Unit${pdfSrc}.pdf`} 
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ margin: '0 auto', padding: `${pxToRem(20)} 0`}}
                  >
                    <img 
                      style={ main.inner.detail.buttons.download} 
                      src={'/images/icons/download_button.png'}
                      alt={`Download PDF of floorplan ${residence}`}
                    />
                  </a>
                </div>
                <div>
                  <h6 style={main.inner.legal.fontStyle}>All computer and/or artist renderings reflect the planned scale and spirit of the Building. Sponsor makes no representation that any future construction in the neighborhood surrounding the Condominium will not result in the obstruction of the views from any windows, gardens, and/or terraces. Where materials, equipment, finishes, fixtures, appliances, landscaping, and/or other construction or design details are indicated herein, Sponsor reserves the right to substitute in each instance one of comparable or better quality as recognized by industry standards for performance, efficiency, longevity, and/or classifications, as applicable, in accordance with the terms of the Offering Plan. All dimensions and square footages are approximate and subject to normal construction variances and tolerances. Sponsor reserves the right to make changes in accordance with the offering plan. Sponsor makes no representations or warranties except as may be set forth in the offering plan. The complete offering terms are in an offering plan available from Sponsor. File no. CD17-0208. Sponsor: Park Row 23 Owners LLC, 1865 Palmer Avenue, Suite 203, Larchmont, New York 10538. Equal housing opportunity.</h6>
                </div>
              </MediaQuery>
            </div>
          </div>
        )}
      </Context.Consumer>
      
    );
  }
}

export default Radium(FloorplanOverlay);