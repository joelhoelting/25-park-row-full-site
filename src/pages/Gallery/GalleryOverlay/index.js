import React from 'react';
import Radium from 'radium';
import Slider from 'react-slick';
import Context from 'config/Context';

import { mediaQueries } from 'styles/Global/MediaQueries';
// Math
import { pxToRem } from 'helpers/Math';
// Responsive Images
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';

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
      mounted: false,
      scrolled: false
    };
    this.overlayRef = React.createRef();
  }

  handleClose(context) {
    this.props.toggleCarousel();
    context.toggleVerticalScroll();
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
        }
      },
      carouselImg: {
        maxWidth: '100%',
        maxHeight: '100%',
        height: 'auto',
        width: 'auto'
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
          imageCaption: this.props.carouselArray[this.props.currentIndex]
            .caption,
          imageTitle: this.props.carouselArray[this.props.currentIndex].title
        });
      },
      afterChange: index => {
        this.setState({
          currentSlide: index,
          imageCaption: this.props.carouselArray[index].caption,
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
          <div style={[styles.main, this.props.active ? styles.main.active : null]}>
            <Slider
              style={{ height: '100%' }}
              ref={slider => (this.slider = slider)}
              {...carouselSettings}
            >
              {this.props.carouselArray.map(slide => {
                return (
                  <LargeImage
                    noMobile
                    caption={slide.caption}
                    style={styles.carouselImg}
                    src={slide.src}
                    key={slide.key}
                    width="100%"
                  />
                );
              })}
            </Slider>
            <img
              alt='Gallery close button'
              style={styles.main.close}
              src="/images/icons/close_white.svg"
              onClick={() => this.handleClose(context)}
            />
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Radium(GalleryOverlay);
