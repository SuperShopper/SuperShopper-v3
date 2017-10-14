import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

const styles = {
  width: '80%',
  height: '200px',
  display: 'inline-block',
  border: '2px solid grey',
  margin: '10px',
}

class Recommendation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recommendations: [
        { _id: 1, title: 'motor oil', price: '$5.95'},
        { _id: 2, title: 'beach ball', price: '$3,000.00'},
      ]
    }
  }

  componentWillMount() {
    axios.get('/')
    .then(function (response) {
      this.setState((prevState, response) => {
        return {
          recommendations: response,
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {

    const products = this.state.recommendations.map((product, i) => {
      return <Product key={i+'prods'} title={product.title} price={product.price} />
    })

    return (
      <div style={styles}>
        <p>Recommendation</p>
        {products}
      </div>
    );
  }
}

export default Recommendation;
