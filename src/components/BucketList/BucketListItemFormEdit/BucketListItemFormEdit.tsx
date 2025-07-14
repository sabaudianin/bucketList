import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { BucketItemFormData } from "../../../lib/validations/BucketListSchema/bucketListSchema";
import { bucketListSchema } from "../../../lib/validations/BucketListSchema/bucketListSchema";

type Props = {
  defaultTitle: string;
  onSubmit: (title: string) => void;
};

export const BucketListItemEditForm: FC<Props> = ({
  defaultTitle,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BucketItemFormData>({
    resolver: zodResolver(bucketListSchema),
    defaultValues: { title: defaultTitle },
  });

  const submit = (data: BucketItemFormData) => {
    onSubmit(data.title);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex-1 flex gap-2 items-center"
    >
      <input
        type="text"
        {...register("title")}
        className="border rounded p-2 flex-1"
      />
      <button
        type="submit"
        className="ml-2 text-blue-600 font-semibold"
      >
        💾 Save
      </button>
      {errors.title && (
        <p className="text-red-500 text-sm absolute top-full">
          {errors.title.message}
        </p>
      )}
    </form>
  );
};
