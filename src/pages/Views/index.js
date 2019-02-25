import React, { Component } from 'react';
import Radium, {Style} from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';
import { Helmet } from 'react-helmet';

// Component styling
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';

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
        <Helmet>
          <title>25 Park Row | Views</title>
          <meta name="description" content="25 Park Row is a 21st century architectural icon providing unmatched downtown NYC views from every condominium over historic City Hall Park." />
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
              <h2 className='text-center mobile-header'>Views</h2>
              <Waypoint 
                onEnter={() => this.triggerAnimation(0, true)} 
                onLeave={() => this.triggerAnimation(0, false)} 
              >
                <LargeImage 
                  caption='25 Park Row is a 21st century architectural icon providing unmatched views from every residence over historic City Hall Park. This stunner on the Manhattan skyline offers a transcendent living experience in the new Downtown.'
                  src='/images/pages/views/western_view' 
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
                  desktop={<span>Captivating Views<br/> from Every Angle</span>}
                  mobile={<span>Captivating Views<br/> from Every Angle</span>}
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
                  background={colorVars.charcoal}
                  textAlign='center'
                  mobileText="Views sweep over City Hall Park and to the city's architectural treasures, spanning from theEast River to the Hudson"
                  text={<span>Views sweep over City Hall Park and<br/> to the city&#39;s architectural treasures, spanning from the<br/>East River to the Hudson</span>}
                />
              </Waypoint>
            </Col>
          </Row>
          
        </Grid>
      </div>
    );
  }
}

export default Radium(Views);