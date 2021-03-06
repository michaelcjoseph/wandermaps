import React from 'react';
import CitiesListItem from './cities_list_item.jsx';

const CitiesList = (props) => {
  const searchBarFixedPadding = () => {
    return props.is_mobile ? "" : "padding-for-search-bar";
  };

  const renderMapItem = (item, i) => {
    return (
      <CitiesListItem 
        key={i}
        item={item} 
        is_mobile={props.is_mobile} 
        window_width={props.window_width} />
    )
  };

  return (
    <div className={"col-xs-12 " + searchBarFixedPadding()}>
      {props.maps_data.map(renderMapItem)}
    </div>
  );
}

export default CitiesList;