import React from 'react';
import Radium from 'radium';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Responsive Images
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { pxToRem } from 'helpers/Math';

const SlickSlider = (props) => {
  const settings = {
    lazyLoad: props.lazyLoad ? true : false,
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
        margin: `${pxToRem(64)} 0`
      },
      img: {
        width: '100%',
        maxWidth: '100%'
      }
    }
  };

  const createSlides = () => {
    return props.paths.map((obj, i) => {
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
      ref={props.innerRef ? props.innerRef : null}
      className={props.className ? props.className : ''}
    >
      <Slider {...settings}>
        {createSlides()}
      </Slider>
    </div>
  );
};

export default Radium(SlickSlider);