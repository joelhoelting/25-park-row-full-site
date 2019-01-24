import React from 'react';
import Radium from 'radium';
import Slider from 'react-slick';
import Context from 'config/Context';

// import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';
import GalleryOverlayImage from './GalleryOverlayImage';
import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        height: 'auto',
        width: 'auto'
      }}
      onClick={onClick}
    >
      <img
        className='gallery-prev-arrow' 
        alt='Gallery previous arrow'
        src="/images/icons/gallery_left.svg" />
    </div>
  );
};

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        height: 'auto',
        width: 'auto'
      }}
      onClick={onClick}
    >
      <img
        className='gallery-next-arrow' 
        alt='Gallery next arrow'
        src="/images/icons/gallery_right.svg" />
    </div>
  );
};

class GalleryOverlay extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSlide: 0,
    };
  }

  handleClose(event, context) {
    let imageClicked = event.target.classList.contains('gallery-overlay-image');
    let closeBtnClicked = event.target.classList.contains('gallery-close-button');

    if (!imageClicked || closeBtnClicked ) {
      this.props.toggleCarousel();
      context.toggleVerticalScroll();
    } else {
      return;
    }
  }

  render() {
    const styles = {
      main: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        opacity: 0,
        visibility: 'hidden',
        background: 'rgba(0,0,0,.9)',
        transition: 'opacity 500ms ease',
        zIndex: 1000,
        active: {
          opacity: 1,
          visibility: 'visible'
        },
        container: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          imgContainer: {
            width: '100%',
            margin: '0 auto',
            [mediaQueries.tabletLandscape]: {
              width: '80%'
            }
          }
        },
        close: {
          height: '30px',
          width: '30px',
          cursor: 'pointer',
          position: 'absolute',
          top: pxToRem(20),
          right: pxToRem(20)
        },
        captionDiv: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: `0 ${pxToRem(20)}`,
          width: '100%',
          textAlign: 'center'
        }
      },
      navArrows: {
        height: '5%',
        padding: '1%'
      }
    };

    let carouselSettings = {
      dots: false,
      easing: 'ease-in-out',
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.props.currentIndex,
      className: 'gallery-slider',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      onInit: () => {
        this.setState({
          currentSlide: this.props.currentIndex,
          imageTitle: this.props.carouselArray[this.props.currentIndex].title
        });
      },
      afterChange: index => {
        this.setState({
          currentSlide: index,
          imageCaption: this.props.carouselArray[index].imgData.caption,
          imageTitle: this.props.carouselArray[index].title
        });
      }
    };

    // Scroll to clicked slide
    if (this.props.currentIndex !== this.state.currentSlide) {
      this.slider.slickGoTo(this.props.currentIndex, true);
    }
    
    return (
      <Context.Consumer>
        {context => (
          <div
            className='gallery-overlay'
            onClick={(event) => this.handleClose(event, context)}
            style={[styles.main, this.props.active ? styles.main.active : null]}
          >
            <Slider
              style={{ height: '100%' }}
              ref={slider => (this.slider = slider)}
              {...carouselSettings}
            >
              {this.props.carouselArray.map(slide => {
                return (
                  <GalleryOverlayImage
                    noMobile
                    imgData={slide.imgData}
                    key={slide.key}
                  />
                );
              })}
            </Slider>
            <img
              alt='Gallery close button'
              className='gallery-close-button'
              style={styles.main.close}
              src="/images/icons/close_white.svg"
            />
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Radium(GalleryOverlay);
