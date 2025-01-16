import type { Meta, StoryObj } from "@storybook/react";
import { AuthorizedLayoutRoot } from "../AuthorizedLayout/AuthorizedLayoutRoot/AuthorizedLayoutRoot";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Basic: Story = {
  args: {
    items: [
      {
        name: "Home",
      },
      {
        name: "Companies",
        isActive: true,
      },
      {
        name: "Persons",
      },
      {
        name: "About us",
      },
      {
        name: "Contacts",
      },
    ],
  },
  render: (args) => (
    <AuthorizedLayoutRoot>
      <div className="bg-orange-300">
        <Navigation items={args.items} />
      </div>
    </AuthorizedLayoutRoot>
  ),
};
