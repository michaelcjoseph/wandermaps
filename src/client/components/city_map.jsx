import React from 'react';
import Header from './header.jsx';
import CityTitle from './city_title.jsx';
import CityBlog from './city_blog.jsx';
import CityMapFrame from './city_map_frame.jsx';
import MapContainer from '../containers/map_container.jsx';

const CityMap = (props) => {
  const getFirstSection = () => {
    return (
      <div 
        className={props.getSectionGridClasses() + props.getOverflowScroll()} 
        style={props.getSectionStyle()} >
        <Header parent="City" />
        <CityTitle 
          city_img={props.city.image}
          city_name={props.route.city_map.title}
          city_country={props.city.country} />
        {props.is_mobile ? null : getCityBlog()}
      </div>
    );
  };

  const getCityBlog = () => {
    return (
      <CityBlog city_desc={props.route.city_map.description} />
    );
  };

  const getSecondSection = () => {
    return (
      <div 
        id={props.city.city}
        className={"gray-background " + props.getSecondSectionClasses() + props.getSectionGridClasses()}
        style={props.getSectionHeight()}>
        {getCityMapBody()}
      </div>
    );
  };

  const getCityMapBody = () => {
    if (props.route.city_map.url.length > 0) {
      const price = (props.route.city_map.price ? props.route.city_map.price * 100 : null);

      return (
        <MapContainer
          city={props.city.id}
          map_title={props.route.city_map.title}
          map_id={props.route.city_map.id}
          map_url={props.route.city_map.url} 
          price={price} />
      );
    } else {
      return getCityMapUnavailable();
    };
  };

  const getCityMapUnavailable = () => {
    return (
      <div className="col-xs-12 center-align padding-for-header">
        <h3 className="padding-for-header title-subtext col-xs-12">
          This map will be available soon! Subscribe above to be informed when 
          it is ready. 
        </h3>
      </div>
    )
  };

  return (
    <div className="col-xs-12">
      {getFirstSection()}
      {getSecondSection()}
    </div>
  );
}

export default CityMap;