'use client';
import BiologicalRecord from "./components/BiologicalRecord";
import Cover from "./components/Cover";
import DiscoveryNote from "./components/DiscoveryNote";
import HerbalFolio from "./components/HerbalFolio";
import ResearchNotes from "./components/ResearchNotes";
export default function Home() {
  return (
    <main>
      <Cover/>
      <BiologicalRecord/>
      <HerbalFolio/>
      <ResearchNotes/>
      <DiscoveryNote/>
    </main>
  );
}
