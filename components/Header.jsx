import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className="bg-white w-screen">
      <div className="flex pt-3 pb-1 items-center justify-between mx-6">
        {/* Logo of the Site */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src="/save-gaza-logo.png"
              alt="Save Gaza Campaign Logo"
              className="h-12 w-12"
              height={48}
              width={48}
            />
            <span className="text-2xl font-bold hover:text-green-500">
              Save Gaza Campaign
            </span>
          </div>
        </Link>

        {/* Navbar Menu items, category sub-menu */}
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

          <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-md transition-colors duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
