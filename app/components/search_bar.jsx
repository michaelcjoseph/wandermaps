import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const SearchBar = (props) => {
  const isMobileClasses = () => {
    return props.is_mobile ? "search-bar-border-mobile" : "search-bar-border position-fixed";
  };

  return (
    <div className={"search-bar width100 zindex10 display-flex flex-vertically-center " + isMobileClasses()}>
      <i className="fa fa-search fa-2x"></i>
      <FormGroup className="width100 margin0">
        <FormControl
          type="text"
          className="search-input"
          value={props.search_value}
          placeholder="Search Maps"
          onChange={props.handleSearch}
        />
      </FormGroup>
    </div>
  );
}

export default SearchBar;