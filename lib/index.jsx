import React from 'react';
import Redux from 'redux';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();
  const preloadedState = {};
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
});
