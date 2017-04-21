import React from 'react';
import maps_data from '../data/maps.json';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      window_width: window.innerWidth,
      window_height: window.innerHeight,
      all_maps_data: maps_data,
      filtered_maps_data: maps_data,
      search_value: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchFilter = this.handleSearchFilter.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  // Once component is loaded, set up actions for resize and scroll
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  // Remove event listeners initialized
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({
      window_width: window.innerWidth,
      window_height: window.innerHeight
    });
  }

  handleSearch(e) {
    var filtered_maps = this.handleSearchFilter( e.target.value );

    this.setState({
      filtered_maps_data: filtered_maps,
      search_value: e.target.value
    });
  }

  handleSearchFilter( filter_value ) {
    var filtered_maps = [];

    for( var i=0; i < this.state.all_maps_data.length; i++ ) {
      if (this.state.all_maps_data[i].city.includes(filter_value) || 
          this.state.all_maps_data[i].country.includes(filter_value)) {
        filtered_maps.push(this.state.all_maps_data[i]);
      }
    }

    return filtered_maps;
  }

  render() {
    return ( 
      <div>
        {React.cloneElement(
          this.props.children, {
            window_width: this.state.window_width,
            window_height: this.state.window_height,
            maps_data: this.state.filtered_maps_data,
            search_value: this.state.search_value,
            handleSearch: this.handleSearch
          }
        )}
      </div>
    )
  }
}

export default Main;