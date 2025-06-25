import React from "react";
import { InputButton } from "../../ui/Button/InputButton";
import { useRegister } from "../../../hooks/auth/useRegister/useRegister";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useRegister();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 bg-gray-200 dark:bg-gray-800 rounded shadow space-y-4  border-2 border-gray-600"
    >
      <h2 className="text-3xl font-bold mb-2 text-center">Register</h2>
      <div>
        <label className="block mb-1 text-sm font-medium">Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full p-2 border rounded "
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <InputButton
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2  bg-gradient-to-br from-green-900 to-green-500 bg-green-900 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        Register
      </InputButton>
    </form>
  );
};
