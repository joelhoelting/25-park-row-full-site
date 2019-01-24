import React from 'react';

// Required image width sizes(px): 400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200
const GalleryOverlayImage = (props) => {
  
  const { caption, carouselIndex, isLargeImg, src } = props.imgData;
  const { noMobile } = props;
  
  const styles = {
    main: {
      position: 'relative',
      cursor: 'pointer',
      image: {
        maxWidth: '100%',
        display: 'block',
        maxHeight: '1100px',
        margin: '0 auto'
      }
    }
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
    if (isLargeImg) {
      srcSet = src + '_1200.jpg 1200w, ' + src + '_1600.jpg 1600w, ' + src + '_2000.jpg 2000w, ' + src + '_2400.jpg 2400w, ' + src + '_2800.jpg 2800w, ' + src + '_3200.jpg 3200w';
    } else {
      srcSet = src + '_600.jpg 1200w, ' + src + '_800.jpg 1600w, ' + src + '_1000.jpg 2000w, ' + src + '_1200.jpg 2400w';
    }
    return srcSet;
  };

  return (
    <picture className='gallery-picture'>
      <source 
        media='(max-width: 992px)' 
        srcSet={mobileSrcSet()}
      />
      <source 
        media='(min-width: 992px)'
        srcSet={desktopSrcSet()}
      />
      <img 
        className={`gallery-overlay-image-${carouselIndex} gallery-overlay-image`}
        alt={caption}
        style={styles.main.image}
      />
    </picture>
  );
};

export default GalleryOverlayImage;