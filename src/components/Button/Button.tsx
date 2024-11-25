interface ButtonInterface {
  size: "small" | "medium" | "large";
  color: string;
  label: string;
}
export const Button = ({ size, color, label }: ButtonInterface) => {
  return <button className="text-red-400">{label}</button>;
};
