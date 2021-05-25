import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'jquery/src/jquery';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
