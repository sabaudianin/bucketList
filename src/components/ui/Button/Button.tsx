import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  loading = false,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "w-full py-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition",
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "⏳" : children}
    </button>
  );
};
