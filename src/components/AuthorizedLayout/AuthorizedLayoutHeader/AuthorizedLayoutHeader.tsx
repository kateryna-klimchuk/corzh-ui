import { Button } from "../../Button/Button";
import { Navigation } from "../../Navigation/Navigation";
export interface AuthorizedLayoutHeaderInterface {
  children?: React.ReactNode;
}
export const AuthorizedLayoutHeader: React.FunctionComponent<
  AuthorizedLayoutHeaderInterface
> = ({ children }) => {
  const navContent = [
    { name: "About us", isActive: true, lintTo: "#" },
    {
      name: "Components",
      lintTo: "#",
    },
    {
      name: "Contacts",
      lintTo: "#",
    },
  ];
  return (
    <header className="bg-orange-300 text-xl">
      <div className="flex justify-start items-center px-4">
        <h1 className="text-orange-600 text-2xl font-bold">CorzhUi</h1>
        <Navigation items={navContent} />
        <div className="flex items-center gap-3 ml-auto">
          <Button label="Log in" color="transparent" />
          <Button label="Sign up" color="transparent" />
        </div>
      </div>
    </header>
  );
};
