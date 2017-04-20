import React from 'react';

import Header from './Header.jsx';
import Title from './title.jsx';
import SearchBar from './search_bar.jsx';
import MapsList from './maps_list.jsx';

const Home = (props) => {
  const getSectionClasses = () => {
    return "col-xs-12 col-md-6 col-lg-6";
  };

  const getSectionStyle = () => {
    return { height: window.innerHeight + 'px' };
  };

  return (
    <div className="col-xs-12">
      <div className={getSectionClasses()} style={getSectionStyle()}>
        <Header />
        <Title />
      </div>
      <div className={getSectionClasses()}>
        <SearchBar 
          search_value={props.search_value} 
          handleSearch={props.handleSearch} />
        <MapsList maps_data={props.maps_data} />
      </div>
    </div>
  );
}

export default Home;