/* eslint react/style-prop-object: 0 */

import React, { Component, Fragment } from 'react';
import Radium, { Style } from 'radium';
import ReactMapboxGl, {
  ZoomControl,
  Marker,
  Layer,
  Feature,
  Popup
} from 'react-mapbox-gl';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick';

import { pxToRem } from 'helpers/Math';
import { globalMediaQueries, mediaQueries } from 'styles/Global/MediaQueries';
import locations from 'data/mapLocations';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZGJveHN0dWRpbyIsImEiOiJjamhheDI4NWIwanA4MzhzMDgwY3VqZGF0In0.l0vqWjSKsR-CtSR_FJcFjA',
  scrollZoom: false
});

const MapBoxCSS = {
  '.mapboxgl-map': {
    border: '1px solid #000'
  },
  '.mapboxgl-popup': {
    width: '40%'
  },
  '.mapboxgl-popup-content': {
    border: '1px solid #000'
  },
  '.mapboxgl-popup-anchor-top .mapboxgl-popup-tip': {
    borderBottomColor: '#000'
  },
  '.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': {
    borderTopColor: '#000'
  },
  '.mapboxgl-popup-anchor-left .mapboxgl-popup-tip': {
    borderRightColor: '#000'
  },
  '.mapboxgl-popup-anchor-right .mapboxgl-popup-tip': {
    borderLeftColor: '#000'
  },
  mediaQueries: {
    [globalMediaQueries.tablet]: {
      '.mapboxgl-popup': {
        width: '250px'
      },
    }
  }
};

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCategory: 'transit',
      activeLocation: undefined,
      center: [-74.007377, 40.711464],
      zoom: this.props.width < 500 ? [13.5] : [15]
    };

    this.mapCategories = {
      'dining': 'Dining',
      'schools': 'Schools, Parks, and Culture',
      'fitness': 'Fitness and Hospitality',
      'shopping': 'Shopping',
      'transit': 'Transit'
    };
  }

  render() {
    const { activeCategory, activeLocation } = this.state;

    const MapBoxInline = {
      main: {
        categoryImg: {
          mobile: {
            height: pxToRem(80),
            margin: '0 auto',
            transition: 'opacity 100ms ease'
          },
          desktop: {
            maxHeight: pxToRem(150),
            display: 'block',
            margin: '0 auto',
            cursor: 'pointer',
            height: '100px',
            [mediaQueries.tablet]: {
              height: 'auto'
            }
          }
        },
        mapPrimaryLogo: {
          boxShadow: '2px 2px 3px rgba(0,0,0,.2)', 
          height: '75px', 
          width: '75px'
        },
        transitMarkers: {
          height: '30px', 
          width: '30px',
          transition: 'all 400ms ease',
          opacity: activeCategory === 'transit' ? '1' : '0',
          visibility: activeCategory === 'transit' ? 'visible' : 'hidden'
        },
        mobileParagraph: {
          fontSize: pxToRem(16),
          textTransform: 'uppercase',
          [mediaQueries.tablet]: {
            fontSize: pxToRem(20)
          }
        },
        popup: {
          img: { 
            margin: '0 auto', 
            display: 'block', 
            maxWidth: '100%' 
          },
          title: { 
            [mediaQueries.tabletLandscape]: {
              width: '200px', 
              marginLeft: 'auto',
              marginRight: 'auto',
            }
          }
        }
      }
    };
    
    const { main } = MapBoxInline;

    // const mtatrainImg = new Image(30,30);
    // mtatrainImg.src = '/images/map/icons/mtatrain.png';
    // const mtatrainImgs = ['mtatrainImgRef', mtatrainImg];

    let circleIcon = {
      'circle-stroke-width': 1,
      'circle-radius': 10,
      'circle-blur': 0.15,
      'circle-stroke-color': 'black',
      'circle-color': '#ffd949'
    };

    const renderFeatures = (featuresArray) => {
      return featuresArray.map((feature, index) => (
        <Feature
          key={index}
          coordinates={feature.coordinates}
          onClick={() => this.setState({ activeLocation: feature })}
        />
      ));
    };

    const renderTransitMarkers = (transitArray) => {
      return transitArray.map((location, idx) => (
        <Marker key={`location_${idx}`} coordinates={location.coordinates} anchor="center">
          <img
            alt={location.title}
            style={main.transitMarkers}
            src={`/images/map/transit/${location.icon}`}
            onClick={() => this.setState({ activeLocation: location })}
          />
        </Marker>
      ));
    };

    const categoryButtonMobile = (category) => {
      return (
        <div key={`mobile-category-${category}`}>
          <img
            alt={`mobile slider for ${category}`}
            style={[main.categoryImg.mobile, {opacity: this.state.activeCategory === category ? 1 : .3}]}
            src={`/images/icons/illustration/${category}.svg`}
          />
          <p 
            className='text-center'
            style={{
              opacity: this.state.activeCategory === category ? 1 : .4,
              textTransform: 'uppercase',
              transition: 'opacity 100ms ease'
            }}
          >
            {category}
          </p>
        </div>
      );
    };

    const categoryButtonDesktop = (category) => {
      return (
        <Col 
          sm={2}
          onClick={() => this.setState({ 
            activeCategory: category, 
            activeLocation: false
          })}
          key={category}
        >
          <img
            alt={`Link to activate ${category} markers`}
            style={main.categoryImg.desktop}
            src={`/images/icons/illustration/${category}${this.state.activeCategory === category ? '' : '_bw'}.svg`}
          />
          <p
            style={{ 
              cursor: 'pointer', 
              fontSize: pxToRem(12), 
              letterSpacing: pxToRem(3), 
              opacity: this.state.activeCategory === category ? 1 : .4
            }} 
            className='text-center uppercase'
          >
            {this.mapCategories[category]}
          </p>
        </Col>
      );
    };

    let originalThis = this;
    let categoryArray = Object.keys(this.mapCategories);

    const sliderSettings = {
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      speed: 250,
      afterChange: (index) => {
        originalThis.setState({ 
          activeCategory: categoryArray[index], 
          activeLocation: false
        });
      }
    };
    
    return (
      <Fragment>
        <Row className='row-extra-margin-top-mobile'>
          <Col sm={12}>
            <MediaQuery maxWidth={992}>
              <h2 className='text-center'>The<br/>Neighborhood<br/> Map</h2> 
            </MediaQuery>
            <MediaQuery minWidth={992}>
              <h2 className='text-center'>The Neighborhood Map</h2> 
            </MediaQuery>
          </Col>
        </Row>
        <MediaQuery maxWidth={767}>
          <Row>
            <Col sm={12} style={{ margin: '20px 0'}}>
              <Slider {...sliderSettings} >
                {Object.keys(this.mapCategories).map(category => categoryButtonMobile(category))}
              </Slider>
            </Col>
          </Row>
        </MediaQuery>
        <Grid fluid>
          <MediaQuery minWidth={768}>
            <Row className="row-extra-margin" top='sm' between='sm'>
              {Object.keys(this.mapCategories).map(category => categoryButtonDesktop(category))}
            </Row>
          </MediaQuery>
          <Row className="neighborhood-map-wrapper">
            <Map
              style='mapbox://styles/dboxstudio/cjlpcgr5l0umi2sqo6h7q5k5k'
              containerStyle={{ height: '100%', width: '100%' }}
              zoom={this.state.zoom}
              center={this.state.center}
              onClick={() => this.setState({ activeLocation: undefined})}
            >
              <Style rules={MapBoxCSS} />
              <ZoomControl position={'top-right'} />
              <Marker coordinates={[-74.007377, 40.711464]} anchor="center">
                <img
                  alt='Primary marker for 25 Park Row building'
                  style={main.mapPrimaryLogo}
                  src="/images/map/25parkrow_primary.png"
                />
              </Marker>
              {activeCategory === 'transit' && renderTransitMarkers(locations['transitMTA'])}
              <Layer type="circle" paint={circleIcon}>
                {activeCategory !== 'transit' ? renderFeatures(locations[activeCategory]) : null}
              </Layer>
              {activeLocation && (
                <Popup coordinates={activeLocation.coordinates}>
                  <h4 className='text-center display-linebreak' style={main.popup.title}>{activeLocation.title}</h4>
                </Popup>
              )}
            </Map>
          </Row>
        </Grid>
      </Fragment>
    );
  }
}

export default Radium(MapBox);
