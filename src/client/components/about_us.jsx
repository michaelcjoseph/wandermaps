import React from 'react';
import { Link } from 'react-router';

const AboutUs = (props) => {
  const getBodyTextClasses = () => {
    return "thin-font body-text"
  }

  return (
    <div className="col-xs-12 main-side-padding">
      <div className="right-align">
        <Link to="/">
            <i className="fa fa-times fa-3x close-button"></i>
          </Link>
      </div>
      <div className={"col-xs-12 " + (props.is_mobile ? "" : "text-side-padding")}>
        <h2 className="header-margin center-align fat-font">
          Wander Maps is a collection of city guides for you.
        </h2>
        <p className={getBodyTextClasses()}>
          Wander Maps is a resource and a community for all travelers out
          there. No matter your travel style preference, may it be to embrace
          being a tourist, living like a local, or exploring off the beaten
          path, Wander Maps will have something for you. Our goal is to make
          travel, both planning and on the ground, a little easier and less
          overwhelming.
        </p>
        <p className={getBodyTextClasses()}>
          Each of our city general guides are editable. That means you can add
          new places and notes to existing places. <strong>And we want you to!
          </strong> Our community is built around sharing all the gems you 
          discovered on your own trips to make future travelers experiences
          all the better.
        </p>
        <p className={getBodyTextClasses()}>
          If there's a place that you want a map for we don't have just 
          yet, <a href="mailto:wandermapss@gmail.com?subject=New%20City%20Request">
          let us know!</a> We're constantly adding new cities and new places
          within cities so always check back too. We hope Wander Maps makes
          your travel experiences even better. Happy Traveling!
        </p>
      </div>
    </div>
  )
}

export default AboutUs;