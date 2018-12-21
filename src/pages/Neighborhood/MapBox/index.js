import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import ReactMapboxGl, { ZoomControl, Marker, Layer, Feature, Popup } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZGJveHN0dWRpbyIsImEiOiJjamhheDI4NWIwanA4MzhzMDgwY3VqZGF0In0.l0vqWjSKsR-CtSR_FJcFjA',
  minZoom: 15,
  scrollZoom: false
});

const features = [
  {
    title: 'The Woolworth Building',
    coordinates: [-74.009103, 40.712638],
    description: "1913 neo-Gothic skyscraper, once the world's tallest building & still an architectural landmark.",
    thumbnailSrc: '/images/map/thumbnails/woolworth_building.jpg'
  },
  {
    title: 'New York City Hall',
    coordinates: [-74.006021, 40.712822],
    description: "Palatial, circa-1812 government complex housing the mayor's office, the City Council & more.",
    thumbnailSrc: '/images/map/thumbnails/city_hall.jpg'
  },
];

const MapCSS = {
  '.mapboxgl-map': {
    border: '2px solid #000'
  },
  '.mapboxgl-popup': {
    width: '250px',
  },
  '.mapbox-gl-popup-content': {
    border: '2px solid #000'
  }
};

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLocation: undefined
    };
  }

  setActiveLocation(feature) {
    this.setState({ activeLocation: feature });
  }

  renderFeatures() {
    return features.map((feature, index) => (
      <Feature 
        key={index} 
        coordinates={feature.coordinates} 
        onClick={() => this.setActiveLocation(feature)} 
      />
    ));
  }

  render() {
    const yellowPin = new Image(30,30);
    yellowPin.src = '/images/map/yellow_pin.png';
    const images = ['yellowPin', yellowPin];

    const { activeLocation } = this.state;

    return (
      <Map
        style='mapbox://styles/dboxstudio/cjlpcgr5l0umi2sqo6h7q5k5k'
        containerStyle={{
          height: '100%',
          width: '100%'
        }}
        zoom={[16]}
        center={[-74.005894, 40.712472]}
      >
        <Style rules={MapCSS}/>
        <ZoomControl position={'top-right'} />
        <Marker
          coordinates={[-74.007377, 40.711464]}
          anchor='top-left'>
          <img 
            style={{ boxShadow: '2px 2px 3px rgba(0,0,0,.2)'}} 
            src='/images/map/25parkrow_primary.png'
          />
        </Marker>
        <Layer
          style={{ display: 'none'}}
          type='symbol' 
          id='marker'
          layout={{ 'icon-image': 'yellowPin' }}
          images={images}
        >
          {this.renderFeatures()}
        </Layer>
        {activeLocation && (
          <Popup
            coordinates={activeLocation.coordinates}
          >
            <img style={{ margin: '0 auto', display: 'block' }} src={activeLocation.thumbnailSrc} />
            <div style={{ width: '200px', margin: '0 auto'}}>
              <h4>{activeLocation.title}</h4>
              <p style={{ fontSize: '.8rem'}}>{activeLocation.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    );
  }
}

export default Radium(MapBox);