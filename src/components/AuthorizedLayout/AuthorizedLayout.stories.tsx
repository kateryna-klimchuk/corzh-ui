import type { Meta, StoryObj } from "@storybook/react";
import { AuthorizedLayoutHeader } from "./AuthorizedLayoutHeader/AuthorizedLayoutHeader";

const meta: Meta<typeof AuthorizedLayoutHeader> = {
  title: "Components/AuthorizedLayout",
  component: AuthorizedLayoutHeader,
  //   args: {},
};

export default meta;

type Story = StoryObj<typeof AuthorizedLayoutHeader>;

export const Basic: Story = {
  //   args: {},
  render: (args) => (
    <>
      <AuthorizedLayoutHeader />
    </>
  ),
};
