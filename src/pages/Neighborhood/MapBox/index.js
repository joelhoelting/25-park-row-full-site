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
import { dining, schools, fitness, shopping } from 'data/mapLocations';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZGJveHN0dWRpbyIsImEiOiJjamhheDI4NWIwanA4MzhzMDgwY3VqZGF0In0.l0vqWjSKsR-CtSR_FJcFjA',
  minZoom: 15,
  scrollZoom: false
});

const MapInline = {
  main: {
    image: {
      maxHeight: pxToRem(150),
      display: 'block',
      margin: '0 auto',
      cursor: 'pointer'
    },
    mobileParagraph: {
      fontSize: pxToRem(20)
    }
  }
};

const { main } = MapInline;

const MapCSS = {
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
      'shopping': 'Shopping'
    };
  }

  renderFeatures(featuresArray) {
    return featuresArray.map((feature, index) => (
      <Feature
        key={index}
        coordinates={feature.coordinates}
        onClick={() => this.setState({ activeLocation: feature })}
        // onMouseEnter={() => this.setState({ activeLocation: feature })}
        // onMouseLeave={() => this.setState({ activeLocation: undefined })}
      />
    ));
  }

  render() {
    const { activeLocation } = this.state;

    let currentFeatures;
    let circleIcon = {
      'circle-stroke-width': 1,
      'circle-radius': 10,
      'circle-blur': 0.15,
      'circle-stroke-color': 'black'
    };

    switch (this.state.activeCategory) {
    case 'dining':
      currentFeatures = dining;
      circleIcon['circle-color'] =  '#787a62';
      break;
    case 'schools':
      currentFeatures = schools;
      circleIcon['circle-color'] =  '#b6c1c1';
      break;
    case 'fitness':
      currentFeatures = fitness;
      circleIcon['circle-color'] =  '#585955';
      break;
    case 'shopping':
      currentFeatures = shopping;
      circleIcon['circle-color'] = '#ffd949';
      break;
    default:
      break;
    }
    
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
        <Row className="row-extra-margin-1" bottom='xs'>
          <Col xs={3}>
            <img
              alt='Link to active dining markers'
              style={main.image}
              src={`/images/icons/illustration/wine_drinker${this.state.activeCategory === 'dining' ? '' : '_bw'}.svg`}
              onClick={() => this.setState({ 
                activeCategory: 'dining', 
                activeLocation: false
              })}
            />
            <MediaQuery minDeviceWidth={992}>
              <p 
                style={{ opacity: this.state.activeCategory === 'dining' ? 1 : .4 }} className='text-center'
              >
                Dining
              </p>
            </MediaQuery>
          </Col>
          <Col xs={3}>
            <img
              alt='Link to active schools, parks and culture markers'
              style={main.image}
              src={`/images/icons/illustration/mom_daughter${this.state.activeCategory === 'schools' ? '' : '_bw'}.svg`}
              onClick={() => this.setState({ 
                activeCategory: 'schools', 
                activeLocation: false
              })}
            />
            <MediaQuery minDeviceWidth={992}>
              <p 
                style={{ opacity: this.state.activeCategory === 'schools' ? 1 : .4 }} 
                className='text-center'
              >
                Schools, Parks, and Culture
              </p>
            </MediaQuery>
          </Col>
          <Col xs={3}>
            <img
              alt='Link to active fitness and hospitality markers'
              style={main.image}
              src={`/images/icons/illustration/dog_walker${this.state.activeCategory === 'fitness' ? '' : '_bw'}.svg`}
              onClick={() => this.setState({ activeCategory: 'fitness', activeLocation: false})}
            />
            <MediaQuery minDeviceWidth={992}>
              <p 
                style={{ opacity: this.state.activeCategory === 'fitness' ? 1 : .4 }} 
                className='text-center'
              >
                Fitness and Hospitality
              </p>
            </MediaQuery>
          </Col>
          <Col xs={3}>
            <img
              alt='Link to active shopping markers'
              style={main.image}
              src={`/images/icons/illustration/wobbly_legs${this.state.activeCategory === 'shopping' ? '' : '_bw'}.svg`}
              onClick={() => this.setState({ activeCategory: 'shopping', activeLocation: false})}
            />
            <MediaQuery minDeviceWidth={992}>
              <p 
                style={{ opacity: this.state.activeCategory === 'shopping' ? 1 : .4 }} 
                className='text-center'
              >
                Shopping
              </p>
            </MediaQuery>
          </Col>
        </Row>
        <Row className="neighborhood-map-wrapper">
          <Map
            style='mapbox://styles/dboxstudio/cjlpcgr5l0umi2sqo6h7q5k5k'
            containerStyle={{ height: '100%', width: '100%' }}
            
            center={[-74.007377, 40.711464]}
            onClick={() => this.setState({ activeLocation: undefined})}
          >
            <Style rules={MapCSS} />
            <ZoomControl position={'top-right'} />
            <Marker coordinates={[-74.007377, 40.711464]} anchor="center">
              <img
                alt='Primary marker for 25 Park Row building'
                style={{ boxShadow: '2px 2px 3px rgba(0,0,0,.2)' }}
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
