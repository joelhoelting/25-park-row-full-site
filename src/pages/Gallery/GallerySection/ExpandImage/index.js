import React from 'react';
import Context from 'config/Context';

import ExpandIcon from './ExpandIcon';

// Required image width sizes(px): 400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200
const ExpandImage = (props) => {
  const { caption, carouselIndex, src, isLargeImg, noMobile } = props.imgData;
  
  const styles = {
    main: {
      position: 'relative',
      cursor: 'pointer',
      background: isLargeImg ? 'none' : '#B4C0BE', 
      image: {
        width: isLargeImg ? '100%' : 'auto',
        maxWidth: '100%',
        display: 'block',
        height: !isLargeImg && props.width > 992 ? props.columnHeight : 'auto',
        margin: isLargeImg ? 'none' : '0 auto'
      }
    }
  };

  // Based on the two-column structure of this project (images width will always equal 100% or 50%)
  
  const desktop = {
    1200: '600',
    1600: '800',
    2000: '1000',
    2400: '1200',
    2800: '1400',
    3200: '1600',
  };
  
  const mobileSrcSet = () => {
    let srcSet;
    if (!isLargeImg || noMobile) {
      srcSet = `${src}_400.jpg 400w, ${src}_600.jpg 600w, ${src}_800.jpg 800w, ${src}_1000.jpg 1000w`;
    } else {
      srcSet = `${src}_mobile_400.jpg 400w, ${src}_mobile_600.jpg 600w, ${src}_mobile_800.jpg 800w, ${src}_mobile_1000.jpg 1000w`;
    }
    return srcSet;
  };

  const desktopSrcSet = () => {
    let srcSet;
    if (props.isLarge) {
      srcSet = src + '_' + desktop[1200] + '.jpg 1200w, ' + src + '_' + desktop[1600] + '.jpg 1600w, ' + src + '_' + desktop[2000] + '.jpg 2000w, ' + src + '_' + desktop[2400] + '.jpg 2400w, ' + src + '_' + desktop[2800] + '.jpg 2800w, ' + src + '_' + desktop[3200] + '.jpg 3200w';
    } else {
      srcSet = src + '_' + desktop[1200] + '.jpg 1200w, ' + src + '_' + desktop[1600] + '.jpg 1600w, ' + src + '_' + desktop[2000] + '.jpg 2000w, ' + src + '_' + desktop[2400] + '.jpg 2400w';
    }
    return srcSet;
  };

  const handleToggleCarousel = (index, context) => {
    props.toggleCarousel(index);
    context.toggleVerticalScroll();
  };

  return (
    <Context.Consumer>
      {context => (
        <div 
          className={`gallery-image gallery-image-${carouselIndex}`}
          style={styles.main} 
          onClick={() => handleToggleCarousel(carouselIndex, context)}
        >
          <picture>
            <source 
              media='(max-width: 992px)' 
              srcSet={mobileSrcSet()}
            />
            <source 
              media='(min-width: 992px)'
              srcSet={desktopSrcSet()}
            />
            <img 
              alt={caption}
              style={styles.main.image}
            />
          </picture>
          <ExpandIcon />
        </div>
      )}
    </Context.Consumer>
  );
};

export default ExpandImage;