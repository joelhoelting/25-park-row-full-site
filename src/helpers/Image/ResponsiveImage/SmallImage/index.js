import React from 'react';
import Context from 'config/Context';

import colors from 'styles/Global/Colors';

// Required image width sizes(px): 400, 600, 800, 1000, 1200
const SmallImage = (props) => {
  let route = window.location.pathname.replace('/', '') || 'home';
  let plusBackground = colors[route].backgroundColor;

  const handleLoad = () => {
    props.onLoad();
  };

  const styles = {
    main: {
      position: 'relative'
    },
    img: {
      display: 'block',
      margin: '0 auto',
      width: props.width ? props.width : '100%'
    }
  };

  

  const mobileSrcSet = () => {
    let srcSet;
    if (props.mobile) {
      srcSet = `${props.src}__mobile_400.jpg 400w, ${props.src}__mobile_600.jpg 600w, ${props.src}__mobile_800.jpg 800w, ${props.src}_mobile_1000.jpg 1000w`;
    } else {
      srcSet = `${props.src}_400.jpg 400w, ${props.src}_600.jpg 600w, ${props.src}_800.jpg 800w, ${props.src}_1000.jpg 1000w`;
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
              <div className={context.state.captionActive ? 'caption-main-small active' : 'caption-main-small'}>
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
    <div style={styles.main} className='small-image' ref={props.innerRef ? props.innerRef : null}>
      <picture>
        <source 
          media='(max-width: 992px)' 
          srcSet={mobileSrcSet()} 
        />
        <source 
          media='(min-width: 992px)'
          srcSet={`${props.src}_600.jpg 1200w, ${props.src}_800.jpg 1600w, ${props.src}_1000.jpg 2000w, ${props.src}_1200.jpg 2400w`} 
        />
        <img 
          alt={props.caption} 
          style={styles.img}
          onLoad={props.onLoad ? () => handleLoad() : null}
        />
      </picture>
      {renderCaption()}
    </div>
  );
};

export default SmallImage;