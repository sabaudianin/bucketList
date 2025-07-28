import { useMemo, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "../../lib/supabaseClient";
import { useUser } from "../user/useUser/useUser";
import type {
  BucketItem,
  EditPayload,
  TogglePayload,
} from "../../types/bucket";
import { useBucketListStore } from "../../store/useBucketListStore/useBucketListStore";

export const useBucketList = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { sortBy, sortDirection } = useBucketListStore();

  const queryKey = useMemo(
    () => ["bucketList", user?.id, sortBy, sortDirection],
    [user?.id, sortBy, sortDirection]
  );

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
    queryKey,
    queryFn: () => fetchBucketList(user!.id),
    enabled: !!user?.id,
  });

  const invalidate = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey });
    await queryClient.refetchQueries({ queryKey });
  }, [queryClient, queryKey]);

  const addItemMutation = useMutation({
    mutationFn: async (title: string) => {
      const { error } = await supabase
        .from("bucketList")
        .insert([{ title, user_id: user?.id }]);
      if (error) throw new Error(error.message);
    },
    onSuccess: async () => {
      await invalidate();
      toast.success("✅ Item Added to List");
    },
    onError: (errorTanStack: Error) => {
      toast.error(errorTanStack.message);
    },
  });

  const toggleCompletedMutation = useMutation({
    mutationFn: async ({ id, completed }: TogglePayload) => {
      const { error } = await supabase
        .from("bucketList")
        .update({ completed })
        .eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: async () => {
      await invalidate();
      toast.success("✅ Status changed");
    },
    onError: (errorTanStack: Error) => {
      toast.error(errorTanStack.message);
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("bucketList").delete().eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: async () => {
      await invalidate();
      toast.success("✅ Item Deleted");
    },
    onError: (errorTanStack: Error) => {
      toast.error(errorTanStack.message);
    },
  });

  const editItemMutation = useMutation({
    mutationFn: async ({ id, title }: EditPayload) => {
      console.log("Payload w mutationFn:", { id, title });
      const { error } = await supabase
        .from("bucketList")
        .update({ title })
        .eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: async () => {
      await invalidate();
      toast.success("✅ Item Edited");
    },
    onError: (errorTanStack: Error) => {
      toast.error(errorTanStack.message);
    },
  });

  const addItem = useCallback(
    (title: string) => addItemMutation.mutate(title),
    [addItemMutation]
  );
  const editItem = useCallback(
    (payload: EditPayload) => {
      editItemMutation.mutate(payload);
      console.log(payload);
    },
    [editItemMutation]
  );

  const deleteItem = useCallback(
    (id: string) => {
      deleteItemMutation.mutate(id);
    },
    [deleteItemMutation]
  );

  const toggleCompleted = useCallback(
    (payload: TogglePayload) => {
      toggleCompletedMutation.mutate(payload);
    },
    [toggleCompletedMutation]
  );

  return {
    items,
    isLoading,
    isError,
    refetch,
    addItem,
    toggleCompleted,
    deleteItem,
    editItem,
  };
};
