import React from 'react';

const Title = (props) => {
  const getTitle = () => {
    if (props.parent == "home") {
      return (
        <img className="title-logo" src="/img/svg/logo.svg" alt="Wander Maps" />
      )
    } else {
      return (
        <h1 className="title-subtext fat-font">
          {props.title}
        </h1>
      )
    }
  }

  return (
    <div className="width100">
      <div className="title position-absolute center-align col-xs-12">
        {getTitle()}
        <h4 className="title-subtext thin-font">
          {props.subtitle}
        </h4>
      </div>
      <div className="title-desc position-absolute">
        <p className={props.parent == "home" ? "thin-font" : "fat-font"}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Title;