import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import homeLogo from '../../img/homeIcon.png';

const homeLogo = 'src/img/homeIcon.png';

const styles = {
  width: '100%',
  height: '75px',
  backgroundColor: 'blue',
  color: 'white'
}

const imgStyle = {
  height: '50px',
  width: '50px',
  position: 'absolute',
  left: '10px',
  top: '10px'
}

class Header extends Component {
  
  constructor(props) {
    super(props);
    console.warn('Header Loading..');
    console.log("homeLogo", homeLogo);  
    console.log("__dirname: ", __dirname);
    const myHomeLogo = __dirname + 'src/img/homeIcon.png';
    console.log("myhomeLogo", myHomeLogo);  
  }

  render() {
    return (
      <div style={styles}>
        <Link to='/'>
          <img style={imgStyle} src={homeLogo} />
          </Link>
      </div>
    );
  }
}

export default Header;
