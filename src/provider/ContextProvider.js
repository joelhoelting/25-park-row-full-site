import React, { Component } from 'react';
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      captionActive: false
    };

    this.body = document.querySelector('body');
  }

  toggleVerticalScroll() {
    let currentOverflowY = this.body.style.overflowY;
    currentOverflowY === 'hidden' ? this.body.style.overflowY = 'visible' : this.body.style.overflowY = 'hidden';
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        toggleCaption: () => this.setState({
          captionActive: !this.state.captionActive
        }),
        toggleVerticalScroll: () => this.toggleVerticalScroll()
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;