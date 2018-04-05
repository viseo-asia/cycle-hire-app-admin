import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './theme/fonts.css';
import './theme/style.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
