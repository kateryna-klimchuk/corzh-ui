import { Button } from "../../Button/Button";
import {
  Navigation,
  NavigationItemInterface,
} from "../../Navigation/Navigation";
export interface AuthorizedLayoutHeaderInterface {
  navigationItems: NavigationItemInterface[];
  LinkComponent: React.ElementType<{
    to: string;
    className?: string;
    children: React.ReactNode;
  }>;
}
export const AuthorizedLayoutHeader: React.FunctionComponent<
  AuthorizedLayoutHeaderInterface
> = ({ navigationItems, LinkComponent }) => {
  return (
    <header className="bg-orange-300 text-xl">
      <div className="flex justify-start items-center px-4">
        <h1 className="text-orange-600 text-2xl font-bold">CorzhUi</h1>
        <Navigation items={navigationItems} LinkComponent={LinkComponent} />
        <div className="flex items-center gap-3 ml-auto">
          <Button label="Log in" color="transparent" />
          <Button label="Sign up" color="transparent" />
        </div>
      </div>
    </header>
  );
};
