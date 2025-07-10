import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "../../lib/supabaseClient";
import { useUser } from "../user/useUser/useUser";

export type BucketItem = {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
};

export const useBucketList = () => {
  const { user } = useUser();

  const queryClient = useQueryClient();

  const fetchBucketList = async (userId: string) => {
    const { data, error } = await supabase
      .from("bucketList")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  };

  const {
    data: items = [],
    isPending,
    isError,

    refetch,
  } = useQuery({
    queryKey: ["bucketList", user?.id],
    queryFn: () => fetchBucketList(user!.id),
    enabled: !!user?.id,
  });

  const addItem = useMutation({
    mutationFn: async (title: string) => {
      const { error } = await supabase
        .from("bucketList")
        .insert([{ title, user_id: user?.id }]);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucketList", user?.id] });
    },
    onError: (error) => {
      toast.error(error.message);
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucketList", user?.id] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteItem = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("bucketList").delete().eq("id", id);
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucketList", user?.id] });
    },
    onError: (error) => {
      toast.error(error.message);
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
      queryClient.invalidateQueries({ queryKey: ["bucketList", user?.id] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    items,
    loading: isPending,
    error: isError,
    refetch,
    addItem: addItem.mutate,
    toggleCompleted: toggleCompleted.mutate,
    deleteItem: deleteItem.mutate,
    editItem: editItem.mutate,
  };
};
