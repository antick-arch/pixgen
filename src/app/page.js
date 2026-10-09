import Banner from "@/components/Banner";
import TopGeneration from "@/components/TopGeneration";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <TopGeneration></TopGeneration>
    </div>
  );
}
