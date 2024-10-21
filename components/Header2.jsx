// import React, { useEffect, useState } from 'react';
// import { CiSearch } from "react-icons/ci";
// import Menu from './Menu';
// import MenuMobile from './MenuMobile';
// import Link from 'next/link';
// import { BiMenu } from 'react-icons/bi';
// import { BsCart3 } from 'react-icons/bs';
// import { IoMdHeart } from 'react-icons/io';
// import { VscChromeClose } from 'react-icons/vsc';  
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { motion } from 'framer-motion';
// import { RxCross1 } from "react-icons/rx";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Header = ({ cart }) => {
//   const [number, setNumber] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [search, setSearch] = useState('Search...');
//   const [showSearch, setShowSearch] = useState(false);
//   const [suggestions, setSuggestions] = useState(undefined);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [showCatMenu, setShowCatMenu] = useState(false);
//   const [showSortMenu, setShowSortMenu] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     if (typeof localStorage !== 'undefined' && localStorage.getItem('cart')) {
//       setNumber(Object.keys(JSON.parse(localStorage.getItem('cart'))).length);
//     }
//   }, [cart]);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleSearch = async (query) => {
//     window.location.replace(`/category/${query}?query=${query}`);
//   };

//   const searchSuggestion = async (query) => {
//     const response = await fetch('/api/getProducts');
//     const result = await response.json();

//     const filteredResults = result.products.filter((product) => {
//       if (query !== '') {
//         return product.title.toLowerCase().includes(query.toLowerCase());
//       }
//     });

//     setSuggestions(filteredResults);
//   };

//   return (
//     <div className="bg-white container-fluid">
//       {isClient && showSearch && (
//         <motion.div initial={{ y: -30 }} animate={{ y: 0 }} transition={{ duration: 0.3 }} className="pt-3 pb-3 d-flex justify-content-between align-items-center gap-4 text-black">
//           <form onSubmit={(e) => {
//               e.preventDefault();
//               handleSearch(searchQuery);
//             }}
//             className="d-flex justify-content-center align-items-center w-100"
//           >
//             <input
//               type="text"
//               placeholder={search}
//               value={searchQuery}
//               onChange={(e) => {
//                 setSearchQuery(e.target.value);
//                 searchSuggestion(e.target.value);
//                 if (e.target.value === '') setSuggestions(undefined);
//               }}
//               className="form-control border border-secondary rounded-lg p-1 w-50"
//             />
//             {suggestions && (
//               <div className="bg-white max-h-60 overflow-auto z-40 top-12 position-absolute rounded-lg text-black shadow-lg">
//                 {suggestions.map((keys) => (
//                   <div
//                     key={keys._id}
//                     onClick={() => window.location.replace(`/product/${keys._id}`)}
//                     className="d-flex justify-content-between mb-2 cursor-pointer border-bottom hover-border-dark p-2"
//                   >
//                     <div>{keys.title}</div>
//                     <img className="w-25" src={`/productIamages/${keys.img}/thumbnail.jpg`} alt="" />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button type="submit" className="btn btn-dark ml-1">Search</button>
//             <RxCross1 onClick={() => { setShowSearch(false); setSearchQuery(''); setSuggestions(undefined); }} className="ml-3 text-xl" />
//           </form>
//         </motion.div>
//       )}

//       {isClient && !showSearch && (
//         <motion.div initial={{ y: -30 }} animate={{ y: 0 }} transition={{ duration: 0.3 }} className="d-flex justify-content-between align-items-center py-3 px-4">
//           {/* Logo */}
//           <Link href="/" className="d-flex align-items-center">
//             <Image
//               src="/save-gaza-logo.png"
//               alt="Logo"
//               width={90}
//               height={90}
//               className="w-75 mt-2 border-0 rounded-md hover-scale"
//             />
//             <div className="fw-bold fs-4 ml-2">Save Gaza Campaign</div>
//           </Link>

//           {/* Navbar */}
//           <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} showSortMenu={showSortMenu} setShowSortMenu={setShowSortMenu} />

//           {/* Mobile Menu */}
//           {mobileMenu && (
//             <MenuMobile setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} showCatMenu={showCatMenu} showSortMenu={showSortMenu} setShowSortMenu={setShowSortMenu} />
//           )}

//           <div className="d-flex align-items-center gap-3 text-black">
//             {mobileMenu ? (
//               <VscChromeClose className="d-lg-none text-[28px]" onClick={() => setMobileMenu(false)} />
//             ) : (
//               <div className="d-lg-none">
//                 <BiMenu className="text-[28px]" onClick={() => setMobileMenu(true)} />
//                 <CiSearch onClick={() => setShowSearch(true)} className="ml-2 text-[28px]" />
//               </div>
//             )}

//             {/* Desktop Search */}
//             <div className="d-none d-lg-flex align-items-center">
//               <form onSubmit={(e) => {
//                   e.preventDefault();
//                   handleSearch(searchQuery);
//                 }}
//                 className="d-flex align-items-center"
//               >
//                 <input
//                   type="search"
//                   placeholder={search}
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value);
//                     searchSuggestion(e.target.value);
//                     if (e.target.value === '') setSuggestions(undefined);
//                   }}
//                   className="form-control me-2"
//                 />
//                 {suggestions && (
//                   <div className="bg-white max-h-72 overflow-auto position-absolute top-16 rounded-lg shadow-lg">
//                     {suggestions.map((keys) => (
//                       <div
//                         key={keys._id}
//                         onClick={() => window.location.replace(`/product/${keys._id}`)}
//                         className="d-flex justify-content-between mb-2 p-2 cursor-pointer"
//                       >
//                         <div className="text-secondary hover-text-dark">{keys.title}</div>
//                         <img className="w-25" src={`/productIamages/${keys.img}/thumbnail.jpg`} alt="" />
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 <button type="submit" className="btn btn-dark">Search</button>
//               </form>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Header;