import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonColorType } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Btn",
    size: "small",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
const colors: ButtonColorType[] = ["blue", "red", "white", "green"];

export const Basic: Story = {
  args: { label: "Button", size: "small" },
  render: (args) => (
    <>
      <StoryWrapper title="Small button">
        {colors.map((color) => {
          return <Button key={color} {...args} color={color} />;
        })}
      </StoryWrapper>
      <StoryWrapper title="Medium button">
        {colors.map((color) => {
          return <Button key={color} {...args} size="medium" color={color} />;
        })}
      </StoryWrapper>
      <StoryWrapper title="Large button">
        {colors.map((color) => {
          return <Button key={color} size="large" color={color} />;
        })}
      </StoryWrapper>
    </>
  ),
};

// TODO
// Implement More options for Button

// export const Outline: Story = {
//   args: {
//     label: "Submit",
//     color: "blue",
//     size: "small",
//     type: "outline"   ------------- maybe something like this?
//   },
//   render: (args) => (
//     <StoryWrapper title="Outline button">
// {
//   colors.map((color) => {
//     return <Button key={color} {...args} color={color} />;
//   });
// }
//     </StoryWrapper>
//   ),
// };
