import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import EmailForm from '../containers/email_form.jsx';

const CityMapPaid = (props) => {
  const getHeader = () => {
    return (
      <div className="panel-padding panel-margin panel-border white-background col-xs-12">
        <h2 className="dark-gray-text fat-font margin0 col-xs-12">
          Access Premium Map
        </h2>
      </div>
    );
  };

  const getEmailForm = () => {
    if (props.show_stripe_button) {
      return ( 
        <div className="panel-padding panel-margin white-background col-xs-12">
          <div className="panel-header-padding col-xs-12">
            <h3 className="light-gray-text fat-font margin0 col-xs-12">
              Email Address
            </h3>
          </div>
          <div className="col-xs-12">
            <p className="light-gray-text right-align margin0 col-xs-12">
              {props.user_email}
            </p>
          </div>
        </div>
      );
    } else {
      return (
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
              If you did not previously purchase this map, you'll be asked to
              do so after entering your email address.
            </p>
          </div>
        </div>
      );
    }
  };

  const getStripeButton = () => {
    if (props.show_stripe_button) {
      return (
        <div className="panel-padding panel-margin white-background col-xs-12">
          <div className="panel-header-padding col-xs-12">
            <h3 className="dark-gray-text fat-font margin0 col-xs-12">
              Credit Card Info
            </h3>
          </div>
          <div className="panel-item-padding center-align col-xs-12">
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
              email={props.user_email} />
          </div>
          <div className="col-xs-12">
            <p className="thin-font light-gray-text col-xs-12">
              Once you purchase the map once, you will always have access to it via
              your email address. We only store your email address. For your 
              privacy and security, we do not store any payment information.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="panel-padding panel-margin white-background col-xs-12">
          <div className="col-xs-12">
            <h3 className="light-gray-text fat-font margin0 col-xs-12">
              Credit Card Info
            </h3>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="action-section-padding col-xs-12">
      {getHeader()}
      {getEmailForm()}
      {getStripeButton()}
    </div>
  );
}

export default CityMapPaid;