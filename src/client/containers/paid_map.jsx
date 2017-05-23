import React from 'react';
import Reqwest from 'reqwest';
import CityMapPaid from '../components/city_map_paid.jsx';

class PaidMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      user_id: 0,
      show_stripe_button: false,
      is_map_paid: false
    };

    this.handleEmailFormSubmit = this.handleEmailFormSubmit.bind(this);
    this.getUser = this.getUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getPurchasedMap = this.getPurchasedMap.bind(this);
    this.handleStripePurchase = this.handleStripePurchase.bind(this);
  }

  handleEmailFormSubmit(email) {
    this.setState({
      email: email
    });

    this.getUser(email);
  }

  getUser(email) {
    Reqwest({
      url: '/api/emails/' + email,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (user) => {
        if (user.id) {
          this.getPurchasedMap(user.id);
        } else {
          this.addUser(email);
        }
      }
    });
  }

  addUser(email) {
    Reqwest({
      url: '/api/emails',
      method: 'post',
      data: { email: email },
      success: (user) => {
        this.setState({
          user_id: user.id,
          show_stripe_button: true,
          is_map_paid: false
        });

        console.log(email + ' added to list of users.');
      }
    });
  }

  getPurchasedMap(user_id) {
    Reqwest({
      url: '/api/purchased_maps/' + this.props.city + '/' + this.props.map_id + '/' + user_id,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (purchased_map) => {
        if (purchased_map.id) {
          this.setState({
            user_id: user_id,
            show_stripe_button: false,
            is_map_paid: true
          });
        } else {
          this.setState({
            user_id: user_id,
            show_stripe_button: true,
            is_map_paid: false
          });
        }
      }
    });
  }

  handleStripePurchase(token) {
    Reqwest({
      url: '/api/purchased_maps',
      method: 'post',
      data: {
        city: this.props.city,
        city_map_id: this.props.map_id,
        user_id: this.state.user_id,
        user_email: this.state.email,
        stripe_token_id: token.id,
        amount: this.props.price
      },
      success: (purchased_map) => {
        if (purchased_map.id) {
          this.setState({
            show_stripe_button: false,
            is_map_paid: true
          });
        }
      }
    });
  }

  render() {
    return (
      <CityMapPaid
        user_email={this.state.email}
        map_title={this.props.map_title}
        map_url={this.props.map_url} 
        price={this.props.price}
        is_map_paid={this.state.is_map_paid} 
        show_stripe_button={this.state.show_stripe_button}
        handleSubmit={this.handleEmailFormSubmit}
        handleStripePurchase={this.handleStripePurchase} />
    )
  }
}

export default PaidMap;