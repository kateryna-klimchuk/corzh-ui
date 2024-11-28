import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <>
      <StoryWrapper title="Small button">
        <Button size="small" color="blue" label="Button" />
        <Button size="small" color="red" label="Button" />
        <Button size="small" color="white" label="Button" />
        <Button size="small" color="green" label="Button" />
      </StoryWrapper>
      <StoryWrapper title="Medium button">
        <Button size="medium" color="blue" label="Click Me" />
        <Button size="medium" color="red" label="Click Me" />
        <Button size="medium" color="white" label="Click Me" />
        <Button size="medium" color="green" label="Click Me" />
      </StoryWrapper>
      <StoryWrapper title="Large button">
        <Button size="large" color="blue" label="Submit" />
        <Button size="large" color="red" label="Submit" />
        <Button size="large" color="white" label="Submit" />
        <Button size="large" color="green" label="Submit" />
      </StoryWrapper>
    </>
  ),
};
