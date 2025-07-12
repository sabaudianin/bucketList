import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { BucketItemFormData } from "../../../lib/validations/BucketListSchema/bucketListSchema";
import { bucketListSchema } from "../../../lib/validations/BucketListSchema/bucketListSchema";
import type { FC } from "react";

type Props = {
  onSubmit: (data: BucketItemFormData) => void;
};

export const BucketListForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<BucketItemFormData>({
    resolver: zodResolver(bucketListSchema),
    mode: "onChange",
  });

  const handleFormSubmit = (data: BucketItemFormData) => {
    onSubmit(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex gap-1 p-2 flex-col sm:flex-row items-stretch"
    >
      <div className="flex gap-1 p-2">
        <input
          type="text"
          {...register("title")}
          placeholder="Add your new goal here ..."
          className="flex-1 border rounded p- text-white"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isValid}
        >
          ➕ Add
        </button>
      </div>
    </form>
  );
};
