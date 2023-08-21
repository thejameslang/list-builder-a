/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AddCircleOutline } from "../AddCircleOutline";
import "./style.css";

export const Button = ({
  showLeadingicon,
  showTrailingicon,
  buttonLabel = "Button",
  size,
  style,
  state,
  type,
  className,
}) => {
  return (
    <div className={`button ${size} type-1-${type} style-${style} state-${state} ${className}`}>
      {type === "text" && <div className="text-wrapper">{buttonLabel}</div>}

      {type === "icon" && (
        <AddCircleOutline
          addDefaultClassName={`${size === "small" && "class-3"}`}
          className={`${size === "small" ? "class-4" : "class-5"}`}
          overlapGroupClassName={`${size === "small" && "class-2"}`}
          rectangleClassName={`${size === "small" && "class-6"}`}
          shape={
            state === "default" && style === "primary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-16.svg"
              : state === "default" && style === "primary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-15.svg"
              : state === "disabled" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-14.svg"
              : size === "small" && state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-13.svg"
              : size === "small" && state === "default" && ["secondary", "text"].includes(style)
              ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-11.svg"
              : "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/shape-12.svg"
          }
          shapeClassName={`${size === "small" && "class"}`}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  showLeadingicon: PropTypes.bool,
  showTrailingicon: PropTypes.bool,
  buttonLabel: PropTypes.string,
  size: PropTypes.oneOf(["large", "small"]),
  style: PropTypes.oneOf(["primary", "text", "secondary"]),
  state: PropTypes.oneOf(["disabled", "default"]),
  type: PropTypes.oneOf(["text", "icon"]),
};
