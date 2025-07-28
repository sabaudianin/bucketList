import { useState, useEffect } from "react";
import { useBucketList } from "../../hooks/useBucketList/useBucketList";
import { BucketListForm } from "./BucketListForm/BucketListForm";
import { BucketListItem } from "./BucketListItem/BucketListItem";
import { BucketListEditMode } from "./BucketListEditMode/BucketListEditMode";
import { BucketListSortOptions } from "./BucketListSortOptions/BucketListSortOptions";

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

  const [editItemId, setEditItemId] = useState<string | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const startEdit = (id: string) => setEditItemId(id);

  const submitEdit = (newTitle: string) => {
    if (editItemId && newTitle.trim()) {
      editItem({ id: editItemId, title: newTitle.trim() });
      setEditItemId(null);
    }
  };

  useEffect(() => {
    if (!isEditMode) {
      setEditItemId(null);
    }
  }, [isEditMode]);

  if (isLoading) return <p>⏳ Loading...</p>;
  if (isError) return <p className="text-red-500">❌ Error loading list</p>;
  return (
    <div className="w-full max-w-xl space-y-4 p-2 text-center">
      <h2 className="text-2xl font-bold ">🎯 My Bucket List</h2>
      <BucketListForm
        onSubmit={({ title }) => {
          addItem(title);
        }}
      />

      <BucketListEditMode
        editMode={isEditMode}
        toggleEditMode={() => setIsEditMode((prev) => !prev)}
      />
      <ul className="space-y-2">
        <BucketListSortOptions />
        {items.length === 0 && <span> ADD your first thing to do ...</span>}
        {items.map((item) => (
          <BucketListItem
            key={item.id}
            item={item}
            editMode={isEditMode}
            isEditing={editItemId === item.id}
            onToggle={(id, completed) => toggleCompleted({ id, completed })}
            onEditStart={startEdit}
            onDelete={deleteItem}
            onEditSubmit={submitEdit}
          />
        ))}
      </ul>
    </div>
  );
};
