import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    type: {
      options: ["indeterminate", "checked", "unchecked"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLabel: false,
    label: "Label",
    type: "indeterminate",
    stateProp: "disabled",
    className: {},
  },
};
