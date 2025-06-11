import PageTransition from "../../components/PageTransition/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="p-4">
        <h1 className="text-2xl font-bold">🏠 Strona Główna</h1>
        <p>Witaj w aplikacji Bucket List!💀</p>
      </div>
    </PageTransition>
  );
}
