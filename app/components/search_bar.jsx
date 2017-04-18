import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <div className="col-xs-12">
      <i className="fa fa-search fa-lg"></i>
      <FormGroup>
        <FormControl
          type="text"
          value={props.search_value}
          placeholder="Enter text"
          onChange={props.handleSearch}
        />
      </FormGroup>
    </div>
  );
}

export default SearchBar;