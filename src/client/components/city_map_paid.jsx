import React from 'react';
import EmailForm from '../containers/email_form.jsx';

const CityMapPaid = (props) => {
  const getMap = () => {
    return <iframe src={props.map_url} width="100%" height="100%" />;
  };

  const getEmailForm = () => {
    return (
      <EmailForm 
        button_text="Submit" 
        email_subbmitted_text="Verifying email..."
        handleSubmit={props.handleSubmit} />
    );
  };

  const getStripeButton = () => {
    return (
      <div>Stripe Button</div>
    );
  };

  if (props.is_map_paid) {
    return getMap();
  } else {
    return (props.show_stripe_button ? getStripeButton() : getEmailForm());
  }
}

export default CityMapPaid;