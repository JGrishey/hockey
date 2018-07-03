import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  render() {
    return (
      <header className='mb-3'>
        <nav className='navbar navbar-light bg-white box-shadow align-items-center justify-content-between'>
          <a className='navbar-brand text-primary' href='/'>Hockey League</a>
          <a className='text-secondary' href='/profile'>Grish x 13</a>
        </nav>
      </header>
    )
  }
}