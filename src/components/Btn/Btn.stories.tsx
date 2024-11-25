import type { Meta, StoryObj } from "@storybook/react";

import { Btn } from "./Btn";

const meta: Meta<typeof Btn> = {
  title: "Components/Btn",
  component: Btn,
  args: {
    label: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Btn size="small" color="red" label="Button" />,
};
