import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = {};
  const preloadedState = {};
  ReactDOM.render(<Root/>, root);
});
