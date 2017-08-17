import React, { Component } from 'react';
import {CustomMenu} from '../components/CustomMenu';
import { Link } from 'react-router-dom';

class IndexView extends Component {
  render() {
    const menuStructure = [{
      title: 'Item 1'
    }, {
      title: 'Item 2'
    }, {
      title: 'Item 3',
      subitems: [
        {
          title: 'SubItem 1'
        }
        // ,{
        //   title: 'SubItem 2'
        // },{
        //   title: 'SubItem 3'
        // }
      ]
    }];
    return (
      <div>
        <h1>IndexView</h1>
        <Link to="/about">About</Link>
        <Link to="/example01">Example 01</Link>
        <Link to="/mycourses">My Courses</Link>

        <CustomMenu className='menu' items={menuStructure} />
      </div>
    );
  }
}

export { IndexView };
