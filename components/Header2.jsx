import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsServicesDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  return (
    <header className="bg-green-50 py-4 px-24 flex justify-between items-center shadow-md z-10">
      <div className="w-[auto] md:w-[20%] flex items-center space-x-2">
        <img src="./save-gaza-logo.png" alt="Studio Logo" className="h-12 w-12" />
        <span className="font-bold text-xl ">Save Gaza Campaign</span>
      </div>

      {/* Navigation Links */}
      <nav className="w-[60%] hidden md:flex md: justify-center space-x-8 text-gray-700">
        <Link href="#about">
          <span className="hover:text-green-600 cursor-pointer">About</span>
        </Link>
        <Link href="#portfolio">
          <span className="hover:text-green-600 cursor-pointer">Portfolio</span>
        </Link>
        <Link href="#stories">
          <span className="hover:text-green-600 cursor-pointer">Stories</span>
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleServicesDropdown}
            className={`flex items-center ${isServicesDropdownOpen ? 'text-green-600' : 'hover:text-green-600'}`}
          >
            Services
            <motion.div
              animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-1"
            >
              <AiOutlineDown />
            </motion.div>
          </button>
          <AnimatePresence>
            {isServicesDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                <Link href="#service1">
                  <span className="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Service 1</span>
                </Link>
                <Link href="#service2">
                  <span className="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Service 2</span>
                </Link>
                <Link href="#service3">
                  <span className="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer">Service 3</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Reach Out Button */}
      <div className='w-[20%] flex justify-end'>
        <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-700">
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-50 flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="#about">
            <span className="hover:text-green-600 cursor-pointer" onClick={toggleMobileMenu}>About</span>
          </Link>
          <Link href="#portfolio">
            <span className="hover:text-green-600 cursor-pointer" onClick={toggleMobileMenu}>Portfolio</span>
          </Link>
          <Link href="#stories">
            <span className="hover:text-green-600 cursor-pointer" onClick={toggleMobileMenu}>Stories</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServicesDropdown}
              className={`flex items-center ${isServicesDropdownOpen ? 'text-green-600' : 'hover:text-green-600'}`}
            >
              Services
              <motion.div
                animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-1"
              >
                <AiOutlineDown />
              </motion.div>
            </button>
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                >
                  <Link href="#service1">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer" onClick={toggleMobileMenu}>Service 1</span>
                  </Link>
                  <Link href="#service2">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer" onClick={toggleMobileMenu}>Service 2</span>
                  </Link>
                  <Link href="#service3">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-green-50 cursor-pointer" onClick={toggleMobileMenu}>Service 3</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      )}
    </header>
  );
}