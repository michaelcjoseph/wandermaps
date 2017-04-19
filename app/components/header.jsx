import React from 'react';
import EmailForm from '../containers/email_form.jsx';

const Header = (props) => {
  return (
    <div className="col-xs-12">
      <p className="col-xs-2">Logo</p>
      <div className="col-xs-4">
        <EmailForm />
      </div>
    </div>
  );
}

export default Header;