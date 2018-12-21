import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';
import MediaQuery from 'react-responsive';

// Component styling
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { SmallImage, LargeImage } from 'helpers/Image/ResponsiveImage/_module';

// Layout Helpers
import { Panel, TwoColumnText, VerticalSpacedText, SubTitle } from 'helpers/Layout/_module';

class Amenities extends Component {
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
              className={!this.state.sections[0] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)} 
              >
                <LargeImage
                  caption='A gracious reading room welcomes residents to The Park Row Club. A curated selection of original mid-century and custom pieces echoes the sleek elegance of Art Deco with a fresh, modern touch.' 
                  src='/images/pages/amenities/reading_room_lounge' 
                  width='100%'
                  onLoad={() => this.initialImageLoad()}  
                />
              </Waypoint>
            </Col>
          </Row>
          <Row>
            <Col
              lg={12}
              className={!this.state.sections[1] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <SubTitle
                desktop={<span>The Park Row Club Garden and Dining Terrace</span>}
                mobile={<span>The Park Row Club<br/> Garden and Dining Terrace</span>}
              />
              <Waypoint 
                onEnter={() => this.triggerAnimation(1, true)} 
                onLeave={() => this.triggerAnimation(1, false)} 
              />
              <Panel 
                background={colorVars.olive}
                textAlign='center'
                text='The Park Row Club—curated amenities designed by Studio Mellone—features richly appointed leisure spaces overlooking City Hall Park: golf, billiards and a whimsical playroom; a gilded 65-foot pool, gym, and yoga and meditation studio for wellness, near a lush garden and dining terrace. '
              />
            </Col>
          </Row>
          <Waypoint 
            onEnter={() => this.triggerAnimation(2, true)} 
            onLeave={() => this.triggerAnimation(2, false)}
          />
          <TwoColumnText 
            className={!this.state.sections[2] ? 'hidden' : 'animate-reveal-delay-1'}
            header='Amenities'
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
            hideParagraphMobile
          />
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[3] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(3, true)} 
                onLeave={() => this.triggerAnimation(3, false)} 
              >
                <LargeImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/amenities/swimming_pool'
                  width='100%'  />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[4] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(4, true)} 
                onLeave={() => this.triggerAnimation(4, false)} 
              >
                <SmallImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/amenities/pool_entry' />
              </Waypoint>
              <h4>Pool Entry</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              className={!this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-1'} 
              lg={4}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(5, true)} 
                onLeave={() => this.triggerAnimation(5, false)} 
              >
                <SmallImage width='100%' mobileWidth='100%' src='/images/pages/amenities/andre_mellone' noMobile />
              </Waypoint>
            </Col>
            <Col 
              lgOffset={2} 
              lg={6}
              className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(6, true)} 
                onLeave={() => this.triggerAnimation(6, false)} 
              >
                <VerticalSpacedText 
                  className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-1'}
                  header='Studio Mellone'
                  text='Andre Mellone founded Studio Mellone in 2012. A 20-year veteran of New York City’s design community, who worked for Robert A. M. Stern, Mark Hampton, Greg Jordan, Ferguson&Shamamian and Sawyer/Berson, Mellone primarily focuses on private homes and residences, along with boutique retail. Architectural Digest has called him a “world famous designer with a trademark eye” who creates “midcentury, masculine decors for the likes of Thom Browne and Jason Wu.'
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[7] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(7, true)} 
                onLeave={() => this.triggerAnimation(7, false)} 
              >
                <LargeImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/amenities/dining_room' 
                  width='100%' 
                />
              </Waypoint>
              <MediaQuery maxDeviceWidth={992}>
                <h4>Dining Room</h4>
              </MediaQuery>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[8] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(8, true)} 
                onLeave={() => this.triggerAnimation(8, false)} 
              >
                <SmallImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/amenities/library' 
                />
              </Waypoint>
              <h4>Library</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[9] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(9, true)} 
                onLeave={() => this.triggerAnimation(9, false)} 
              >
                <SmallImage
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/amenities/kids_room' 
                />
              </Waypoint>
              <h4>Kids Room</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[10] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(10, true)} 
                onLeave={() => this.triggerAnimation(10, false)} 
              >
                <LargeImage
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/amenities/fitness_center'
                  width='100%'  />
              </Waypoint>
            </Col>
          </Row>
          <Row>
            <Col 
              lg={12}
              className={!this.state.sections[11] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(11, true)} 
                onLeave={() => this.triggerAnimation(11, false)} 
              >
                <Panel
                  background={colorVars.olive} 
                  mobileBackground
                  textAlign='center'
                  text={'“We believe residential and hospitality at their peak should be the same thing—peaceful but exciting, luxurious but relaxed, like the finest hotel.”'}
                  quote='—Andre Mellone, Amenities Designer'
                />
              </Waypoint>
            </Col>
          </Row>
          <Waypoint 
            onEnter={() => this.triggerAnimation(12, true)} 
            onLeave={() => this.triggerAnimation(12, false)}
          />
          <TwoColumnText 
            className={!this.state.sections[12] ? 'hidden' : 'animate-reveal-delay-1'}
            header={<span>The Garden</span>}
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
            hideParagraphMobile
          />
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[13] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(13, true)} 
                onLeave={() => this.triggerAnimation(13, false)} 
              >
                <LargeImage 
                  caption='The Park Row Club’s Garden and Dining Terrace offers a warmly appointed space for outdoor entertaining.'
                  src='/images/pages/amenities/fire_pit' 
                  width='100%'  />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[14] ? 'hidden' : 'animate-reveal-delay-1'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(14, true)} 
                onLeave={() => this.triggerAnimation(14, false)} 
              >
                <LargeImage 
                  caption='The Park Row Club’s Garden and Dining Terrace offers a warmly appointed space for outdoor entertaining.'
                  src='/images/pages/amenities/courtyard_lawn_dining'
                  width='100%'
                />
              </Waypoint>
              <h5 className='text-center-desktop'>Courtyard Lawn Dining</h5>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Radium(Amenities);