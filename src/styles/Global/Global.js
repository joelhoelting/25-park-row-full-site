const global = {
  '*': {
    boxSizing: 'border-box',
    fontSmoothing: 'antialiased',
    outline: 0,
    // Prevent elements from being highlighted on mobile
    // '-webkit-touch-callout': 'none',
    // '-webkit-user-select': 'none',
    // '-khtml-user-select': 'none',
    // '-moz-user-select': 'none',
    // '-ms-user-select': 'none',
    // 'user-select': 'none',
    // '-webkit-tap-highlight-color': 'transparent'
  },
  'html, body': {
    width: '100%',
    height: '100%'
  },
  body: {
    margin: 0,
    padding: 0,
    transition: 'background-color 500ms ease-in-out'
  }
};

export default global;