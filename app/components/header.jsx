import React from 'react';
import EmailForm from '../containers/email_form.jsx';

const Header = (props) => {
  return (
    <header className="height-height top-zindex position-relative col-xs-12">
      <div className="right-align col-xs-4">
        <EmailForm />
      </div>
    </header>
  );
}

export default Header;