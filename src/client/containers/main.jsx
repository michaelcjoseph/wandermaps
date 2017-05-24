import React from 'react';
import maps_data from '../data/maps.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      all_maps_data: maps_data,
      filtered_maps_data: maps_data,
      search_value: '',
      prev_path: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchFilter = this.handleSearchFilter.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.getSectionGridClasses = this.getSectionGridClasses.bind(this);
    this.getSectionHeight = this.getSectionHeight.bind(this);
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

  componentWillReceiveProps(next_props) {
    if (next_props.location !== this.props.location) {
      this.setState({ prev_path: this.props.location })
    }
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

  getSectionGridClasses() {
    return " col-xs-12 col-sm-12 col-md-6 col-lg-6 ";
  }

  getSectionHeight() {
    return { height: this.state.window_height + 'px' };
  }

  renderChildrenWithProps() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        prev_path: this.state.prev_path,
        search_value: this.state.search_value,
        window_width: this.state.window_width,
        maps_data: this.state.filtered_maps_data,
        is_mobile: (this.state.window_width <= 991),
        handleSearch: this.handleSearch,
        getSectionGridClasses: this.getSectionGridClasses,
        getSectionHeight: this.getSectionHeight
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