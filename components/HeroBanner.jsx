import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroBanner = () => {
    return (
        <div className='z-0 w-screen max-w-[1480px]'>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src="hajj4.jpg" />
                   
                </div>
                <div>
                    <img src="hajj3.jpg" />
                    
                </div>
                <div>
                    <img src="hajj5.jpg" />
                    {/* <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.5] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div> */}
                </div>

            </Carousel></div>
    )
}

export default HeroBanner