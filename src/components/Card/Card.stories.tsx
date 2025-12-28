import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta = {
  title: "Components/Card",
} as Meta;

export default meta;

type Story = StoryFn;

export const Basic: Story = () => {
  return (
    <>
      <StoryWrapper title="Basic Card">
        <div className="w-full max-w-sm">
          <Card.Root>
            <Card.Body>
              <h3 className="text-lg font-semibold text-slate-700">
                Simple Card
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                This is a basic card with just a body section.
              </p>
            </Card.Body>
          </Card.Root>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Card with Header and Footer">
        <div className="w-full max-w-sm">
          <Card.Root>
            <Card.Header>
              <h3 className="text-lg font-semibold text-slate-700">
                Card Title
              </h3>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-slate-500">
                This card has a header, body, and footer section. You can use
                these sections to organize your content effectively.
              </p>
            </Card.Body>
            <Card.Footer>
              <div className="flex gap-2">
                <Button label="Cancel" color="white" size="small" />
                <Button label="Save" color="green" size="small" />
              </div>
            </Card.Footer>
          </Card.Root>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Card with Image">
        <div className="w-full max-w-sm">
          <Card.Root hoverable>
            <Card.Image
              src="https://picsum.photos/seed/product/400/300"
              alt="Product"
            />
            <Card.Body>
              <h3 className="text-lg font-semibold text-slate-700">
                Product Name
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                A beautiful product description goes here.
              </p>
              <p className="text-lg font-bold text-orange-500 mt-2">$99.99</p>
            </Card.Body>
          </Card.Root>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Hoverable Cards">
        <div className="flex gap-4">
          <Card.Root hoverable className="w-48">
            <Card.Body>
              <h4 className="font-medium text-slate-700">Hover me</h4>
              <p className="text-xs text-slate-500 mt-1">
                Interactive card
              </p>
            </Card.Body>
          </Card.Root>
          <Card.Root hoverable className="w-48">
            <Card.Body>
              <h4 className="font-medium text-slate-700">Hover me too</h4>
              <p className="text-xs text-slate-500 mt-1">
                Also interactive
              </p>
            </Card.Body>
          </Card.Root>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Clickable Card">
        <div className="w-full max-w-sm">
          <Card.Root onClick={() => alert("Card clicked!")}>
            <Card.Body>
              <h3 className="text-lg font-semibold text-slate-700">
                Click Me
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                This entire card is clickable.
              </p>
            </Card.Body>
          </Card.Root>
        </div>
      </StoryWrapper>
    </>
  );
};
