import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
} as Meta;

export default meta;

type Story = StoryFn<typeof Badge>;

export const Basic: Story = () => {
  return (
    <>
      <StoryWrapper title="Solid Badges">
        <div className="flex flex-wrap gap-2">
          <Badge color="gray">Default</Badge>
          <Badge color="red">Error</Badge>
          <Badge color="green">Success</Badge>
          <Badge color="blue">Info</Badge>
          <Badge color="orange">Warning</Badge>
          <Badge color="purple">Special</Badge>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Outline Badges">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" color="gray">Default</Badge>
          <Badge variant="outline" color="red">Error</Badge>
          <Badge variant="outline" color="green">Success</Badge>
          <Badge variant="outline" color="blue">Info</Badge>
          <Badge variant="outline" color="orange">Warning</Badge>
          <Badge variant="outline" color="purple">Special</Badge>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Dot Badges">
        <div className="flex flex-wrap gap-4">
          <Badge variant="dot" color="gray">Offline</Badge>
          <Badge variant="dot" color="red">Busy</Badge>
          <Badge variant="dot" color="green">Online</Badge>
          <Badge variant="dot" color="blue">Away</Badge>
          <Badge variant="dot" color="orange">Idle</Badge>
          <Badge variant="dot" color="purple">Custom</Badge>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Badge Sizes">
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="small" color="blue">Small</Badge>
          <Badge size="medium" color="blue">Medium</Badge>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Usage Examples">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Order Status:</span>
            <Badge color="green">Completed</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-700">User Status:</span>
            <Badge variant="dot" color="green">Active</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Notifications:</span>
            <Badge color="red">3</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-700">Tags:</span>
            <Badge variant="outline" color="blue">React</Badge>
            <Badge variant="outline" color="orange">TypeScript</Badge>
            <Badge variant="outline" color="purple">Tailwind</Badge>
          </div>
        </div>
      </StoryWrapper>
    </>
  );
};
