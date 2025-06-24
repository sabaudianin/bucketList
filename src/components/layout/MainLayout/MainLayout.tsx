import type { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Container } from "../Container/Container";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-inherit shadow">
        <Navbar />
      </header>

      <main className="flex-1">
        <Container className="">{children}</Container>
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};
