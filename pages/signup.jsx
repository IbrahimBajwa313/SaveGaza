import React from 'react'

const Signup = () => {
    return (
        <div class="flex flex-col justify-center items-center h-screen bg-gradient-to-t">
        <div class=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
            <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
                <h1 class="font-semibold text-3xl text-black m-2">SignUp</h1>
            </div>
            <div class="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div class="">
                    <div class="m-1 text-lg text-black text-semibold">Username</div>
                    <input type="text" 
                        class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                </div>
                <div class="">
                    <div class="m-1 text-lg text-black text-semibold">Email</div>
                    <input type="email"
                        class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                </div>
                <div class="">
                    <div class="m-1 text-lg text-black text-semibold">Address</div>
                    <input type="address"
                        class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                </div>
                <div class="">
                    <div class="m-1 text-lg text-black text-semibold">Postal Code</div>
                    <input type="number"
                        class="border-b border-black focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                </div>
               
            </div>
            <div class="text-center mt-7">
                <button
                    class="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-3xl text-white bg-black  font-medium ">Signup</button>
                    {/* class="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text- bg-gradient-to-t from-stone-900 via-purple-900 to-violet-600  font-medium ">Signup</button> */}
            </div>
        </div>
         
    
    </div> 
    )
}

export default Signup