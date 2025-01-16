import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Icon as Icons } from "./Icon";
import { IconType } from "./IconType";

export default {
  title: "Assets/Icon",
  component: Icons.DownArrow,
} as Meta<React.FunctionComponent<IconType>>;

export const States: StoryFn<React.FunctionComponent<IconType>> = (args) => (
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

States.parameters = {
  options: { showPanel: false },
};
States.args = {
  className: "h-6 w-6",
};