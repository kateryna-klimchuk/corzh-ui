import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  //   args: {},
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Basic: Story = {
  args: {
    items: [
      {
        name: "Companies",
        isActive: true,
      },
      {
        name: "Persons",
      },
    ],
  },
  render: (args) => (
    <>
      <Navigation items={args.items} />
    </>
  ),
};
