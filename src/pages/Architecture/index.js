import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';

// Component styling
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { SmallImage, LargeImage } from 'helpers/Image/ResponsiveImage/_module';

// Layout Helpers
import { Panel, SubTitle } from 'helpers/Layout/_module';

class Architecture extends Component {
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
            center='lg'
            style={{ minHeight: !this.state.mounted ? '100vh' : '20vh'}}
          > 
            <Col 
              lg={5}
              className={!this.state.sections[0] ? 'hidden' : 'animate-reveal-delay-0'}
            >  
              <h2 className='text-center mobile-header'>Architecture</h2>
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)}
              >
                <SmallImage 
                  caption='At 25 Park Row, the classic Art Deco skyscraper is reinterpreted with an expressive series of cascading terraces, setbacks, and loggias.' 
                  src='/images/pages/architecture/building_across_the_park'
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
                  desktop={<span>Introducing<br/> a New York City Icon</span>}
                  mobile={<span>Introducing<br/>A New York City Icon</span>}
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
                  mobileText='Showcasing COOKFOX Architects’ contemporary interpretation of Art Deco style, 25 Park Row offers a transcendent living experience at the center of the New Downtown. Each residence offers incomparable views over historic City Hall Park.'
                  text={<span>Showcasing COOKFOX Architects’ contemporary interpretation<br/> of Art Deco style, 25 Park Row offers a transcendent living experience<br/> at the center of the New Downtown. Each residence offers<br/> incomparable views over historic City Hall Park.</span>}
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
                  caption='25 Park Row gracefully echoes the surrounding architecture.'
                  src='/images/pages/architecture/exterior_lobby_entry' 
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[4] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(4, true)} 
                onLeave={() => this.triggerAnimation(4, false)}
              >
                <LargeImage 
                  caption='The double-height lobby with 24-hour concierge cues a gracious arrival home.'
                  src='/images/pages/architecture/interior_lobby' 
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
          <Row>
            <Col 
              lg={12} 
              className={!this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(5, true)} 
                onLeave={() => this.triggerAnimation(5, false)}
              >
                <Panel 
                  background={colorVars.olive} 
                  mobileBackground
                  textAlign='center'
                  mobileText='“How do we acknowledge this gift to the city? First, plan every single residence to face the park.”'
                  text={<span>“How do we acknowledge this gift to the city? <br/> First, plan every single residence to face the park.”</span>}
                  quote='—Rick Cook, Cookfox Architect'
                />
              </Waypoint>
            </Col>
          </Row>
          {/* <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(6, true)} 
                onLeave={() => this.triggerAnimation(6, false)}
              >
                <TwoColumnText
                  header='Building Context'
                  paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
                  hideParagraphMobile
                />
              </Waypoint>
            </Col>
          </Row> */}
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[7] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(7, true)} 
                onLeave={() => this.triggerAnimation(7, false)} 
              >
                <LargeImage 
                  caption='Penthouse views sweep from the east river to the hudson, and feature uninterrupted vistas of the city’s architectural treasures and city hall park below.'
                  src='/images/pages/architecture/building_exterior_lantern_terrace'
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-2'>
            <Col 
              lg={12}
              className={!this.state.sections[8] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(8, true)} 
                onLeave={() => this.triggerAnimation(8, false)}
              >
                <LargeImage 
                  caption='Loggias offer privacy, shade, and protection while framing views of Manhattan’s icons.'
                  src='/images/pages/architecture/building_exterior_loggias' 
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
                <LargeImage
                  caption='Drawing inspiration from the elegant textures of the Woolworth Building, sculpted forms play with the shifting sunlight.'
                  src='/images/pages/architecture/building_exterior_facade' width='100%' />
              </Waypoint>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Radium(Architecture);