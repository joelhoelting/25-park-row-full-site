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
import { Panel, TwoColumnText, SubTitle } from 'helpers/Layout/_module';

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
              className={!this.state.sections[0] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <h2 className='text-center mobile-header'>Amenities</h2>
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)} 
              >
                <LargeImage
                  caption='The gracious reading room welcomes residents to The Park Row Club. A curated selection of original mid-century and custom pieces echoes the sleek elegance of Art Deco with a fresh, modern touch.' 
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
              className={!this.state.sections[1] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(1, true)} 
                onLeave={() => this.triggerAnimation(1, false)} 
              >
                <SubTitle
                  desktop={<span>THE PARK ROW CLUB</span>}
                  mobile={<span>THE PARK ROW CLUB</span>}
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
                  background={colorVars.olive}
                  textAlign='center'
                  text='Tastemaker Studio Mellone has designed The Park Row Club—a richly appointed amenity suite inspired by Gilded Age ocean liners. The Club includes a library and screening room, lounge, billiards, bar, dining room, playroom, golf simulator, and fitness center with a 65-foot pool and yoga studio.'
                />
              </Waypoint>
            </Col>
          </Row>
         

          {/* <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[2] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(2, true)} 
                onLeave={() => this.triggerAnimation(2, false)}
              >
                <TwoColumnText
                  header='Amenities'
                  paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
                  hideParagraphMobile
                />
              </Waypoint>
            </Col>
          </Row> */}
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[3] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(3, true)} 
                onLeave={() => this.triggerAnimation(3, false)} 
              >
                <LargeImage 
                  caption='Through glass French doors, the magnificent 65-foot gold and white mosaic pool shimmers with soft lighting and a kaleidoscope of antique mirrors.'
                  src='/images/pages/amenities/swimming_pool'
                  width='100%'  />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[4] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(4, true)} 
                onLeave={() => this.triggerAnimation(4, false)} 
              >
                <SmallImage 
                  caption='Richly detailed travertine basket-weave marble floors and sleek subway tile walls line the entryway to the pool.'
                  src='/images/pages/amenities/pool_entry' />
              </Waypoint>
              <h4>Pool Entry</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(5, true)} 
                onLeave={() => this.triggerAnimation(5, false)} 
              >
                <LargeImage 
                  caption='The 14-seat dining room offers a grand space for entertaining with lofty 18-foot ceilings, an adjacent catering kitchen, and views of City Hall Park beyond.'
                  src='/images/pages/amenities/dining_room' 
                  width='100%' 
                />
              </Waypoint>
              <MediaQuery maxWidth={992}>
                <h4>Dining Room</h4>
              </MediaQuery>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(6, true)} 
                onLeave={() => this.triggerAnimation(6, false)} 
              >
                <SmallImage 
                  caption='The Park Row Club’s intimate library is warmly finished with cerused oak paneling, a fireplace with a stone marble surround, and a custom bookcase featuring a curated collection of music memorabilia.'
                  src='/images/pages/amenities/library' 
                />
              </Waypoint>
              <h4>Library</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[7] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(7, true)} 
                onLeave={() => this.triggerAnimation(7, false)} 
              >
                <SmallImage
                  caption='The playroom offers an elegantly whimsical space with treetop views of City Hall Park.'
                  src='/images/pages/amenities/kids_room' 
                />
              </Waypoint>
              <h4>Kids Room</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[8] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(8, true)} 
                onLeave={() => this.triggerAnimation(8, false)} 
              >
                <LargeImage
                  caption='The fitness center features park views, a soaring double-height space, and state-of-the-art equipment.'
                  src='/images/pages/amenities/fitness_center'
                  width='100%'  />
              </Waypoint>
            </Col>
          </Row>
          <Row>
            <Col 
              lg={12}
              className={!this.state.sections[9] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(9, true)} 
                onLeave={() => this.triggerAnimation(9, false)} 
              >
                <Panel
                  background={colorVars.olive} 
                  mobileBackground
                  textAlign='center'
                  text={<span>“The green view out all the windows<br/> elevates the whole experience, like the seduction of the<br/> sea view when relaxing on an ocean liner’s deck.”</span>}
                  quote='—Andre Mellone'
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[10] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(10, true)} 
                onLeave={() => this.triggerAnimation(10, false)}
              >
                <TwoColumnText 
                  header={<span>GARDEN AND<br/> DINING TERRACE</span>}
                  paragraph='The Park Row Club Garden and Dining Terrace offers 7,000 square feet of outdoor space for entertainment, relaxation, and play—including a lawn, dining areas, and a living room with a fire pit.'
                  hideParagraphMobile
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[11] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(11, true)} 
                onLeave={() => this.triggerAnimation(11, false)} 
              >
                <LargeImage 
                  caption='The outdoor living room offers a warmly appointed space and firepit for outdoor entertaining.'
                  src='/images/pages/amenities/fire_pit' 
                  width='100%'  />
              </Waypoint>
            </Col>
          </Row>
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
                  caption='The Park Row Club Garden and Dining Terrace features areas for both formal and informal dining and play.'
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