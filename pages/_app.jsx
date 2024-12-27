import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import { UserProvider } from "../context/UserContext";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  oneMinusQty,
} from "react";
import Headroom from "react-headroom";

export const productInfo = createContext();

// using Context api to use functions in other files
export function MyContext() {
  return useContext(productInfo);
}

// App Function
export default function App({ Component, pageProps }) {
  return (
    <>
      <Link
        href="https://wa.me/923325900041" // Replace with the actual WhatsApp number
        className="fixed bottom-16 left-8  z-[9999] rounded-full bg-white/[0.25] text-green-500 duration-200 hover:scale-110 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 9999 }}
      >
        <FaWhatsapp size={50} />
      </Link>

      <Head>
        <link rel="icon" href="/save-gaza-logo.png" />
        <title>Save Gaza Campaign</title>
      </Head>


      <Headroom>
        {/* <Header /> */}
        <Header />
      </Headroom>

      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      
      <Footer2 />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        rel="stylesheet"
      />

      <script
        src="//code.tidio.co/oa2rdanrhvguvw5ffgz012it3mptpgxn.js"
        async
      ></script>
    </>
  );
}
