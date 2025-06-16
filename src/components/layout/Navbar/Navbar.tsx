import { HomeButton } from "../../HomeButton/HomeButton";
export const Navbar = () => {
  return (
    <header className="bg-green-300 p-4 shadow sticky top-0 z-50 flex items-center justify-center ">
      <div className="w-1/2 text-2xl">
        <HomeButton />
      </div>
      <div className="w-1/2">
        <h2 className="text-xl font-bold">BucketList</h2>
      </div>
    </header>
  );
};
