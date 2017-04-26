import React from 'react';
import Header from './header.jsx';

const CityMap = (props) => {
  const getFrameStyle = () => {
    const header = document.getElementById('header');

    var header_height = props.is_mobile ? 93 : 70;

    if (header) {
      header_height = header.clientHeight
    }

    return { 
      marginTop: header_height + 'px',
      height: props.window_height + 'px' 
    };
  };

  return (
    <div className="col-xs-12">
      <Header back_button={true} />
      <div className={"col-xs-12 position0"} style={getFrameStyle()} >
        <iframe src={props.route.city_map.url} width="100%" height="100%"></iframe>
      </div>
    </div>
  );
}

export default CityMap;