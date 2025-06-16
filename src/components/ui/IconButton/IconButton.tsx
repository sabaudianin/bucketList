import type { FC, ReactNode } from "react";

interface IconButtonProps {
  onClick: () => void;
  label?: string;
  children: ReactNode;
  className?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  label,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`bg-transparent border-none p-1 hover:opacity-80 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};
