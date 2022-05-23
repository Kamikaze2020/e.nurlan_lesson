import React from 'react';
import ReactDOM from 'react-dom/client';
import {Global} from './reset-styled';
import App from './components/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <App/>
  </React.StrictMode>
);
