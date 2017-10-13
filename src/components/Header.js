import React, { Component } from 'react';

const styles = {
  width: '100%',
  height: '50px',
  backgroundColor: 'blue',
  color: 'white',
}

class Header extends Component {
  render() {
    return (
      <div style={styles}>
        Header Bar
      </div>
    );
  }
}

export default Header;
