import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IndexView extends Component {
  render() {
    return (
      <div>
        <h1>IndexView</h1>
        <Link to="/about">About</Link>
        <Link to="/example01">Example 01</Link>
        <Link to="/mycourses">My Courses</Link>
      </div>
    );
  }
}

export { IndexView };
