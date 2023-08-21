import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    message: {
      options: ["help", "none", "help-character-count", "character-count"],
      control: { type: "select" },
    },
    state: {
      options: ["none", "focused", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    characterCount: "999 / 999",
    showLeadingicon: false,
    helpErrorText: "Help/Error Text",
    showTrailingicon: false,
    message: "help",
    state: "none",
    error: true,
    filled: true,
    className: {},
    text: "Field Label",
    placeholderClassName: {},
  },
};
