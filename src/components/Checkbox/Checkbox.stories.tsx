import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

export default meta;

type Story = StoryFn<typeof Checkbox>;

export const Basic: Story = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [items, setItems] = useState([
    { id: 1, label: "Option 1", checked: true },
    { id: 2, label: "Option 2", checked: false },
    { id: 3, label: "Option 3", checked: true },
  ]);

  const allChecked = items.every((item) => item.checked);
  const someChecked = items.some((item) => item.checked) && !allChecked;

  const toggleAll = () => {
    setItems((prev) =>
      prev.map((item) => ({ ...item, checked: !allChecked }))
    );
  };

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <StoryWrapper title="Basic Checkbox">
        <div className="flex flex-col gap-4">
          <Checkbox
            checked={checked1}
            onChange={setChecked1}
            label="Accept terms and conditions"
          />
          <Checkbox
            checked={checked2}
            onChange={setChecked2}
            label="Subscribe to newsletter"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Checkbox Sizes">
        <div className="flex flex-col gap-4">
          <Checkbox size="small" label="Small checkbox" />
          <Checkbox size="medium" label="Medium checkbox" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="States">
        <div className="flex flex-col gap-4">
          <Checkbox label="Unchecked" />
          <Checkbox checked label="Checked" />
          <Checkbox indeterminate label="Indeterminate" />
          <Checkbox disabled label="Disabled unchecked" />
          <Checkbox disabled checked label="Disabled checked" />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Indeterminate Example">
        <div className="flex flex-col gap-2">
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={toggleAll}
            label="Select all"
          />
          <div className="ml-6 flex flex-col gap-2">
            {items.map((item) => (
              <Checkbox
                key={item.id}
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </StoryWrapper>
    </>
  );
};
