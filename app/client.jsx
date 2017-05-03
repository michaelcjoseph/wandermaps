import ReactDOM from 'react-dom';
import React from 'react';

import ReactApp from './react_app.jsx';

const renderApp = () => {
  ReactDOM.render(
    <ReactApp />, 
    document.getElementById('main')
  );
};

renderApp();