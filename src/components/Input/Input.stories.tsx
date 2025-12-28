import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
} as Meta;

export default meta;

type Story = StoryFn<typeof Input>;

export const Basic: Story = () => {
  return (
    <>
      <StoryWrapper title="Default Input">
        <div className="w-full max-w-md flex flex-col gap-4">
          <Input placeholder="Enter your text..." />
          <Input label="Email" placeholder="email@example.com" type="email" />
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            helperText="Must be at least 8 characters"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Input Sizes">
        <div className="w-full max-w-md flex flex-col gap-4">
          <Input size="small" placeholder="Small input" />
          <Input size="medium" placeholder="Medium input" />
          <Input size="large" placeholder="Large input" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Input Variants">
        <div className="w-full max-w-md flex flex-col gap-4">
          <Input variant="default" placeholder="Default variant" />
          <Input variant="success" placeholder="Success variant" />
          <Input
            variant="error"
            placeholder="Error variant"
            error="This field is required"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Input with Icons">
        <div className="w-full max-w-md flex flex-col gap-4">
          <Input
            leftIcon={<Icon.Search className="w-full h-full" />}
            placeholder="Search..."
          />
          <Input
            rightIcon={<Icon.User className="w-full h-full" />}
            placeholder="Username"
          />
          <Input
            leftIcon={<Icon.Coin className="w-full h-full" />}
            rightIcon={<Icon.Link className="w-full h-full" />}
            placeholder="Amount"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Disabled Input">
        <div className="w-full max-w-md">
          <Input disabled placeholder="Disabled input" label="Disabled" />
        </div>
      </StoryWrapper>
    </>
  );
};
