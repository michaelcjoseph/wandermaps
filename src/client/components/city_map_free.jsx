import React from 'react';
import EmailForm from '../containers/email_form.jsx';

const CityMapFree = (props) => {
  return (
    <div className="action-section-padding col-xs-12">
      <div className="panel-padding panel-margin white-background col-xs-12">
        <div className="panel-header-padding col-xs-12">
          <h3 className="dark-gray-text fat-font margin0 col-xs-12">
            Email Address
          </h3>
        </div>
        <div className="panel-item-padding col-xs-12">
          <EmailForm 
            button_text="Submit" 
            email_subbmitted_text="Verifying email..."
            handleSubmit={props.handleSubmit} />
        </div>
        <div className="col-xs-12">
          <p className="thin-font light-gray-text col-xs-12">
            Please enter your email address to access the map.
          </p>
        </div>
      </div>
    </div>
  )
};

export default CityMapFree;