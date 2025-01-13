import { useState } from 'react';
import Link from 'next/link';

export default function ListItem({itemName, url}) {

    const [isHover, setIsHover] = useState(false);

    const handleHoverEnter = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <Link href={url}>
            <span onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className={`flex flex-row justify-start items-center transition-all ease-out duration-500 ${isHover ? 'ml-4' : ''}`}>
                <div className={` ml-4 transition-all ease-out duration-500 ${isHover ? 'bg-green-500 h-[8.5px] w-[8.5px] rounded-full' : 'h-[15px] w-[5.5px]  rounded-lg bg-slate-50'}`}></div>
                <span className={`block ml-2 cursor-pointer transition-all ease-out duration-500 ${isHover ? 'text-green-500 ml-4' : ''}`}>{itemName}</span>
            </span>
        </Link>
    )


}
