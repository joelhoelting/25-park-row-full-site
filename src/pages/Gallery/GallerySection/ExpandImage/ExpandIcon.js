import React from 'react';
import Radium from 'radium';

import { rem } from 'helpers/Math';

const ExpandIcon = () => {
  const styles = {
    main: {
      enableBackground: 'new 0 0 215.35 215.35',
      position: 'absolute',
      right: 10,
      bottom: 10,
      padding: rem(5),
      cursor: 'pointer',
      fill: '#fff'
    }
  };

  return (
    <svg className='gallery-expand' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40" style={ styles.main } height='50px' width='50px'>
      <g>
        <path className='expand-arrow top-left' d="M6,14.07a1,1,0,0,0,1-1.05V8.57l6.73,6.73a1,1,0,0,0,.74.3,1,1,0,0,0,.74-1.78L8.57,7.09H13A1,1,0,1,0,13,5H6a1,1,0,0,0-1,1v7A1,1,0,0,0,6,14.07Z" />
        <path className='expand-arrow bottom-right' d="M34,25.93A1,1,0,0,0,32.91,27v4.45L26,24.5A1,1,0,0,0,24.5,26l6.93,6.94H27A1,1,0,1,0,27,35h7a1,1,0,0,0,1-1V27A1,1,0,0,0,34,25.93Z" />
        <path className='expand-arrow bottom-left' d="M14,24.5,7.09,31.43V27A1,1,0,1,0,5,27v7a1,1,0,0,0,1,1h7a1,1,0,1,0,0-2.09H8.57L15.5,26A1,1,0,1,0,14,24.5Z" />
        <path className='expand-arrow top-right' d="M34,5H27a1,1,0,1,0,0,2.09h4.45L24.7,13.82a1.06,1.06,0,0,0,0,1.48,1.08,1.08,0,0,0,.74.3,1,1,0,0,0,.74-.3l6.73-6.73V13A1,1,0,1,0,35,13v-7A1,1,0,0,0,34,5Z" />
      </g>
    </svg>
  );
};

export default Radium(ExpandIcon);