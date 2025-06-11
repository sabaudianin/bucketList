import { useSplashRedirect } from "../../hooks/useSplashRedirect/useSplashRedirect";
import React from "react";

export default function SplashScreen() {
  useSplashRedirect();

  return (
    <div className="p-8 text-center animate-fade-in">
      <h1 className="text-3xl font-bold">
        🪣 Witaj w aplikacji Bucket List!📋
      </h1>
      <p className="text-sm mt-2">
        Przygotuj się na realizację swoich celów...
      </p>
    </div>
  );
}
