export type SortOption = "created_at" | "completed";
export type SortDirection = "asc" | "desc";

export type BucketListStore = {
  sortBy: SortOption;
  sortDirection: SortDirection;
  setSortBy: (by: SortOption) => void;
  setSortDirection: (dir: SortDirection) => void;
};
