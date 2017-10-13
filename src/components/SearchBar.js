import React, { Component } from 'react';

const styles = {
  margin: '10px',
}
const buttonStyle = {
  backgroundColor: 'blue',
  border: 'none',
  borderRadius: '2px',
  color: 'white',
  textAlign: 'center',
}

class SearchBar extends Component {
  render() {
    return (
      <div style={styles}>
        <form>
          <input type='text' value='' name='' placeholder='Search for products'/>
          <button style={buttonStyle} type='submit' value='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
