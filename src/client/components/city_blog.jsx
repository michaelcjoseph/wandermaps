import React from 'react';

const CityBlog = (props) => {
  return (
    <div className="city-blog-padding col-xs-12">
      <p className="city-blog-desc col-xs-12">
        {props.city_desc}
      </p>
    </div>
  )
};

export default CityBlog;