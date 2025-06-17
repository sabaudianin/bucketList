import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import "./App.css";
import SplashScreen from "./pages/Splash/SplashScreen.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import { MainLayout } from "./components/layout/MainLayout/MainLayout.tsx";

function App() {
  const location = useLocation();
  return (
    <MainLayout>
      {/* <AnimatePresence mode="wait"> */}
      <div className="p-4 bg-red-500 dark:bg-green-500 text-black dark:text-white">
        TEST MOTYWUw
      </div>
      <div className="p-8 transition-all duration-500 bg-red-500 dark:bg-black text-white">
        Sprawdzenie motywu — powinno być **red (jasny)** lub **black (ciemny)**.
      </div>

      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path="/"
          element={<SplashScreen />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      {/* </AnimatePresence> */}
    </MainLayout>
  );
}

export default App;
