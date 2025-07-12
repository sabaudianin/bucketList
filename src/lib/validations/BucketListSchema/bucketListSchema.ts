import { z } from "zod";

export const bucketListSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Too long"),
});

export type BucketItemFormData = z.infer<typeof bucketListSchema>;
