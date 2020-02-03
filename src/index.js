import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';

const rootEl = (
  <>
    <Router>
      <App />
    </Router>
  </>
);

var font = new FontFaceObserver('Open Sans', 'Montserrat');

font
  .load('abcd', 3000)
  .then(() => ReactDOM.render(rootEl, document.getElementById('root')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
