import React from 'react';
import { Link } from 'react-router';
import EmailSubscribe from '../containers/email_subscribe.jsx';

const Header = (props) => {
  const getBackButton = () => {
    if (props.back_button) {
      return (
        <Link to={props.back_route} >
          <div className="back-button position-relative">
            <i className="fa fa-arrow-left fa-2x"></i>
          </div>
        </Link>
      )
    }

    return null;
  };

  const getEmailFormHeader = () => {
    return (
      <div className="center-align display-flex flex-vertically-center flex-horizontally-center flex-wrap">
        {getBackButton()}
        <div className="position-relative">
          <p className="header-text"><strong>Don't miss out! Get updates on cities!</strong></p>
        </div>
        <div className="position-relative">
          <EmailSubscribe />
        </div>
      </div>
    )
  }

  const getStandardHeader = () => {
    return (
      <div className="center-align display-flex flex-vertically-center flex-horizontally-center flex-wrap">
        {getBackButton()}
        <img className="header-logo-text" src={"/img/logo-text.svg"} alt="Wander Maps" />
      </div>
    )
  }

  return (
    <header id="header" className="header-nav zindex100 position-fixed col-xs-12">
      {props.email_form ? getEmailFormHeader() : getStandardHeader()}
    </header>
  );
}

export default Header;