import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Waypoint from 'react-waypoint';
import { Helmet } from 'react-helmet';

import { colorVars } from 'styles/Global/Colors';

import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';
import HomePanel from './HomePanel';
import SalesAddress from './SalesAddress';



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
          ...this.state.animate,
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
        <Helmet>
          <title>25 Park Row | Home</title>
          <meta name="description" content="25 Park Row is a new architectural icon providing unmatched Downtown NYC views from every luxury condominium home over historic City Hall Park." />
        </Helmet>
        <div className={'large-container'}>
          <Grid fluid>
            <Link key="architecture" to={'/architecture'}>
              <Row style={{ minHeight: '20vh'}}>
                <Col className={this.animationString('architectureImg', 0, 0, 'home-column-img')} lg={6}>
                  <LargeImage 
                    src='/images/pages/home/01_architecture' 
                    width='50%' 
                    caption='Link to architecture page'
                    noCaption
                  />
                </Col>
                <Col className={this.animationString('architecturePanel', 1, 1, 'home-column-text')} lg={6}>
                  <HomePanel 
                    background={colorVars.olive} 
                    description={<span>INTRODUCING<br/> A NEW YORK CITY ICON</span>}
                    iconSrc='flower1_bw'
                    title='Architecture'
                  />
                </Col>
              </Row>
            </Link>
            <Link key="interiors" to={'/interiors'}>
              <Row style={{ minHeight: '20vh'}}>
                <Col className={this.animationString('interiorPanel', 3, 3, 'first-lg home-column-text')} lg={6}>
                  <HomePanel 
                    background={colorVars.paleBlue} 
                    description={<span>INTERIORS WORTHY<br/> OF THE VIEW</span>}
                    iconSrc='butterfly_bw'
                    title='Interiors'
                  />
                </Col>
                <Col className={this.animationString('interiorImg', 2, 2, 'first-xs first-sm home-column-img')} lg={6}>
                  <LargeImage 
                    src='/images/pages/home/02_interiors' 
                    width='50%' 
                    caption='Link to interiors page'
                    noCaption
                  />
                </Col>
              </Row>
            </Link>
            <Link key="views" to={'/views'}>
              <Row style={{ minHeight: '20vh'}}>
                <Col className={this.animationString('viewsImg', 1, 2, 'first-xs first-sm home-column-img')} lg={6}>
                  <Waypoint onEnter={() => this.triggerAnimation('viewsImg')} />
                  <LargeImage 
                    src='/images/pages/home/03_views' 
                    width='50%' 
                    caption='Link to views page'
                    noCaption
                  />
                </Col>
                <Col className={this.animationString('viewsPanel', 2, 2, 'first-lg home-column-text')} lg={6}>
                  <Waypoint onEnter={() => this.triggerAnimation('viewsPanel')} />
                  <HomePanel 
                    background={colorVars.grey} 
                    description={<span>PANORAMIC VIEWS <br/> OVER CITY HALL PARK</span>}
                    iconSrc='flower2_bw'
                    title='Views'
                  />
                </Col>
              </Row>
            </Link>
            <Link key="amenities" to={'/amenities'}>
              <Row style={{ minHeight: '20vh'}}>
                <Col className={this.animationString('amenitiesPanel', 2, 2, 'first-lg home-column-text')} lg={6}>
                  <Waypoint onEnter={() => this.triggerAnimation('amenitiesPanel')} />
                  <HomePanel 
                    background={colorVars.forestGreen} 
                    description={<span>THE PARK ROW CLUB</span>}
                    iconSrc='bee_bw'
                    title='Amenities'
                  />
                </Col>
                <Col className={this.animationString('amenitiesImg', 1, 2, 'first-xs first-sm home-column-img')} lg={6}>
                  <Waypoint onEnter={() => this.triggerAnimation('amenitiesImg')} />
                  <LargeImage 
                    src='/images/pages/home/04_amenities' 
                    width='50%'
                    caption='Link to amenities page'
                    noCaption
                  />
                </Col>
              </Row>
            </Link>
            <Link key="neighborhood" to={'/neighborhood'}>
              <Row style={{ minHeight: '20vh'}}>
                <Col className={this.animationString('neighborhoodImg', 1, 2, 'first-xs first-sm home-column-img')} lg={6}>
                  <Waypoint onEnter={() => this.triggerAnimation('neighborhoodImg')} />
                  <LargeImage 
                    src='/images/pages/home/05_neighborhood' 
                    width='50%'
                    caption='Link to neighborhood page'
                    noCaption
                  />
                </Col>
                <Col className={this.animationString('neighborhoodPanel', 2, 2, 'first-lg home-column-text')} lg={6}>
                  <Waypoint onEnter={() => this.triggerAnimation('neighborhoodPanel')} />
                  <HomePanel 
                    background={colorVars.olive} 
                    description={<span>LIVE ON<br/> CITY HALL PARK</span>}
                    iconSrc='flower3_bw'
                    title='Neighborhood'
                  />
                </Col>
              </Row>
            </Link>
          </Grid>
        </div>
        <hr style={{ height: '2px', background: '#000', border: 'none'}} />
        <div className="container">
          <SalesAddress />
        </div>
      </div>
    );
  }
}

export default Radium(Home);