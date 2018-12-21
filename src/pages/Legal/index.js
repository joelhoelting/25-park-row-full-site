import React from 'react';
import Radium, {Style} from 'radium';

const Legal = (props) => {
  return (
    <div>
      <Style rules={{'body': {backgroundColor: props.color}}}/>
    </div>
  );
};

export default Radium(Legal);