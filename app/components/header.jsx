import React from 'react';
import { Link } from 'react-router';
import EmailForm from '../containers/email_form.jsx';

const Header = (props) => {
  const getBackButton = () => {
    if (props.back_button) {
      return (
        <Link to="/">
          <div className="back-button position-relative">
            <i className="fa fa-arrow-left fa-2x"></i>
          </div>
        </Link>
      )
    }

    return null;
  };

  return (
    <header id="header" className="header-nav zindex100 position-fixed col-xs-12">
      <div className="center-align display-flex flex-vertically-center flex-horizontally-center flex-wrap">
        {getBackButton()}
        <div className="position-relative">
          <p className="header-text"><strong>Don't miss out! Get updates on cities!</strong></p>
        </div>
        <div className="position-relative">
          <EmailForm />
        </div>
      </div>
    </header>
  );
}

export default Header;