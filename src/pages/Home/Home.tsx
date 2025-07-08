import PageTransition from "../../components/PageTransition/PageTransition";
import { BucketList } from "../../components/layout/BucketList/BucketList";

export default function Home() {
  return (
    <PageTransition className="h-screen">
      <div className="flex flex-col">
        <div className="p-8 text-center">
          <h1 className="r">🏠 Strona Główna</h1>
          <p>Witaj w aplikacji Bucket List!💀</p>
        </div>
        <BucketList />
      </div>
    </PageTransition>
  );
}
