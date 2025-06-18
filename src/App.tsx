import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import SplashScreen from "./pages/Splash/SplashScreen.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import { MainLayout } from "./components/layout/MainLayout/MainLayout.tsx";

function App() {
  const location = useLocation();
  console.log(import.meta.env.VITE_SUPABASE_URL);
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;
