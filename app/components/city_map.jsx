import React from 'react';
import Header from './header.jsx';

const CityMap = (props) => {
  const getCityMapBodyStyle = () => {
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

  const getCityMapBody = () => {
    if (props.route.city_map.url.length > 0) {
      return getCityMapFrame();
    } else {
      return getCityMapUnavailable();
    };
  };

  const getCityMapFrame = () => {
    return (
      <iframe src={props.route.city_map.url} width="100%" height="100%"></iframe>
    )
  };

  const getCityMapUnavailable = () => {
    return (
      <div className="col-xs-12 center-align">
        <h3>
          This map will be available soon! Subscribe above to be informed when 
          it is ready. 
        </h3>
      </div>
    )
  };

  return (
    <div className="col-xs-12">
      <Header back_button={true} />
      <div className={"col-xs-12 position0"} style={getCityMapBodyStyle()} >
        {getCityMapBody()}
      </div>
    </div>
  );
}

export default CityMap;