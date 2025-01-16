// import { Link } from "@remix-run/react";

export interface NavigationInterface {
  items: { name: string; isActive?: boolean; lintTo?: string }[];
}
export const Navigation: React.FunctionComponent<NavigationInterface> = ({
  items,
}) => {
  return (
    <div className="p-1 px-2 flex gap-2 justify-start items-center rounded text-slate-600">
      <nav>
        <ul className="flex gap-3 px-2 py-1">
          {items.map((item) => {
            return (
              <>
                {item.isActive ? (
                  <li className="bg-orange-200 px-2 border rounded cursor-pointer">
                    {item.name}
                  </li>
                ) : (
                  <li className="px-2 rounded border hover:bg-orange-200 cursor-pointer">
                    {item.name}
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
