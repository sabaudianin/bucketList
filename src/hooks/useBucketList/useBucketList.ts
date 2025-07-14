import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "../../lib/supabaseClient";
import { useUser } from "../user/useUser/useUser";
import type { BucketItem } from "../../types/bucket";
import { useBucketListStore } from "../../store/useBucketListStore/useBucketListStore";

export const useBucketList = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { sortBy, sortDirection } = useBucketListStore();

  const fetchBucketList = async (userId: string): Promise<BucketItem[]> => {
    const { data, error } = await supabase
      .from("bucketList")
      .select("*")
      .eq("user_id", userId)
      .order(sortBy, { ascending: sortDirection === "asc" });

    if (error) throw new Error(error.message);
    return data;
  };

  const {
    data: items = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["bucketList", user?.id],
    queryFn: () => fetchBucketList(user!.id),
    enabled: !!user?.id,
  });

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["bucketList", user?.id] });
  };

  const addItem = useMutation({
    mutationFn: async (title: string) => {
      const { error } = await supabase
        .from("bucketList")
        .insert([{ title, user_id: user?.id }]);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      invalidate();
      toast.success("✅ Item Added to List");
    },
    onError: (errorTanStack: Error) => {
      toast.error(errorTanStack.message);
    },
  });

  const toggleCompleted = useMutation({
    mutationFn: async ({
      id,
      completed,
    }: {
      id: string;
      completed: boolean;
    }) => {
      const { error } = await supabase
        .from("bucketList")
        .update({ completed })
        .eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: invalidate,
    onError: (errorTanStack: Error) => {
      toast.error(errorTanStack.message);
    },
  });

  const deleteItem = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("bucketList").delete().eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      invalidate();
      toast.success("✅ Item Deleted");
    },
    onError: (errorTanStack) => {
      toast.error(errorTanStack.message);
    },
  });

  const editItem = useMutation({
    mutationFn: async ({ id, title }: { id: string; title: string }) => {
      const { error } = await supabase
        .from("bucketList")
        .update({ title })
        .eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      invalidate();
      toast.success("✅ Item Edited");
    },
    onError: (errorTanStack) => {
      toast.error(errorTanStack.message);
    },
  });

  return {
    items,
    isLoading,
    isError,
    refetch,
    addItem: addItem.mutate,
    toggleCompleted: (id: string, completed: boolean) =>
      toggleCompleted.mutate({ id, completed }),
    deleteItem: deleteItem.mutate,
    editItem: (id: string, title: string) => editItem.mutate({ id, title }),
  };
};
