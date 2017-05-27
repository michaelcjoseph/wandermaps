import React from 'react';

const CityMapFrame = (props) => {
  return (
    <iframe src={props.url} width="100%" height="100%" />
  )
}

export default CityMapFrame;