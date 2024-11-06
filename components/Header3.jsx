import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isIconClicked2, setIsIconClicked2] = useState(false);

    // useEffect(() => {
    //     if (isDropdownOpen) {
    //         setIsDropdownOpen2(!isDropdownOpen2);
    //     }
    //     if(isDropdownOpen2){
    //         setIsDropdownOpen(!isDropdownOpen);
    //     }
    // }, [isDropdownOpen, isDropdownOpen2]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsIconClicked(!isIconClicked);
        setIsDropdownOpen2(false);
        setIsIconClicked2(false);
    };
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
        setIsIconClicked2(!isIconClicked2);
        setIsDropdownOpen(false);
        setIsIconClicked(false);
    };

    return (
        <header className={`bg-gray-900 text-white flex flex-col px-6 py-6 shadow-2xl z-50 ${isDropdownOpen || isDropdownOpen2 ? 'h-auto' : 'h-[90px]'}`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold flex items-center">
                        <span
                            className={`mr-2 cursor-pointer hidden md:flex ${isIconClicked ? 'text-green-500' : 'text-white'} hover:text-green-500 transition-colors duration-300`}
                            onClick={toggleDropdown}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="3" y="5" width="18" height="2" fill="currentColor" />
                                <rect x="3" y="11" width="14" height="2" fill="currentColor" />
                                <rect x="3" y="17" width="10" height="2" fill="currentColor" />
                            </svg>
                        </span>
                        <span className='ml-4'>Save Gaza Campaign</span>
                    </div>
                </div>

                <nav className="flex items-center space-x-8">
                    {/* Navigation Links */}
                    <span className='hidden md:flex items-center space-x-8'>
                        <Link href="#"><span className="hover:text-green-500 cursor-pointer transition-colors duration-300">Latest</span></Link>
                        <Link href="#"><span className="hover:text-green-500 cursor-pointer transition-colors duration-300">Modern</span></Link>
                        <Link href="#"><span className="hover:text-green-500 cursor-pointer transition-colors duration-300">Contemporary</span></Link>
                        <Link href="#"><span className="hover:text-green-500 cursor-pointer transition-colors duration-300">Affordable</span></Link>
                    </span>

                    {/* Login Button */}
                    <button className="hidden md:flex  bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        Login
                    </button>
                    <span
                        className={`mr-2 cursor-pointer flex md:hidden ${isIconClicked2 ? 'text-green-500' : 'text-white'} hover:text-green-500 transition-colors duration-300`}
                        onClick={toggleDropdown2}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="3" y="5" width="18" height="2" fill="currentColor" />
                            <rect x="7" y="11" width="14" height="2" fill="currentColor" />
                            <rect x="11" y="17" width="10" height="2" fill="currentColor" />
                        </svg>

                    </span>
                </nav>
            </div>

            <div className={`transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="mt-4 bg-gray-800 p-4 rounded-md">
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Option 1</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Option 2</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Option 3</span></Link>
                </div>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isDropdownOpen2 ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="mt-4 bg-gray-800 p-4 rounded-md">
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Latest</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Modern</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Contemporary</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Affordable</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Option 1</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Option 2</span></Link>
                    <Link href="#"><span className="block hover:text-green-500 cursor-pointer transition-colors duration-300">Option 3</span></Link>
                </div>
            </div>
        </header>
    );
}