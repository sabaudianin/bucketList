import React from "react";
import type { FC } from "react";
import type { BucketItem } from "../../../types/bucket";

type Props = {
  item: BucketItem;
  editMode: boolean;
  isEditing: boolean;
  editTitle: string;
  onToggle: (id: string, completed: boolean) => void;
  onEditStart: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onChangeTitle: (v: string) => void;
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
    <li className="flex justify-between items-center p-2 border rounded">
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => onChangeTitle(e.target.value)}
          className="flex-1 border rounded p-1 mr-2"
        />
      ) : (
        <span className={item.completed ? "line-through text-gray-400" : ""}>
          {item.title}
        </span>
      )}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => onToggle(item.id, e.target.checked)}
        className="rounded font-bold ml-2"
      />
      {editMode && !isEditing && (
        <div className="ml-2 flex gap-2">
          <button onClick={() => onEditStart(item.id, item.title)}>
            ✏️Edit
          </button>
          <button onClick={() => onDelete(item.id)}>🗑️ Delete</button>
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
