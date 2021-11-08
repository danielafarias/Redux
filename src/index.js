import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  // O Provider Pattern permite a store ter acesso a toda aplicação
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

