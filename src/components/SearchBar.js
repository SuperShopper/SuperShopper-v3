import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

  constructor(props) {
    super(props)
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(e) {
  }

  render() {
    const { match } = this.props;
    return (
      <div style={styles}>
        <form>
          <input type='text' value='' name='' placeholder='Search for products'/>
          <Link to='/search'>
            <button style={buttonStyle} type='submit' value='submit' onClick={this.searchHandler}>Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
