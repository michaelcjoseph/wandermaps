import React from 'react';
import CitiesListItem from './cities_list_item.jsx';

const CitiesList = (props) => {
  const searchBarFixedPadding = () => {
    return props.is_mobile ? "" : "padding-for-header";
  };

  const renderMapItem = (item, i) => {
    return (
      <CitiesListItem key={i} item={item} is_mobile={props.is_mobile} />
    )
  };

  return (
    <div className={searchBarFixedPadding() + " col-xs-12"}>
      {props.maps_data.map(renderMapItem)}
    </div>
  );
}

export default CitiesList;