import { useState } from "react";
import { useBucketList } from "../../hooks/useBucketList/useBucketList";
import { BucketListForm } from "./BucketListForm/BucketListForm";
import { BucketListItem } from "./BucketListItem/BucketListItem";
import { BucketListEditMode } from "./BucketListEditMode/BucketListEditMode";

export const BucketList = () => {
  const {
    items,
    isLoading,
    isError,
    addItem,
    toggleCompleted,
    deleteItem,
    editItem,
  } = useBucketList();

  const [newItem, setNewItem] = useState("");

  const [editItemState, setEditItemState] = useState<{
    id: string | null;
    title: string;
  }>({ id: null, title: "" });

  const [editMode, setEditMode] = useState(false);

  const startEdit = (id: string, title: string) =>
    setEditItemState({ id, title });

  const submitEdit = () => {
    if (editItemState.id && editItemState.title.trim()) {
      editItem(editItemState.id, editItemState.title.trim());
      setEditItemState({ id: null, title: "" });
    }
  };

  if (isLoading) return <p>⏳ Loading...</p>;
  if (isError) return <p className="text-red-500">❌ Error loading list</p>;
  return (
    <div className="w-full max-w-xl space-y-4 p-2 text-center">
      <h2 className="text-2xl font-bold ">🎯 My Bucket List</h2>
      <BucketListForm
        value={newItem}
        onChange={setNewItem}
        onSubmit={() => {
          addItem(newItem.trim());
          setNewItem("");
        }}
      />

      <BucketListEditMode
        editMode={editMode}
        toggleEditMode={() => setEditMode((prev) => !prev)}
      />
      <ul className="space-y-2">
        {items.length === 0 && <span> ADD your first thing to do ...</span>}
        {items.map((item) => (
          <BucketListItem
            key={item.id}
            item={item}
            editMode={editMode}
            isEditing={editItemState.id === item.id}
            editTitle={editItemState.title}
            onToggle={toggleCompleted}
            onEditStart={startEdit}
            onDelete={deleteItem}
            onChangeTitle={(title) =>
              setEditItemState((state) => ({ ...state, title: title }))
            }
            onEditSubmit={submitEdit}
          />
        ))}
      </ul>
    </div>
  );
};
