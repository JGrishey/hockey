import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navigation extends Component {
  render() {
    return (
      <div className='border-bottom border-gray mb-3'>
        <nav className='nav mb-n1'>
          <a className='nav-link active' href='/'>
            Home
          </a>
          <a className='nav-link' href='/'>
            Statistics
          </a>
          <a className='nav-link' href='/'>
            Forum
          </a>
          <a className='nav-link' href='/'>
            Chat
          </a>
        </nav>
      </div>
    )
  }
}