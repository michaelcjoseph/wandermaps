import ReactDOM from 'react-dom';
import React from 'react';

import App from './app.jsx';

const renderApp = () => {
  ReactDOM.render(
    <App />, 
    document.getElementById('main')
  );
};

renderApp();