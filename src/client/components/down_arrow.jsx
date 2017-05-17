import React from 'react';
import { Link } from 'react-router';

const DownArrow = (props) => {
  const getDownArrow = () => {
    return (
      <div className="down-arrow position-absolute width100 center-align">
        <Link to={props.id_link}>
          <i className="fa fa-chevron-circle-down fa-3x"></i>
        </Link>
      </div>
    )
  }
  
  if (props.is_mobile) {
    return getDownArrow()
  } else {
    return null
  }
}

export default DownArrow;