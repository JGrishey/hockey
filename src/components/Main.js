import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Router>
          <div>
            <Navigation />
            <Route path='/' component={Home} />
          </div>
        </Router>
      </div>
    )
  }
}