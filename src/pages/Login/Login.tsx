import { LoginForm } from "../../components/Auth/LoginForm/LoginForm";
import { RegisterForm } from "../../components/Auth/RegisterForm/RegisterForm";
import PageTransition from "../../components/PageTransition/PageTransition";

export default function Login() {
  return (
    <PageTransition>
      <div className="p-2 h-screen shadow-lg transition-colors duration-300 bg-gray-500 text-black dark:bg-gray-800 dark:text-white ">
        <LoginForm />
        <RegisterForm />
      </div>
    </PageTransition>
  );
}
