import PageTransition from "../../components/PageTransition/PageTransition";

export default function Login() {
  return (
    <PageTransition>
      <div className="p-4">
        <h1 className="text-xl font-semibold text-white">🔐 Logowanie</h1>
        <p>Tu będzie formularz logowania.</p>
      </div>
    </PageTransition>
  );
}
