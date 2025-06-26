import React from "react";

import { InputButton } from "../../ui/Button/InputButton";
import { useLogin } from "../../../hooks/auth/useLogin/useLogin";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl mx-auto p-4 bg-gray-200 dark:bg-gray-800 rounded shadow space-y-4 border-2 border-gray-600"
    >
      <h2 className="text-3xl font-bold mb-2">Log in 🔐</h2>
      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-sm text-red-400 font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Hasło</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-sm text-red-500 font-semibold">
            {errors.password.message}
          </p>
        )}
      </div>

      <InputButton
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Log In
      </InputButton>
    </form>
  );
};
