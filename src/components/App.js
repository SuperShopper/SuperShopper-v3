// modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// styles
import '../styles/App.css';
// components
import Header from './Header';
import SearchBar from './SearchBar';
import Recommendation from './Recommendation';
import SearchResult from './SearchResult';

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const buttonLabel = this.props.buttonStatus ? "ON" : "OFF";
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <Route exact path='/' component={Recommendation} />
        <Route path='/search' component={SearchResult} />
      </div>
    );
  }
}


export default App;
