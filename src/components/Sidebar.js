import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='col-2'>
        <nav className='nav flex-column' style={{fontSize: '2rem'}}>
          <a className='nav-link text-center border-right border-primary' href='#'>
            <div>
              <span className='fa-fw'>
                <FontAwesomeIcon icon={['far', 'comments']} />
              </span>
            </div>
            Chat
          </a>
        </nav>
      </div>
    )
  }
}