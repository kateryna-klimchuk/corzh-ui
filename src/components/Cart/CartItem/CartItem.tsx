import React from "react";
import { cn } from "../../../lib/utils";
import { Icon } from "../../Icon/Icon";

export interface CartItemInterface {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  onQuantityChange?: (id: string | number, quantity: number) => void;
  onRemove?: (id: string | number) => void;
  currency?: string;
}

export const CartItem: React.FunctionComponent<CartItemInterface> = ({
  id,
  name,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
  currency = "$",
}) => {
  const handleDecrement = () => {
    if (quantity > 1 && onQuantityChange) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(id, quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-md"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
          <Icon.EmptyState className="w-8 h-8 text-gray-400" />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-slate-700 truncate">{name}</h3>
        <p className="text-sm text-slate-500">
          {currency}
          {price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className={cn(
            "w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center",
            "hover:bg-gray-100 transition-colors",
            quantity <= 1 && "opacity-50 cursor-not-allowed"
          )}
        >
          <span className="text-lg leading-none">−</span>
        </button>
        <span className="w-8 text-center text-sm font-medium">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <span className="text-lg leading-none">+</span>
        </button>
      </div>

      <div className="text-right">
        <p className="text-sm font-medium text-slate-700">
          {currency}
          {(price * quantity).toFixed(2)}
        </p>
      </div>

      {onRemove && (
        <button
          onClick={() => onRemove(id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Icon.Delete className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
