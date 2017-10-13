import React, { Component } from 'react';

const styles = {
  width: '80%',
  height: '200px',
  display: 'inline-block',
  border: '2px solid grey',
  margin: '10px',
}

class SearchResult extends Component {
  render() {
    return (
      <div style={styles}>
        SearchResult
      </div>
    );
  }
}

export default SearchResult;
