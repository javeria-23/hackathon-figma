import Image from "next/image";
import TopHeader from "@/components/TopHeader";
import Herosection from "@/components/Herosection";
import Editors from "@/components/Editors";

import Footer from "@/components/Footer";
import GreenDiv from "@/components/greendiv";
import CardText from "@/components/CardText";

export default function Home() {
  return (
    <div className="relative">
      <TopHeader />
      <Herosection />
      <Editors />
      {/* Add your card section here */}
      <CardText />
      <GreenDiv />
      <Footer />
    </div>
  );
}
