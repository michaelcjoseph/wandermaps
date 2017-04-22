import './assets/main.scss';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';

class App extends React.Component {
  hashLinkScroll() {
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
        onUpdate={this.hashLinkScroll}
      />
    );
  }
}

export default App;