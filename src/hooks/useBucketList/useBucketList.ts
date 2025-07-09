import { useEffect, useState } from "react";
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
  const [items, setItems] = useState<BucketItem[]>([]);
  const [bucketLoading, setBucketLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchItems = async () => {
    setBucketLoading(true);
    try {
      const { data, error } = await supabase
        .from("bucketList")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setItems(data);
      } else {
        console.error("❌ Supabase error:", error);
      }
    } catch (err) {
      console.error("❌ Unexpected error:", err);
    } finally {
      setBucketLoading(false);
    }
  };

  useEffect(() => {
    if (!user?.id || hasFetched) return;

    console.log("🔁 Fetching user:", user.id);
    fetchItems().then(() => setHasFetched(true));
  }, [user?.id, hasFetched]);

  const addItem = async (title: string) => {
    const { error } = await supabase
      .from("bucketList")
      .insert([{ title, user_id: user?.id }]);

    if (!error) {
      fetchItems();
    }
  };

  const toggleComplete = async (id: string, completed: boolean) => {
    const { error } = await supabase
      .from("bucketList")
      .update({ completed })
      .eq("id", id);

    if (!error) {
      fetchItems();
    }
  };

  return {
    items,
    loading: bucketLoading,
    addItem,
    toggleComplete,
  };
};
