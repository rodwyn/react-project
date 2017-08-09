import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutView extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/">Index</Link>
      </div>
    );
  }
}

export { AboutView };
