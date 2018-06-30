import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navigation extends Component {
  render() {
    return (
      <div className='border-bottom border-gray'>
        <nav className='nav mb-n1'>
          <a className='nav-link mr-1 border-bottom border-transparent border-primary bw-2' href='/'>
            Home
          </a>
          <a className='nav-link mr-1 border-bottom border-transparent bw-2' href='/'>
            Statistics
          </a>
          <a className='nav-link mr-1 border-bottom border-transparent bw-2' href='/'>
            Forum
          </a>
          <a className='nav-link mr-1 border-bottom border-transparent bw-2' href='/'>
            Chat
          </a>
        </nav>
      </div>
    )
  }
}