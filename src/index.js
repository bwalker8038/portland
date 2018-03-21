import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Entry Point
 */

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
