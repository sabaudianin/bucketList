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
      className={`px-4 py-2  rounded font-bold
        ${editMode ? " bg-red-700 text-black" : "bg-green-700 text-white "}`}
    >
      {editMode ? "❌ Close Edit" : "✅ Enter Edit"}
    </button>
  </div>
);
