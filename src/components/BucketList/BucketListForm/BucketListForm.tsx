import React from "react";
import type { FC } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
};

export const BucketListForm: FC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <div className="flex gap-1 p-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add your new goal here ..."
        className="flex-1 border rounded p-2"
      />
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        ➕ Add
      </button>
    </div>
  );
};
