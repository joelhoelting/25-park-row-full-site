import React, { Component } from 'react';
import Radium from 'radium';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Responsive Images
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

class SlickSlider extends Component {
  render() {
    const settings = {
      lazyLoad: this.props.lazyLoad ? true : false,
      slidesToShow: 1,
      infinite: true,
      dots: true,
      arrows: false,
      dotsClass: 'slider-dots'
    };
  
    // Inline styles
    const styles = {
      main: {
        margin: `${pxToRem(16)} 0`,
        [mediaQueries.tabletLandscape]: {
          margin: `${pxToRem(64)} 0`,
          position: 'relative'
        },
        img: {
          width: '100%',
          maxWidth: '100%'
        },
        overlay: {
          position: 'absolute',
          width: '50%',
          height: '88%',
          display: 'none',
          [mediaQueries.tabletLandscape]: {
            display: 'initial'
          },
          left: {
            top: 0,
            left: 0,
            cursor: "url('/images/icons/gallery_slider_left.svg') 25 25, auto",
          },
          right: {
            top: 0,
            right: 0,
            cursor: "url('/images/icons//gallery_slider_right.svg') 25 25, auto",
          }
        }
      }
    };

    const createSlides = () => {
      return this.props.paths.map((obj, i) => {
        if (obj.caption) {
          return (
            <LargeImage key={i} src={obj.src} width='100%' caption={obj.caption} />
          );
        } else {
          return (
            <LargeImage key={i} src={obj.src} width='100%' />
          );
        }
      });
    };
    
    return (
      <div 
        style={styles.main} 
        ref={this.props.innerRef ? this.props.innerRef : null}
        className={this.props.className ? this.props.className : ''}
      >
        <Slider ref={c => (this.slider = c)} {...settings}>
          {createSlides()}
        </Slider>
        <div 
          style={[styles.main.overlay, styles.main.overlay.left]} 
          className="left_overlay"
          onClick={() => this.slider.slickPrev()}
        ></div>
        <div 
          style={[styles.main.overlay, styles.main.overlay.right]} 
          className="right_overlay"
          onClick={() => this.slider.slickNext()}
        ></div>
      </div>
    );
  }
}

export default Radium(SlickSlider);