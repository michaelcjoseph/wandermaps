import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  const getIcon = () => {
    if (!(props.parent == "home")) {
      return (
        <div className="about-us-button col-xs-12">
          <Link to="/">
            <img 
              className=""
              style={ {height: '42px'} }
              src="/img/svg/logo-icon.svg" alt="Wander Maps" />
          </Link>
        </div>
      );
    };

    return null;
  };

  const getAboutUs = () => {
    return(
      <div className="right-align">
        <Link to="/about_us">
          <i className="fa fa-question-circle-o fa-3x about-us-button"></i>
        </Link>
      </div>
    )
  };

  return (
    <div className="col-xs-12">
      <div className="col-xs-6">
        {getIcon()}
      </div>
      <div className="col-xs-6">
        {getAboutUs()}
      </div>
    </div>
  );
}

export default Header;