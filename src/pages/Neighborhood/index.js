import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';
import { Helmet } from 'react-helmet';
import gaTracker from 'utils/gaTracker';

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
        <Helmet>
          <title>25 Park Row | Neighborhood</title>
          <meta name="description" content="25 Park Row is a 21st century architectural icon providing unmatched downtown NYC views from every condominium over historic City Hall Park." />
        </Helmet>
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
                    caption="25 Park Row's location on City Hall Park offers the best of the New Downtown at every turn."
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
                    mobile={<span> New York<br/> at Your Fingertips</span>}
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
                    mobileText="The New Downtown perfectly combines New York's glamorous past and thrilling present. Fine dining and shopping cluster near Wall Street and One World Trade Center while verdant parks ring Manhattan's southernmost shores and host waterfront biking, picnics, and boating. Endless options for leisure, recreation, culinary exploration, and discovery abound."
                    text={<span>The New Downtown perfectly combines New York&#39;s<br/> glamorous past and thrilling present. Fine dining and shopping cluster near<br/> Wall Street and One World Trade Center while verdant parks ring Manhattan&#39;s<br/> southernmost shores and host waterfront biking, picnics, and boating. Endless options<br/> for leisure, recreation, culinary exploration, and discovery abound.</span>}
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
                      'Nearly every New York City subway line stops within blocks of City Hall Park.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_2',
                    caption:
                      'City Hall Park’s majestic 1870s fountain is the grand centerpiece of the historic greenspace.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_3',
                    caption:
                      'Rockefeller Park’s water views extend to the Statue of Liberty and up the Hudson while its rolling lawns offer space for relaxation and recreation.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_4',
                    caption:
                      'The Seaport Museum tells the story of New York as a port city. Offering boat rides on an 1880s schooner through the harbor.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_park_5',
                    caption:
                      'The South Street Seaport’s Imagination Playground offers whimsical structures for innovative fun.'
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
                      'Eataly NYC Downtown’s Osteria della Pace offers the best of Southern Italian cuisine and the freshest local and imported ingredients.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_2',
                    caption:
                      'Breakfast at Andrew Carmellini’s Little Park includes brioche French toast with roasted figs and sweet kale juice.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_3',
                    caption:
                      'Little Park'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_4',
                    caption:
                      'Michelin-starred local haunt Racines NY offers a oenophile’s dream list of 400+ bottles and a rotating cast of famous chefs.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_5',
                    caption:
                      'Restaurateur Keith McNally’s elegant Augustine harkens back to fin-de-siècle France and serves elevated interpretations of favorite dishes.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_dining_6',
                    caption:
                      'The South Street Seaport is home to a dynamic collection of vendors who serve up their wares in warm weather months.'
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
                      'Fun full-body workouts at Bout Fight Club combine catharsis and cardio.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_2',
                    caption:
                      'The Beekman Hotel is home to one of the city’s best-kept interior secrets—a soaring, and painstakingly restored, 19th century atrium.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_3',
                    caption:
                      'The Beekman Hotel'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_4',
                    caption:
                      'Dynamic city art brings splashes of color to the downtown streetscape.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_5',
                    caption:
                      'The South Street Seaport’s Pier 15 offers 50,000 square feet of lawn and dual-level observation decks overlooking the East River.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_leisure_6',
                    caption:
                      'The Rooftop at Pier 17, with the East River as its backdrop, hosts concerts year-round.'
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
                      '10 Corso Como'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_2',
                    caption:
                      'Milan-based 10 Corso Como brings the pleasures of “slow shopping” to the South Street Seaport.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_3',
                    caption:
                      'Brookfield Place'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_4',
                    caption:
                      'Brookfield Place offers luxury shopping on the north cove of the Hudson River.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_5',
                    caption:
                      'Farm-fresh fruit, vegetables, and baked goods are always on offer at both the City Hall Park Greenmarket and the Greenmarket at Oculus Plaza.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_6',
                    caption:
                      'At 25 Park Row, cookfox architects subtly echoes the architecture of the iconic Woolworth Building’s Art Deco façade.'
                  },
                  {
                    src: '/images/pages/neighborhood/neighborhood_shopping_7',
                    caption:
                      'Elevated boutiques abound in Brookfield Place’s destination for concerts, food, and fashion. '
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

export default gaTracker(Radium(Neighborhood));
