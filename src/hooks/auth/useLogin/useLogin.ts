import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { toast } from "sonner";
import { useUserStore } from "../../../store/userStore";

import { loginSchema } from "../../../lib/validations/loginSchema/authSchema";
import type { LoginFormData } from "../../../lib/validations/loginSchema/authSchema";

export const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const { email, password } = data;

    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      const { status, message } = error;

      const errorMap: Record<number, string> = {
        400: "📧 Incorrect email or password.",
        422: "⚠️ Validation failed.",
        500: "🚨 Server error. Try again later.",
      };

      if (status && errorMap[status]) {
        toast.error(errorMap[status]);
        return;
      } else {
        toast.error(`❌ ${message}`);
        return;
      }
    }

    if (authData?.user) {
      const user = {
        id: authData.user.id,
        email: authData.user.email!,
        name: authData.user.user_metadata.name ?? "Unknown",
      };
      setUser(user);
    }

    toast.success("✅ Logged in successfully");
    navigate("/home");
  };

  return { ...form, onSubmit };
};
