interface BtnInterface {
  size: "small" | "medium" | "large";
  color: string;
  label: string;
}
export const Btn = ({ size, color, label }: BtnInterface) => {
  return <button className="text-red-400">{label}</button>;
};
