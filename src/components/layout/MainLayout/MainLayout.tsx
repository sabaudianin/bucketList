import type { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col h-screen transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
    <Navbar />
    <main className="flex-1 overflow-y-auto">{children}</main>
    <Footer />
  </div>
);
