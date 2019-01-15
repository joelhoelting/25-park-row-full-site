import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';
import MediaQuery from 'react-responsive';

// Component styling
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { SmallImage, LargeImage } from 'helpers/Image/ResponsiveImage/_module';

// Slick Slider
import SlickSlider from 'helpers/Image/SlickSlider';

// Layout Helpers
import { Panel, TwoColumnText, SubTitle } from 'helpers/Layout/_module';

// Px to pxToRem
import { pxToRem } from 'helpers/Math';

class Interiors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: {}
    };
  }

  initialImageLoad() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  triggerAnimation(section, boolean) {
    this.setState({
      sections: {
        ...this.state.sections,
        [section]: boolean
      }
    });
  }

  render() {
    return (
      <div className={`main-container ${!this.state.mounted ? 'hidden' : ''}`}>
        <Style rules={{'body': {backgroundColor: this.props.color}}}/>
        <Grid fluid>
          <Row
            style={{ minHeight: !this.state.mounted ? '100vh' : '20vh'}}
          >
            <Col 
              lg={12}
              className={!this.state.sections[0] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <h2 className='text-center mobile-header'>Interiors</h2>
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)} 
              >
                <LargeImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.' 
                  src='/images/pages/interiors/living_room_and_dining' 
                  width='100%'
                  onLoad={() => this.initialImageLoad()}  
                />
              </Waypoint>
            </Col>
          </Row>
          <Row>
            <Col 
              lg={12}
              className={!this.state.sections[1] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <SubTitle
                desktop={<span>Highly-Crafted Residences and Timeless Interiors</span>}
                mobile={<span>Highly-Crafted<br/> Residences and Timeless<br/> Interiors</span>}
              />
              <Waypoint 
                onEnter={() => this.triggerAnimation(1, true)} 
                onLeave={() => this.triggerAnimation(1, false)} 
              />
              <Panel 
                background={colorVars.floorplanBlue}
                textAlign='center'
                text='With City Hall Park on view from every apartment and sweeping vistas from river to river at top, the residences—with Juliet balconies, loggias, and stretches of windows—invite in the cityscape. Flooded with natural light, exquisite interiors are ready for individual taste.'
              />
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[2] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <h3 className="bolder text-center">The Juliet Balcony</h3>
              <Waypoint 
                onEnter={() => this.triggerAnimation(2, true)} 
                onLeave={() => this.triggerAnimation(2, false)}
              >
                <SmallImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/interiors/juliet_balcony'  
                />
              </Waypoint>
            </Col>
          </Row>
          <Waypoint 
            onEnter={() => this.triggerAnimation(3, true)} 
            onLeave={() => this.triggerAnimation(3, false)}
          />
          <TwoColumnText 
            className={!this.state.sections[3] ? 'hidden' : 'animate-reveal-delay-0'}
            header='The Penthouse'
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
            hideParagraphMobile
          />
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12} 
              className={!this.state.sections[4] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(4, true)} 
                onLeave={() => this.triggerAnimation(4, false)}
              >
                <LargeImage
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/interiors/penthouse_staircase'
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin-1'>
            <Col 
              lg={12}
              className={!this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(5, true)} 
                onLeave={() => this.triggerAnimation(5, false)}
              >
                <LargeImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/interiors/penthouse_interior' width='100%'
                />
              </Waypoint>
            </Col>
          </Row>
          <Waypoint 
            onEnter={() => this.triggerAnimation(6, true)} 
            onLeave={() => this.triggerAnimation(6, false)}
          />
          <TwoColumnText 
            className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-0'}
            header='The Living Spaces'
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
          />
          <Waypoint 
            onEnter={() => this.triggerAnimation(7, true)} 
            onLeave={() => this.triggerAnimation(7, false)}
          >
            <SlickSlider 
              className={!this.state.sections[7] ? 'hidden' : 'animate-reveal-delay-0'}
              paths={[
                { 
                  src: '/images/pages/interiors/full_floor_living_room', 
                  caption: 'The lantern-like living rooms feature panoramic views over three exposures and open onto a gracious terrace.' 
                },
                { 
                  src: '/images/pages/interiors/living_room_and_terrace',
                  caption: 'Fine interior finishes include wide plank European white oak flooring, custom-crafted millwork, and Calacatta Gold marble.'
                }
              ]}   
            />
          </Waypoint>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={13}
              className={!this.state.sections[8] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(8, true)} 
                onLeave={() => this.triggerAnimation(8, false)}
              >
                <LargeImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/interiors/master_bedroom_and_terrace' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[9] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(9, true)} 
                onLeave={() => this.triggerAnimation(9, false)}
              >
                <LargeImage
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/interiors/living_room_and_fireplace' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={12}
              className={!this.state.sections[10] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(10, true)} 
                onLeave={() => this.triggerAnimation(10, false)}
              >
                <LargeImage
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.' src='/images/pages/interiors/vignette_terrace_dining' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          <Waypoint 
            onEnter={() => this.triggerAnimation(11, true)} 
            onLeave={() => this.triggerAnimation(11, false)}
          />
          <TwoColumnText 
            className={!this.state.sections[11] ? 'hidden' : 'animate-reveal-delay-0'}
            header='The Kitchen'
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
          />
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[12] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(12, true)} 
                onLeave={() => this.triggerAnimation(12, false)}
              >
                <LargeImage
                  caption='Windowed gourmet kitchens feature custom-designed cabinetry and fine Calacatta Gold marble countertops and backsplash.'
                  src='/images/pages/interiors/full_floor_kitchen_a' 
                  width='100%'
                />
              </Waypoint>
            </Col>
          </Row>
          <Waypoint 
            onEnter={() => this.triggerAnimation(13, true)} 
            onLeave={() => this.triggerAnimation(13, false)}
          >
            <SlickSlider 
              className={!this.state.sections[13] ? 'hidden' : 'animate-reveal-delay-0'}
              paths={[
                { 
                  src: '/images/pages/interiors/residential_kitchen_a', 
                  caption: 'Walnut cabinetry is enhanced by a decorative surround and is complemented by a suite of Miele appliances.' 
                },
                { 
                  src: '/images/pages/interiors/residential_kitchen_b',
                  caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.' 
                }
              ]}   
            />
          </Waypoint>
          <Waypoint 
            onEnter={() => this.triggerAnimation(14, true)} 
            onLeave={() => this.triggerAnimation(14, false)}
          />
          <TwoColumnText 
            className={!this.state.sections[14] ? 'hidden' : 'animate-reveal-delay-0'}
            header='The Bath'
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
          />
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[15] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(15, true)} 
                onLeave={() => this.triggerAnimation(15, false)}
              >
                <LargeImage
                  caption='Handcrafted tile, polished nickel, and a custom cerused oak vanity with a fine chrome inlay detail are the centerpieces of the master bathrooms.'
                  src='/images/pages/interiors/residential_master_bathroom' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          <MediaQuery maxWidth={992}>
            <Row className='row-extra-margin row-extra-margin-desktop-3'>
              <Col 
                md={12}
                className={!this.state.sections[16] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(16, true)} 
                  onLeave={() => this.triggerAnimation(16, false)}
                >
                  <SmallImage 
                    caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                    src='/images/pages/interiors/powder_room' width='100%' 
                  />
                </Waypoint>
                <h5>Powder Room</h5>
              </Col>
              <Col 
                md={12}
                className={!this.state.sections[17] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(17, true)} 
                  onLeave={() => this.triggerAnimation(17, false)}
                >
                  <SmallImage
                    caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                    src='/images/pages/interiors/residential_secondary_bath' width='100%' 
                  />
                </Waypoint>
                <h5>Residential Secondary Bath</h5>
              </Col>
            </Row>
          </MediaQuery>
          <MediaQuery minWidth={992}>
            <Row className='row-extra-margin row-extra-margin-desktop-3'>
              <Col 
                style={{ margin: `0 ${pxToRem(8)}`, flex: '.783' }}
                className={!this.state.sections[18] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(18, true)} 
                  onLeave={() => this.triggerAnimation(18, false)}
                >
                  <SmallImage 
                    caption='Powder rooms feature an expressive Nero Marquina marble accent wall and a floating Calacatta Gold marble vanity.'
                    src='/images/pages/interiors/powder_room'
                    width='100%'  />
                </Waypoint>
                <h5 className='text-center'>Powder Room</h5>
              </Col>
              <Col 
                style={{ margin: `0 ${pxToRem(8)}`, flex: '1' }}
                className={!this.state.sections[19] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(19, true)} 
                  onLeave={() => this.triggerAnimation(19, false)}
                >
                  <SmallImage 
                    caption='Powder rooms feature an expressive Nero Marquina marble accent wall and a floating Calacatta Gold marble vanity.'
                    src='/images/pages/interiors/residential_secondary_bath'
                    width='100%'
                  />
                </Waypoint>
                <h5 className='text-center'>Residential Secondary Bath</h5>
              </Col>
            </Row>
          </MediaQuery>
        </Grid>
      </div>
    );
  }
}

export default Radium(Interiors);

