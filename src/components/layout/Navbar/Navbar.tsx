import { HomeButton } from "../../HomeButton/HomeButton";
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle";
import { Container } from "../Container/Container";
export const Navbar = () => {
  return (
    <div className="w-full p-2 shadow sticky top-0 z-50  bg-gradient-to-br from-purple-500 to-pink-500">
      <Container className="flex items-center justify-between">
        <div className=" text-2xl">
          <HomeButton />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold">BucketList</h2>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
};
