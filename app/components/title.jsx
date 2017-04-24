import React from 'react';
const logo = require('../assets/images/logo.svg');

const Title = (props) => {
  return (
    <div className="position-absolute width100 center-align title col-xs-12">
      <img className="title-logo" src={logo} alt="Wander Maps" />
      <h4 className="thin-font">Neighborhood Guides Crowdsourced from Locals</h4>
    </div>
  );
}

export default Title;