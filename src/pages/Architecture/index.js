import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';

// Component styling
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { SmallImage, LargeImage } from 'helpers/Image/ResponsiveImage/_module';

// Layout Helpers
import { Panel, TwoColumnText, SubTitle } from 'helpers/Layout/_module';

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
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)}
              >
                <SmallImage 
                  caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.' 
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
                  text='25 Park Row is a 21st century architectural icon providing unmatched views from every residence over historic City Hall Park. This stunner on the Manhattan skyline offers a transcendent living experience in the new Downtown.'
                />
              </Waypoint>
            </Col>
          </Row>
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
                  caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  src='/images/pages/architecture/exterior_lobby_entry' 
                  width='100%' 
                />
              </Waypoint>
            </Col>
          </Row>
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
                  caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
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
                  text={'“Having a project directly in historic Lower Manhattan’s core is unique enough, but designing for these magnificent, protected views was even more extraordinary. Our first step, plan every single apartment to face the park.”'}
                  quote='—Rick Cook, Cookfox Architect'
                />
              </Waypoint>
            </Col>
          </Row>
          <TwoColumnText 
            className={!this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-0'}
            header='Building Context'
            paragraph='Vestibulum mollis porta placerat. Morbi porttitor est in congue dictum. Mauris lobortis bibendum ante, vel condimentum lacus cursus vitae. Etiam non dui id odio fringilla volutpat. Pellentesque elementum'
            hideParagraphMobile
          />
          <Waypoint 
            onEnter={() => this.triggerAnimation(6, true)} 
            onLeave={() => this.triggerAnimation(6, false)}
          />
          <Row className='row-extra-margin row-extra-margin-desktop-3'>
            <Col 
              lg={12}
              className={!this.state.sections[7] ? 'hidden' : 'animate-reveal-delay-0'}
            > 
              <h2 className='text-center mobile-header'>Architecture</h2>
              <Waypoint 
                onEnter={() => this.triggerAnimation(7, true)} 
                onLeave={() => this.triggerAnimation(7, false)} 
              >
                <LargeImage 
                  caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  src='/images/pages/architecture/building_exterior_lantern_terrace'
                  width='100%' 
                />
              </Waypoint>
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
                  caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  src='/images/pages/architecture/building_exterior_loggias' 
                  width='100%'    
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
                  caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
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