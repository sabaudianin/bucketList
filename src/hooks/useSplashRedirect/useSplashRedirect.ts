import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// export function useSplashRedirect(timeout = 1000): void {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const alreadyDisplayed = localStorage.getItem("splashScreenDisplayed");
//     if (alreadyDisplayed) {
//       navigate("/login");
//       return;
//     }
//     const timer = setTimeout(() => {
//       localStorage.setItem("splashScreenDisplayed", "true");
//       navigate("/login");
//     }, timeout);
//     return () => clearTimeout(timer);
//   }, [navigate, timeout]);
// }
export function useSplashRedirect(timeout = 5000): void {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, timeout);

    return () => clearTimeout(timer);
  }, [navigate, timeout]);
}
