/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Checkbox = ({ showLabel, label = "Label", type, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "unchecked",
    state: stateProp || "default",
  });

  return (
    <div
      className={`checkbox ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="div">
        {["checked", "unchecked"].includes(state.type) && (
          <img
            className="img"
            alt="Checkbox"
            src={
              state.type === "checked" && state.state === "disabled"
                ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/checkbox-12.svg"
                : state.state === "disabled" && state.type === "unchecked"
                ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/checkbox-11.svg"
                : state.state === "default" && state.type === "unchecked"
                ? "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/checkbox-14.svg"
                : "https://generation-sessions.s3.amazonaws.com/5d1eaf3c114c3f72c8b067092630dd48/img/checkbox-13.svg"
            }
          />
        )}

        {state.type === "indeterminate" && (
          <div className={`overlap-group ${state.state}`}>
            <div className="rectangle" />
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default" && state.type === "checked") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "unchecked",
        };
    }
  }

  if (state.state === "default" && state.type === "unchecked") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "checked",
        };
    }
  }

  return state;
}

Checkbox.propTypes = {
  showLabel: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(["indeterminate", "checked", "unchecked"]),
  stateProp: PropTypes.oneOf(["disabled", "default"]),
};
