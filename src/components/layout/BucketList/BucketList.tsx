import { useState } from "react";
import { useBucketList } from "../../../hooks/useBucketList/useBucketList";

export const BucketList = () => {
  const { items, loading, addItem, toggleCompleted } = useBucketList();
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim()) {
      addItem(newItem.trim());
      setNewItem("");
    }
  };

  return (
    <div className="w-full max-w-xl space-y-4 p-2 text-center">
      <h2 className="text-2xl font-bold ">🎯 My Bucket List</h2>

      <div className="flex gap-1 p-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new goal..."
          className="flex-1  border rounded p-2"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          ➕ Add
        </button>
      </div>
      {loading ? (
        <p>Loading bucket list...</p>
      ) : (
        <ul className="space-y-2">
          {items.length === 0 ? (
            <span>Add your first thing to do...</span>
          ) : (
            items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 "
              >
                <span
                  className={item.completed ? "line-through text-gray-400" : ""}
                >
                  {item.title}
                </span>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => toggleCompleted(item.id, e.target.checked)}
                />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
