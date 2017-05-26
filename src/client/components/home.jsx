import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import FixedSectionPanel from './fixed_section_panel.jsx';
import SearchBar from './search_bar.jsx';
import CitiesList from './cities_list.jsx';

const Home = (props) => {
  const getSecondSectionClasses = () => {
    if (!props.is_mobile) {
      return "second-section-border"
    }
  };

  return (
    <div className="col-xs-12">
      <FixedSectionPanel 
        classes={props.getSectionGridClasses()}
        styles={props.getSectionHeight()}
        is_mobile={props.is_mobile}
        id_link="/#maps"
        parent="home"
        image="logo.svg"
        subtitle="City guides crowdsourced from locals, travelers, blogs, and You*"
        description={`
          *Help contribute to our community! All general city maps are openly 
          editable so that you can add new places or notes to make the next 
          person's experience in that city all the better.`} 
        background_image="/img/svg/world_map.svg" />
      <div 
        id="maps"
        className={"overflow-scroll position-relative " + getSecondSectionClasses() + props.getSectionGridClasses()} 
        style={props.is_mobile ? null : props.getSectionHeight()} >
        <SearchBar 
          is_mobile={props.is_mobile}
          search_value={props.search_value} 
          handleSearch={props.handleSearch} />
        <CitiesList 
          is_mobile={props.is_mobile} 
          maps_data={props.maps_data} 
          window_width={props.window_width} />
      </div>
    </div>
  );
}

export default Home;