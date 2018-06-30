import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-2'>
          <div className='container'>
            <a className='navbar-brand text-primary' href='/'>Hockey League</a>
          </div>
        </nav>
      </header>
    )
  }
}