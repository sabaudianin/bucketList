import { create } from "zustand";
import type { UserState } from "../types/user";

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
}));
