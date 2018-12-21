import React, { Component } from 'react';
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      captionActive: false
    };
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        toggleCaption: () => this.setState({
          captionActive: !this.state.captionActive
        })
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;