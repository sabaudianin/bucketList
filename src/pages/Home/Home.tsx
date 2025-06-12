import PageTransition from "../../components/PageTransition/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="p-16 bg-yellow-300 ">
        <h1 className="text-red-500">🏠 Strona Główna</h1>
        <p>Witaj w aplikacji Bucket List!💀</p>
      </div>
    </PageTransition>
  );
}
