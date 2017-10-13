import React, { Component } from 'react';

const styles = {
  height: '100px',
  width: '100px',
  backgroundColor: 'blue',
  color: 'white',
}

class Product extends Component {
  render() {
    return (
      <div style={styles}>
      <h3>{this.props.title}</h3>
      <p>{this.props.price}</p>
      </div>
    );
  }
}

export default Product;
