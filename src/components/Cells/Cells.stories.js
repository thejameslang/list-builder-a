import { Cells } from ".";

export default {
  title: "Components/Cells",
  component: Cells,
  argTypes: {
    type: {
      options: [
        "text-link",
        "icon",
        "status",
        "checkbox",
        "number",
        "blank",
        "single-action",
        "caret",
        "text-field",
        "multiple-actions",
        "text",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    pending: false,
    cellText: "Text",
    icon: false,
    secondLine: false,
    type: "text-link",
    className: {},
  },
};
