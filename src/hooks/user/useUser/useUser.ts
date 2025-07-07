import { useUserStore } from "../../../store/userStore";

export const useUser = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const isLoading = useUserStore((state) => state.isLoading);
  const setLoading = useUserStore((state) => state.setLoading);

  return { user, setUser, clearUser, isLoading, setLoading };
};
