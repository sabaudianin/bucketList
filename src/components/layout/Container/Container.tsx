import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("w-full max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
};
