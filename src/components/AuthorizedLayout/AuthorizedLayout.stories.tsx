import { MockLink } from "../../Utilities/MockLink/MockLink";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthorizedLayout } from "./AuthorizedLayout";
import { AuthorizedLayoutHeader } from "./AuthorizedLayoutHeader/AuthorizedLayoutHeader";

const meta: Meta<typeof AuthorizedLayoutHeader> = {
  title: "Components/AuthorizedLayout",
  component: AuthorizedLayoutHeader,
};

export default meta;

type Story = StoryObj<typeof AuthorizedLayoutHeader>;

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
    navigationItems: navigationItems,
    LinkComponent: MockLink,
  },
  render: (args) => (
    <>
      <AuthorizedLayout.Root>
        <AuthorizedLayout.Header
          navigationItems={args.navigationItems}
          LinkComponent={args.LinkComponent}
        />
        <AuthorizedLayout.Body>
          <div className="p-4 text-lg">
            <h2 className="text-2xl font-bold text-orange-600">
              Welcome to CorzhUI
            </h2>
            <p className="text-slate-700 mt-2">
              CorzhUI is a versatile component library designed to simplify the
              development of beautiful user interfaces. Here's what you can do:
            </p>
            <ul className="list-disc list-inside mt-4 text-slate-600">
              <li>Build accessible and reusable UI components</li>
              <li>Leverage modern styles with Tailwind CSS</li>
              <li>Streamline your development workflow</li>
            </ul>
          </div>
        </AuthorizedLayout.Body>
      </AuthorizedLayout.Root>
    </>
  ),
};
