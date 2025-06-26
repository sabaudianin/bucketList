import { HomeButton } from "../../HomeButton/HomeButton";
import { ThemeToggle } from "../../ThemeToggle/ThemeToggle";
import { Container } from "../Container/Container";
import { useLogout } from "../../../hooks/auth/useLogout/useLogout";
import { useUser } from "../../../hooks/user/useUser/useUser";

export const Navbar = () => {
  const { user } = useUser();
  const logout = useLogout();
  return (
    <div className="w-full p-2 shadow sticky top-0 z-50  bg-gradient-to-br from-purple-500 to-pink-500">
      <Container className="flex items-center justify-between">
        <div className=" text-2xl">
          <HomeButton />
        </div>
        <div className="">
          <h2 className="text-xl font-bold">BucketList</h2>
        </div>
        <div>
          {user && (
            <button
              onClick={logout}
              className="px-3 py-1 text-black rounded hover:bg-red-700 transition"
            >
              🔚
            </button>
          )}
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
};
