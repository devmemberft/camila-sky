'use client';
import BiologicalRecord from "./components/BiologicalRecord";
import Cover from "./components/Cover";
import HerbalFolio from "./components/HerbalFolio";
export default function Home() {
  return (
    <main>
      <Cover/>
      <BiologicalRecord/>
      <HerbalFolio/>
    </main>
  );
}
