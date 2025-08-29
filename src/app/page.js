import SportsBanner from "@/components/Banner";
import Footer from "@/components/Footer";
import ImgGrid from "@/components/ImgGrid";
import SimpleAutoSlider from "@/components/SimpleAutoSlider";
import { Ban, Divide } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SimpleAutoSlider />
      <SportsBanner />
      <ImgGrid />
      <Footer />
    </div>
  );
}
