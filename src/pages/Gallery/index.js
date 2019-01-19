import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';

import GallerySection from './GallerySection';
import GalleryOverlay from './GalleryOverlay';

// Media Queries
import { globalMediaQueries } from 'styles/Global/MediaQueries';

// Import Gallery Array
import galleryArray from 'data/gallery';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carousel: {
        active: false,
        currentSlide: 0,
        imageCaption: '',
        imageTitle: ''
      },
      mounted: false
    };

    this.hidden = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }

  toggleCarousel(index) {
    const { carousel } = this.state;

    let currentIndex;
    index === 0 ? (currentIndex = 0) : (currentIndex = index || 0);

    this.setState({
      carousel: {
        active: !carousel.active,
        currentSlide: currentIndex
      }
    });
  }

  updateCurrentSlide = (index, caption, title) => {
    this.setState({
      currentIndex: index,
      imageCaption: caption,
      imageTitle: title
    });
  };

  updateScrollState = () => {
    this.setState({
      scrolled: true
    });
  };

  render() {
    // Generates a carousel based on gallery array
    const carouselArray = (() => {
      const carousel = [];
      let counter = 0;
      galleryArray.forEach(galleryObj => {
        return galleryObj.imgAry.forEach(image => {
          let { src, caption, isLargeImg } = image;
          
          let carouselObj = {
            index: counter,
            title: galleryObj.title,
            src: src,
            caption: caption,
            isLargeImg: isLargeImg,
            key: counter
          };
          carousel.push(carouselObj);
          counter++;
        });
      });
      
      return carousel;
    })();

    const mapGallery = galleryArray.map((section, index) => {
      const { title, imgAry } = section;
      
      return (
        <GallerySection
          key={index}
          title={title}
          imgAry={imgAry}
          toggleCarousel={this.toggleCarousel.bind(this)}
        />
      );
    });

    const stylesCSS = {
      mediaQueries: {
        [globalMediaQueries.tabletLandscape]: {
          '.gallery-image .gallery-expand .expand-arrow.top-left': {
            transform: 'translate(0)',
            transition: 'all 100ms linear'
          },
          '.gallery-image:hover .gallery-expand .expand-arrow.top-left': {
            transform: 'translate(-3px, -3px)'
          },
          '.gallery-image .gallery-expand .expand-arrow.top-right': {
            transform: 'translate(0)',
            transition: 'all 100ms linear'
          },
          '.gallery-image:hover .gallery-expand .expand-arrow.top-right': {
            transform: 'translate(3px, -3px)'
          },
          '.gallery-image .gallery-expand .expand-arrow.bottom-left': {
            transform: 'translate(0)',
            transition: 'all 100ms linear'
          },
          '.gallery-image:hover .gallery-expand .expand-arrow.bottom-left': {
            transform: 'translate(-3px, 3px)'
          },
          '.gallery-image .gallery-expand .expand-arrow.bottom-right': {
            transform: 'translate(0)',
            transition: 'all 100ms linear'
          },
          '.gallery-image:hover .gallery-expand .expand-arrow.bottom-right': {
            transform: 'translate(3px, 3px)'
          }
        }
      }
    };
    return (
      <div>
        <Style rules={{ body: { backgroundColor: this.props.color } }} />
        <Style rules={stylesCSS} />
        <div 
          className={`gallery-container ${!this.state.mounted ? 'hidden' : ''}`}
          style={{ minHeight: !this.state.mounted ? '100vh' : '20vh'}}
        >
          <Row className='mobile-header' style={{ borderBottom: '2px solid black'}}>
            <Col lg={12}>
              <h2 className='text-center'>Gallery</h2>
            </Col>
          </Row>
          <Grid fluid>
            {mapGallery}
          </Grid>
        </div>
        <GalleryOverlay
          active={this.state.carousel.active}
          toggleCarousel={() => this.toggleCarousel()}
          carouselArray={carouselArray}
          currentIndex={this.state.carousel.currentSlide}
          caption={this.state.carousel.caption}
          title={this.state.carousel.title}
          updateCurrentSlide={this.updateCurrentSlide}
        />
      </div>
    );
  }
}

export default Radium(Gallery);
