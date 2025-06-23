import { HomeButton } from "../../HomeButton/HomeButton";
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle";
export const Navbar = () => {
  return (
    <header className="p-4 shadow sticky top-0 z-50 flex items-center justify-between  bg-gradient-to-br from-purple-500 to-pink-500">
      <div className=" text-2xl">
        <HomeButton />
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold">BucketList</h2>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
};
