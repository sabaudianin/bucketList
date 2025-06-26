import React, { useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useUser } from "../../user/useUser/useUser";

export const useAuthSession = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data.session?.user) {
        const { id, email, user_metadata } = data.session.user;

        setUser({
          id,
          email: email!,
          name: user_metadata.name ?? "Unknow",
        });
      }

      if (error) {
        console.error("session error", error.message);
      }
    };
    fetchSession();
  }, [setUser]);
};
