import React, { Component } from 'react';

import Current from './Current';
import Personal from './Personal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Main extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Current />
          <Personal />
        </div>
      </div>
    )
  }
}