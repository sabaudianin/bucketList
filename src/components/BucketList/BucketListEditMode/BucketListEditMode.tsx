import React from "react";
import type { FC } from "react";

type Props = {
  editMode: boolean;
  toggleEditMode: () => void;
};

export const BucketListEditMode: FC<Props> = ({ editMode, toggleEditMode }) => (
  <div>
    <button
      onClick={toggleEditMode}
      className={
        editMode
          ? "px-4 py-2 bg-red-700 text-black rounded font-bold"
          : "bg-green-700 px-4 py-2 text-white rounded font-bold"
      }
    >
      {editMode ? "❌ Cancel Edit" : "✅ Enter Edit"}
    </button>
  </div>
);
