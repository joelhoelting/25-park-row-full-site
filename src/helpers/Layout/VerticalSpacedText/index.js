import React from 'react';

const VerticalSpacedText = (props) => {
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      header: {
        display: 'flex', 
        height: '20%', 
        width: '100%', 
        justifyContent: 'center'
      },
      text: {
        display: 'flex', 
        height: '80%', 
        alignItems: 'flex-end', 
        maxWidth: '600px', 
        textAlign: 'justify'
      }
    }
  };
  const { main } = styles;
  return (
    <div style={main} ref={props.innerRef ? props.innerRef : null}>
      <div style={main.header}>
        <h3 className='text-center'>{props.header}</h3>
      </div>
      <div style={main.text}>
        {props.text ?
          <p>{props.text}</p>
          :
          <p>Vivamus nisl orci, aliquam in quam quis, tincidunt egestas magna. Nulla tellus nunc, egestas eu bibendum eu, malesuada non ligula. Fnuncusce sollicitudin, sapien eget pharetra sagittis, felis mi dignissim velit, pretium accumsan purus lacus vel. Vivamus nisl orci, aliquam in quam quis, tincidunt egestas magna. Nulla tellus nunc, egestas eu bibendum eu, malesuada non ligula. Fusce sollicitudin, sapien eget pharetra sagittis, felis mi dignissim velit, pretium accumsan purus lacus vel.</p>
        }
      </div>
    </div>
  );
};

export default VerticalSpacedText;