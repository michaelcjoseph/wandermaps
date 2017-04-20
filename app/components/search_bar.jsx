import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <div className="height-height top-zindex search-bar col-xs-12">
      <i className="fa fa-search fa-2x"></i>
      <FormGroup className="width100">
        <FormControl
          type="text"
          className="search-input"
          value={props.search_value}
          placeholder="Enter text"
          onChange={props.handleSearch}
        />
      </FormGroup>
    </div>
  );
}

export default SearchBar;