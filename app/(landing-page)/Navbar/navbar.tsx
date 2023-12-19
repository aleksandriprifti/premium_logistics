import ActionButtons from "./_components/buttons";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";

function Navbar() {
  return (
    <div>
      <div className="flex w-2/3 md:w-1/2 ml-5">
        <Logo />
        <NavigationMenuBar />
        <ActionButtons />
      </div>
    </div>
  );
}

export default Navbar;
