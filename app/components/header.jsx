import React from 'react';
import EmailForm from '../containers/email_form.jsx';

const Header = (props) => {
  return (
    <header className="header-nav zindex100 position-fixed col-xs-12">
      <div className="center-align display-flex flex-vertically-center flex-horizontally-center">
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