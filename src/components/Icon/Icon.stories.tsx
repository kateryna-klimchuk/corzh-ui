import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Icon as Icons } from "./Icon";
import { IconType } from "./IconType";

const meta: Meta<typeof Icons> = {
  title: "Assets/Icon",
  component: Icons.DownArrow,
} as Meta;

export default meta;

type Story = StoryFn<React.FunctionComponent<IconType>>;

export const Basic: Story = (
  args: React.JSX.IntrinsicAttributes & IconType
) => (
  <StoryWrapper title="Icons">
    <div className="grid gap-8 grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 mt-4 mx-4">
      {Object.entries(Icons).map(([iconName, Icon], index) => (
        <div key={index} className="flex flex-col items-center">
          <Icon key={JSON.stringify(args)} {...args} />
          <p className="text-sm mt-4">{iconName}</p>
        </div>
      ))}
    </div>
  </StoryWrapper>
);

Basic.args = {
  className: "h-6 w-6",
};
