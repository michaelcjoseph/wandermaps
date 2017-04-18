import React from 'react';

import Header from './Header.jsx';
import Title from './title.jsx';
import SearchBar from './search_bar.jsx';
import MapsList from './maps_list.jsx';

const Home = (props) => {
  return (
    <div className="col-xs-12">
      <div className="col-xs-12 col-md-6 col-lg-6">
        <Header />
        <Title />
      </div>
      <div className="col-xs-12 col-md-6 col-lg-6">
        <SearchBar />
        <MapsList maps_data={props.maps_data} />
      </div>
    </div>
  );
}

export default Home;