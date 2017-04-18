import React from 'react';

import Title from './title.jsx';
import SearchBar from './search_bar.jsx';
import Maps from './maps.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="col-xs-12">
        <div className="col-xs-12 col-md-6 col-lg-6">
          <Title />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6">
          <SearchBar />
          <Maps />
        </div>
      </div>
    );
  }
}

export default Home;