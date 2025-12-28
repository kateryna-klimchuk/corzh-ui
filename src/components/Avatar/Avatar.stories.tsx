import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta = {
  title: "Components/Avatar",
} as Meta;

export default meta;

type Story = StoryFn;

export const Basic: Story = () => {
  return (
    <>
      <StoryWrapper title="Avatar with Image">
        <div className="flex gap-4">
          <Avatar.Root
            src="https://picsum.photos/seed/user1/200"
            alt="User 1"
          />
          <Avatar.Root
            src="https://picsum.photos/seed/user2/200"
            alt="User 2"
          />
          <Avatar.Root
            src="https://picsum.photos/seed/user3/200"
            alt="User 3"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Avatar with Initials">
        <div className="flex gap-4">
          <Avatar.Root name="John Doe" />
          <Avatar.Root name="Jane Smith" />
          <Avatar.Root name="Bob Johnson" />
          <Avatar.Root name="Alice" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Avatar Sizes">
        <div className="flex items-end gap-4">
          <Avatar.Root name="XS" size="xs" />
          <Avatar.Root name="SM" size="sm" />
          <Avatar.Root name="MD" size="md" />
          <Avatar.Root name="LG" size="lg" />
          <Avatar.Root name="XL" size="xl" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Avatar with Status">
        <div className="flex gap-4">
          <Avatar.Root
            src="https://picsum.photos/seed/status1/200"
            status="online"
          />
          <Avatar.Root
            src="https://picsum.photos/seed/status2/200"
            status="away"
          />
          <Avatar.Root
            src="https://picsum.photos/seed/status3/200"
            status="busy"
          />
          <Avatar.Root
            src="https://picsum.photos/seed/status4/200"
            status="offline"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Status with Initials">
        <div className="flex gap-4">
          <Avatar.Root name="John Doe" status="online" />
          <Avatar.Root name="Jane Smith" status="away" />
          <Avatar.Root name="Bob Johnson" status="busy" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Avatar Group">
        <Avatar.Group>
          <Avatar.Root src="https://picsum.photos/seed/g1/200" />
          <Avatar.Root src="https://picsum.photos/seed/g2/200" />
          <Avatar.Root src="https://picsum.photos/seed/g3/200" />
          <Avatar.Root name="John Doe" />
        </Avatar.Group>
      </StoryWrapper>

      <StoryWrapper title="Avatar Group with Max">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm text-slate-500 mb-2">Max 3:</p>
            <Avatar.Group max={3}>
              <Avatar.Root src="https://picsum.photos/seed/m1/200" />
              <Avatar.Root src="https://picsum.photos/seed/m2/200" />
              <Avatar.Root src="https://picsum.photos/seed/m3/200" />
              <Avatar.Root src="https://picsum.photos/seed/m4/200" />
              <Avatar.Root src="https://picsum.photos/seed/m5/200" />
            </Avatar.Group>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-2">Large size, max 4:</p>
            <Avatar.Group max={4} size="lg">
              <Avatar.Root src="https://picsum.photos/seed/l1/200" />
              <Avatar.Root src="https://picsum.photos/seed/l2/200" />
              <Avatar.Root src="https://picsum.photos/seed/l3/200" />
              <Avatar.Root src="https://picsum.photos/seed/l4/200" />
              <Avatar.Root src="https://picsum.photos/seed/l5/200" />
              <Avatar.Root src="https://picsum.photos/seed/l6/200" />
            </Avatar.Group>
          </div>
        </div>
      </StoryWrapper>
    </>
  );
};
