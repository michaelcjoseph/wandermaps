import React from 'react';
import maps_data from '../data/maps.json';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maps_data: maps_data
    };
  }

  render() {
    return ( 
      <div>
        {React.cloneElement(
          this.props.children, {
            maps_data: this.state.maps_data
          }
        )}
      </div>
    )
  }
}

export default Main;