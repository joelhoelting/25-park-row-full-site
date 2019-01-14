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
import { Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';

import { pxToRem } from 'helpers/Math';
import { mediaQueries } from 'styles/Global/MediaQueries';
import locations from 'data/mapLocations';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZGJveHN0dWRpbyIsImEiOiJjamhheDI4NWIwanA4MzhzMDgwY3VqZGF0In0.l0vqWjSKsR-CtSR_FJcFjA',
  minZoom: 15,
  scrollZoom: false
});

const MapBoxInline = {
  main: {
    categoryImg: {
      maxHeight: pxToRem(150),
      display: 'block',
      margin: '0 auto',
      cursor: 'pointer'
    },
    mapPrimaryLogo: {
      boxShadow: '2px 2px 3px rgba(0,0,0,.2)', 
      height: '75px', 
      width: '75px'
    },
    mobileParagraph: {
      fontSize: pxToRem(16),
      textTransform: 'uppercase',
      [mediaQueries.tablet]: {
        fontSize: pxToRem(20)
      }
    }
  }
};

const { main } = MapBoxInline;

const MapBoxCSS = {
  '.mapboxgl-map': {
    border: '1px solid #000'
  },
  '.mapboxgl-popup': {
    width: '250px'
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
  }
};

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCategory: 'dining',
      activeLocation: undefined
    };

    this.mapCategories = {
      'dining': 'Dining',
      'schools': 'Schools, Parks, and Culture',
      'fitness': 'Fitness and Hospitality',
      'shopping': 'Shopping',
      'transit': 'Transit'
    };
  }

  renderFeatures(featuresArray) {
    return featuresArray.map((feature, index) => (
      <Feature
        key={index}
        coordinates={feature.coordinates}
        onClick={() => this.setState({ activeLocation: feature })}
      />
    ));
  }

  render() {
    const { activeCategory, activeLocation } = this.state;
    let currentFeatures = locations[activeCategory];
    let circleIcon = {
      'circle-stroke-width': 1,
      'circle-radius': 10,
      'circle-blur': 0.15,
      'circle-stroke-color': 'black',
      'circle-color': '#ffd949'
    };

    const categoryButton = (category) => {
      return (
        <Col 
          xs={2}
          onClick={() => this.setState({ 
            activeCategory: category, 
            activeLocation: false
          })}
        >
          <img
            alt={`Link to activate ${category} markers`}
            style={main.categoryImg}
            src={`/images/icons/illustration/${category}${this.state.activeCategory === category ? '' : '_bw'}.svg`}
          />
          <MediaQuery minDeviceWidth={992}>
            <p
              style={{ cursor: 'pointer', fontSize: pxToRem(14), opacity: this.state.activeCategory === category ? 1 : .4 }} 
              className='text-center uppercase'
            >
              {this.mapCategories[category]}
            </p>
          </MediaQuery>
        </Col>
      );
    };
    
    return (
      <Fragment>
        <Row>
          <Col sm={12}>
            <h2 className="text-center">The Neighborhood Map</h2>
          </Col>
        </Row>
        <MediaQuery maxDeviceWidth={991}>
          <Row>
            <Col sm={12}>
              <p
                style={main.mobileParagraph} 
                className="text-center no-margin"
              >
                {this.mapCategories[this.state.activeCategory]}
              </p>
            </Col>
          </Row>
        </MediaQuery>
        <Row className="row-extra-margin-1" top='sm' bottom='xs' between='xs'>
          {Object.keys(this.mapCategories).map(category => categoryButton(category))}
        </Row>
        <Row className="neighborhood-map-wrapper">
          <Map
            style='mapbox://styles/dboxstudio/cjlpcgr5l0umi2sqo6h7q5k5k'
            containerStyle={{ height: '100%', width: '100%' }}
            
            center={[-74.007377, 40.711464]}
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
            {this.props.mapState === null ? null : (
              <Layer type="circle" paint={circleIcon}>
                {this.renderFeatures(currentFeatures)}
              </Layer>
            )}
            {activeLocation && (
              <Popup coordinates={activeLocation.coordinates}>
                <img
                  alt={activeLocation.title}
                  style={{ margin: '0 auto', display: 'block' }}
                  src={activeLocation.thumbnailSrc}
                />
                <div style={{ width: '200px', margin: '0 auto' }}>
                  <h4>{activeLocation.title}</h4>
                  <p style={{ fontSize: '.8rem' }}>{activeLocation.description}</p>
                </div>
              </Popup>
            )}
          </Map>
        </Row>
      </Fragment>
    );
  }
}

export default Radium(MapBox);
