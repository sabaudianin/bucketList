import { LoginForm } from "../../components/Auth/LoginForm/LoginForm";
import { RegisterForm } from "../../components/Auth/RegisterForm/RegisterForm";
import PageTransition from "../../components/PageTransition/PageTransition";

export default function Login() {
  return (
    <PageTransition>
      <div className="p-8 h-screen shadow-lg transition-colors duration-300 bg-gray-500 text-black dark:bg-gray-800 dark:text-white ">
        <h2 className="text-3xl font-bold mb-2">🔐 Log in</h2>
        <LoginForm />
        <RegisterForm />
      </div>
    </PageTransition>
  );
}
