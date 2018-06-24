import React from 'react';
import ReactDOM from 'react-dom';

import './styles/custom.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

library.add(faUser, faCircleNotch, faComments);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
