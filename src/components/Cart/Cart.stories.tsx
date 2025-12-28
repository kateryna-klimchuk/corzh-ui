import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Cart } from "./Cart";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Cart",
} as Meta;

export default meta;

type Story = StoryFn;

const mockItems = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    quantity: 1,
    image: "https://picsum.photos/seed/headphones/200",
  },
  {
    id: "2",
    name: "USB-C Charging Cable",
    price: 19.99,
    quantity: 2,
  },
  {
    id: "3",
    name: "Laptop Stand - Aluminum Premium Edition",
    price: 49.99,
    quantity: 1,
    image: "https://picsum.photos/seed/stand/200",
  },
];

export const Basic: Story = () => {
  const [items, setItems] = useState(mockItems);

  const handleQuantityChange = (id: string | number, quantity: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id: string | number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <StoryWrapper title="Cart List">
        <div className="w-full max-w-2xl">
          <Cart.List
            items={items}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Single Cart Item">
        <div className="w-full max-w-2xl">
          <Cart.Item
            id="demo"
            name="Demo Product"
            price={29.99}
            quantity={1}
            onQuantityChange={() => {}}
            onRemove={() => {}}
          />
        </div>
      </StoryWrapper>

      <StoryWrapper title="Empty Cart">
        <div className="w-full max-w-2xl">
          <Cart.List items={[]} />
        </div>
      </StoryWrapper>
    </>
  );
};
