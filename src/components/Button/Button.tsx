export interface ButtonInterface {
  size: "small" | "medium" | "large";
  color: string;
  label: string;
}
export const Button: React.FunctionComponent<ButtonInterface> = ({
  size,
  color,
  label,
}) => {
  return <button className="text-red-400">{label}</button>;
};
