import React, { useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useUser } from "../../user/useUser/useUser";

export const useAuthSession = () => {
  const { setUser, clearUser, setLoading } = useUser();

  useEffect(() => {
    const getSession = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        clearUser();
      } else {
        const { id, email, user_metadata } = data.session.user;

        setUser({
          id,
          email: email!,
          name: user_metadata.name ?? "Unknow",
        });
      }
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getSession();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [setUser, clearUser, setLoading]);
};
