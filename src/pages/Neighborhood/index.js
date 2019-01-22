import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';

import MapBox from './MapBox';

// Component Styling
import { colorVars } from 'styles/Global/Colors';
import { globalMediaQueries } from 'styles/Global/MediaQueries';
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';
import SlickSlider from 'helpers/Image/SlickSlider';
import { Panel, SubTitle } from 'helpers/Layout/_module';

const NeighborhoodCSS = {
  '.neighborhood-map-wrapper': {
    height: '60vh'
  },
  mediaQueries: {
    [globalMediaQueries.desktopSmall]: {
      '.neighborhood-map-wrapper': {
        height: '70vh'
      }
    }
  }
};

class Neighborhood extends Component {
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

  setMapState = filterString => {
    this.setState({
      mapState: filterString
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={`main-container ${!this.state.mounted ? 'hidden' : ''}`}
        >
          <Style rules={{ body: { backgroundColor: this.props.color } }} />
          <Style rules={NeighborhoodCSS} />
          <Grid fluid>
            <Row style={{ minHeight: !this.state.mounted ? '100vh' : '20vh' }}>
              <Col
                lg={12}
                className={
                  !this.state.sections[0] ? 'hidden' : 'animate-reveal-delay-0'
                }
              >
                <h2 className='text-center mobile-header'>Neighborhood</h2>
                <Waypoint
                  onEnter={() => this.triggerAnimation(0, true)}
                  onLeave={() => this.triggerAnimation(0, false)}
                >
                  <LargeImage
                    caption='At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                    src="/images/pages/neighborhood/neighborhood_hero_south"
                    width="100%"
                    onLoad={() => this.initialImageLoad()}
                  />
                </Waypoint>
              </Col>
            </Row>
            <Row>
              <Col
                lg={12}
                className={
                  !this.state.sections[1] ? 'hidden' : 'animate-reveal-delay-0'
                }
              >
                <Waypoint
                  onEnter={() => this.triggerAnimation(1, true)}
                  onLeave={() => this.triggerAnimation(1, false)}
                >
                  <SubTitle
                    desktop={<span>New York<br/> at Your Fingertips</span>}
                    mobile={<span> New York<br /> at Your Fingertips</span>}
                  />
                </Waypoint>
              </Col>
            </Row>
            <Row>
              <Col
                lg={12}
                className={
                  !this.state.sections[2] ? 'hidden' : 'animate-reveal-delay-0'
                }
              >
                <Waypoint
                  onEnter={() => this.triggerAnimation(2, true)}
                  onLeave={() => this.triggerAnimation(2, false)}
                >
                  <Panel
                    background={colorVars.darkOlive}
                    textAlign="center"
                    text="Downtown is more than a mark on a map. It’s the incubator of one of the world’s greatest cities. Find culinary innovation at the Seaport, innovative educational institutions, half a million square feet of global retail within the Oculus, coastal parks, and more. "
                  />
                </Waypoint>
              </Col>
            </Row>
            <Waypoint
              onEnter={() => this.triggerAnimation(3, true)}
              onLeave={() => this.triggerAnimation(3, false)}
            >
              <SlickSlider
                lazyLoad
                className={
                  !this.state.sections[3] ? 'hidden' : 'animate-reveal-delay-0'
                }
                paths={[
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_1',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_2',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_3',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_4',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_5',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  }
                ]}
              />
            </Waypoint>
            <Waypoint
              onEnter={() => this.triggerAnimation(4, true)}
              onLeave={() => this.triggerAnimation(4, false)}
            >
              <SlickSlider
                lazyLoad
                className={
                  !this.state.sections[4] ? 'hidden' : 'animate-reveal-delay-0'
                }
                paths={[
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_1',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_2',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_3',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_4',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_5',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_6',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  }
                ]}
              />
            </Waypoint>
            <Waypoint
              onEnter={() => this.triggerAnimation(5, true)}
              onLeave={() => this.triggerAnimation(5, false)}
            >
              <SlickSlider
                lazyLoad
                className={
                  !this.state.sections[5] ? 'hidden' : 'animate-reveal-delay-0'
                }
                paths={[
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_1',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_2',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_3',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_4',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_5',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_6',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  }
                ]}
              />
            </Waypoint>
            <Waypoint
              onEnter={() => this.triggerAnimation(6, true)}
              onLeave={() => this.triggerAnimation(6, false)}
            >
              <SlickSlider
                lazyLoad
                className={
                  !this.state.sections[6] ? 'hidden' : 'animate-reveal-delay-0'
                }
                paths={[
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_1',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_2',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_3',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_4',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_5',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_6',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_7',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  }
                ]}
              />
            </Waypoint>
          </Grid>
        </div>
        <div style={{ background: 'white' }}>
          <div className="neighborhood-map-container">
            <MapBox width={this.props.width} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Radium(Neighborhood);
