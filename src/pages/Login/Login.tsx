import PageTransition from "../../components/PageTransition/PageTransition";

export default function Login() {
  return (
    <PageTransition>
      <div className="p-4 bg-blue-500">
        <h1 className="text-2xl font-semibold text-red-500">
          🔐 Logowanie działa
        </h1>
        <p>Tu będzie formularz logowania.</p>
      </div>
    </PageTransition>
  );
}
