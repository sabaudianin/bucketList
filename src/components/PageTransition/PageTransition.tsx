import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="opacity-0 animate-fade-in min-h-screen bg-white text-black">
      {children}
    </div>
  );
}
