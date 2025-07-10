import PageTransition from "../../components/PageTransition/PageTransition";
import { BucketList } from "../../components/BucketList/BucketList";

export default function Home() {
  return (
    <PageTransition>
      <div className="h-screen">
        <div className="p-8 text-center">
          <h1 className="">🏠 Strona Główna</h1>
          <p>Witaj w aplikacji Bucket List!💀</p>
        </div>
        <BucketList />
      </div>
    </PageTransition>
  );
}
