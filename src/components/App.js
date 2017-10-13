// modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// styles
import '../styles/App.css';
// components
import Header from './Header';
import SearchBar from './SearchBar';
import Recommendation from './Recommendation';
import SearchResult from './SearchResult';
// redux action creators
import { setButtonStatus } from '../actions/actionCreators';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // call action creator
    this.props.setButtonStatus(!this.props.buttonStatus)
  }

  render() {
    const buttonLabel = this.props.buttonStatus ? "ON" : "OFF";
    return (
      <div className="App">
        <Header />
        <button onClick={this.handleClick}>{buttonLabel}</button>
        <SearchBar />
        <Recommendation />
        <SearchResult />
      </div>
    );
  }
}

// provides access to the redux store
// all things from store we want to use in app
function mapStateToProps(state) {
    return {
        buttonStatus: state.status,
    }
}
// provides access to action creators
// all the action creators we need to use in app
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      setButtonStatus,
    }, dispatch)
}

// conect is the magic word that connects app to redux
export default connect(mapStateToProps, mapDispatchToProps)(App)
