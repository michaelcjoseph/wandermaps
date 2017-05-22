import React from 'react';
import Reqwest from 'reqwest';
import CityMapPaid from '../components/city_map_paid.jsx';

class PaidMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      is_map_paid: false
    };
  }

  handleEmailFormSubmit(email) {
    this.setState({
      is_map_paid: true
    });
    
    console.log(email);
  }

  render() {
    return (
      <CityMapPaid
        map_url={this.props.map_url} 
        is_map_paid={this.state.is_map_paid} 
        handleSubmit={this.handleEmailFormSubmit.bind(this)} />
    )
  }
}

export default PaidMap;