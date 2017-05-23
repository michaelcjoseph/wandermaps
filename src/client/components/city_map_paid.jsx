import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import EmailForm from '../containers/email_form.jsx';

const CityMapPaid = (props) => {
  const getMap = () => {
    return <iframe src={props.map_url} width="100%" height="100%" />;
  };

  const getHeader = () => {
    return (
      props.show_stripe_button 
        ? "Click the button below to purchase the map:"
        : "To access the map, enter your email address below:"
    )
  }

  const getDescription = () => {
    return (
      props.show_stripe_button 
        ? `
          Once you purchase the map once, you will always have access to it via
          your email address. We only store your email address. For your 
          privacy and security, we do not store any payment information.
          `
        : `
          If you did not previously purchase this map, you'll be asked to
          do so after entering your email address.
          `
    )
  }

  const getEmailForm = () => {
    return (
      <div className="action-item-margin col-xs-8 col-xs-offset-2">
        <EmailForm 
          button_text="Submit" 
          email_subbmitted_text="Verifying email..."
          handleSubmit={props.handleSubmit} />
      </div>
    );
  };

  const getStripeButton = () => {
    return (
      <div className="action-item-margin center-align col-xs-12">
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
    return (
      <div className="input-padding center-align col-xs-12">
        <h2 className="col-xs-12">{getHeader()}</h2>
        {props.show_stripe_button ? getStripeButton() : getEmailForm()}
        <p className="col-xs-12">{getDescription()}</p>
      </div>
      
    )
  }
}

export default CityMapPaid;