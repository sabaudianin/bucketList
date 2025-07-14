import { create } from "zustand";
import type { BucketListStore } from "../../types/sortOptions";

export const useBucketListStore = create<BucketListStore>((set) => ({
  sortBy: "created_at",
  sortDirection: "desc",
  setSortBy: (sortBy) => set({ sortBy }),
  setSortDirection: (sortDirection) => set({ sortDirection }),
}));
