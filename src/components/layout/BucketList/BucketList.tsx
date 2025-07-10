import { useState } from "react";
import { useBucketList } from "../../../hooks/useBucketList/useBucketList";

export const BucketList = () => {
  const {
    items,
    loading,
    addItem,
    toggleCompleted,
    error,
    deleteItem,
    editItem,
  } = useBucketList();

  const [newItem, setNewItem] = useState("");

  const [editItemState, setEditItemState] = useState<{
    id: string | null;
    title: string;
  }>({ id: null, title: "" });

  const [editMode, setEditMode] = useState(false);

  const handleAdd = () => {
    if (newItem.trim()) {
      addItem(newItem.trim());
      setNewItem("");
    }
  };

  const handleEdit = (id: string, title: string) => {
    setEditItemState({ id, title });
  };

  const handleEditSubmit = () => {
    if (editItemState.id && editItemState.title?.trim()) {
      editItem({ id: editItemState.id, title: editItemState.title });
      setEditItemState({ id: null, title: "" });
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
      <div>
        <button
          onClick={() => setEditMode((prev) => !prev)}
          className={
            editMode
              ? "px-4 py-2 bg-red-700 text-black rounded font-bold"
              : "bg-green-700 px-4 py-2 text-white rounded font-bold"
          }
        >
          {editMode ? "❌ Cancel Edit List" : "✅ Enter Edit"}
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
                {editItemState.id === item.id ? (
                  <input
                    type="text"
                    value={editItemState.title}
                    onChange={(e) =>
                      setEditItemState({
                        ...editItemState,
                        title: e.target.value,
                      })
                    }
                    className=""
                  />
                ) : (
                  <span
                    className={
                      item.completed ? "line-through text-gray-400" : ""
                    }
                  >
                    {item.title}
                  </span>
                )}
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) =>
                    toggleCompleted({
                      id: item.id,
                      completed: e.target.checked,
                    })
                  }
                  className="rounded font-bold"
                />

                {editMode && editItemState.id !== item.id && (
                  <div>
                    <button onClick={() => handleEdit(item.id, item.title)}>
                      Edit
                    </button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </div>
                )}
                {editItemState.id === item.id && (
                  <button onClick={handleEditSubmit}>Save</button>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
