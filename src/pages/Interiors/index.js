import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

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
        <Helmet>
          <title>25 Park Row | Interiors</title>
          <meta name="description" content="With vistas stretching over City Hall Park, each condo at 25 Park Row creates a connection between fine interior finishes and breathtaking views of Downtown NYC." />
        </Helmet>
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
                  caption='Expansive casement windows artfully frame views of the Woolworth Building and the Hudson River.' 
                  src='/images/pages/interiors/penthouse_staircase' 
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
              <Waypoint 
                onEnter={() => this.triggerAnimation(1, true)} 
                onLeave={() => this.triggerAnimation(1, false)} 
              >
                <SubTitle
                  desktop={<span>INTERIORS WORTHY<br/> OF THE VIEW</span>}
                  mobile={<span>INTERIORS WORTHY<br/> OF THE VIEW</span>}
                />
              </Waypoint>
            </Col>
          </Row>
          <Row>
            <Col 
              lg={12}
              className={!this.state.sections[2] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(2, true)} 
                onLeave={() => this.triggerAnimation(2, false)} 
              >
                <Panel 
                  background={colorVars.floorplanBlue}
                  textAlign='center'
                  mobileText='With vistas stretching over City Hall Park and to the cityscape beyond, each residence creates a connection between fine interior finishes and breathtaking views.'
                  text={<span>With vistas stretching over City Hall Park<br/> and to the cityscape beyond, each residence creates a connection<br/> between fine interior finishes and breathtaking views.</span>}
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12} 
              className={!this.state.sections[3] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(3, true)} 
                onLeave={() => this.triggerAnimation(3, false)}
              >
                <LargeImage
                  caption='Fine interior finishes include wide-plank European white oak flooring, custom-crafted millwork, and Calacatta Gold marble.'
                  src='/images/pages/interiors/living_room_and_dining'
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
          {/* <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[4] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(4, true)} 
                onLeave={() => this.triggerAnimation(4, false)}
              >
                <TwoColumnText
                  header='The Living Spaces'
                  paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
                />
              </Waypoint>
            </Col>
          </Row> */}
          <Waypoint 
            onEnter={() => this.triggerAnimation(5, true)} 
            onLeave={() => this.triggerAnimation(5, false)}
          >
            <SlickSlider 
              className={!this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-0'}
              paths={[
                { 
                  src: '/images/pages/interiors/full_floor_living_room', 
                  caption: 'The lantern-like living rooms feature panoramic views over three exposures and open onto a gracious terrace.' 
                },
                { 
                  src: '/images/pages/interiors/living_room_and_terrace',
                  caption: 'Residences feature expanses of windows framing incomparable sunset views.'
                }
              ]}   
            />
          </Waypoint>
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(6, true)} 
                onLeave={() => this.triggerAnimation(6, false)}
              >
                <LargeImage 
                  caption='Tranquil master bedrooms are wrapped in casement windows revealing the park and city beyond.'
                  src='/images/pages/interiors/master_bedroom_and_terrace' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          {/* <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[7] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(7, true)} 
                onLeave={() => this.triggerAnimation(7, false)}
              >
                <LargeImage
                  caption='Penthouse fireplaces, surrounded with honed Calacatta Gold marble, anchor views for a family room, library, or den.'
                  src='/images/pages/interiors/living_room_and_fireplace' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row> */}
          <Row className='row-extra-margin row-extra-margin-desktop-2' center='lg'>
            <Col 
              lg={12}
              className={!this.state.sections[8] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(8, true)} 
                onLeave={() => this.triggerAnimation(8, false)}
              >
                <LargeImage
                  caption='25 Park Row celebrates the outdoors through Juliet balconies, loggias, and expansive terraces.' 
                  src='/images/pages/interiors/vignette_terrace_dining' 
                  width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[9] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(9, true)} 
                onLeave={() => this.triggerAnimation(9, false)}
              >
                <TwoColumnText 
                  header='CRAFTED AND REFINED'
                  paragraph='With a focus on fine materials and an element of craft, kitchens and bathrooms make the most of custom textured woods, veined marble, and mosaic tile paired with state-of-the-art appliances and fixtures.'
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[10] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(10, true)} 
                onLeave={() => this.triggerAnimation(10, false)}
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
            onEnter={() => this.triggerAnimation(11, true)} 
            onLeave={() => this.triggerAnimation(11, false)}
          >
            <SlickSlider 
              className={!this.state.sections[11] ? 'hidden' : 'animate-reveal-delay-0'}
              paths={[
                { 
                  src: '/images/pages/interiors/residential_kitchen_a', 
                  caption: 'Walnut cabinetry is enhanced by a decorative surround and is complemented by a suite of Miele appliances.' 
                },
                { 
                  src: '/images/pages/interiors/residential_kitchen_b',
                  caption: 'Walnut cabinetry is enhanced by a decorative surround and is complemented by a suite of Miele appliances.' 
                }
              ]}   
            />
          </Waypoint>
          {/* <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[12] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(12, true)} 
                onLeave={() => this.triggerAnimation(12, false)}
              >
                <TwoColumnText 
                  header='The Bath'
                  paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
                />
              </Waypoint>
            </Col>
          </Row> */}
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[13] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(13, true)} 
                onLeave={() => this.triggerAnimation(13, false)}
              >
                <LargeImage
                  caption='Calacatta Gold tile, polished nickel, and a custom cerused oak vanity with a polished nickel inlay detail are the centerpieces of the master bathrooms. '
                  src='/images/pages/interiors/residential_master_bathroom' width='100%'  
                />
              </Waypoint>
            </Col>
          </Row>
          <MediaQuery maxWidth={992}>
            <Row className='row-extra-margin row-extra-margin-desktop-2'>
              <Col 
                md={12}
                className={!this.state.sections[14] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(14, true)} 
                  onLeave={() => this.triggerAnimation(14, false)}
                >
                  <SmallImage 
                    caption='Powder rooms feature an expressive Nero Marquina marble accent wall and a floating Calacatta Gold marble vanity.'
                    src='/images/pages/interiors/powder_room' width='100%' 
                  />
                </Waypoint>
                <h5>Powder Room</h5>
              </Col>
              <Col 
                md={12}
                className={!this.state.sections[15] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(15, true)} 
                  onLeave={() => this.triggerAnimation(15, false)}
                >
                  <SmallImage
                    caption='Secondary baths feature Ash Gray marble walls and flooring, a European white oak vanity, and a custom medicine cabinet with integrated lighting.'
                    src='/images/pages/interiors/residential_secondary_bath' width='100%' 
                  />
                </Waypoint>
                <h5>Residential Secondary Bath</h5>
              </Col>
            </Row>
          </MediaQuery>
          <MediaQuery minWidth={992}>
            <Row className='row-extra-margin row-extra-margin-desktop-2'>
              <Col 
                style={{ margin: `0 ${pxToRem(8)}`, flex: '.783' }}
                className={!this.state.sections[16] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(16, true)} 
                  onLeave={() => this.triggerAnimation(16, false)}
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
                className={!this.state.sections[17] ? 'hidden' : 'animate-reveal-delay-0'}
              >
                <Waypoint 
                  onEnter={() => this.triggerAnimation(17, true)} 
                  onLeave={() => this.triggerAnimation(17, false)}
                >
                  <SmallImage 
                    caption='Secondary baths feature Ash Gray marble walls and flooring, a European white oak vanity, and a custom medicine cabinet with integrated lighting.'
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

