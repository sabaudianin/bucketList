import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fade-in min-h-screen bg-red-500 text-blue-500">
      {children}
    </div>
  );
}
