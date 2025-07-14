import { useBucketListStore } from "../../../store/useBucketListStore/useBucketListStore";
import type { SortOption } from "../../../types/sortOptions";
import type { SortDirection } from "../../../types/sortOptions";

export const BucketListSortOptions = () => {
  const { sortBy, setSortBy, sortDirection, setSortDirection } =
    useBucketListStore();
  return (
    <div className="flex justify-between w-full">
      <span className="font-semibold ml-2">Sort by:</span>
      <div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className=""
        >
          <option value="created_at">Date</option>
          <option value="completed">Status</option>
        </select>
        <select
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value as SortDirection)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
};
