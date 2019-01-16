import React from 'react';
import Context from 'config/Context';
import colors from 'styles/Global/Colors';

// Required image width sizes(px): 400, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200
// Required Props: width: 50% or 100%

const LargeImage = (props) => {
  // Function to check if image loads
  const handleLoad = () => {
    props.onLoad();
  };

  let route = window.location.pathname.replace('/', '') || 'home';
  let plusBackground = colors[route].backgroundColor;

  const styles = {
    main: {
      position: 'relative'
    },
    img: {
      width: '100%',
      maxWidth: '100%',
      display: 'block'
    }
  };

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

  const renderCaption = () => {
    if (props.caption) {
      return (
        <Context.Consumer>
          {context => (
            <React.Fragment>
              <svg 
                key={Math.floor((Math.random() * 100) * (Math.random() * 100))} 
                className={context.state.captionActive ? 'caption-plus active' : 'caption-plus'}
                onClick={context.toggleCaption}
                viewBox="0 0 17 17" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g transform="translate(-331.000000, -426.000000)">
                    <g transform="translate(331.000000, 426.000000)">
                      <circle fill={plusBackground} transform="translate(8.500000, 8.500000) rotate(-270.000000) translate(-8.500000, -8.500000) " cx="8.5" cy="8.5" r="8.5"></circle>
                      <polygon fill="#000000" points="9 13.5 9 3.5 8 3.5 8 13.5"></polygon>
                      <polygon fill="#000000" points="13.5 8 3.5 8 3.5 9 13.5 9"></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <div className={context.state.captionActive ? 'caption-main-large active' : 'caption-main-large'}>
                <h5 className='caption'>
                  {props.caption}
                </h5>
              </div>
            </React.Fragment>
          )}
        </Context.Consumer>
      );
    } else {
      return null;
    }
  };

  return (
    <div 
      style={styles.main} 
      className='large-image' 
      ref={props.innerRef ? props.innerRef : null}
    >
      <picture>
        <source 
          media='(max-width: 992px)' 
          srcSet={mobileSrcSet()}
        />
        <source 
          media='(min-width: 992px)'
          srcSet={src + '_' + desktop[1200] + '.jpg 1600w, ' + src + '_' + desktop[1600] + '.jpg 20000w, ' + src + '_' + desktop[2000] + '.jpg 2400w, ' + src + '_' + desktop[2400] + '.jpg 2800w, ' + src + '_' + desktop[2800] + '.jpg 3200w, ' + src + '_' + desktop[3200] + '.jpg 3600w'}
        />
        <img 
          style={styles.img} 
          alt={props.caption} 
          onLoad={props.onLoad ? () => handleLoad() : null}
        />
      </picture>
      {renderCaption()}
    </div>
  );
};

export default LargeImage;