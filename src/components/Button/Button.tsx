export type ButtonColorType = "red" | "white" | "blue" | "green";
export type ButtonSizeType = "small" | "medium" | "large";
export interface ButtonInterface {
  size: ButtonSizeType;
  color: ButtonColorType;
  label: string;
}
export const Button: React.FunctionComponent<ButtonInterface> = ({
  size,
  color,
  label,
}) => {
  const colorClasses: Record<ButtonColorType, string> = {
    red: "bg-red-500 text-white",
    white: "bg-white text-black border border-gray-300 hover:bg-gray-100",
    blue: "bg-blue-500 text-white",
    green: "bg-green-300 text-black",
  };

  const sizeClasses: Record<ButtonSizeType, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-1 text-base",
    large: "px-6 py-2 text-lg",
  };
  return (
    <button
      className={`rounded ${colorClasses[color]} ${sizeClasses[size]} hover:opacity-90 transition-all`}
    >
      {label}
    </button>
  );
};
