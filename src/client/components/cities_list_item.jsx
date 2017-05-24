import React from 'react';
import { Link } from 'react-router';
import LazyLoadImg from './lazy_load_img.jsx';

const CitiesListItem = (props) => {
  const getMapItemBorder = () => {
    return props.is_mobile ? "cities-list-item-border-mobile" : "cities-list-item-border";
  };

  const getImageClasses = () => {
    return "cities-list-item-img position-relative display-inline-block left0"
  };

  const getImageUrl = () => {
    return ('/img/' + props.item.image);
  };

  const getItemHeight = () => {
    const base_image_width = 600.0;
    const base_image_height = 300.0;

    let item_height;
    if (props.is_mobile) {
      item_height = (props.window_width * base_image_height) / base_image_width;
    } else {
      item_height = ((props.window_width / 4) * base_image_height) / base_image_width;
    }

    return (item_height ? item_height : 180);
  }

  const getComingSoon = () => {
    if (props.item.maps[0].url.length > 0) {
      return "";
    } else {
      return " (Coming Soon)";
    }
  };

  return (
    <Link to={"/" + props.item.id} className="col-xs-12 col-md-6">
      <div className={"cities-list-item display-block position-relative overflow-hidden center-align col-xs-12 " + getMapItemBorder()} >
        <div className="position-relative position0">
          <LazyLoadImg 
            height={getItemHeight()}
            classes={getImageClasses()}
            img_src={getImageUrl()}
            img_alt={props.item.city}
          />
        </div>
        <div className="cities-list-item-text position-absolute center-align width100 zindex1">
          <h1 className="fat-font">{props.item.city}</h1>
          <h4 className="thin-font">{getComingSoon()}</h4>
          <h4 className="thin-font">{props.item.country}</h4>
        </div>
      </div>
    </Link>
  );
}

export default CitiesListItem;