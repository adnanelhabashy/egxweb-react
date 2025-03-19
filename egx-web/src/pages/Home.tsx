// src/pages/Home.tsx
import HeroSection from "../components/HeorSection";
import MarketOverview from "../components/MarketOverview";
import DataTable from "../components/DataTable";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarketOverview />
      <DataTable />
    </>
  );
}
