import React from "react";
import type { FC } from "react";
import type { BucketItem } from "../../../types/bucket";
import { BucketListItemEditForm } from "../BucketListItemFormEdit/BucketListItemFormEdit";

type Props = {
  item: BucketItem;
  editMode: boolean;
  isEditing: boolean;

  onToggle: (id: string, completed: boolean) => void;
  onEditStart: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onEditSubmit: (newTitle: string) => void;
};

export const BucketListItem: FC<Props> = ({
  item,
  editMode,
  isEditing,
  onToggle,
  onEditStart,
  onDelete,
  onEditSubmit,
}) => {
  return (
    <li className="flex justify-between items-center px-2 rounded">
      {isEditing ? (
        <BucketListItemEditForm
          defaultTitle={item.title}
          onSubmit={(newTitle) => {
            onEditSubmit(newTitle);
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
            className={`ml-4 w-5 h-5 accent-green-600 rounded border-gray-300 focus:ring-green-500 ${
              editMode ? "hidden" : ""
            }`}
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
    </li>
  );
};
