import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

// testing store functionality per tutorial
// import { createStore } from 'redux';
// import appButton from './reducers'
// const defaultState = {
//   status: false,
// };
// let store = createStore(appButton);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
