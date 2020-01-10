import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import gaTracker from 'utils/gaTracker';

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
      mounted: false,
      firstColumnHeight: undefined
    };
  }

  componentDidMount() {
    // Update global width on resize of screen
    window.addEventListener('resize', this.calculateImageHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateImageHeight);
  }

  initialCalculateImageHeight() {
    let firstColumnHeight = document.querySelector('.gallery-image-0').clientHeight;

    setTimeout(() => {
      this.setState({ mounted: true, firstColumnHeight });
    }, 500);
  }

  calculateImageHeight = () => {
    let firstColumnHeight = document.querySelector('.gallery-image-0').clientHeight;

    if (firstColumnHeight) {
      setTimeout(() => {
        this.setState({ firstColumnHeight });
      }, 500);
    }
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
          let carouselObj = {
            index: counter,
            title: galleryObj.title,
            imgData: image,
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
          columnHeight={this.state.firstColumnHeight}
          width={this.props.width}
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
        <Helmet>
          <title>25 Park Row | Gallery</title>
          <meta name="description" content="25 Park Row is a 21st century architectural icon providing unmatched downtown NYC views from every condominium over historic City Hall Park." />
        </Helmet>
        <Style rules={{ body: { backgroundColor: this.props.color } }} />
        <Style rules={stylesCSS} />
        <div 
          className={`gallery-container ${!this.state.mounted ? 'hidden' : ''}`}
          style={{ minHeight: !this.state.mounted ? '100vh' : '20vh'}}
        >
          <Row 
            className='mobile-header border-bottom' 
            style={{ borderBottom: '2px solid black'}}
          >
            <Col lg={12}>
              <h2 className='text-center'>Gallery</h2>
            </Col>
          </Row>
          <Grid fluid onLoad={() => this.initialCalculateImageHeight()}>
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

export default gaTracker(Radium(Gallery));
