import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { toast } from "sonner";

import { registerSchema } from "../../../lib/validations/registerSchema/registerSchema";
import type { RegisterFormData } from "../../../lib/validations/registerSchema/registerSchema";

export const useRegister = () => {
  const navigate = useNavigate();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const { name, email, password } = data;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (error) {
      const message = error.message.toLowerCase();

      if (message.includes("already registered")) {
        toast.error("📧 This email already exist.");
      } else if (message.includes("Invalid login credentials")) {
        toast.error("❌ Wrong email or password.");
      } else {
        toast.error(`❌ Błąd: ${message}`);
      }
    } else {
      toast.success("✅ Registration completed");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return { ...form, onSubmit };
};
