import React from "react";
import type { FC } from "react";
import type { BucketItem } from "../../../types/bucket";
import { BucketListItemEditForm } from "../BucketListItemFormEdit/BucketListItemFormEdit";

type Props = {
  item: BucketItem;
  editMode: boolean;
  isEditing: boolean;
  editTitle: string;
  onToggle: (id: string, completed: boolean) => void;
  onEditStart: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onChangeTitle: (title: string) => void;
  onEditSubmit: () => void;
};

export const BucketListItem: FC<Props> = ({
  item,
  editMode,
  isEditing,
  editTitle,
  onToggle,
  onEditStart,
  onDelete,
  onChangeTitle,
  onEditSubmit,
}) => {
  return (
    <li className="flex justify-between items-center px-2 rounded">
      {isEditing ? (
        <BucketListItemEditForm
          defaultTitle={editTitle}
          onSubmit={(newTitle) => {
            onChangeTitle(newTitle);
            onEditSubmit();
          }}
        />
      ) : (
        <>
          <span className={item.completed ? "line-through text-gray-400" : ""}>
            {item.title}
          </span>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={(e) => onToggle(item.id, e.target.checked)}
            className={editMode ? "hidden" : "rounded font-bold ml-2"}
          />
        </>
      )}

      {editMode && !isEditing && (
        <div className="ml-2 flex gap-2">
          <button
            onClick={() => onEditStart(item.id, item.title)}
            className="bg-blue-200 rounded px-1 text-black font-semibold"
          >
            ✏️Edit
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-200 text-black font-semibold px-1"
          >
            🗑️Delete
          </button>
        </div>
      )}
      {isEditing && (
        <button
          onClick={onEditSubmit}
          className="ml-2 text-blue-600"
        >
          💾 Save
        </button>
      )}
    </li>
  );
};
