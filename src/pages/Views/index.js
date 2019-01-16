import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';

// Component styling
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { SmallImage, LargeImage } from 'helpers/Image/ResponsiveImage/_module';

// Layout Helpers
import { Panel, SubTitle } from 'helpers/Layout/_module';

class Views extends Component {
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
              <h2 className='text-center mobile-header'>Views</h2>
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)} 
              >
                <LargeImage 
                  caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales varius porttitor. Aenean fringilla euismod turpis, eget rutrum nisl consectetur.'
                  src='/images/pages/views/city_hall_park'
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
              />
              <SubTitle
                desktop={<span>Nullam finibus<br/> auctor nibh gravida </span>}
                mobile={<span>Nullam finibus<br/> auctor nibh gravida</span>}
              />
              <Panel 
                background={colorVars.charcoal}
                textAlign='center'
                text='Gaze upon architectural classics, such as the Woolworth building, through the frame of stunning oversized windows. Juliet balconies, terraces, and loggias take in leafy City Hall Park and beyond, graceful river views to east and west. '
              />
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[2] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(2, true)} 
                onLeave={() => this.triggerAnimation(2, false)} 
              >
                <LargeImage 
                  caption='25 Park Row is a 21st century architectural icon providing unmatched views from every residence over historic City Hall Park. This stunner on the Manhattan skyline offers a transcendent living experience in the new Downtown.'
                  src='/images/pages/views/northern_view' 
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[3] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(3, true)} 
                onLeave={() => this.triggerAnimation(3, false)} 
              >
                <SmallImage  
                  src='/images/pages/views/jenga_building'
                />
              </Waypoint>
              <h4>56 Leonard Street</h4>
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
                  src='/images/pages/views/oculus'
                />
              </Waypoint>
              <h4>Oculus</h4>
            </Col>
          </Row>
          <Row className='row-extra-margin row-extra-margin-desktop-3' center='lg'>
            <Col 
              lg={5}
              className={!this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-0'}
            >
              <Waypoint 
                onEnter={() => this.triggerAnimation(5, true)} 
                onLeave={() => this.triggerAnimation(5, false)} 
              >
                <SmallImage
                  src='/images/pages/views/court_building'
                />
              </Waypoint>
              <h4>Court Building</h4>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Radium(Views);