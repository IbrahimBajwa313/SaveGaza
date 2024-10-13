import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-14 pb-3 ">
            
            <Wrapper className="flex flex-col md:flex-row justify-between gap-[50px] md:gap-0">
                
                {/* LEFT START */}
                <div className="flex flex-col gap-3 shrink-0 text-center md:text-left">
                    <img src="/save-gaza-logo.png" alt="SGC Logo" className="w-20 mx-auto md:mx-0" />
                    <span className="text-xl font-bold">
                        SGC is working committedly to make Palestine a free state.
                    </span>
                </div>
                {/* LEFT END */}

                {/* MIDDLE START - Use Cases, Resources, Company */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* Use Cases Section */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm">
                            Use Cases
                        </div>
                        <Link href="/use-cases/web-designers" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Web-designers
                        </Link>
                        <Link href="/use-cases/marketers" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Marketers
                        </Link>
                        <Link href="/use-cases/small-business" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Small Business
                        </Link>
                        <Link href="/use-cases/website-builder" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Website Builder
                        </Link>
                    </div>

                    {/* Resources Section */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm">
                            Resources
                        </div>
                        <Link href="/resources/academy" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Academy
                        </Link>
                        <Link href="/resources/blog" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Blog
                        </Link>
                        <Link href="/resources/themes" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Themes
                        </Link>
                        <Link href="/resources/hosting" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Hosting
                        </Link>
                        <Link href="/resources/developers" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Developers
                        </Link>
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm">
                            Company
                        </div>
                        <Link href="/about-us" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            About Us
                        </Link>
                        <Link href="/careers" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Careers
                        </Link>
                        <Link href="/faqs" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            FAQs
                        </Link>
                        <Link href="/contact-us" className="text-sm text-white/[0.5] hover:text-white" target="_blank">
                            Contact Us
                        </Link>
                    </div>
                </div>
                {/* MIDDLE END */}

                
            </Wrapper>

            {/* Horizontal White Line */}
            <hr className="my-10 border-t border-white/[0.25]" />

            {/* BOTTOM START */}
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2024 All Rights Reserved
                </div>
                {/* LEFT END */}
                {/* MIDDLE START - Social Media Icons */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <Link
                        href="https://www.facebook.com/share/DKKmpzJX3dfDrBZF/?mibextid=qi2Omg"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" target="_blank"
                    >
                        <FaFacebookF size={20} />
                    </Link>
                    <Link
                        href="https://x.com/SaveGazaPK"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" target="_blank"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <Link
                        href="https://youtube.com/@savegazacampaign?si=De9VqHvjn9H8o_fQ"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" target="_blank"
                    >
                        <FaYoutube size={20} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/savegazacampaign?igsh=MWtzcXpxczVmNXl4eA=="
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" target="_blank"
                    >
                        <FaInstagram size={20} />
                    </Link>
                </div>
                {/* MIDDLE END */}
                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <Link href="/privacy-policy" className="text-[12px] text-white/[0.5] hover:text-white" target="_blank">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-use" className="text-[12px] text-white/[0.5] hover:text-white" target="_blank">
                        Terms of Use
                    </Link>
                    <Link href="/site-map" className="text-[12px] text-white/[0.5] hover:text-white" target="_blank">
                        Site Map
                    </Link>         
                </div>
                {/* RIGHT END */}
            </Wrapper>
            {/* BOTTOM END */}
        </footer>
    );
}
