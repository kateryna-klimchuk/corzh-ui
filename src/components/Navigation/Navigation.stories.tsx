import { MockLink } from "../../Utilities/MockLink/MockLink";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthorizedLayoutRoot } from "../AuthorizedLayout/AuthorizedLayoutRoot/AuthorizedLayoutRoot";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

const navigationItems = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Companies",
    isActive: true,
    href: "#",
  },
  {
    label: "Persons",
    href: "#",
  },
  {
    label: "About us",
    href: "#",
  },
  {
    label: "Contacts",
    href: "#",
  },
];

export const Basic: Story = {
  args: {
    items: navigationItems,
    LinkComponent: MockLink,
  },
  render: (args) => (
    <AuthorizedLayoutRoot>
      <div className="bg-orange-300">
        <Navigation items={args.items} LinkComponent={args.LinkComponent} />
      </div>
    </AuthorizedLayoutRoot>
  ),
};
