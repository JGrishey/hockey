import React from 'react';
import ReactDOM from 'react-dom';

import './styles/custom.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSignal, faKeyboard, faComments } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

library.add(faHome, faSignal, faKeyboard, faComments);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
