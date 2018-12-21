import React from 'react';
import Radium from 'radium';

const NotFoundPage = () => {
  const NotFoundPageInline = {
    main: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      zIndex: -1
    }
  };

  return (
    <div style={NotFoundPageInline.main}>
      <h1>404<br/>Page Not Found</h1>
    </div>
  );
};

export default Radium(NotFoundPage);