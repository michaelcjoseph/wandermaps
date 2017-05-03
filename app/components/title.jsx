import React from 'react';
const logo = require('../static/img/logo.svg');

const Title = (props) => {
  return (
    <div className="width100">
      <div className="title position-absolute center-align col-xs-12">
        <img className="title-logo" src={logo} alt="Wander Maps" />
        <h4 className="title-subtext thin-font">
          City guides crowdsourced from locals, travelers, blogs, and You*
        </h4>
      </div>
      <div className="title-desc position-absolute">
        <p className="thin-font">
          *Help contribute to our community! All general city maps are openly 
          editable so that you can add new places or notes to make the next 
          person's experience in that city all the better.
        </p>
      </div>
    </div>
  );
}

export default Title;