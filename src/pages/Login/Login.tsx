import PageTransition from "../../components/PageTransition/PageTransition";
import { supabase } from "../../lib/supabaseClient";

// const { data, error } = await supabase.auth.signInWithPassword({
//   email: "email@example.com",
//   password: "password123",
// });

export default function Login() {
  // console.log(data, error);
  return (
    <PageTransition>
      <div className="p-8 h-screen bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-2">🔐 Logowanie działa</h2>
        <p className="text-lg">Tu będzie formularz logowania.</p>
      </div>
    </PageTransition>
  );
}
