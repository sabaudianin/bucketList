import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import SplashScreen from "./pages/Splash/SplashScreen.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import { PageLoader } from "./components/ui/PageLoader/PageLoader.tsx";
import { RegisterForm } from "./components/forms/RegisterForm/RegisterForm.tsx";
import { MainLayout } from "./components/layout/MainLayout/MainLayout.tsx";
import { useAuthSession } from "./hooks/auth/useAuthSession/useAuthSession.ts";
import { ProtectedRoute } from "./components/routes/ProtectedRoutes/ProtectedRoute.tsx";
import { NotFound } from "./pages/NotFound/NotFound.tsx";
import { GuestRoute } from "./components/routes/GuestRoute/GuestRoute.tsx";
import { useUser } from "./hooks/user/useUser/useUser.ts";

function App() {
  const location = useLocation();
  useAuthSession();
  const queryClient = new QueryClient();
  const { isLoading } = useUser();

  if (isLoading) return <PageLoader />;

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Toaster
          position="bottom-right"
          richColors
          closeButton
        />
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
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path="/registration"
              element={<RegisterForm />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
