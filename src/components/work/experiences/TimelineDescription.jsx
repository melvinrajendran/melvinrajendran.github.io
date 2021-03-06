import React from "react";
import "./TimelineDescription.css";
import Anime from "react-anime";

const TimelineDescription = (props) => {
  let fadeInFromBottom = {
    translateY: [75, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <>
      <Anime {...fadeInFromBottom}>
        <h2>
          <span className="title-text">{props.jobTitle + " @ "}</span>
          {props.name}
        </h2>
        <p className="h5 fw-normal mb-3">
          <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
        </p>
      </Anime>

      <ul className="timeline-ul">
        {props.bullets.map((bullet, index) => {
          return (
            <Anime {...fadeInFromBottom} delay={1000 + index * 250}>
              <li key={index}>{bullet}</li>
            </Anime>
          );
        })}
      </ul>
    </>
  );
};

export default TimelineDescription;
