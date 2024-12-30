// import { Link } from "@remix-run/react";

export interface NavigationInterface {
  items: { name: string; isActive?: boolean }[];
}
export const Navigation: React.FunctionComponent<NavigationInterface> = ({
  items,
}) => {
  return (
    <div className="p-1 px-2 flex gap-2 justify-start items-center bg-orange-300 rounded text-slate-600">
      <div className="text-orange-500 text-lg font-bold">CorzhUi</div>
      <ul className="flex gap-2 px-2 py-1">
        {items.map((item) => {
          return (
            <>
              {item.isActive ? (
                <li className="bg-orange-200 px-2 rounded">{item.name}</li>
              ) : (
                <li className="px-2 rounded hover:bg-orange-200">
                  {item.name}
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};
