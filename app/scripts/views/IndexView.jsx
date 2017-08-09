import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IndexView extends Component {
  render() {
    return (
      <div>
        <h1>IndexView</h1>
        <Link to="/about">About</Link>
        <div>hola world</div>
      </div>
    );
  }
}

export { IndexView };
