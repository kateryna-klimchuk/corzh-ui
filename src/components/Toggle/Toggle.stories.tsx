import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Toggle } from "./Toggle";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
} as Meta;

export default meta;

type Story = StoryFn<typeof Toggle>;

export const Basic: Story = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <>
      <StoryWrapper title="Basic Toggle">
        <div className="flex flex-col gap-4">
          <Toggle
            checked={notifications}
            onChange={setNotifications}
            label="Enable notifications"
          />
          <Toggle
            checked={darkMode}
            onChange={setDarkMode}
            label="Dark mode"
          />
          <Toggle
            checked={autoSave}
            onChange={setAutoSave}
            label="Auto-save"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Toggle Sizes">
        <div className="flex flex-col gap-4">
          <Toggle size="small" label="Small toggle" checked />
          <Toggle size="medium" label="Medium toggle" checked />
          <Toggle size="large" label="Large toggle" checked />
        </div>
      </StoryWrapper>

      <StoryWrapper title="States">
        <div className="flex flex-col gap-4">
          <Toggle label="Unchecked" />
          <Toggle checked label="Checked" />
          <Toggle disabled label="Disabled unchecked" />
          <Toggle disabled checked label="Disabled checked" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Without Label">
        <div className="flex gap-4">
          <Toggle />
          <Toggle checked />
          <Toggle size="large" checked />
        </div>
      </StoryWrapper>
    </>
  );
};
