// src/pages/Home.tsx
import HeroSection from "../components/HeorSection";
import MarketOverview from "../components/MarketOverview";
import DataTable from "../components/DataTable";
import { container } from "../IocContainer/IocContainer";
import { MyService } from "../services/myService";

export default function Home() {
  const myService = container.get(MyService);

  return (
    <>
      <h1>{myService.sayHello()}</h1>
      <HeroSection />
      <MarketOverview />
      <DataTable />
    </>
  );
}
