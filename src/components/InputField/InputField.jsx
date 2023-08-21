/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputField = ({
  characterCount = "999 / 999",
  showLeadingicon,
  helpErrorText = "Help/Error Text",
  showTrailingicon,
  message,
  state,
  error,
  filled,
  className,
  text = "Field Label",
  placeholderClassName,
}) => {
  return (
    <div className={`input-field ${message} state-1-${state} ${className}`}>
      {!filled && message === "none" && ["none", "disabled"].includes(state) && (
        <div className={`placeholder-2 ${placeholderClassName}`}>{text}</div>
      )}

      {((!filled && message === "help" && state === "disabled") ||
        (filled && message === "none" && state === "none") ||
        (filled && state === "disabled") ||
        (message === "help" && state === "none") ||
        state === "focused") && (
        <>
          <div className={`text-input error-${error} message-${message} state-3-${state} filled-${filled}`}>
            {filled && message === "none" && <>Text Input</>}

            {!filled && message === "none" && <>Placeholder</>}

            {((filled && message === "help" && state === "disabled") ||
              (filled && message === "help" && state === "none") ||
              message === "character-count" ||
              message === "help-character-count" ||
              (message === "help" && state === "focused")) && (
              <>
                <div className="placeholder-4">
                  {!filled && error && <>Placeholder</>}

                  {(state === "disabled" || state === "none" || (error && filled && state === "focused")) && (
                    <>Text Input</>
                  )}

                  {!error && state === "focused" && <div className="field-label-text">{text}</div>}
                </div>
                <div className="field-label">
                  {(error || state === "none" || state === "disabled") && (
                    <div className="field-label-text-2">{text}</div>
                  )}

                  {!error && !filled && <>Placeholder</>}

                  {!error && filled && state === "focused" && <>Text Input</>}
                </div>
              </>
            )}

            {!filled && ["disabled", "none"].includes(state) && <div className="placeholder-3">{text}</div>}
          </div>
          <div className="field-label">
            {["character-count", "help", "none"].includes(message) && (
              <div className={`field-label-text-3 message-1-${message} state-9-${state} error-3-${error}`}>
                {message === "none" && <>{text}</>}

                {message === "help" && <>{helpErrorText}</>}

                {message === "character-count" && <>{characterCount}</>}
              </div>
            )}

            {message === "help-character-count" && (
              <>
                <div className="help-text">
                  <div className={`helper-error error-4-${error}`}>
                    {error && <>Error text</>}

                    {!error && <>Help text</>}
                  </div>
                </div>
                <div className="character-counter">
                  <div className={`character-counter-2 error-5-${error}`}>{characterCount}</div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

InputField.propTypes = {
  characterCount: PropTypes.string,
  showLeadingicon: PropTypes.bool,
  helpErrorText: PropTypes.string,
  showTrailingicon: PropTypes.bool,
  message: PropTypes.oneOf(["help", "none", "help-character-count", "character-count"]),
  state: PropTypes.oneOf(["none", "focused", "disabled"]),
  error: PropTypes.bool,
  filled: PropTypes.bool,
  text: PropTypes.string,
};
