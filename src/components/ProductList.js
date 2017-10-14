import React, { Component } from 'react';
import Product from './Product';

const styles = {
  width: '80%',
  height: '200px',
  display: 'inline-block',
  border: '2px solid grey',
  margin: '10px',
}

class ProductList extends Component {

  render() {

    const products = this.props.products.map((product) => {
      return <Product title={product.title} price={product.price} />
    })

    return (
      <div style={styles}>
        <p>ProductList</p>
        {products}
      </div>
    );
  }
}

export default ProductList;
