import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeroBanner from "@/components/HeroBanner";
import DeathToll from "@/components/DeathToll";
import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Team from "@/components/Team";
import Wrapper from "@/components/Wrapper";
import { useInView } from "react-hook-inview";
import HowYouHelp from "@/components/HowYouHelp";
import Reviews from "@/components/Reviews";
import "./fontawesome";
import UnitingPak from "@/components/UnitingPak";
import ContactAndSubscribe from "@/components/ContactAndSubscribe";
import Video from "@/components/Video";
import DonationComponent from "@/components/DonationComponent"; 

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollTo === "how-you-can-help") {
      const section = document.getElementById("how-you-can-help");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query]);

  return (
    <main className="overflow-x-hidden w-screen z-20">
      <HeroBanner />
      <Wrapper className="bg-blue-50 pt-20">
         <HowYouHelp />
        {/* <About /> */}
        {/* <Chatbot /> */}
        <DeathToll />
        {/* <DonationComponent /> */}
        {/* <section id="how-you-can-help">
        </section> */}
        <UnitingPak />
        {/* <Video /> */}
        <FAQs />
        <ContactAndSubscribe />
        <Reviews />
        <Team /> 
      </Wrapper>
    </main>
  );
}
