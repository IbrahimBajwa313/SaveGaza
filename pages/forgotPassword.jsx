
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
 
export default function ForgotPassword  () {
    
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
        <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
                <h1 className="font-semibold text-3xl text-black m-2">Forgot Password</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div>
                    <div className="m- text-sm text-gray-700  font-semibold">Enter your user account's verified email address</div>
                    <div className="m- text-sm text-gray-700  font-semibold "> and we will send you a password reset link.</div>

                </div>
                <div className="">
                    <div className="m-1 text-lg text-black  text-semibold">Name</div>
                <input type="text" 
                     className="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                </div>
                <div className="">
                    <div className="m-1 text-lg text-black text-semibold">Email </div>
                    <input type="password"
                        className="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                </div>
               
            </div>
            <div className="text-center mt-7">
                <button
                    className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-full text-white bg-black  font-medium ">login</button>
            </div>
        </div>
       
    
    </div> 
    )
}

  