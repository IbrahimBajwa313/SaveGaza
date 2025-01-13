import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BsChevronDown } from "react-icons/bs";
import { useUser } from "../context/UserContext";

const Header = () => { 
  const userContext = useUser();
  const user = userContext?.user;
  const logout = userContext?.logout;
  const updatePopup = userContext?.updatePopup;

  console.log("SdD",userContext?.updatePopup);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [adminPage, setAdminPage] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("/admin")) {
      setAdminPage(true);
    } else {
      setAdminPage(false);
    }
  }, [router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("loggedInUser");
      setLoggedInUser(user);
    }
  }, []);

  const handleJoinUs = () => {
    if (router.pathname === "/") {
      const section = document.getElementById("how-you-can-help");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/?scrollTo=how-you-can-help");
    }
  };

  return (
    <div className="bg-white w-screen">
      <div className="flex pt-3 pb-1 items-center justify-between mx-6">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              // src="/save-gaza-logo.png"
              src="/save_gaza_campaign_logo.jpeg"
              alt="SGC Logo"
              className="h-14 w-14"
              height={48}
              width={48}
            />
            <span className="sm:text-1xl md:text-2xl font-bold hover:text-green-500">
              Save Gaza Campaign
            </span>
          </div>
        </Link>

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
          <div className="hidden md:flex bg-[#22C55E] hover:bg-[#D0312D] mr-2 text-white font-bold px-8 py-2 rounded-md transition-colors duration-300">
            {loggedInUser && adminPage && (
              <span
                onClick={() => updatePopup?.(true)} // Use optional chaining
                className="cursor-pointer"
              >
                Logout
              </span>
            )}
            {loggedInUser && !adminPage && (
              <Link href="/admin/dashboard" className="cursor-pointer">
                Admin Panel
              </Link>
            )}
            {!loggedInUser && <Link href="/login">Login</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
