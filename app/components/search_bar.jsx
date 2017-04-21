import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <div className="search-bar width100 top-zindex display-flex flex-vertically-center">
      <i className="fa fa-search fa-2x"></i>
      <FormGroup className="width100 margin0">
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