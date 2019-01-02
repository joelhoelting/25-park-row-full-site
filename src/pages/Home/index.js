import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';

// Project Styles
import { colorVars } from 'styles/Global/Colors';

// Responsive Images
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';

// HomePanel Helper
import HomePanel from './HomePanel';

class Home extends Component {
  constructor(props) {
    super(props);
    
    // Animations via state changes
    this.state = {
      animate: {}
    };
  }
  
  componentDidMount() {
    // After 500ms trigger initial animations
    setTimeout(() => {
      this.setState({
        animate: {
          architectureImg: true,
          architecturePanel: true,
          interiorPanel: true,
          interiorImg: true
        }
      });
    }, 500);
  }

  // Initial Animation Function
  animationString(element, desktopDelay, mobileDelay, classString) {
    let desktopString = `animate-reveal-delay-${desktopDelay}`;
    let mobileString =  `animate-reveal-delay-${mobileDelay}`;
    let variant = this.props.width > 992 ? desktopString : mobileString;
    let trigger = !this.state.animate[element] ? 'hidden' : variant;
    return `${classString} ${trigger}`;
  }

  triggerAnimation(section) {
    this.setState({
      animate: {
        ...this.state.animate,
        [section]: true
      }
    });
  }

  render() {
    return (
      <div>
        <div className={'home-container'}>
          <Grid fluid>
            <Row style={{ minHeight: '20vh'}}>
              <Col className={this.animationString('architectureImg', 0, 0, 'home-column-img')} lg={6}>
                <Link key="architecture" to={'/architecture'}>
                  <LargeImage src='/images/pages/home/01_architecture' width='50%' />
                </Link>
              </Col>
              <Col className={this.animationString('architecturePanel', 1, 1, 'home-column-text')} lg={6}>
                <Link key="architecture" to={'/architecture'}>
                  <HomePanel 
                    background={colorVars.olive} 
                    description={<span>Introducing<br/>a New York City Icon</span>}
                    iconSrc='flower1'
                    title='Architecture'
                  />
                </Link>
              </Col>
            </Row>
            <Row style={{ minHeight: '20vh'}}>
              <Col className={this.animationString('interiorPanel', 3, 3, 'first-lg home-column-text')} lg={6}>
                <Link key="interiors" to={'/interiors'}>
                  <HomePanel 
                    background={colorVars.paleBlue} 
                    description={<span>Highly-crafted <br/>Residence and Timeless<br/>Interiors</span>}
                    iconSrc='butterfly'
                    title='Interiors'
                  />
                </Link>
              </Col>
              <Col className={this.animationString('interiorImg', 2, 2, 'first-xs first-sm home-column-img')} lg={6}>
                <Link key="interiors" to={'/interiors'}>
                  <LargeImage src='/images/pages/home/02_interiors' width='50%' />
                </Link>
              </Col>
            </Row>
            <Row style={{ minHeight: '20vh'}}>
              <Col className={this.animationString('viewsImg', 1, 2, 'first-xs first-sm home-column-img')} lg={6}>
                <Waypoint onEnter={() => this.triggerAnimation('viewsImg')} />
                <Link key="views" to={'/views'}>
                  <LargeImage src='/images/pages/home/03_views' width='50%' />
                </Link>
              </Col>
              <Col className={this.animationString('viewsPanel', 2, 2, 'first-lg home-column-text')} lg={6}>
                <Link key="views" to={'/views'}>
                  <Waypoint onEnter={() => this.triggerAnimation('viewsPanel')} />
                  <HomePanel 
                    background={colorVars.grey} 
                    description={<span>Nullam finibus<br/> auctor nibh gravida</span>}
                    iconSrc='flower2'
                    title='Views'
                  />
                </Link>
              </Col>
            </Row>
            <Row style={{ minHeight: '20vh'}}>
              <Col className={this.animationString('amenitiesPanel', 2, 2, 'first-lg home-column-text')} lg={6}>
                <Link key="amenities" to={'/amenities'}>
                  <Waypoint onEnter={() => this.triggerAnimation('amenitiesPanel')} />
                  <HomePanel 
                    background={colorVars.forestGreen} 
                    description={<span>The Park Row Club<br/>Garden and Dining Terrace</span>}
                    iconSrc='bee'
                    title='Amenities'
                  />
                </Link>
              </Col>
              <Col className={this.animationString('amenitiesImg', 1, 2, 'first-xs first-sm home-column-img')} lg={6}>
                <Waypoint onEnter={() => this.triggerAnimation('amenitiesImg')} />
                <Link key="amenities" to={'/amenities'}>
                  <LargeImage src='/images/pages/home/04_amenities' width='50%'/>
                </Link>
              </Col>
            </Row>
            <Row style={{ minHeight: '20vh'}}>
              <Col className={this.animationString('neighborhoodImg', 1, 2, 'first-xs first-sm home-column-img')} lg={6}>
                <Waypoint onEnter={() => this.triggerAnimation('neighborhoodImg')} />
                <Link key="neighborhood" to={'/neighborhood'}>
                  <LargeImage src='/images/pages/home/05_neighborhood' width='50%'/>
                </Link>
              </Col>
              <Col className={this.animationString('neighborhoodPanel', 2, 2, 'first-lg home-column-text')} lg={6}>
                <Link key="neighborhood" to={'/neighborhood'}>
                  <Waypoint onEnter={() => this.triggerAnimation('neighborhoodPanel')} />
                  <HomePanel 
                    background={colorVars.olive} 
                    description={<span>DOWNTOWN<br/>PRESENT AND FUTURE</span>}
                    iconSrc='flower3'
                    title='Neighborhood'
                  />
                </Link>
              </Col>
            </Row>
          </Grid>
        </div>
        <hr style={{ height: '2px', background: '#000', border: 'none'}} />
        <div className="container">
          <div className='text-center' style={{ padding: '1em 0'}}>
            <h3>25 Park Row Sales Gallery</h3>
            <h3>217 Broadway, Suite 600, New York, NY 10007</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Home);