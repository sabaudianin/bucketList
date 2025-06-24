import type { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const InputButton: FC<ButtonProps> = ({
  children,
  loading = false,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "w-full py-2  text-white rounded hover:font-bold  disabled:opacity-50 transition",
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "⏳" : children}
    </button>
  );
};
