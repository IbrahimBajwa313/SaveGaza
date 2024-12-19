import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@shop.com</div>

                    {/* Add To Continue Shoping Start */}
                    <Link href="/">
                        <button className='w-80  text-lg bg-black text-white border  rounded-full py-3 mt-8 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 mb-3'>Continue Shoping</button>
                    </Link>
                    {/* Add To Continue Shoping */}
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;