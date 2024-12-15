import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const router = useRouter();

  const handleJoinUs = () => {
    if (router.pathname === "/") {
      // Scroll to HowYouHelp section if on the homepage
      const section = document.getElementById("how-you-can-help");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to homepage with a query
      router.push("/?scrollTo=how-you-can-help");
    }
  };

  return (
    <div className="bg-white w-screen">
      <div className="flex pt-3 pb-1 items-center justify-between mx-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src="/save-gaza-logo.png"
              alt="Save Gaza Campaign Logo"
              className="h-12 w-12"
              height={48}
              width={48}
            />
            <span className="sm:text-1xl md:text-2xl font-bold hover:text-green-500">
              Save Gaza Campaign
            </span>
          </div>
        </Link>

        {/* Navbar Menu */}
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          showSortMenu={showSortMenu}
          setShowSortMenu={setShowSortMenu}
        />

        {mobileMenu && (
          <MenuMobile
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            showCatMenu={showCatMenu}
            showSortMenu={showSortMenu}
            setShowSortMenu={setShowSortMenu}
          />
        )}

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-6 text-black">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[22px] lg:hidden"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <BiMenu
              className="text-[22px] lg:hidden"
              onClick={() => setMobileMenu(true)}
            />
          )}

          <button
            onClick={handleJoinUs}
            className="hidden md:flex bg-[#22C55E] hover:bg-[#D0312D] text-white font-bold px-6 py-2 rounded-md transition-colors duration-300"
          >
            Join Us
          </button>
          <Link
            href="/login"
            className="hidden md:flex bg-[#22C55E] hover:bg-[#D0312D] mr-2 text-white font-bold px-8 py-2 rounded-md transition-colors duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
