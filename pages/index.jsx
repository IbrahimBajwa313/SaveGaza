import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import DeathToll from "@/components/DeathToll";
import Footer2 from "@/components/Footer2";
import About from "@/components/About";
import FAQs from "@/components/FAQs"; 
import LeadersSlider from "@/components/LeadersSlider";
import Wrapper from "@/components/Wrapper";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";
import HowYouCanHelp from "@/components/HowYouCanHelp";
import Reviews from "@/components/Reviews";
import ImageSec from "./ImageSec";
import './fontawesome';
import UnitingPak from "@/components/UnitingPak";
import ContactAndSubscribe from "@/components/ContactAndSubscribe";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-x-hidden w-screen z-20">
      <HeroBanner />
      <Wrapper className="bg-blue-50 pt-20">
        <About />
        <DeathToll />
        <HowYouCanHelp />
        <UnitingPak />

        {/* <ImageSec /> */}
        <Reviews />
        <FAQs />
        <ContactAndSubscribe />
        <LeadersSlider />
      </Wrapper>
    </main>
  );
}
