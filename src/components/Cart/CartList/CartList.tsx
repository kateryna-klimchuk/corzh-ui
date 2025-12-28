import React from "react";
import { CartItem, CartItemInterface } from "../CartItem/CartItem";
import { Icon } from "../../Icon/Icon";

export interface CartListInterface {
  items: Omit<CartItemInterface, "onQuantityChange" | "onRemove">[];
  onQuantityChange?: (id: string | number, quantity: number) => void;
  onRemove?: (id: string | number) => void;
  currency?: string;
  showSubtotal?: boolean;
  emptyMessage?: string;
}

export const CartList: React.FunctionComponent<CartListInterface> = ({
  items,
  onQuantityChange,
  onRemove,
  currency = "$",
  showSubtotal = true,
  emptyMessage = "Your cart is empty",
}) => {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <Icon.Cart className="w-12 h-12 mb-4" />
        <p className="text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          currency={currency}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}

      {showSubtotal && (
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 mt-2">
          <span className="text-sm font-medium text-slate-600">Subtotal</span>
          <span className="text-lg font-semibold text-slate-700">
            {currency}
            {subtotal.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};
