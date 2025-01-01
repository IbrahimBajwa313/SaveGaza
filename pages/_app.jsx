import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import Headroom from "react-headroom";
import Chatbot from "@/components/Chatbot"; // Importing Chatbot component

// Context API to use functions globally
export const productInfo = createContext();

export function MyContext() {
  return useContext(productInfo);
}

// Main App Component
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  // Persist cart state across page reloads
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  return (
    <>
      <Link
        href="https://wa.me/923325900041" // Replace with the actual WhatsApp number
        className="fixed bottom-4 right-1 z-[9999] rounded-full bg-white/[0.25] text-green-500 duration-200 hover:scale-110 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 9999 }}
      >
        <FaWhatsapp size={50} />
      </Link>

      <Head />
      <Headroom>
        <Header />
      </Headroom>

      <Component {...pageProps} />

      {/* Integrating Chatbot */}
      <Chatbot className="" />

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
      <script src="//code.tidio.co/oa2rdanrhvguvw5ffgz012it3mptpgxn.js" async></script>
    </>
  );
}
