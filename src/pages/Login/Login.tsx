import React, { useState } from "react";
import { LoginForm } from "../../components/forms/LoginForm/LoginForm";
import { RegisterForm } from "../../components/forms/RegisterForm/RegisterForm";
import PageTransition from "../../components/PageTransition/PageTransition";

export default function Login() {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <PageTransition>
      <div className="p-4 max-w-xl flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white ">
        {isRegister ? <LoginForm /> : <RegisterForm />}

        <div className="text-center">
          {isRegister ? (
            <>
              <p>Don't have account yet ??</p>
              <button
                onClick={() => {
                  setIsRegister(false);
                }}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <p>Already Have a account ??</p>

              <button
                onClick={() => {
                  setIsRegister(true);
                }}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
