import React from 'react';
import maps_data from '../data/maps.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    if (typeof(window) !== 'undefined') {
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    } 
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

  renderChildrenWithProps() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        window_height: this.state.window_height,
        is_mobile: (this.state.window_width <= 991),
        maps_data: this.state.filtered_maps_data,
        search_value: this.state.search_value,
        handleSearch: this.handleSearch
      })
    );

    return childrenWithProps;
  }

  render() {
    return ( 
      <div className="col-xs-12">
        <div className="main-content col-xs-12">
          {this.renderChildrenWithProps()}
        </div>
      </div>
    )
  }
}

export default Main;