import React from "react";
import { LoginForm } from "../../components/forms/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition/PageTransition";

export default function Login() {
  return (
    <PageTransition>
      <div className="w-full mx-auto p-2 max-w-xl flex flex-col justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white ">
        <LoginForm />
        <div className="text-center">
          <p>Don't have account yet ??</p>
          <Link to="/registration">Register</Link>
        </div>
      </div>
    </PageTransition>
  );
}
