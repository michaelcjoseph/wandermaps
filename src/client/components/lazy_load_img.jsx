import React from 'react';
import LazyLoad from 'react-lazy-load';

const LazyLoadImg = (props) => {
  return (
    <LazyLoad height={props.height}>
      <img 
        className={props.classes}
        src={props.img_src}
        alt={props.img_alt}
      />
    </LazyLoad>
  )
}

export default LazyLoadImg;