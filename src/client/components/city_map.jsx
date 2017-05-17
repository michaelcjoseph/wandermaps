import React from 'react';
import Header from './header.jsx';
import FixedSectionPanel from './fixed_section_panel.jsx';

const CityMap = (props) => {
  const getCityMapFrame = () => {
    return (
      <iframe src={props.route.city_map.url} width="100%" height="100%"></iframe>
    )
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

  const getCityMapBody = () => {
    if (props.route.city_map.url.length > 0) {
      return getCityMapFrame();
    } else {
      return getCityMapUnavailable();
    };
  };

  return (
    <div className="col-xs-12">
      <Header 
        email_form={true} 
        back_button={true} 
        back_route={"/" + props.city.id} />
      <FixedSectionPanel 
        classes={props.getSectionGridClasses()}
        styles={props.getSectionHeight()}
        is_mobile={props.is_mobile}
        id_link={"/" + props.city.id + "/" + props.route.city_map.id + "/#" + props.city.city}
        parent="city"
        title={props.city.city}
        subtitle={props.city.country}
        description={""}
        background_image={"/img/" + props.city.image} />
      <div 
        id={props.city.city}
        className={props.getSecondSectionClasses() + props.getSectionGridClasses()}
        style={props.getSectionHeight()}>
        {getCityMapBody()}
      </div>
    </div>
  );
}

export default CityMap;