import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import SplashScreen from "./pages/Splash/SplashScreen.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";

function App() {
  return (
    <>
      <Routes>
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
    </>
  );
}

export default App;
