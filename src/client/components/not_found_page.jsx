import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found col-xs-12">
        <Header back_button={false} email_form={false} />
        <div className="padding-for-header-mobile main-side-padding col-xs-12">
          <h1 className="col-xs-12">Oops!</h1>
          <h2 className="col-xs-12">
            Somehow you ended up on a page that's not supposed to exit.
          </h2>
          <p className="col-xs-12">
            <Link to="/" className="col-xs-12">
              Click here to go to the actual home page of Wander Maps.
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;