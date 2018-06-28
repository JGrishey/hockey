import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  render() {
    return (
      <header>
        <a href='/'>
          <h1 className='text-lobster text-center'>HL</h1>
        </a>
      </header>
    )
  }
}