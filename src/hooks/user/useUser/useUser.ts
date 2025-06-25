import { useUserStore } from "../../../store/userStore";

export const useUser = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  return { user, setUser, clearUser };
};
