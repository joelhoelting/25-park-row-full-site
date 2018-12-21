import React from 'react';

import ExpandIcon from './ExpandIcon';

// Required image width sizes(px): 400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200
const ExpandImage = (props) => {
  
  const styles = {
    main: {
      position: 'relative',
      image: {
        width: '100%',
        maxWidth: '100%',
        display: 'block',
        cursor: 'pointer'
      }
    }
  };

  // Based on the two-column structure of this project (images width will always equal 100% or 50%)
  const width = props.width.replace('%','') / 100;
  const desktop = {
    1200: (1200 * width).toString(),
    1600: (1600 * width).toString(),
    2000: (2000 * width).toString(),
    2400: (2400 * width).toString(),
    2800: (2800 * width).toString(),
    3200: (3200 * width).toString(),
  };

  const { src } = props; 

  const mobileSrcSet = () => {
    let srcSet;
    if (props.noMobile) {
      srcSet = `${src}_400.jpg 400w, ${src}_600.jpg 600w, ${src}_800.jpg 800w, ${src}_1000.jpg 1000w`;
    } else {
      srcSet = `${src}_mobile_400.jpg 400w, ${src}_mobile_600.jpg 600w, ${src}_mobile_800.jpg 800w, ${src}_mobile_1000.jpg 1000w`;
    }
    return srcSet;
  };

  return (
    <div className='gallery-image' style={styles.main} onClick={() => props.toggleCarousel(props.carouselIndex)}>
      <picture>
        <source 
          media='(max-width: 992px)' 
          srcSet={mobileSrcSet()}
        />
        <source 
          media='(min-width: 992px)'
          srcSet={src + '_' + desktop[1200] + '.jpg 1200w, ' + src + '_' + desktop[1600] + '.jpg 1600w, ' + src + '_' + desktop[2000] + '.jpg 2000w, ' + src + '_' + desktop[2400] + '.jpg 2400w, ' + src + '_' + desktop[2800] + '.jpg 2800w, ' + src + '_' + desktop[3200] + '.jpg 3200w'}
        />
        <img style={styles.main.image} />
      </picture>
      <ExpandIcon />
    </div>
  );
};

export default ExpandImage;