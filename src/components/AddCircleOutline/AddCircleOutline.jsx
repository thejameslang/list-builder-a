/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AddCircleOutline = ({
  className,
  shape = "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-4.svg",
  overlapGroupClassName,
  addDefaultClassName,
  rectangleClassName,
  shapeClassName,
}) => {
  return (
    <div className={`add-circle-outline ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <div className={`add-default ${addDefaultClassName}`}>
          <div className={`rectangle-2 ${rectangleClassName}`} />
        </div>
        <img className={`shape ${shapeClassName}`} alt="Shape" src={shape} />
      </div>
    </div>
  );
};

AddCircleOutline.propTypes = {
  shape: PropTypes.string,
};
