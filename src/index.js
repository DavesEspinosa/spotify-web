import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/Store';

ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalProvider>,
  document.getElementById('root')
);

