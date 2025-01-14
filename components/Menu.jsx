import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const data = [
    { id: 1, name: 'About', url: '/about' },
    { id: 2, name: 'SGC Shop', url: '/pageUnderCons' },
    { id: 3, name: 'SGC News', url: 'https://sgc-blogs-4ryc.vercel.app/' },
    { id: 4, name: 'SGC Relief Activities', url: 'https://sgc-relief-activities-2st2.vercel.app/' }, 
    { id: 5, name: 'Contact Us', url: '/contact' }, 
];

const Menu = ({ showCatMenu, setShowCatMenu, showSortMenu, setShowSortMenu }) => {
    return (
        <>
            <ul className='hidden  lg:flex items-center font-medium text-black '>
                {data.map((item) => (
                    <React.Fragment key={item.id}>
                        {item?.subMenu && (
                            <li
                                className='cursor-pointer z-40 gap-2 flex text-center relative border border-transparent rounded-md hover:shaodow-lg px-4 py-2'
                                onMouseEnter={() => {
                                    setShowCatMenu(true);
                                    setShowSortMenu(false);  
                                }}
                                onMouseLeave={() => {
                                    setShowCatMenu(false);
                                }}
                            >
                                {item.name}
                                <BsChevronDown size={18} className='mt-1 ' />
                                {showCatMenu && (
                                    <ul className='bg-white z-40 top-10 absolute left-4 min-w-[250px] text-black shadow-xl'>
                                        {subMenuData.map((subMenu) => (
                                            <a key={subMenu.id} href={`/category/${subMenu.name}`} onClick={() => setShowCatMenu(false)}>
                                                <li className='cursor-pointer flex justify-between items-center px-3 hover:shadow-sm hover:bg-gray-100 rounded-md'>
                                                    {subMenu.name}
                                                    <span className='text-sm opacity-50 '> {subMenu.doc_count}</span>
                                                </li>
                                            </a >
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}
                        {item?.subSortMenu && (
                            <li
                                className='cursor-pointer z-40 gap-2 flex text-center relative border border-transparent rounded-md hover:shaodow-lg px-4 py-2'
                                onMouseEnter={() => {
                                    setShowSortMenu(true);
                                    setShowCatMenu(false); // Close category menu
                                }}
                                onMouseLeave={() => {
                                    setShowSortMenu(false);
                                }}
                            >
                                {item.name}
                                <BsChevronDown size={18} className='mt-1 ' />
                                {showSortMenu && (
                                    <ul className='bg-white z-40 top-10 absolute left-4 min-w-[250px] text-black shadow-xl'>
                                        {subSortData.map((subSortMenu) => {

                                            return (
                                               
                                                    <li key={subSortMenu} onClick={()=>{window.location.replace(`/Sortby/${subSortMenu.name}`)}} className='cursor-pointer flex justify-between items-center   px-3 hover:bg-black/[0.03] rounded-md'>
                                                        {subSortMenu.name}
                                                    </li>
                                                
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        )}
                        {!item?.subMenu && !item?.subSortMenu && (
                            <li className='cursor-pointer p9 border border-transparent rounded-md hover:shadow-lg hover:bg-gray-200 px-4 py-2'>
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul >
        </>
    );
};

export default Menu;
