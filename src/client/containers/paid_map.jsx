import React from 'react';
import Reqwest from 'reqwest';
import CityMapPaid from '../components/city_map_paid.jsx';

class PaidMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  render() {
    return (
      <CityMapPaid />
    )
  }
}

export default PaidMap;