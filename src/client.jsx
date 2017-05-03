import './static/css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-98306677-1');

class ReactApp extends React.Component {
  onUpdate() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    } else {
      (() => window.scrollTo(0, 0));
    }
  }

  render() {
    return (
      <Router 
        history={browserHistory} 
        routes={routes} 
        onUpdate={this.onUpdate}
      />
    );
  }
}

window.onload = () => {
  ReactDOM.render(
    <ReactApp />, 
    document.getElementById('main')
  );
};