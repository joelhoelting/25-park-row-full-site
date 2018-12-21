import React from 'react';
import Radium from 'radium';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Responsive Images
import { LargeImage } from 'helpers/Image/ResponsiveImage/_module';

import { mediaQueries } from 'styles/Global/MediaQueries';
import { rem } from 'helpers/Math';

const SlickSlider = (props) => {
  const settings = {
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots'
  };

  // Inline styles
  const styles = {
    main: {
      margin: `${rem(16)} 0`,
      [mediaQueries.phone]: {
        margin: `${rem(32)} 0`
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
    <div style={styles.main}>
      <Slider {...settings}>
        {createSlides()}
      </Slider>
    </div>
  );
};

export default Radium(SlickSlider);