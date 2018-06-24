import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Details from './Details';
import Personal from './Personal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <Details />
          <Personal />
        </div>
      </div>
    )
  }
}