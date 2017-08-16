import React, { Component } from 'react';
import {CustomButton} from '../components/CustomButton';

class Example01 extends Component {
  render() {
    return (
      <div>
        <CustomButton type='submit' className='primary' />
      </div>
    );
  }
}

export { Example01 };
