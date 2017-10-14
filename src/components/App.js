// modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
// styles
import '../styles/App.css';
// components
import Header from './Header';
import SearchBar from './SearchBar';
import ProductList from './ProductList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '/',
      products: [
        { _id: 1, title: 'motor oil', price: '$5.95'},
        { _id: 2, title: 'beach ball', price: '$3,000.00'},
      ],
      productId: '',
    }
  }

  render() {
    const products = this.state.products;
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <Route
          exact path='/'
          render={(props) => <ProductList {...props} products={products} />}
        />
        <Route
          path='/search'
          render={(props) => <ProductList {...props} products={products} />}
        />
      </div>
    );
  }
}

export default App;
