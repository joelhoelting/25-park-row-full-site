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
      activeCategory: 'dining',
      activeLocation: undefined,
      center: [-74.007377, 40.711464],
      zoom: this.props.width < 500 ? [14] : [15]
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
          maxHeight: pxToRem(150),
          display: 'block',
          margin: '0 auto',
          cursor: 'pointer',
          height: '100px',
          [mediaQueries.tablet]: {
            height: 'auto'
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

    const mtatrainImg = new Image(30,30);
    mtatrainImg.src = '/images/map/icons/mtatrain.png';
    const mtatrainImgs = ['mtatrainImgRef', mtatrainImg];

    // const pathtrainImg = new Image(30,30);
    // pathtrainImg.src = '/images/map/icons/pathtrain.png';
    // const pathtrainImgs = ['pathtrainImgRef', pathtrainImg];

    // const ferryImg = new Image(30,30);
    // ferryImg.src = '/images/map/icons/ferry.png';
    // const ferryImgs = ['ferryImgRef', ferryImg];

    // const heliportImg = new Image(30,30);
    // heliportImg.src = '/images/map/icons/heliport.png';
    // const heliportImgs = ['heliportImgRef', heliportImg];

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

    const categoryButton = (category) => {
      return (
        <Col 
          xs={4} md={2}
          onClick={() => this.setState({ 
            activeCategory: category, 
            activeLocation: false
          })}
          key={category}
        >
          <img
            alt={`Link to activate ${category} markers`}
            style={main.categoryImg}
            src={`/images/icons/illustration/${category}${this.state.activeCategory === category ? '' : '_bw'}.svg`}
          />
          <MediaQuery minWidth={992}>
            <p
              style={{ cursor: 'pointer', fontSize: pxToRem(12), letterSpacing: pxToRem(3), opacity: this.state.activeCategory === category ? 1 : .4 }} 
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
        <Row className="row-extra-margin" top='md' between='md' center='xs'>
          {Object.keys(this.mapCategories).map(category => categoryButton(category))}
        </Row>
        <MediaQuery maxWidth={991}>
          <Row>
            <Col sm={12}>
              <p
                style={main.mobileParagraph} 
                className="text-center"
              >
                {this.mapCategories[this.state.activeCategory]}
              </p>
            </Col>
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
            <Marker coordinates={[-74.011451, 40.711628]} anchor="center">
              <img
                alt='Pathtrain Marker'
                style={main.transitMarkers}
                src="/images/map/icons/pathtrain.png"
                onClick={() => this.setState({ activeLocation: locations.transitPath[0] })}
              />
            </Marker>
            <Marker coordinates={[-74.008714, 40.701094]} anchor="center">
              <img
                alt='Heliport Marker'
                style={main.transitMarkers}
                src="/images/map/icons/heliport.png"
                onClick={() => this.setState({ activeLocation: locations.transitHeliport[0] })}
              />
            </Marker>
            <Marker coordinates={[-74.013126, 40.700921]} anchor="center">
              <img
                alt='Staten Island Ferry Marker'
                style={main.transitMarkers}
                src="/images/map/icons/ferry.png"
                onClick={() => this.setState({ activeLocation: locations.transitFerry[0] })}

              />
            </Marker>
            <Marker coordinates={[-74.011486, 40.700986]} anchor="center">
              <img
                alt='Governer Island Ferry Marker'
                style={main.transitMarkers}
                src="/images/map/icons/ferry.png"
                onClick={() => this.setState({ activeLocation: locations.transitFerry[1] })}

              />
            </Marker>
            <Marker coordinates={[-74.006352, 40.703473]} anchor="center">
              <img
                alt='East River Ferry'
                style={main.transitMarkers}
                src="/images/map/icons/ferry.png"
                onClick={() => this.setState({ activeLocation: locations.transitFerry[2] })}

              />
            </Marker>
            <Marker coordinates={[-74.017663, 40.715060]} anchor="center">
              <img
                alt='New Jersey Ferries'
                style={main.transitMarkers}
                src="/images/map/icons/ferry.png"
                onClick={() => this.setState({ activeLocation: locations.transitFerry[3] })}

              />
            </Marker>
            <Layer
              type='symbol' 
              id='marker'
              layout={{ 'icon-image': 'mtatrainImgRef' }}
              images={mtatrainImgs}
            >
              {activeCategory === 'transit' ? renderFeatures(locations['transitMTA']) : null}
            </Layer>
            {/* <Layer
              type='symbol' 
              id='marker'
              layout={{ 'icon-image': 'pathtrainImgRef' }}
              images={pathtrainImgs}
            >
              {activeCategory === 'transit' ? renderFeatures(locations['transitPath']) : null}
            </Layer> */}
            {/*  <Layer
              type='symbol' 
              id='marker'
              layout={{ 'icon-image': 'pathtrainImgRef' }}
              images={pathtrainImgs}
            >
              {this.state.activeCategory === 'transit' ? renderFeatures(locations['transitPath']) : null}
            </Layer> */}
            {/* <Layer
              type='symbol' 
              id='marker'
              layout={{ 'icon-image': 'heliportImgRef' }}
              images={heliportImgs}
            >
              {this.state.activeCategory === 'transit' ? renderFeatures(locations['transitHeliport']) : null}
            </Layer> */}
            {/* <Layer
              type='symbol' 
              id='marker'
              layout={{ 'icon-image': 'ferryImgRef' }}
              images={ferryImgs}
            >
              {this.state.activeCategory === 'transit' ? renderFeatures(locations['transitFerry']) : null}
            </Layer> */}
            <Layer type="circle" paint={circleIcon}>
              {activeCategory !== 'transit' ? renderFeatures(locations[activeCategory]) : null}
            </Layer>
            {activeLocation && (
              <Popup coordinates={activeLocation.coordinates}>
                {/* <img
                  alt={activeLocation.title}
                  style={main.popup.img}
                  src={activeLocation.thumbnailSrc}
                /> */}
                <h4 className='text-center display-linebreak' style={main.popup.title}>{activeLocation.title}</h4>
              </Popup>
            )}
          </Map>
        </Row>
      </Fragment>
    );
  }
}

export default Radium(MapBox);
