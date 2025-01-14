import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from 'next/router';
import { UserProvider } from "../context/UserContext";
import { Analytics } from "@vercel/analytics/react"
import {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import Headroom from "react-headroom";
import Loader from "@/components/Loader";

// Context API to use functions globally
export const productInfo = createContext();

export function MyContext() {
  return useContext(productInfo);
}

// Main App Component
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [adminPage, setAdminPage] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [subTotal, setSubTotal] = useState(0);

  const router = useRouter();

  // Initialize state and redirect logic
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Fetch user role
        const role = localStorage.getItem("role");
        setUserRole(role);

        // Check user authentication and redirect
        const storedUserData = localStorage.getItem("loggedInUser");
        if (router.pathname.startsWith("/admin") && !storedUserData) {
          router.push("/login");
          return;
        }

        // Determine if the page is an admin page
        setAdminPage(router.pathname.startsWith("/admin"));

        setLoading(false); // Stop loading after checks
      } catch (error) {
        console.error("Error initializing app:", error);
        localStorage.clear();
        setLoading(false); // Ensure the loader stops
      }
    };

    initializeApp();
  }, [router]);

  if (loading) {
    return <Loader />; // Display loader while initializing
  }
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
        <Header />
      </Headroom>

      <UserProvider>
        <Component {...pageProps} />
        <Analytics /> {/* Place Analytics here */}
      </UserProvider>

      <Footer2 />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      
    </>
  );
}
