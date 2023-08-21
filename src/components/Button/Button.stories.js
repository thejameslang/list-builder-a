import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    style: {
      options: ["primary", "text", "secondary"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["text", "icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLeadingicon: false,
    showTrailingicon: false,
    buttonLabel: "Button",
    size: "large",
    style: "primary",
    state: "disabled",
    type: "text",
    className: {},
  },
};
