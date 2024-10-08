import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const data = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'Services', subMenu: true },
    { id: 3, name: 'Contact', url: '/contact' },
    { id: 4, name: 'Login', url: '/login' },
];

const subMenuData = [
    { id: 1, name: 'Hajj Services' },
    { id: 2, name: 'Umrah services'},
    { id: 3, name: 'Hotel services'},
    { id: 4, name: 'Food services'},
];

const subSortData = [
    { id: 1, name: 'Price low to high' },
    { id: 2, name: 'Price high to low' },
    { id: 3, name: 'Newest Arrivals' },
    { id: 4, name: 'Featured' },
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
                                    setShowSortMenu(false); // Close sort menu
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
                                            <a key={subMenu.id} href={`/services/${subMenu.name}`} onClick={() => setShowCatMenu(false)}>
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
                                className='cursor-pointer z-40 gap-2 flex text-center relative border border-transparent rounded-md  px-4 py-2'
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
                            <li className='cursor-pointer p9 border border-transparent rounded-md transition-transform duration-300 hover:scale-105 px-4 py-2'>
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
