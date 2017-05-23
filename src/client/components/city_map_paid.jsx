import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
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
      <div>
        <StripeCheckout 
          token={props.handleStripePurchase}
          stripeKey="pk_live_CePqZWCB5G6DfdUj6wJudDTj"
          name="Wander Maps"
          description={"Purchase Map: " + props.map_title}
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          panelLabel="Pay"
          amount={props.price}
          currency="USD"
          locale="auto"
          zipCode={true}
          allowRememberMe={true}
          email={props.user_email}
          />
      </div>
    );
  };

  if (props.is_map_paid) {
    return getMap();
  } else {
    return (props.show_stripe_button ? getStripeButton() : getEmailForm());
  }
}

export default CityMapPaid;