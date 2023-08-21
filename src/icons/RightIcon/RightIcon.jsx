/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const RightIcon = ({ color = "#007DB8", className }) => {
  return (
    <svg
      className={`right-icon ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_9_1851)">
        <path className="path-2" d="M7.5 9.5L12.5 14.5L17.5 9.5H7.5Z" fill={color} />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_9_1851">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

RightIcon.propTypes = {
  color: PropTypes.string,
};
