import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
} as Meta;

export default meta;

type Story = StoryFn<typeof Select>;

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "books", label: "Books" },
  { value: "home", label: "Home & Garden", disabled: true },
  { value: "sports", label: "Sports" },
];

export const Basic: Story = () => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  return (
    <>
      <StoryWrapper title="Default Select">
        <div className="w-full max-w-md">
          <Select
            options={countryOptions}
            value={country}
            onChange={setCountry}
            placeholder="Select a country"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="With Label and Helper">
        <div className="w-full max-w-md">
          <Select
            label="Category"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            placeholder="Choose a category"
            helperText="Some categories may be unavailable"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Select Sizes">
        <div className="w-full max-w-md flex flex-col gap-4">
          <Select
            size="small"
            options={countryOptions}
            placeholder="Small select"
          />
          <Select
            size="medium"
            options={countryOptions}
            placeholder="Medium select"
          />
          <Select
            size="large"
            options={countryOptions}
            placeholder="Large select"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Error State">
        <div className="w-full max-w-md">
          <Select
            label="Size"
            options={[
              { value: "s", label: "Small" },
              { value: "m", label: "Medium" },
              { value: "l", label: "Large" },
            ]}
            value={size}
            onChange={setSize}
            error="Please select a size"
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Disabled">
        <div className="w-full max-w-md">
          <Select
            label="Disabled Select"
            options={countryOptions}
            disabled
            placeholder="Cannot select"
          />
        </div>
      </StoryWrapper>
    </>
  );
};
