import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CityMap from '../components/city_map.jsx';

class CityMapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show_modal: false
    };
  }

  render() {
    return (
      <CityMap 
        city={this.props.city}
        city_map={this.props.route.city_map} 
        is_mobile={this.props.is_mobile} 
        getSectionHeight={this.props.getSectionHeight}
        getSecondSectionClasses={this.props.getSecondSectionClasses}
        getSectionGridClasses={this.props.getSectionGridClasses} />
    )
  }
}

export default CityMapContainer;