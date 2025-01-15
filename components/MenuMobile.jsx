import Link from 'next/link';
import React from 'react'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

// importing icons from React
import { BsChevronDown,BsChevronUp } from 'react-icons/bs'



// Objects containing info 
const data = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About Us', url: '/about' },
    { id: 3, name: 'Activities and Updates', url: 'https://sgc-blogs-4ryc.vercel.app/' },
    { id: 4, name: 'Palestine Blogs', url: 'https://sgc-relief-activities-2st2.vercel.app/' }, 
    { id: 5, name: 'Contact Us', url: '/contact' }, 
];
 

// Objects starts here ( Menu logic )showSortMenu={showSortMenu}
        
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu ,showSortMenu,setShowSortMenu}) => {
const [isClient, setisClient] = useState(false)

useEffect(() => {
    setisClient(true) 
}, [])

    return (
        <div >
            <motion.ul initial={{opacity:0}} animate={{ opacity:1}} transition={{duration:.4}}
             className=' flex flex-col z-40 lg:hidden absolute top-[50px] font-medium left-0 w-full h-[calc(100vh-50px)] text-black bg-white border-t'>
                {
                    data.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                {item.subSortMenu &&
                                    <li className='py-4 px-5 border-b  gap-2 flex flex-col relative'
                                        onClick={() => { setShowSortMenu(!showSortMenu) }}
                                    >
                                        <div className='flex  '>
                                            {item.name}
                                           { !showSortMenu &&  <BsChevronDown size={18} className='mt-1 ml-2' />}
                                           { showSortMenu &&  <BsChevronUp size={18} className='mt-1 ml-2' />}
                                        </div>

                                        {/* Menu in Category option */}
                                        
                                        {showSortMenu && (
                                            <motion.ul animate={{y:0}} initial={{y:-30}} transition={{duration:.4}} className='bg-black/[0.05] -mx-5 mt-4 -mb-4 '>
                                                {subSortData.map((sortData) => {
                                                    return (
                                                        <Link
                                                            key={sortData.id} href={"/"}
                                                            onClick={() => {
                                                                setShowSortMenu(false);
                                                                // setShowCatMenu(false);
                                                            }}>

                                                         {isClient&&   <li onClick={()=>{
                                                                window.location.href=`/Sortby/${sortData.name}`
                                                            }} className='py-4 px-8 border-t flex justify-between'>
                                                                {sortData.name}
                                                               
                                                            </li>}
                                                        </Link>
                                                    )
                                                })}
                                            </motion.ul>
                                        )}
                                       
                                    </li>}
                                {item.subMenu &&
                                    <li className='py-4 px-5 border-b  gap-2 flex flex-col relative'
                                        onClick={() => { setShowCatMenu(!showCatMenu) }}
                                    >
                                        <div className='flex  '>
                                            {item.name}
                                           { !showCatMenu &&  <BsChevronDown size={18} className='mt-1 ml-2' />}
                                           { showCatMenu &&  <BsChevronUp size={18} className='mt-1 ml-2' />}
                                        </div>

                                        {/* Menu in Category option */}
                                        
                                        {showCatMenu && (
                                            <motion.ul animate={{y:0}} initial={{y:-30}} transition={{duration:.4}} className='bg-black/[0.05] -mx-5 mt-4 -mb-4 '>
                                                {subMenuData.map((subMenu) => {
                                                    return (
                                                        <Link
                                                            key={subMenu.id} href={"/"}
                                                            onClick={() => {
                                                                setShowCatMenu(false);
                                                                // setShowCatMenu(false);
                                                            }}>

                                                         {isClient&&   <li onClick={()=>{
                                                                window.location.href=`/category/${subMenu.name}`
                                                            }} className='py-4 px-8 border-t flex justify-between'>
                                                                {subMenu.name}
                                                               
                                                            </li>}
                                                        </Link>
                                                    )
                                                })}
                                            </motion.ul>
                                        )}
                                       
                                    </li>}

                                    
                                
                                
                                
                                  {!item.subMenu&&!item.subSortMenu&&  <li className="py-4 px-5 border-b">
                                        <Link
                                            href={item?.url}
                                            onClick={() => setMobileMenu(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>}
                                
                                
                            </React.Fragment>
                        )
                    })
                }
            </motion.ul>
          
        </div>
    )
}

export default MenuMobile




