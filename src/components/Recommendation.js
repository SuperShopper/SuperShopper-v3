import React, { Component } from 'react';

const styles = {
  width: '80%',
  height: '200px',
  display: 'inline-block',
  border: '2px solid grey',
  margin: '10px', 
}

class Recommendation extends Component {
  render() {
    return (
      <div style={styles}>
        <p>Recommendation</p>
      </div>
    );
  }
}

export default Recommendation;
