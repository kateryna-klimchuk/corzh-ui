import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./TextArea";
import { useState } from "react";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
} as Meta;

export default meta;

type Story = StoryFn<typeof TextArea>;

export const Basic: Story = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <StoryWrapper title="Default TextArea">
        <div className="w-full max-w-md">
          <TextArea placeholder="Enter your message..." />
        </div>
      </StoryWrapper>

      <StoryWrapper title="With Label and Helper">
        <div className="w-full max-w-md">
          <TextArea
            label="Description"
            placeholder="Describe your product..."
            helperText="Maximum 500 characters"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="With Character Count">
        <div className="w-full max-w-md">
          <TextArea
            label="Bio"
            placeholder="Tell us about yourself..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            showCharCount
            maxLength={200}
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Variants">
        <div className="w-full max-w-md flex flex-col gap-4">
          <TextArea variant="default" placeholder="Default variant" />
          <TextArea variant="success" placeholder="Success variant" />
          <TextArea
            variant="error"
            placeholder="Error variant"
            error="This field is required"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Disabled">
        <div className="w-full max-w-md">
          <TextArea
            disabled
            label="Disabled"
            placeholder="Cannot edit this..."
          />
        </div>
      </StoryWrapper>
    </>
  );
};
